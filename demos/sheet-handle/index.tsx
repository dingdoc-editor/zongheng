import React, { useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  IApplicationContext,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const applicationRef = useRef<IApplicationContext>(null);

  useEffect(() => {
    applicationRef.current?.sheetHandler.setTemporaryBackgroundColor({ sheetId: workbook.getActiveSheet().getId(), row: 50, col: 0, rowCount: 1, colCount: 1 }, 'red');
    applicationRef.current?.sheetHandler.scrollRangeIntoView({ row: 50, col: 0, rowCount: 1, colCount: 1 });
    return applicationRef.current?.sheetHandler.on('cellClick', (e) => {
      console.log('表格发生点击，e:', e);
    });
  }, [workbook]);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      applicationRef={applicationRef}
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
