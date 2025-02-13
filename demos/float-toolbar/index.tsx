import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  commandsPreset,
  Toolbar,
  uiConfigPreset,
} from '@ali/react-zongheng';
import { Popover } from 'antd';

const FlexTableDemo = () => {
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const commands = useMemo(() => commandsPreset.map((C) => new C()), []);

  useEffect(() => {
    // 点击外部区域隐藏 toolbar
    const handleClk = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        setToolbarVisible(true);
      } else {
        setToolbarVisible(false);
      }
    };
    document.body.addEventListener('click', handleClk);
    return () => {
      document.body.removeEventListener('click', handleClk);
    };
  }, []);

  return (
    <div
      ref={containerRef}
    >
      <SheetApplicationProvider
        commands={commands}
        uiConfig={{
          toolbarConfig: uiConfigPreset.toolbarConfig,
        }}
        style={{
          height: 500,
          border: '1px solid rgba(23, 26, 29, 0.08)',
        }}
      >
        <Popover
          visible={toolbarVisible}
          style={{ zIndex: 100 }}
          placement="top"
          overlayClassName="float-toolbar-popover"
          content={
            <div style={{ width: 700 }}>
              <Toolbar
                toolbarMode="singleLine"
                disableModeChange
              />
            </div>
          }
          getPopupContainer={() => containerRef.current || document.body}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <SheetApplication />
          </div>
        </Popover>
      </SheetApplicationProvider>
    </div>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

