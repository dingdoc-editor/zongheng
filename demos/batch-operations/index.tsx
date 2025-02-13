import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const rowIndex = useRef(0);

  const workbook = useMemo(() => createWorkbook(), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  const batchOperate = useCallback(() => {
    workbook.batch(() => {
      workbook.getActiveSheet().getRange(rowIndex.current, 0, 1, 1).setValue(`hello${rowIndex.current}-1`);
      workbook.getActiveSheet().getRange(rowIndex.current, 1, 1, 1).setValue(`hello${rowIndex.current}-2`);
      rowIndex.current += 1;
    });
  }, [workbook]);

  const operate = useCallback(() => {
    workbook.getActiveSheet().getRange(rowIndex.current, 0, 1, 1).setValue(`hello${rowIndex.current}-1`);
    workbook.getActiveSheet().getRange(rowIndex.current, 1, 1, 1).setValue(`hello${rowIndex.current}-2`);
    rowIndex.current += 1;
  }, [workbook]);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={batchOperate}
        >
          批量操作合并
        </Button>
        <Button
          onClick={operate}
          style={{ marginLeft: 32 }}
        >
          批量操作不合并
        </Button>
        <Button
          onClick={() => workbook.undo()}
          style={{ marginLeft: 32 }}
        >
          undo
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