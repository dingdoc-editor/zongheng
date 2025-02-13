import React, {
  useEffect,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  uiConfigPreset,
  commandsPremiumPreset,
  ZHEvents,
} from '@ali/react-zongheng';
import { Button, message } from 'antd';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    enableCalculationEngine: true,
  }), []);

  const commands = useMemo(() => commandsPremiumPreset.map((C) => new C()), []);

  useEffect(() => {
    const sheet = workbook.getActiveSheet();
    const range = sheet.getRange('A1:E7');
    range.setValues([
      ['产品', '数量', '单价', '价格', '买家'],
      ['可乐', 3, 2, '=B2*C2', '张三'],
      ['雪碧', 5, 2, '=B3*C3', '李四'],
      ['薯片', 2, 3, '=B4*C4', '张三'],
      ['炸鸡', 2, 7, '=B5*C5', '张三'],
      ['复制该单元格，粘贴会失败'],
      ['无法复制该单元格'],
    ]);
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  const handleCopy = () => {
    const sheet = workbook.getActiveSheet();
    const range = sheet.getActiveRange();
    range?.copy();
  };

  const handlePaste = () => {
    const sheet = workbook.getActiveSheet();
    const range = sheet.getActiveRange();
    range?.paste();
  };

  const handlePasteByPasteType = () => {
    const sheet = workbook.getActiveSheet();
    const range = sheet.getActiveRange();
    range?.paste('values');
  };

  useEffect(() => {
    workbook.on(ZHEvents.BeforePaste, ({ data }, eventResult) => {
      // 读取粘贴板数据
      const { contentSlice } = data;
      if (!contentSlice) return;
      const { cells } = contentSlice;
      if (!cells) return;

      const isContainDisablePasteText = cells.some((cell) => {
        const [, , cellSlice] = cell;
        const { value: cellValue } = cellSlice;
        return typeof cellValue === 'string' && cellValue === '复制该单元格，粘贴会失败';
      });
      if (isContainDisablePasteText) {
        message.info('包含了不允许粘贴的文本，禁止粘贴');
        eventResult.preventDefault();
      }
    });

    workbook.on(ZHEvents.BeforeCopy, ({ range }, eventResult) => {
      if (!range) return;
      // 判断复制的区域，如果是A7单元格，则禁止复制
      if (range.getRow() === 6 && range.getColumn() === 0 && range.getRowCount() === 1 && range.getColumnCount() === 1) {
        message.info('无法复制该单元格');
        return eventResult.preventDefault();
      } else {
        message.info('复制成功');
      }
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Button
          onClick={handleCopy}
          type="primary"
        >
          复制
        </Button>
        <Button
          onClick={handlePaste}
          type="primary"
        >
          粘贴
        </Button>
        <Button
          onClick={handlePasteByPasteType}
          type="primary"
        >
          选择性粘贴（仅粘贴为值）
        </Button>
      </div>
      <SheetApplicationProvider
        workbook={workbook}
        commands={commands}
        uiConfig={uiConfigPreset}
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
