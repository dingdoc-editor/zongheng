import React, {
  useEffect,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      commands={commands}
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        sheetConfig={{
          scrollbarPosition: 'fixed',
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
