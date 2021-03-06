import {Polygon} from "../geometry/Polygon";
import {Coordinate} from "../geometry/Coordinate";
import {PolygonDecomposer} from "../collisiondetection/PolygonDecomposer";
import {Renderable} from "../rendering/Renderable";
import {RenderContext} from "../rendering/RenderContext";
import {Color} from "../rendering/Color";

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class MapObject implements Renderable {
  readonly polygons: Polygon[];
  readonly vertices: Coordinate[];
  readonly colors: string[];

  constructor(polygon: Polygon, decomposer: PolygonDecomposer) {
    this.polygons = decomposer.decompose(polygon);
    this.colors = this.polygons.map(_ => randomColor());
    this.vertices = polygon.coordinates;
  }

  public render(context: RenderContext): void {
    context.drawObject(this.vertices, new Color("#00c30f"));
  }
}

export {MapObject}
