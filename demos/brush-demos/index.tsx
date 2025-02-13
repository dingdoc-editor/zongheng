import React, {
  useCallback,
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
import { Button } from 'antd';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    workbook.getRange(0, 0, 2, 2).setBackgroundColor('#eeeeee');
    workbook.getRange(3, 3, 2, 2).setValue(1).setFontColor('#ff0000');
    workbook.getRange(4, 0, 6, 3).setValue('hello');
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  /**
   * 单击格式刷
   */
  const handleClickBrush = useCallback(() => {
    const formatPainterState = workbook.getFormatPainterState();
    if (formatPainterState) {
      workbook.setFormatPainterState(null);
    } else {
      workbook.setFormatPainterState(workbook.getActiveRange()!, 'once');
    }
  }, [workbook]);

  /**
   * 双击格式刷
   */
  const handleDoubleClickBrush = useCallback(() => {
    workbook.setFormatPainterState(workbook.getActiveRange()!, 'continuous');
  }, [workbook]);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={handleClickBrush}
          onDoubleClick={handleDoubleClickBrush}
        >
          格式刷
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
