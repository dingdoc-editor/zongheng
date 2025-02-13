import React, { useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  type IApplicationContext,
} from '@ali/react-zongheng';
import { SelectCellEditor } from './SelectCellEditor';
import { asl } from './asl';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const applicationRef = useRef<IApplicationContext>(null);

  useEffect(() => {
    // 初始化带下拉列表的数据
    workbook.fromJSON(asl);
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  useEffect(() => {
    return applicationRef.current?.sheetHandler?.registerComponent('SelectEditor', (props) => {
      return (
        <SelectCellEditor
          {...props}
          workbook={workbook}
        />
      );
    });
  }, [workbook]);

  return (
    <SheetApplicationProvider
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      workbook={workbook}
      applicationRef={applicationRef}
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
