import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {
  SheetApplication,
  SheetApplicationProvider,
  RangePicker,
  SheetTabs,
  type IRangePickerProps,
  type IApplicationContext,
} from '@ali/react-zongheng';
import { Select } from 'antd';

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

const FlexTableDemo = () => {
  const ref = useRef<IApplicationContext>(null);
  const [keepErrMsgHolder, setKeepErrMsgHolder] = useState<IRangePickerProps['keepErrMsgHolder']>();

  const customRules: IRangePickerProps['rules']['customRules'] = [{
    key: 'evenNum',
    message: '选区数量必须为偶数',
    validator: (ranges) => { return { valid: (ranges.length % 2) === 0 }; },
  }, {
    key: 'no single cell',
    message: '不能有单个单元格',
    validator: (ranges) => {
      const singleCount = ranges.reduce(
        (acc, pre) => (((pre.colCount === 1) && (pre.rowCount === 1)) ? (acc + 1) : acc),
        0,
      );
      return (singleCount === 0) ? { valid: true } : { valid: false, message: `有${singleCount}个单个单元格` };
    },
  }];

  return (
    <SheetApplicationProvider style={{ height: 400, display: 'flex' }} applicationRef={ref}>
      <GlobalStyle />
      <div style={{ padding: 12, background: '#eeeeee' }}>
        {/* 这里组件内的实现有bug  暂时不放出去 */}
        <div>可以为空:</div>
        <RangePicker rules={{ required: false }} {...commonProps} />
        <div>自定义提示</div>
        <RangePicker rules={{ required: '自定义：不可为空', validAddress: '自定义：非法选区', noBeyondBoundary: '自定义: 超出范围' }} {...commonProps} />
        <div>自定义规则和提示占位:</div>
        <div style={{ background: '#e1e1e1', fontSize: 12 }}>
          <div>1.选区数量必须为偶数</div>
          <div>2.选区中不能有单个单元格</div>
          <div style={{ display: 'flex' }}>
            提示占位方式:&nbsp;
            <Select
              style={{ marginBottom: 6, background: 'white', flex: 1 }}
              defaultValue="true"
              options={[{ value: 'true', label: '占位' }, { value: 'false', label: '不占位' }, { value: 'afterError', label: '出错后保持占位' }]}
              onChange={(v) => {
                if (v === 'true') {
                  setKeepErrMsgHolder(true);
                } else if (v === 'false') {
                  setKeepErrMsgHolder(false);
                } else if (v === 'afterError') {
                  setKeepErrMsgHolder(v);
                }
              }}
            />
          </div>
          <RangePicker
            key={String(keepErrMsgHolder)}
            keepErrMsgHolder={keepErrMsgHolder}
            rules={{ customRules }}
            {...commonProps}
          />
        </div>
      </div>
      <SheetApplication
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

