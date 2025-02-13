import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  uiConfigPreset,
  commandsPremiumPreset,
  commandKeys,
  Menubar,
  Toolbar,
  SheetTabs,
} from '@ali/react-zongheng';
import { uploadImages, selectImages } from './utils';

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook({
    enableCalculationEngine: true,
  }), []);

  const commands = useMemo(() => {
    return commandsPremiumPreset.map((Command) => {
      if (Command.key === commandKeys.SignatureCommand.key) {
        return new Command({
          uploadImages,
        });
      } else if (Command.key === commandKeys.ImageCommand.key) {
        return new Command({
          selectImages: selectImages,
          uploadImages,
          previewImages: (image: string, images: string[]) => {
            console.log(image, images);
          },
        });
      }
      return new Command();
    });
  }, []);

  return (
    <div
      style={{ width: '100%', height: '100vh' }}
    >
      <SheetApplicationProvider
        workbook={workbook}
        commands={commands}
        uiConfig={uiConfigPreset}
        locale="zh-CN"
        colorScheme="light"
      >
        <SheetApplication
          topPanel={<><Menubar /><Toolbar /></>}
          bottomPanel={<SheetTabs />}
        />
      </SheetApplicationProvider>
    </div>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
