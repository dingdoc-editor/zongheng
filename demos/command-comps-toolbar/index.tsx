import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  AbstractCommand,
  Toolbar,
  SheetTabs,
} from '@ali/react-zongheng';
import { FileImageOutlined, FilterOutlined } from '@ant-design/icons';


class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  toolbar: AbstractCommand['toolbar'] = {
    image: () => ({ type: 'iconButton', icon: () => (<FileImageOutlined />), title: '图片' }),
    filter: () => ({ type: 'iconButton', icon: () => (<FilterOutlined />), title: '筛选' }),
  };
}

class MyCommand2 extends AbstractCommand {
  static key = 'command2';

  toolbar: AbstractCommand['toolbar'] = () => ({ type: 'custom', content: <div style={{ width: 100, background: 'rgb(180, 180, 180)', textAlign: 'center' }}>自定义</div>, width: 100 }) ;
}

const toolbarConfig = {
  doubleline: [
    { type: 'doubleLine' as const, items: [['command1.image', 'command1.filter'], ['command1.image', 'command1.filter']] as [string[], string[]] },
    ['command1.image', 'command1.filter', 'command2'],
    { type: 'doubleLine' as const, items: [['command2', 'command1.image'], ['command2', 'command1.image']] as [string[], string[]] },
  ],
  singleline: [['command1.image', 'command1.filter', 'command2', 'command1.image', 'command1.filter']],
};

const FlexTableDemo = () => {
  const commands = useMemo(() => [new MyCommand1(), new MyCommand2()], []);
  return (
    <SheetApplicationProvider
      style={{
        height: 400,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
        borderTop: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      uiConfig={{ toolbarConfig }}
      commands={commands}
    >
      <SheetApplication
        topPanel={
          <>
            <div>默认工具栏：</div>
            <Toolbar />
            <div>单行工具栏：</div>
            <Toolbar toolbarMode="singleLine" disableModeChange />
          </>
        }
        bottomPanel={<SheetTabs />}
        sheetConfig={{ formulaBar: false }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));

