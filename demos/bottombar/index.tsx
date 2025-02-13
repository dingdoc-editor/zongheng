import React, {
  useEffect,
  useMemo,
  useRef,
  memo,
} from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
} from '@ali/react-zongheng';

const BottomPadding = memo(() => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      没有更多内容啦
    </div>
  );
});

const FlexTableDemo = () => {
  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  const applicationRef = useRef<any>(null);

  useEffect(() => {
    applicationRef.current?.sheetHandler?.unregisterComponent('bottomPadding');
    applicationRef.current?.sheetHandler?.scrollRangeIntoView({ row: 200, col: 0, rowCount: 1, colCount: 1 });
    return applicationRef.current?.sheetHandler?.registerComponent('bottomPadding', BottomPadding);
  }, []);

  return (
    <SheetApplicationProvider
      commands={commands}
      applicationRef={applicationRef}
      style={{
        height: 500,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        sheetConfig={{
          scrollbarPosition: 'fixed',
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
