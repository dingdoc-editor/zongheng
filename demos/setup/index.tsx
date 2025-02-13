import React from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  Menubar,
  Toolbar,
  SheetTabs,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  return (
    <SheetApplicationProvider
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
        bottomPanel={<SheetTabs />}
        sheetConfig={{
          formulaBar: false,
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

