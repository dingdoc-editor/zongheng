import React, { useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  createWorkbook,
  SheetApplication,
  SheetApplicationProvider,
  IApplicationContext,
  ImageLoader,
} from '@ali/react-zongheng';

class MyImageLoader extends ImageLoader {
  loadImageAsync(url: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (e) => {
        reject(e);
      };
      if (url.startsWith('data:')) {
        // 内部一些base64图片暂不处理
        image.src = url;
      } else {
        image.src = 'https://img.alicdn.com/imgextra/i2/O1CN013Xwir21mwIRlu3dq4_!!6000000005018-55-tps-20-20.svg';
      }
    });
  }
}

const FlexTableDemo = () => {
  const workbook = useMemo(() => createWorkbook(), []);

  const applicationRef = useRef<IApplicationContext>(null);

  useEffect(() => {
    const myImageLoader = new MyImageLoader();
    // 关闭跨域
    (myImageLoader as any).disableCrossOrigin();
    applicationRef.current?.sheetHandler.setImageLoader(myImageLoader);
    const builder = workbook.newImageValueBuilder();
    const imageValue = builder.setUrl('this is url').setSize(50, 50).build();
    workbook.getActiveSheet().getRange(0, 0, 1, 1).setImageValue(imageValue);
  }, [workbook]);

  return (
    <SheetApplicationProvider
      workbook={workbook}
      applicationRef={applicationRef}
      style={{
        height: 500,
        border: '1px solid rgba(23, 26, 29, 0.08)',
      }}
    >
      <SheetApplication
        sheetConfig={{
          formulaBar: false,
        }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
