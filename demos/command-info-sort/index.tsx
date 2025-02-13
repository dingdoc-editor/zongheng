import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  commandKeys, SheetApplication, SheetApplicationProvider, SearchReplaceCommand, CellStyleCommand, Toolbar, SheetTabs,
} from '@ali/react-zongheng';
import { Select } from 'antd';

const selectKeys: string[] = [
  commandKeys.CellStyleCommand.toolbar.fontFamily,
  commandKeys.CellStyleCommand.toolbar.fontSize,
  commandKeys.CellStyleCommand.toolbar.fontColor,
];

const iconKeys: string[] = [
  commandKeys.CellStyleCommand.toolbar.bold,
  commandKeys.CellStyleCommand.toolbar.italic,
  commandKeys.CellStyleCommand.toolbar.underline,
  commandKeys.CellStyleCommand.toolbar.strikeThrough,
  commandKeys.CellStyleCommand.toolbar.border,
  commandKeys.CellStyleCommand.toolbar.backgroundColor,
];

const config1 = {
  doubleline: [{
    type: 'doubleLine' as const,
    items: [
      selectKeys,
      iconKeys,
    ],
  }],
};

const config2 = {
  doubleline: [iconKeys],
};

const config3 = {
  doubleline: [{
    type: 'doubleLine' as const,
    items: [
      iconKeys,
      selectKeys,
    ],
  }],
};

const configs = { config1, config2, config3 };

const FlexTableDemo = () => {
  const commands = useMemo(() => ([new SearchReplaceCommand(), new CellStyleCommand()]), []);

  const [configKey, setConfigKey] = useState('config1');

  return (
    <SheetApplicationProvider style={{ height: 400 }} commands={commands} uiConfig={{ toolbarConfig: configs[configKey] }}>
      <SheetApplication
        sheetConfig={{ formulaBar: false }}
        topPanel={
          <>
            <Select
              defaultValue="config1"
              style={{ width: 150 }}
              options={
                [{ value: 'config1', label: '配置1' }, { value: 'config2', label: '配置2' }, { value: 'config3', label: '配置3' }]
              }
              onChange={(val) => setConfigKey(val)}
            />
            <Toolbar />
          </>
        }
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
