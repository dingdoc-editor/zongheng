import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
} from '@ali/react-zongheng';
import { ChartFloatExtension } from './ChartFloatExtension';
import { standardLicense } from '../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    extensions: [ChartFloatExtension],
    license: standardLicense,
  }), []);

  useEffect(() => {
    const handler1 = workbook.getActiveSheet().getRange(0, 0, 1, 1).extend(ChartFloatExtension);
    handler1.insert({ type: 'line', value: 1 }, 200, 200, 0, 0, 5, 5);
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        sheetConfig={{
          formulaBar: false,
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
