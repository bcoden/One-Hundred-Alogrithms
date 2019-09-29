const test = require("unit.js");

describe("Demo Unit Test Using Unit.js", () => {
  const demo = "demo";

  it("has the string demo", () => {
    test.string(demo).isIdenticalTo("demo");
  });
});
