import React, { useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  mobileCommandsPreset,
  mobileUiConfigPreset,
  MobileSheetTabs,
  MobileToolbar,
  type IApplicationContext,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const applicationRef = useRef<IApplicationContext>(null);
  const commands = useMemo(() => mobileCommandsPreset.map((C) => new C()), []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      applicationRef={applicationRef}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={mobileUiConfigPreset}
      locale="en-US"
    >
      <MobileSheetApplication
        topPanel={<MobileSheetTabs />}
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
