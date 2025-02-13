import React, { useRef } from 'react';
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

  return (
    <SheetApplicationProvider style={{ height: 400, display: 'flex' }} applicationRef={ref}>
      <GlobalStyle />
      <div style={{ padding: 12, background: '#eeeeee' }}>
        <div>包含表名:</div>
        <RangePicker config={{ isAddressContainsSheetName: true }} {...commonProps} />
        <div>绝对地址:</div>
        <RangePicker config={{ isAbsoluteAddress: true }} {...commonProps} />
        <div>不可多选(按住ctrl+选择):</div>
        <RangePicker config={{ multiple: false }} {...commonProps} />
        <div>不可切换表格:</div>
        <RangePicker defaultRanges="currentSelection" config={{ canSwitchSheet: false }} {...commonProps} />
      </div>
      <SheetApplication bottomPanel={<SheetTabs />} />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

