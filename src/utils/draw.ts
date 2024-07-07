import { Vector2D } from "./utils";

export function background(ctx: CanvasRenderingContext2D, width: number, height: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

export function line(ctx: CanvasRenderingContext2D, startPoint: Vector2D, endPoint: Vector2D) {
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.stroke();
}

export function grid(ctx: CanvasRenderingContext2D, width: number, height: number, mapCellSize: number, color: string) {
  ctx.strokeStyle = color;
  for (let i = 0; i < width / mapCellSize; i++) {
    line(ctx, new Vector2D(i * mapCellSize, 0), new Vector2D(i * mapCellSize, height));
  }
  for (let j = 0; j < height / mapCellSize; j++) {
    line(ctx, new Vector2D(0, j * mapCellSize), new Vector2D(width, j * mapCellSize));
  }
}