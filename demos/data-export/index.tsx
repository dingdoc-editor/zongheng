import React, { useCallback, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  const saveData = useCallback(() => {
    localStorage.setItem('zongheng-demo-data', JSON.stringify(workbook.toJSON()));
  }, [workbook]);

  const loadData = useCallback(() => {
    const data = localStorage.getItem('zongheng-demo-data');
    if (data) {
      workbook.fromJSON(JSON.parse(data));
    }
  }, [workbook]);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={saveData}
        >
          保存数据到本地
        </Button>
        <Button
          onClick={loadData}
          style={{ marginLeft: 32 }}
        >
          从本地数据恢复
        </Button>
      </div>
      <SheetApplicationProvider
        workbook={workbook}
        commands={commands}
        style={{
          height: 500,
          border: '1px solid rgba(23, 26, 29, 0.08)',
        }}
      >
        <SheetApplication />
      </SheetApplicationProvider>
    </>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
