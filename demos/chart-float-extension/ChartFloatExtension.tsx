import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import {
  FloatExtension,
  ZHEvents,
  type FloatContentProps,
} from '@ali/react-zongheng';

interface ChartPayload {
  type: 'line' | 'bar';
  value: number;
}

const getRangeData = (range) => {
  if (!range) {
    return '';
  }
  return range.toJSON();
};

const ChartContent: React.FC<FloatContentProps<ChartPayload>> = React.memo((props) => {
  const { workbook, id, payload } = props;
  const chartRecord = useMemo(() => {
    return workbook.getActiveSheet().extend(ChartFloatExtension).record(id);
  }, [id, workbook]);

  const [rangeData, setRangeData] = useState(() => {
    return getRangeData(chartRecord?.getRanges()[0] || null);
  });

  useEffect(() => {
    // 浮动元素有变化时，更新选区信息，payload会自动更新，range需要手动更新
    return workbook.on(ZHEvents.FloatChanged, (event) => {
      if (event.id === id) {
        const chartDataRange = chartRecord?.getRanges()[0] || null;
        setRangeData(getRangeData(chartDataRange));
      }
    });
  }, [chartRecord, id, workbook]);

  const handleUpdateRange = useCallback(() => {
    chartRecord?.updateRanges([
      workbook.getActiveSheet().getRange(0, 0, 2, 2),
    ]);
  }, [chartRecord, workbook]);

  const handleUpdatePayload = useCallback(() => {
    chartRecord?.write({
      type: 'bar',
      value: Math.random(),
    });
  }, [chartRecord]);

  return (
    <div style={{ fontSize: 12 }}>
      <div>{JSON.stringify({ payload, rangeData })}</div>
      <button onClick={handleUpdatePayload}>update payload</button>
      <button onClick={handleUpdateRange}>update range</button>
    </div>
  );
});

export class ChartFloatExtension extends FloatExtension<ChartPayload> {
  static key = 'float-chart';

  renderContent(props: FloatContentProps<ChartPayload>) {
    return <ChartContent {...props} />;
  }
}
