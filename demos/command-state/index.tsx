import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  AbstractCommand,
  DataStore,
  dataStoreReactUtil,
  type ISharedState,
  type Workbook,
} from '@ali/react-zongheng';
import { BoldOutlined, StrikethroughOutlined, ItalicOutlined } from '@ant-design/icons';

interface ICommandState {
  isTextEditing: boolean;
  bold: boolean;
  italic: boolean;
  linethrough: boolean;
}

function getConfig(styleKey: 'bold' | 'italic' | 'linethrough', store: DataStore<ICommandState>, workbook: Workbook) {
  const idEditing = store.get('isTextEditing');
  const active = store.get(styleKey);
  return {
    disabled: idEditing,
    tooltip: idEditing ? '编辑状态下不可用' : undefined,
    active: store.get(styleKey),
    onClick: () => {
      if (styleKey === 'bold') {
        workbook.getActiveRange().setFontWeight(active ? null : 'bold');
      } else if (styleKey === 'italic') {
        workbook.getActiveRange().setFontStyle(active ? null : 'italic');
      } else if (styleKey === 'linethrough') {
        workbook.getActiveRange().setTextLineThrough(active ? null : 'lineThrough');
      }
    },
  };
}
class MyStyleCommand extends AbstractCommand {
  static key = 'MyCellStyle';
  private readonly store = new DataStore<ICommandState>({ bold: false, italic: false, linethrough: false, isTextEditing: false });
  onMount() {
    this.applicationContext.layout.showRightPanel({
      title: '单元格样式',
      content: <RightPanel store={this.store} />,
    });
  }
  toolbar: AbstractCommand['toolbar'] = {
    bold: () => ({ type: 'iconButton', icon: <BoldOutlined />, title: '加粗', ...getConfig('bold', this.store, this.applicationContext.workbook) }),
    italic: () => ({ type: 'iconButton', icon: <ItalicOutlined />, title: '斜体', ...getConfig('italic', this.store, this.applicationContext.workbook) }),
    linethrough: () => ({ type: 'iconButton', icon: <StrikethroughOutlined />, title: '删除线', ...getConfig('linethrough', this.store, this.applicationContext.workbook) }),
  };

  onStateChange({ shared }: { shared: ISharedState }) {
    // store.set 本身会进行浅比较以减少不必要的变更
    console.log('====> zongheng content change', this.applicationContext.workbook);
    const activeCell = this.applicationContext.workbook.getActiveCell();
    this.store.set({
      isTextEditing: shared.isTextEditing, bold: activeCell.getFontWeight() === 'bold', italic: activeCell.getFontStyle() === 'italic', linethrough: activeCell.getTextLineThrough() === 'lineThrough',
    });
  }
}

const FlexTableDemo = () => {
  const commands = useMemo(() => [new MyStyleCommand()], []);
  return (
    <SheetApplicationProvider
      style={{
        height: 400,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
        borderTop: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      uiConfig={{ toolbarConfig: { singleline: [['MyCellStyle.bold', 'MyCellStyle.italic', 'MyCellStyle.linethrough']] } }}
      commands={commands}
    >
      <SheetApplication sheetConfig={{ formulaBar: false }} />
    </SheetApplicationProvider>
  );
};

const { useObserver } = dataStoreReactUtil;

const RightPanel: React.FC<{ store: DataStore<ICommandState> }> = (({ store }) => {
  const style = useObserver(() => ({
    bold: store.get('bold'),
    italic: store.get('italic'),
    lineThrough: store.get('linethrough'),
  }));
  return (
    <div style={{ padding: '0 16px' }}>
      <div>加粗： {style.bold ? '激活' : '未激活'}</div>
      <div>斜体： {style.italic ? '激活' : '未激活'}</div>
      <div>删除线：{style.lineThrough ? '激活' : '未激活'}</div>
    </div>
  );
});

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
