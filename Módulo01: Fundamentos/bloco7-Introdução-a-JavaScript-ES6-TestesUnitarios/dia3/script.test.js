 const sum = require("./script");

test("testa4ndo soma de 4 e 5 é igual a 9", () => {
    expect(sum(4, 5)).toBe(9);
});
test("testa4ndo soma de 0 e 0 é igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
});
test("testa4ndo soma de 4 e 5 é igual a 9", () => {
    expect(() => sum(4, "5")).toThrowError();
  })
  test("testando ERROR", () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  })

  