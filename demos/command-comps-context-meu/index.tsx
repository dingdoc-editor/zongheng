import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  AbstractCommand,
  ESelectionsMode,
  DataStore,
  type ISharedState,
  SheetTabs,
} from '@ali/react-zongheng';

class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  private readonly store = new DataStore({
    isSelectionsMultiple: false,
    selectionsMode: ESelectionsMode.Null,
    canMoveLeft: false,
    canMoveRight: false,
  });

  sheetContextMenu: AbstractCommand['sheetContextMenu'] = {
    copy: () => ({
      key: 'copy',
      title: '复制',
      onSelect: () => {},
    }),
    mergeCell: () => ((this.store.get('isSelectionsMultiple')) ? {
      key: 'mergeCell',
      title: '合并单元格',
      onSelect: () => {},
    } : null),
    delete: () => {
      const selectionsMode = this.store.get('selectionsMode');
      let mode: 'col' | 'row' | undefined;
      if ([ESelectionsMode.Col, ESelectionsMode.Multiple_Col].includes(selectionsMode)) {
        mode = 'col';
      } else if ([ESelectionsMode.Row, ESelectionsMode.Multiple_Row].includes(selectionsMode)) {
        mode = 'row';
      }
      if (!mode) { return null; }
      return {
        key: 'delete',
        title: (mode === 'row') ? '删除行' : '删除列',
        onSelect: () => {},
      };
    },
    group: () => {
      const mode = this.store.get('selectionsMode');
      if ([ESelectionsMode.Null, ESelectionsMode.Cell].includes(mode)) { return null; }
      return {
        key: 'groupCell',
        type: 'sub',
        title: '分组',
        disabled: (![ESelectionsMode.Range, ESelectionsMode.Col, ESelectionsMode.Row].includes(mode)),
        subMenu: [
          (mode !== ESelectionsMode.Row) ? {
            key: 'groupCol',
            title: '将选中列分为一组',
            onSelect: () => {},
          } : null,
          (mode !== ESelectionsMode.Col) ? {
            key: 'groupRow',
            title: '将选中行分为一组',
            onSelect: () => {},
          } : null,
        ].filter((v): v is Exclude<typeof v, null> => !!v),
      };
    },
  };

  sheetTabContextMenu: AbstractCommand['sheetTabContextMenu'] = {
    move: () => ({
      type: 'sub',
      key: 'move',
      title: '移动',
      subMenu: [{
        key: '2left',
        title: '左移',
        disabled: this.store.get('canMoveLeft'),
        onSelect: () => {},
      }, {
        key: '2Right',
        title: '右移',
        disabled: this.store.get('canMoveRight'),
        onSelect: () => {},
      }],
    }),
    rename: () => ({
      key: 'rename',
      title: '重命名',
      onSelect: () => {},
    }),
  };

  onStateChange({ shared }: { shared: ISharedState }) {
    const { selectionsMode: mode, sheetsInfo, currentSheetId } = shared;
    this.store.set({
      isSelectionsMultiple: (mode !== ESelectionsMode.Null) && mode !== (ESelectionsMode.Cell),
      selectionsMode: mode,
      canMoveLeft: sheetsInfo[0].id !== currentSheetId,
      canMoveRight: sheetsInfo[sheetsInfo.length - 1].id !== currentSheetId,
    });
  }

  onMount() {
    this.applicationContext.workbook.insertSheet();
  }
}

const contextMenuConfig = [['command1.copy', 'command1.mergeCell'], ['command1.delete'], ['command1.group']];
const sheetTabsContextMenuConfig = [['command1.rename', 'command1.move']];

const FlexTableDemo = () => {
  const commands = useMemo(() => [new MyCommand1()], []);
  return (
    <SheetApplicationProvider
      style={{
        height: 400,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
        borderTop: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      uiConfig={{ contextMenuConfig, sheetTabsContextMenuConfig }}
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
