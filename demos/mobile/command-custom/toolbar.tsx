import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  FileImageOutlined,
  FilterOutlined,
} from '@ant-design/icons';;
import { message } from 'antd';
import {
  MobileSheetApplication,
  MobileSheetApplicationProvider,
  MobileToolbar,
  MobileToolbarEnum,
  AbstractCommand,
  CommandKey,
} from '@ali/react-zongheng';

class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  mobileToolbar: AbstractCommand['mobileToolbar'] = () => {
    return {
      key: 'my-command-1',
      title: '自定义1',
      prefix: <FileImageOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-1');
      },
    };
  };
}

class MyCommand2 extends AbstractCommand {
  static key = 'command2';

  mobileToolbar: AbstractCommand['mobileToolbar'] = () => {
    return {
      key: 'my-command-2',
      title: '自定义2',
      prefix: <FilterOutlined />,
      onSelect: () => {
        message.info('点击了 my-command-2');
      },
    };
  };
}

export const mobileToolbarConfig = () => {
  const formatConfig = {
    key: MobileToolbarEnum.FORMAT,
    groups: [
      { key: 'font', items: [MyCommand1.key as CommandKey] },
      { key: 'color', items: [MyCommand2.key as CommandKey] },
    ],
  };

  return [formatConfig];
};

const FlexTableDemo = () => {
  const commands = useMemo(() => ([new MyCommand1(), new MyCommand2()]), []);

  return (
    <MobileSheetApplicationProvider
      style={{ height: '100%' }}
      // 使用官方插件集
      commands={commands}
       // 使用官方插件的UI配置
      uiConfig={{ mobileToolbarConfig: mobileToolbarConfig() }}
    >
      <MobileSheetApplication
        bottomPanel={<MobileToolbar />}
      />
    </MobileSheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
