import {INamed} from './common';


export class Animal implements INamed {
  constructor(public name: string) {

  }
}

export class Animals extends Array<Animal> {
  constructor() {
    super();
    ["Lynx", "jaguar", "Panther", "Cheetah", "Tiger", "Lion"].forEach((animal) => {
      this.push(new Animal(animal));
    })
  }
}