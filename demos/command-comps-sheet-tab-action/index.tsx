import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  AbstractCommand,
  SheetTabs,
  DataStore,
} from '@ali/react-zongheng';
import { AimOutlined } from '@ant-design/icons';


class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  private readonly store = new DataStore({ highLight: false });

  private triggerHighLight() {
    const active = this.store.get('highLight');
    this.applicationContext.sheetHandler.setHighlightCrossColor(active ? false : 'rgba(250, 189, 20, 0.06)');
    this.store.set({ highLight: !active });
  }

  sheetTabsActionBar: AbstractCommand['sheetTabsActionBar'] = {
    hightLight: () => ({
      type: 'iconButton',
      icon: <AimOutlined />,
      onClick: () => { this.triggerHighLight(); },
    }),
    custom: () => ({ type: 'custom', content: <div style={{ background: '#ddd', borderRadius: '4px', padding: '0 12px' }}>自定义节点</div> }),
  };
}

const sheetTabsRightPanelConfig = ['command1.hightLight', 'command1.custom'];

const FlexTableDemo = () => {
  const commands = useMemo(() => [new MyCommand1()], []);
  return (
    <SheetApplicationProvider
      style={{
        height: 300,
        border: '1px solid rgba(23, 26, 29, 0.08)',
        borderBottom: '2px solid rgba(23, 26, 29, 0.08)',
      }}
      uiConfig={{ sheetTabsRightPanelConfig }}
      commands={commands}
    >
      <SheetApplication
        bottomPanel={<SheetTabs />}
        sheetConfig={{ formulaBar: false }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
