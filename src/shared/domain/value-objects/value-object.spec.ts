import { ValueObject } from "./value-object";

class StringObject extends ValueObject {
  constructor(readonly value: string) {
    super()
  }
}

describe("value object unit test", () => {


  it("should be able to compare two value object", () => {
    const vo1 = new StringObject("test")
    const vo2 = new StringObject("test")
    expect(vo1.equals(vo2)).toBeTruthy()
  })

  it(("should not be able to compare and return false when compare two value object with different type"), () => {
    const vo1 = new StringObject("test")
    const vo2 = new StringObject("test2")
    expect(vo1.equals(vo2)).toBeFalsy()
  })
});