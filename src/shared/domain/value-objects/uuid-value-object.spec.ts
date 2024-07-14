import { InvalidUuidError, Uuid } from "./uuid-value-object"



describe("uuid value object unit test", () => {
  it("should be able to throw an error when create a uuid value object with an invalid id", () => {
    expect(() => {
      new Uuid( "12345678-1234-1234-1234-12345678901")
    }).toThrow(InvalidUuidError)
  })

  it("should be able to create a uuid value object if is valid", () => {
    const uuid = new Uuid()
    expect(uuid.id).toBeDefined()
  })
  // it("should be able to create a uuid value object with a predefined id", () => {
  //   const uuid = new Uuid("12345678-1234-1234-1234-123456789012")
  //   expect(uuid.id).toBe("12345678-1234-1234-1234-123456789012")
  // })
  // it("should be able to validate a uuid value object", () => {
  //   const uuid = new Uuid("12345678-1234-1234-1234-123456789012")
  //   expect(uuid.id).toBe("12345678-1234-1234-1234-123456789012")
  // })
})