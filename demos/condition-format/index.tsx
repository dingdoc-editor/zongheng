import React, { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
} from '@ali/react-zongheng';
import { premiumLicense } from '../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    license: premiumLicense,
  }), []);

  useEffect(() => {
    const sheet = workbook.getActiveSheet();
    sheet.getRange(0, 2, 1, 1).setValue(50);
    sheet.getRange(1, 2, 1, 1).setValue(90);
    const rule = workbook.newConditionalFormattingRuleConfigBuilder()
      .setRanges(sheet.newRangeList([{ row: 0, col: 2, rowCount: 0, colCount: 1 }]))
      .setNumberCondition({ operator: 'greater-equal', value1: 60, value2: 60 })
      .setCellStyle({ backgroundColor: '#25B059' })
      .build();
    sheet.insertConditionalFormattingRule(rule);
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
      <SheetApplication />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
