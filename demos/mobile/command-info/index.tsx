import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  mobileCommandsPreset,
  MobileToolbar,
  MobileToolbarEnum,
  commandKeys,
} from '@ali/react-zongheng';

export const mobileToolbarConfig = () => {
  const formatConfig = {
    key: MobileToolbarEnum.FORMAT,
    groups: [
      { key: 'font', items: [commandKeys.MobileFilterCommand.key] },
      { key: 'color', items: [commandKeys.MobileCellColorCommand.key] },
    ],
  };

  return [formatConfig];
};

const FlexTableDemo = () => {
  const commands = useMemo(() => mobileCommandsPreset.map((C) => new C()), []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={{ mobileToolbarConfig: mobileToolbarConfig() }}
    >
      <MobileSheetApplication
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

