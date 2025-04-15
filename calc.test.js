const { add, subtract, multiply, divide, power } = require("./calc");

test("addizione", () => {
  expect(add(2, 3)).toBe(5);
});

test("sottrazione", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("moltiplicazione", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divisione", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divisione per zero", () => {
  expect(() => divide(10, 0)).toThrow("Impossibile dividere per zero");
});

test("potenza", () => {
  expect(power(2, 3)).toBe(8);
});
