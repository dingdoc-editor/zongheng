import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import {
  createWorkbook,
  ZHEvents,
  SheetExtension,
} from '@ali/react-zongheng';
import { standardLicense } from '../../utils/constant';

const RootWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
`;

const SheetItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-bottom: 4px solid #fff;
  &.active {
    background-color: #fff;
    cursor: default;
  }
`;

class SheetTabColorExtension extends SheetExtension<{ tabColor: string }> {
  static key = 'sheetTabColor';
}

const FlexTableDemo = () => {
  const [sheets, setSheets] = useState<any[]>([]);
  const [activeSheetName, setActiveSheetName] = useState('');

  const workbook = useMemo(() => {
    const w = createWorkbook({
      extensions: [
        SheetTabColorExtension,
      ],
      license: standardLicense,
    });
    w.insertSheet();
    w.insertSheet();
    w.insertSheet();
    w.getSheetByIndex(0)?.extend(SheetTabColorExtension).write({ tabColor: '#ff4d4f' });
    w.getSheetByIndex(1)?.extend(SheetTabColorExtension).write({ tabColor: '#a0d911' });
    w.getSheetByIndex(2)?.extend(SheetTabColorExtension).write({ tabColor: '#ff7a45' });
    w.getSheetByIndex(3)?.extend(SheetTabColorExtension).write({ tabColor: '#13c2c2' });
    return w;
  }, []);

  const getSheetTabs = useCallback(() => {
    const s = workbook.getSheets();
    return s.map((sheet) => {
      const data = sheet.extend(SheetTabColorExtension).read();
      return {
        name: sheet.getName(),
        color: data?.tabColor || '',
      };
    });
  }, [workbook]);

  const handleChange = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    workbook.getActiveSheet().extend(SheetTabColorExtension).write({ tabColor: `rgba(${r}, ${g}, ${b}, 1)` });
    setSheets(getSheetTabs());
  };

  useEffect(() => {
    const clearActiveChange = workbook.on(ZHEvents.ActiveSheetChanged, () => {
      setActiveSheetName(workbook.getActiveSheet().getName());
    });
    setSheets(getSheetTabs());
    setActiveSheetName(workbook.getActiveSheet().getName());
    return () => {
      clearActiveChange();
      workbook.destroy();
    };
  }, [workbook, getSheetTabs]);

  return (
    <>
      <RootWrapper>
        {
          sheets.map((sheet, index) => {
            return (
              <SheetItem
                key={sheet.name}
                style={{ borderColor: sheet.color || '#ffffff' }}
                className={activeSheetName === sheet.name ? 'active' : ''}
                onClick={
                  activeSheetName === sheet.name
                    ? undefined
                    : () => workbook.setActiveSheetByIndex(index)
                }
              >
                {sheet.name}
              </SheetItem>
            );
          })
        }
      </RootWrapper>
      <Button onClick={handleChange} type="primary" style={{ marginTop: 16 }}>更改当前标签页的颜色为随机颜色</Button>
    </>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
