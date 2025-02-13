import React from 'react';
import ReactDOM from 'react-dom';
import {
  Menu,
  IMenuItem,
  SheetApplicationProvider,
} from '@ali/react-zongheng';
import { MenuOutlined } from '@ant-design/icons';


const baseItems: IMenuItem[] = [{
  key: '1-1', title: '菜单项', onSelect: () => {},
}, {
  key: '1-2',
  title: '菜单项禁用',
  onSelect: () => {},
  disabled: '禁用时应当提示禁用原因',
}, {
  key: '1-3',
  title: '菜单项',
  onSelect: () => {},
  suffix: <MenuOutlined />,
  prefix: <MenuOutlined />,
  badge: { type: 'new' },
}, 'divider', {
  key: '1-4',
  title: '菜单项',
  onSelect: () => {},
  selected: true,
}, {
  key: '1-5',
  title: '菜单项带提示',
  onSelect: () => {},
  hoverTip: '菜单提示',
  suffix: 'hover',
}];

const tipItems: IMenuItem[] = [{
  key: 'tip1',
  title: '基础提示',
  onSelect: () => {},
  hoverTip: '纯文本轻提示',
}, {
  key: 'tip2',
  title: '混排提示',
  onSelect: () => {},
  hoverTip: { title: 'zongheng SDK 2.0', description: '更简单的使用方式；更丰富的文档；更好的性能；更强大的能力；' },
}, {
  key: 'tip3',
  title: '图文混排提示',
  onSelect: () => {},
  hoverTip: {
    title: 'zongheng SDK 2.0',
    description: '更简单的使用方式；更丰富的文档；更好的性能；更强大的能力；',
    imgSrc: 'https://img.alicdn.com/imgextra/i4/O1CN01gorjMt270EA6MASVW_!!6000000007734-2-tps-2244-1314.png',
  },
}];

const badgeItem: IMenuItem[] = [{
  key: 'badge1',
  title: '新功能',
  badge: { type: 'new' },
  onSelect: () => {},
}, {
  key: 'badge2',
  title: '实验室功能',
  badge: { type: 'beta' },
  onSelect: () => {},
}, {
  key: 'badge3',
  title: '自定义文本',
  badge: { type: 'text', text: '企业自建', bgColor: 'rgba(255, 137, 27, 0.18)', color: 'rgba(250, 134, 79, 1)' },
  onSelect: () => {},
}, {
  key: 'badge4',
  title: '查看消息',
  badge: { type: 'count', number: 101 },
  onSelect: () => {},
}, {
  key: 'badge5',
  title: '自定义徽标',
  badge: { type: 'custom', content: <div style={{ display: 'inline-block', borderRadius: 4, height: 12, width: 12, background: 'red', marginLeft: 8 }} /> },
  onSelect: () => {},
}];

const customItem: IMenuItem[] = [{
  key: 'custom1',
  title: {
    text: '自定义标题',
    content: <div style={{ background: 'gray', padding: '0 4px', borderRadius: 4 }}>自定义标题</div>,
  },
  hoverTip: '自定义标题元素, 保留子项整体的样式和交互行为',
  onSelect: () => {},
}, {
  key: 'custom2',
  type: 'custom',
  content: (
    <div style={{ fontSize: 18, color: 'red', width: 240, margin: 12, padding: 4, background: 'rgba(230, 230, 230, 0.7)' }}>
      完全自定义的子项，点击交互，禁用状态和样式都需要自己实现
    </div>
  ),
}];

const advancedItems: IMenuItem[] = [{
  key: 'tips',
  type: 'sub',
  title: '提示类型',
  subMenu: tipItems,
}, {
  key: 'badge',
  type: 'sub',
  title: '徽标类型',
  subMenu: badgeItem,
}, {
  key: 'custom',
  type: 'sub',
  title: '自定义子项',
  subMenu: customItem,
}, {
  key: 'disabled',
  type: 'sub',
  title: '禁用效果',
  disabled: '在subItem上设置禁用，不会展开二级菜单',
  subMenu: [],
}];

const FlexTableDemo = () => {
  return (
    <SheetApplicationProvider>
      <Menu
        style={{ width: 200, display: 'inline-block', marginRight: 50 }}
        items={baseItems}
        onSelect={(path) => { console.log('path: ', path); }}
      />
      <Menu
        style={{ width: 200, display: 'inline-block', verticalAlign: 'top' }}
        items={advancedItems}
        onSelect={(path) => { console.log('path: ', path); }}
      />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
