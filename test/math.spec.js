const math = require("../src/math");

describe("math", function () {
  describe("add", function () {
    it("should add two numbers", function () {
      expect(math.add(1, 2)).toEqual(3);
    });
  });
  describe("subtract", function () {
    it("should subtract two numbers", function () {
      expect(math.subtract(1, 2)).toEqual(-1);
    });
  });
});
