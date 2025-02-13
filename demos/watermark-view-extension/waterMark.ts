import { ViewExtension, SheetViewportPainter, SheetPainter } from '@ali/react-zongheng';

export class Watermark extends ViewExtension {
  static key = 'watermark';

  paintSheetBackground(p: SheetPainter) {
    this.paintMark(p);
  }

  protected paintMark(p: SheetPainter | SheetViewportPainter) {
    p.ctx.save();
    p.ctx.fillStyle = '#fee';
    p.ctx.font = '20px verdana';

    const w = 140;
    const h = 140;
    let i = 0;
    let j = 0;
    while (i * h < p.rect.height) {
      const y = i * h;
      j = 0;
      while (j * w < p.rect.width) {
        const x = j * w;
        p.ctx.save();
        p.ctx.translate(x, y + (j % 2 === 0 ? h / 2 : 0));
        p.ctx.rotate(-0.7);
        p.ctx.fillText('我是水印', 0, 0);
        p.ctx.restore();
        j++;
      }
      i++;
    }

    p.ctx.restore();
  }
}
