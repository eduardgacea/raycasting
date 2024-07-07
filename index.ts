import { type TState } from "./types/types";

import { background, grid } from "./utils/draw";

// global variables
const MAP_CELL_SIZE = 40;

const state: TState = {
  error: "",
  width: 0,
  height: 0,
  ctx: null,
};

const root = document.getElementById("root")!;

// init try-catch
try {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  if (!canvas) throw new Error("could not find canvas element");
  state.width = canvas.width;
  state.height = canvas.height;
  state.ctx = canvas.getContext("2d");
  if (!state.ctx) throw new Error("could not create rendering context");
} catch (error) {
  if (typeof error === "string") state.error = error;
  if (error instanceof Error)
    state.error = `error: ${error.message}\nindex.js line ${
      error.stack?.split("index.js")[1].slice(1).split(":")[0]
    }`;
  else throw new Error("unrecognized error type");
}

if (state.error || state.ctx === null) {
  root.innerHTML = `<div class="error">
    <pre>${state.error}</pre>
  </div>`;
} else {
  // if everything initializes correctly then proceed
  background(state.ctx, state.width, state.height, "#bf3838");
  grid(state.ctx, state.width, state.height, MAP_CELL_SIZE, "#000000");
}
