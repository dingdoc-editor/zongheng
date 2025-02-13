import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  FileImageOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  AbstractCommand,
} from '@ali/react-zongheng';

class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  mobileSheetContextMenu: AbstractCommand['mobileSheetContextMenu'] = () => {
    return {
      key: 'my-command-1',
      title: '自定义1',
      icon: <FileImageOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-1');
      },
    };
  };
}

class MyCommand2 extends AbstractCommand {
  static key = 'command2';

  mobileSheetContextMenu: AbstractCommand['mobileSheetContextMenu'] = () => {
    return {
      key: 'my-command-2',
      title: '自定义2',
      icon: <FilterOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-2');
      },
    };
  };
}

export const mobileContextMenuConfig = () => {
  return [
    MyCommand1.key,
    MyCommand2.key,
  ];
};

const FlexTableDemo = () => {
  const commands = useMemo(() => ([new MyCommand1(), new MyCommand2()]), []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={{ contextMenuConfig: mobileContextMenuConfig() }}
    >
      <MobileSheetApplication />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
