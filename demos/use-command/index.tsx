import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
  uiConfigPreset,
  Toolbar,
  Menubar,
  SheetTabs,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);
  return (
    <SheetApplicationProvider
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={uiConfigPreset}
    >
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
