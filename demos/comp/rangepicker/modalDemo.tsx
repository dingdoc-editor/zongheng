import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {
  SheetApplication,
  SheetApplicationProvider,
  RangePicker,
  ModalLayout,
  type IRangePickerProps,
  type IApplicationContext,
  type IRangePickerHandler,
  SheetTabs,
} from '@ali/react-zongheng';
import { Radio, Button } from 'antd';

const GlobalStyle = createGlobalStyle`
  .my-picker {
    width: 220px;
  }
`;

const commonProps: Pick<IRangePickerProps, 'onRangesChange' | 'onError' | 'className'> = {
  className: 'my-picker',
  onRangesChange: (ranges, inputRef) => {
    console.log('选区提交', ranges, inputRef);
  },
  onError: (err) => {
    console.log('不合法', `规则key： ${err.ruleKey}; 提示信息： ${err.message}`);
  },
};

const Modal = () => {
  const sourcePickerRef = useRef<IRangePickerHandler>(null);
  const targetPickerRef = useRef<IRangePickerHandler>(null);
  const [createAtNew, setCreateAtNew] = useState(false);

  return (
    <ModalLayout
      title="创建数据透视表"
      content={
        <div>
          <div>请选择要分析的数据源</div>
          <RangePicker {...commonProps} />
          <div />
          <div>请选择插入数据透视表的位置</div>
          <Radio checked={createAtNew} onChange={(e) => e.target.checked && setCreateAtNew(true)}>新工作表</Radio>
          <Radio checked={!createAtNew} onChange={(e) => e.target.checked && setCreateAtNew(false)}>当前工作表</Radio>
          {
            createAtNew ||
            <RangePicker {...commonProps} />
          }
        </div>
      }
      onConfirm={(next) => {
        const sourceRes = sourcePickerRef.current?.validate();
        // 数据源选区不合法 提交被拦截
        if (!sourceRes?.valid) { return; }
        if (createAtNew) { return; }
        const targetRes = targetPickerRef.current?.validate();
        // 插入选区位置不合法 提交被拦截
        if (!targetRes?.valid) { return; }
        console.log('===> 提交成功', sourceRes.ranges, targetRes.ranges);
        next();
      }}
    />
  );
};

const FlexTableDemo = () => {
  const ref = useRef<IApplicationContext>(null);
  const onClick = () => {
    ref.current?.layout.showModal({ content: <Modal /> });
  };

  return (
    <SheetApplicationProvider style={{ height: 400 }} applicationRef={ref}>
      <GlobalStyle />
      <SheetApplication
        topPanel={<Button onClick={onClick}>创建数据透视表</Button>}
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
