import React, { useMemo, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  mobileCommandsPreset,
  mobileUiConfigPreset,
  MobileSheetTabs,
  MobileToolbar,
  MobileTextEditor,
  type IApplicationContext,
  type IMobileTextEditorProps,
} from '@ali/react-zongheng';

const FlexTableDemo = () => {
  const applicationRef = useRef<IApplicationContext>(null);
  const commands = useMemo(() => mobileCommandsPreset.map((C) => new C()), []);

  // 注册移动端编辑器组件
  // 编辑器默认挂载 body 上，如果需要更改挂载位置，可以通过 getContainer 返回需要挂载的 don 节点
  useEffect(() => {
    applicationRef.current
      ?.sheetHandler.registerComponent(
        'TextEditor',
        (props: IMobileTextEditorProps) => (
          <MobileTextEditor
            {...props}
            getContainer={() => document.body}
          />
        ),
      );
  }, []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      applicationRef={applicationRef}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={mobileUiConfigPreset}
    >
      <MobileSheetApplication
        topPanel={<MobileSheetTabs />}
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
