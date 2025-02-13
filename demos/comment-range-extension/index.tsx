import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
} from '@ali/react-zongheng';
import { CommentRangeExtension } from './CommentRangeExtension';
import { standardLicense } from '../../utils/constant';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    extensions: [CommentRangeExtension],
    license: standardLicense,
  }), []);

  useEffect(() => {
    const handler1 = workbook.getActiveSheet().getRange(0, 0, 2, 2).extend(CommentRangeExtension);
    handler1.insert({ text: 'This is an comment' });
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
      <SheetApplication sheetConfig={{ formulaBar: false }} />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
