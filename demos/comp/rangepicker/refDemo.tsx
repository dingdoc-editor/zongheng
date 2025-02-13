import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {
  SheetApplication,
  SheetApplicationProvider,
  RangePicker,
  type IRangePickerProps,
  type IApplicationContext,
  type IRangePickerHandler,
  SheetTabs,
} from '@ali/react-zongheng';
import { Button } from 'antd';

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
  const pickerRef = useRef<IRangePickerHandler>(null);
  const [rangeStr, setRangeStr] = useState<string>('');

  const onSubmit = () => {
    const res = pickerRef.current?.validate();
    if (!res?.valid) {
      return;
    }
    setRangeStr(res.ranges.map((r) => (
      ref.current?.workbook
        .getSheetById(r.sheetId)
        ?.getRange(r.row, r.col, r.rowCount, r.colCount)
        .getA1Notation({ containSheetName: true })
    )).join(','));
  };

  return (
    <SheetApplicationProvider style={{ height: 400, display: 'flex' }} applicationRef={ref}>
      <GlobalStyle />
      <div style={{ padding: 12 }}>
        <RangePicker {...commonProps} pickerRef={pickerRef} />
        <Button onClick={onSubmit}>提交</Button>
        <div>提交选区为：{rangeStr}</div>
      </div>
      <SheetApplication
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
