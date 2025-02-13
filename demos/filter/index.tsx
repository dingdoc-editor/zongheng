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
  FilterCondition,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    enableCalculationEngine: true,
  }), []);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    const sheet = workbook.getActiveSheet();
    const range = sheet.getRange('A1:E5');
    range.setValues([
      ['产品', '数量', '单价', '价格', '买家'],
      ['可乐', 3, 2, '=B2*C2', '张三'],
      ['雪碧', 5, 2, '=B3*C3', '李四'],
      ['薯片', 2, 3, '=B4*C4', '张三'],
      ['炸鸡', 2, 7, '=B5*C5', '张三'],
    ]);
    sheet.filter(range);
    return () => {
      workbook.destroy();
    };
  }, [workbook]);

  /**
   * 重置
   */
  const reset = useCallback(() => {
    const sheet = workbook.getActiveSheet();
    if (sheet.getFilter()) {
      sheet.deleteFilter();
    }
    const range = sheet.getRange('A1:E5');
    sheet.filter(range);
  }, [workbook]);

  /**
   * 筛选出价格为3或5的行
   */
  const handleClickFilter3And5 = () => {
    const criteria = workbook.newFilterCriteriaBuilder()
      .setVisibleValues(['3', '5'])
      .build();
    const filter = workbook.getActiveSheet().getFilter();
    filter.setColumnFilterCriteria(1, criteria);
  };

  /**
   * 多条件组合筛选
   * 筛选出价格在7到11之间的行
   */
  const handleClickFilterByMultipleCondtions = () => {
    const filterCondition1: FilterCondition = {
      operator: 'greater-equal',
      value: '7',
    };
    const filterCondition2: FilterCondition = {
      operator: 'less-equal',
      value: '11',
    };
    const criteria = workbook.newFilterCriteriaBuilder()
      .setVisibleConditions(filterCondition1, filterCondition2, 'and')
      .build();
    const filter = workbook.getActiveSheet().getFilter();
    filter.setColumnFilterCriteria(3, criteria);
  };

  /**
   * 排序
   */
  const handleClickSortByPrice = () => {
    const filter = workbook.getActiveSheet().getFilter();
    filter.sort({
      column: 3,
      ascending: false,
    });
  };

  return (
    <>
      <div style={{ marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Button
          onClick={handleClickFilter3And5}
          type="primary"
        >
          筛选出数量为3或5的行
        </Button>
        <Button
          onClick={handleClickFilterByMultipleCondtions}
          type="primary"
        >
          筛选出价格在7到11之间的行
        </Button>
        <Button
          onClick={handleClickSortByPrice}
          type="primary"
        >
          按价格逆序排序
        </Button>
        <Button
          onClick={reset}
        >
          重置
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
