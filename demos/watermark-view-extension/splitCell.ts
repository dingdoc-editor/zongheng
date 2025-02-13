import { ViewExtension, CellPainter } from '@ali/react-zongheng';

export class SplitCell extends ViewExtension {
  static key = 'splitCell';

  paintCellForeground(painter: CellPainter) {
    const { ctx, rect } = painter;
    const { cell } = painter;

    if (cell.getCellTag('splitCell')) {
      const { left, top, width, height } = rect;
      ctx.fillStyle = '#ffffee';
      ctx.fillRect(rect.left, rect.top, rect.width - 1, rect.height - 1);

      const right = left + width;
      const bottom = top + height;

      ctx.strokeStyle = '#cccccc';
      ctx.beginPath();
      ctx.moveTo(right, bottom);
      ctx.lineTo(left + Math.floor(width * 0.5), top);
      ctx.moveTo(right, bottom);
      ctx.lineTo(left, top + Math.floor(height * 0.5));
      ctx.closePath();
      ctx.stroke();
    }
  }
}
