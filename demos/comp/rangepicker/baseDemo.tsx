import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {
  SheetApplication,
  SheetApplicationProvider,
  RangePicker,
  SheetTabs,
  type IApplicationContext,
} from '@ali/react-zongheng';

const GlobalStyle = createGlobalStyle`
  .my-picker {
    width: 320px;
  }
`;

const FlexTableDemo = () => {
  const ref = useRef<IApplicationContext>(null);

  return (
    <SheetApplicationProvider style={{ height: 300 }} applicationRef={ref}>
      <GlobalStyle />
      <SheetApplication
        topPanel={
          <RangePicker
            className="my-picker"
            defaultRanges="currentSelection"
            onRangesChange={(ranges, inputRef) => {
              console.log('选区提交', ranges, inputRef);
            }}
            onError={(err) => {
              console.log('不合法', `规则key： ${err.ruleKey}; 提示信息： ${err.message}`);
            }}
          />
        }
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
