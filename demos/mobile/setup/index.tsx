import React from 'react';
import ReactDOM from 'react-dom';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  MobileSheetTabs,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
    >
      <MobileSheetApplication
        topPanel={<MobileSheetTabs />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
