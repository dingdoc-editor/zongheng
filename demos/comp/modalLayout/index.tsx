import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  SheetApplication,
  SheetApplicationProvider,
  ModalLayout,
  type IApplicationContext,
  SheetTabs,
} from '@ali/react-zongheng';
import { Button } from 'antd';

const baseContent = (
  <ModalLayout
    title="基础弹窗"
    content={
      <div style={{ height: 120, background: '#eeeeee' }}>
        最基础的用法，使用默认的底部栏
      </div>
    }
    onConfirm={(next) => {
      console.log('====> 点击确认');
      // next 表示关闭弹窗， 这里等价于 layout.hideModal
      next();
    }}
  />
);

const footerContent = (
  <ModalLayout
    title="底部按钮状态"
    content={
      <div style={{ height: 220, width: 400, background: '#eeeeee' }}>
        将 Modal.Footer 传递给 footer 并指定状态。
        <br />
        Modal.Footer接受 ModalLayout.Button 组件时会自动 merge 默认的状态，无需重新定义。
        <br />
        可以定义取消和确认按钮的样式和状态。
      </div>
    }
    footer={
      <ModalLayout.Footer cancel={<ModalLayout.Button disabled>自定义文本</ModalLayout.Button>} />
    }
    onCancel={(next) => {
      console.log('====> 点击取消按钮');
      next();
    }}
    onConfirm={(next) => {
      console.log('====> 点击确认');
      next();
    }}
  />
);

const actionContent = (
  <ModalLayout
    title="底部按钮状态"
    content={
      <div style={{ width: 400 }}>
        Footer 接受 action 节点， 渲染在左侧的空白区域，作为交互的补充。
        <br />
        {'推荐使用 <ModalLayout.TextButton type="primary"> 作为行动点'}
      </div>
    }
    footer={
      <ModalLayout.Footer action={<ModalLayout.TextButton type="primary">查看帮助</ModalLayout.TextButton>} />
    }
    onCancel={(next) => {
      console.log('====> 点击取消按钮');
      next();
    }}
    onConfirm={(next) => {
      console.log('====> 点击确认');
      next();
    }}
  />
);

const CustomFooterContent: React.FC<{}> = () => {
  const [v, setV] = useState(true);
  return (
    <ModalLayout
      title="底部按钮状态"
      content={
        <div style={{ width: 300 }}>
          footer 也可以接受一个完全自定义的节点。
          <br />
          传 null 则不显示底部元素。
          <br />
          <Button onClick={() => setV((visible) => !visible)} type="primary">{v ? '隐藏底部' : '显示底部'}</Button>
        </div>
      }
      footer={v ? <div style={{ background: '#eeeeee' }}>自定义底部节点</div> : null}
    />
  );
};

const FlexTableDemo = () => {
  const ref = useRef<IApplicationContext>(null);

  return (
    <SheetApplicationProvider applicationRef={ref} style={{ height: 300 }}>
      <div style={{ width: 400, display: 'flex', justifyContent: 'space-evenly' }}>
        <Button onClick={() => { ref.current?.layout.showModal({ content: baseContent }); }}>基础弹窗</Button>
        <Button onClick={() => { ref.current?.layout.showModal({ content: footerContent }); }}>底部按钮状态</Button>
        <Button onClick={() => { ref.current?.layout.showModal({ content: actionContent }); }}>搭配行动点</Button>
        <Button onClick={() => { ref.current?.layout.showModal({ content: <CustomFooterContent /> }); }}>自定义底部</Button>
      </div>
      <SheetApplication bottomPanel={<SheetTabs />} />
    </SheetApplicationProvider>
  );
};

ReactDOM.render(<FlexTableDemo />, document.getElementById('root'));
