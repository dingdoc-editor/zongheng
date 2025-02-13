import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  mobileCommandsPremiumPreset,
  mobileUiConfigPreset,
  MobileToolbar,
} from '@ali/react-zongheng';
import { premiumLicense } from '../../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => {
    return createWorkbook({
      enableCalculationEngine: true,
      license: premiumLicense,
    });
  }, []);

  const commands = useMemo(() => {
    return mobileCommandsPremiumPreset.map(
      (C) => new C(),
    );
  }, []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      workbook={workbook}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={mobileUiConfigPreset}
    >
      <MobileSheetApplication
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
