import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  IApplicationContext,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const [dark, setDark] = useState(false);

  const workbook = useMemo(() => {
    return createWorkbook();
  }, []);

  useEffect(() => {
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  const applicationRef = useRef<IApplicationContext>(null);

  const switchDark = useCallback(() => {
    setDark(!dark);
  }, [dark]);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={switchDark}
        >
          {dark ? '切换为明亮模式' : '切换为暗黑模式'}
        </Button>
      </div>
      <SheetApplicationProvider
        workbook={workbook}
        applicationRef={applicationRef}
        colorScheme={dark ? 'dark' : 'light'}
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
    </>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
