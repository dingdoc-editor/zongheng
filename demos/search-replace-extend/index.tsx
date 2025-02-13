import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  commandsPremiumPreset,
  commandKeys,
  SheetTabs,
  SearchReplaceCommand,
  Toolbar,
  type AbstractCommand,
} from '@ali/react-zongheng';
import { premiumLicense } from '../../utils/constant';


class SearchReplaceCommandExtend extends SearchReplaceCommand {
  replace(keyWord: string): void {
    if (keyWord === 'test') {
      alert('不允许替换成test');
      return;
    }
    super.replace(keyWord);
  }
}

const FlexTableDemo = () => {
  const workbook = useMemo(() => {
    return createWorkbook({
      enableCalculationEngine: true,
      license: premiumLicense,
    });
  }, []);

  const commands = useMemo(() => {
    return commandsPremiumPreset.map((Command) => new Command()).concat(
      (new SearchReplaceCommandExtend()) as unknown as AbstractCommand,
    );
  }, []);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      commands={commands}
      uiConfig={{
        toolbarConfig: {
          singleline: [[commandKeys.SearchReplaceCommand.toolbar]],
          doubleline: [[commandKeys.SearchReplaceCommand.toolbar]],
        },
      }
      }
      locale="zh-CN"
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        topPanel={<Toolbar />}
        bottomPanel={<SheetTabs />}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
