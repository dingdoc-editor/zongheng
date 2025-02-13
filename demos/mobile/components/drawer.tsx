import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import {
  IApplicationContext,
  MobileSheetApplication,
  MobileSheetApplicationProvider,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const applicationRef = useRef<IApplicationContext>(null);

  const onOpen = () => {
    applicationRef.current?.mobile.layout.showDrawer('biz', {
      title: { text: '测试标题' },
      height: '60%',
      content: '测试内容',
    });
  };

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 999 }}>
        <Button onClick={onOpen}>打开 drawer</Button>
      </div>
      <MobileSheetApplicationProvider
        style={{ height: '100%' }}
        applicationRef={applicationRef}
      >
        <MobileSheetApplication />
      </MobileSheetApplicationProvider>
    </div>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
