import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  AbstractCommand,
  Menubar,
  SheetTabs,
} from '@ali/react-zongheng';
import { BarChartOutlined, FileImageOutlined } from '@ant-design/icons';


class MyCommand1 extends AbstractCommand {
  static key = 'command1';

  menubar: AbstractCommand['menubar'] = {
    download: () => ({
      type: 'sub' as const,
      key: 'download',
      title: '下载为',
      subMenu: [{
        key: 'excel',
        title: 'Excel 文件',
        suffix: '.xlsx',
        onSelect: () => {},
      }, {
        key: 'pdf',
        title: 'pdf 文件',
        suffix: '.pdf',
        onSelect: () => {},
      }],
    }),
    // TODO 优化成 type: 'group'
    image: () => ([{
      key: 'cellImage',
      title: '单元格图片',
      prefix: <FileImageOutlined />,
      onSelect: () => {},
    }, {
      key: 'floatImage',
      title: '浮动图片',
      prefix: <FileImageOutlined />,
      onSelect: () => {},
    }]),
    chart: () => ({
      key: 'chart',
      title: '图表',
      prefix: <BarChartOutlined />,
      onSelect: () => {},
    }),
  };
}

class MyCommand2 extends AbstractCommand {
  static key = 'command2';

  menubar: AbstractCommand['menubar'] = () => ({
    key: 'custom',
    type: 'custom',
    content: <div style={{ fontSize: '24px', color: 'red' }} >自定义节点</div>,
  });
}

const menubarConfig = [{
  key: 'sheet',
  title: '表格',
  items: [['command1.download'], ['command2']],
}, {
  key: 'insert',
  title: '插入',
  items: [['command1.image'], ['command1.chart']],
}];

const FlexTableDemo = () => {
  const commands = useMemo(() => [new MyCommand1(), new MyCommand2()], []);
  return (
    <SheetApplicationProvider
      style={{
        height: 400,
        borderLeft: '1px solid rgba(23, 26, 29, 0.08)',
        borderTop: '1px solid rgba(23, 26, 29, 0.08)',
      }}
      uiConfig={{ menubarConfig }}
      commands={commands}
    >
      <SheetApplication
        topPanel={<Menubar />}
        bottomPanel={<SheetTabs />}
        sheetConfig={{ formulaBar: false }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
