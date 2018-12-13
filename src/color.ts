import {INamed} from "./common";

export class Color implements INamed {
  constructor(public name: string) {
  }
}

export class Colors extends Array<Color> {
  constructor() {
    super();
    [
      "Red",
      "Pink",
      "Blue"
    ].forEach(name => {
      this.push(new Color(name));
    });
  }
}
