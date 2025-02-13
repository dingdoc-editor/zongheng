import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  RangePickerGlobalModal,
  Menubar,
  Toolbar,
  SheetTabs,
  type IApplicationContext,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const ref = useRef<IApplicationContext>(null);
  const [visible, setVisible] = useState(false);
  const [rangStr, setRangeStr] = useState('null');

  return (
    <SheetApplicationProvider style={{ height: 300 }} applicationRef={ref}>
      <div style={{ display: 'flex' }}>
        <Button style={{ marginRight: 12 }} onClick={() => { setVisible(true); }}>选择区域</Button>
        <span>链接到: {rangStr}</span>
      </div>
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
        bottomPanel={<SheetTabs />}
      />
      <RangePickerGlobalModal
        visible={visible}
        onCancel={() => {
          console.log('====> 选区取消');
          setVisible(false);
        }}
        onRangesChange={(ranges, inputStr) => {
          const { workbook } = ref.current || {};
          if (!workbook) { return; }
          console.log('===> 选区完成', ranges, inputStr);
          setRangeStr(ranges.map((r) => (
            ref.current?.workbook
              .getSheetById(r.sheetId)
              .getRange(r.row, r.col, r.rowCount, r.colCount)
              .getA1Notation({ containSheetName: true })
          )).join(','));
          setVisible(false);
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
