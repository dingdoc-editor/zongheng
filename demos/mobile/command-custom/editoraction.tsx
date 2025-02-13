import React, { useMemo, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  FileImageOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  MobileTextEditor,
  MobileToolbar,
  AbstractCommand,
  type IApplicationContext,
  type IMobileTextEditorProps,
} from '@ali/react-zongheng';

class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  mobileEditorAction: AbstractCommand['mobileEditorAction'] = () => {
    return {
      key: 'my-command-1',
      icon: <FileImageOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-1');
      },
    };
  };
}

class MyCommand2 extends AbstractCommand {
  static key = 'command2';

  mobileEditorAction: AbstractCommand['mobileEditorAction'] = () => {
    return {
      key: 'my-command-2',
      icon: <FilterOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-2');
      },
    };
  };
}

export const mobileEditorActionConfig = () => {
  return [
    MyCommand1.key,
    MyCommand2.key,
  ];
};

const FlexTableDemo = () => {
  const applicationRef = useRef<IApplicationContext>(null);
  const commands = useMemo(() => ([new MyCommand1(), new MyCommand2()]), []);

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
      uiConfig={{ mobileEditorActionConfig: mobileEditorActionConfig() }}
    >
      <MobileSheetApplication
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
