import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
  uiConfigPreset,
  Menubar,
  Toolbar,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  return (
    <SheetApplicationProvider
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      commands={commands}
      uiConfig={{
        toolbarConfig: uiConfigPreset.toolbarConfig,
      }}
      locale="en-US"
    >
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
