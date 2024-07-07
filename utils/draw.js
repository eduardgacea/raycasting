"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.background = background;
exports.line = line;
exports.grid = grid;
const utils_1 = require("./utils");
function background(ctx, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
}
function line(ctx, startPoint, endPoint) {
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
}
function grid(ctx, width, height, mapCellSize, color) {
    ctx.strokeStyle = color;
    for (let i = 0; i < width / mapCellSize; i++) {
        line(ctx, new utils_1.Vector2D(i * mapCellSize, 0), new utils_1.Vector2D(i * mapCellSize, height));
    }
    for (let j = 0; j < height / mapCellSize; j++) {
        line(ctx, new utils_1.Vector2D(0, j * mapCellSize), new utils_1.Vector2D(width, j * mapCellSize));
    }
}
