import { Application, Assets } from "pixi.js";
import { GifSprite } from "pixi.js/gif";
import catUrl from './cat.gif';

(async () => {
  const app = new Application();
  await app.init({ background: "#999" });
  document.getElementById("pixi-container")!.appendChild(app.canvas);
  const gif = await Assets.load(catUrl);
  app.stage.addChild(new GifSprite(gif));
})();
