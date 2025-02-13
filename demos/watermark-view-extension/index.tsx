import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
} from '@ali/react-zongheng';
import { Watermark } from './waterMark';
import { SplitCell } from './splitCell';
import { standardLicense } from '../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    extensions: [Watermark, SplitCell],
    license: standardLicense,
  }), []);

  useEffect(() => {
    // 设置等分单元格
    workbook.getRange(0, 0, 1, 1).setCellTag('splitCell', 3);
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  return (
    <SheetApplicationProvider
      style={{
        height: 500,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
        borderTop: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      workbook={workbook}
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

