import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  commandKeys,
  SheetApplication,
  SheetApplicationProvider,
  SearchReplaceCommand,
  CellStyleCommand,
  Menubar,
  Toolbar,
  SheetTabs,
} from '@ali/react-zongheng';

const uiConfig: React.ComponentProps<typeof SheetApplicationProvider>['uiConfig'] = {
  toolbarConfig: {
    doubleline: [
      {
        type: 'doubleLine' as const,
        items: [
          [
            commandKeys.CellStyleCommand.toolbar.fontFamily,
            commandKeys.CellStyleCommand.toolbar.fontSize,
            commandKeys.CellStyleCommand.toolbar.fontColor,
          ],
          [
            commandKeys.CellStyleCommand.toolbar.bold,
            commandKeys.CellStyleCommand.toolbar.italic,
            commandKeys.CellStyleCommand.toolbar.underline,
            commandKeys.CellStyleCommand.toolbar.strikeThrough,
            commandKeys.CellStyleCommand.toolbar.border,
            commandKeys.CellStyleCommand.toolbar.backgroundColor,
          ],
        ],
      },
      [commandKeys.SearchReplaceCommand.key],
    ],
  },
  menubarConfig: [{
    key: 'format',
    title: '格式',
    items: [
      [
        commandKeys.CellStyleCommand.menubar.fontFamily,
        commandKeys.CellStyleCommand.menubar.fontSize,
        commandKeys.CellStyleCommand.menubar.textStyle,
      ],
    ],
  }],
};

const FlexTableDemo = () => {
  const commands = useMemo(() => ([new SearchReplaceCommand(), new CellStyleCommand()]), []);
  return (
    <SheetApplicationProvider style={{ height: 400 }} commands={commands} uiConfig={uiConfig}>
      <SheetApplication
        topPanel={<><Menubar /><Toolbar /></>}
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
