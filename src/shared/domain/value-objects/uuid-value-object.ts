import { ValueObject } from "./value-object";

import { v4 as uuidv4, validate } from 'uuid';




export class Uuid extends ValueObject {
  readonly id: string
  constructor(id?: string) {
    super()
    this.id = id ?? uuidv4()
    this.validate()
  }

  private validate() {
    const isValid = validate(this.id)
    if (!isValid) {
      throw new InvalidUuidError()
    }
  }

}



export class InvalidUuidError extends Error {

    constructor() {
        super('Invalid UUID')
    }
}