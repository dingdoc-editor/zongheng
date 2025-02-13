import React, { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPremiumPreset,
  uiConfigPreset,
  Menubar,
  Toolbar,
  SheetTabs,
} from '@ali/react-zongheng';
import { premiumLicense } from '../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => {
    return createWorkbook({
      enableCalculationEngine: true,
      license: premiumLicense,
    });
  }, []);
  const commands = useMemo(() => commandsPremiumPreset.map((C) => new C()), []);

  useEffect(() => {
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      commands={commands}
      uiConfig={uiConfigPreset}
      style={{
        height: 700,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

