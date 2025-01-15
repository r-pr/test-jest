const math = require("../src/math");

describe("math", function () {
  describe("add", function () {
    it("should add two numbers", function () {
      expect(math.add(1, 2)).toEqual(3);
    });
  });
});
