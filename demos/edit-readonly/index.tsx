import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
  IApplicationContext,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const [readonly, setReadonly] = useState(true);

  const workbook = useMemo(() => createWorkbook(), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    workbook.controller.setReadonly(true);
    workbook.on('readonlyChanged', (e) => {
      // 监听只读状态变化
      setReadonly(e.readonly);
    });
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  const applicationRef = useRef<IApplicationContext>(null);

  useEffect(() => {
    return applicationRef.current?.sheetHandler.on('beforeAction', (e) => {
      if (readonly) {
        if (['resizeColumn', 'resizeRow'].includes(e.type)) {
          alert('只读模式下不允许该操作');
        }
        e.cancel();
      }
    });
  }, [readonly]);

  const switchReadonly = useCallback(() => {
    workbook.controller.setReadonly(!readonly);
  }, [readonly, workbook]);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={switchReadonly}
        >
          {readonly ? '切换为编辑模式' : '切换为只读模式'}
        </Button>
      </div>
      <SheetApplicationProvider
        workbook={workbook}
        applicationRef={applicationRef}
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
