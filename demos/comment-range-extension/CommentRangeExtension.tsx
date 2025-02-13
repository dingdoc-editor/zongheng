import React, {
  useImperativeHandle,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import {
  RangeExtension,
  RangeHit,
  RangeExtensionViewProps,
  RangeExtensionPainter,
  type RangeExtensionReaderWriter,
} from '@ali/react-zongheng';

interface CommentPayload {
  text: string;
}

export class CommentRangeExtension extends RangeExtension<CommentPayload> {
  static key = 'range-comment';

  private readonly viewRefs: Record<string, React.RefObject<CommentViewHandle>> = {};

  onRangePointerEnter(record: RangeExtensionReaderWriter<CommentPayload>) {
    const viewRef = this.viewRefs[record.id];
    if (viewRef) {
      viewRef.current?.handlePointerEnter();
    }
  }

  onRangePointerLeave(record: RangeExtensionReaderWriter<CommentPayload>) {
    const viewRef = this.viewRefs[record.id];
    if (viewRef) {
      viewRef.current?.handlePointerLeave();
    }
  }

  onRangeClick(hit: RangeHit, record: RangeExtensionReaderWriter<CommentPayload>) {
    const viewRef = this.viewRefs[record.id];
    if (viewRef) {
      viewRef.current?.handleClick();
    }
  }

  renderView(params: RangeExtensionViewProps<CommentPayload>) {
    this.viewRefs[params.id] = this.viewRefs[params.id] || React.createRef<CommentViewHandle>();
    return <CommentView {...params} ref={this.viewRefs[params.id]} />;
  }

  paintRangeBackground(p: RangeExtensionPainter) {
    p.ctx.fillStyle = 'rgba(200, 200, 255, 0.1)';
    p.ctx.fillRect(p.rect.left, p.rect.top, p.rect.width, p.rect.height);
    p.ctx.fillStyle = 'blue';
    p.ctx.fillText('Painted by RangeExtension', p.rect.left + 10, p.rect.top + 30);
  }
}

type CommentViewProps = RangeExtensionViewProps<CommentPayload>;

interface CommentViewHandle {
  handlePointerEnter: () => void;
  handlePointerLeave: () => void;
  handleClick: () => void;
}

const CommentView = React.memo(React.forwardRef<
CommentViewHandle, CommentViewProps
>((props, ref) => {
  const { width, model } = props;
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<'preview' | 'edit'>('preview');
  const [style, setStyle] = useState<React.CSSProperties>({});
  const timer = useRef(0);
  const state = useRef<any>({});
  const wrapRef = useRef<HTMLDivElement>(null);

  state.current.mode = mode;

  const handleMouseEnter = useCallback(() => {
    setTimeout(() => {
      window.clearTimeout(timer.current);
    }, 0);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (mode === 'preview') {
      setVisible(false);
    }
  }, [mode]);

  const updatePosition = useCallback(() => {
    const result: React.CSSProperties = {};
    if (visible) {
      result.left = width;
      result.top = 0;
    } else {
      result.display = 'none';
    }
    setStyle(result);
  }, [visible, width]);

  useImperativeHandle(ref, () => ({
    handlePointerEnter: () => {
      setVisible(true);
    },
    handlePointerLeave: () => {
      timer.current = window.setTimeout(handleMouseLeave, 30);
    },
    handleClick: () => {
      setVisible(true);
      setMode('edit');
    },
  }));

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!e.target || !wrapRef.current?.contains(e.target as HTMLElement)) {
        if (state.current.mode === 'edit') {
          setMode('preview');
          setVisible(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      timer.current && window.clearTimeout(timer.current);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <CommentWrap
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={wrapRef}
    >
      comment: {model?.text}, current mode is {mode}
    </CommentWrap>
  );
}));


const CommentWrap = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  top: -1px;
  border: 1px solid #ccc;
  background-color: #eee;
  pointer-events: all;
`;
