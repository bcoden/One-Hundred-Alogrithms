const unit = require("unit.js");

describe("Demo Unit Test Using Unit.js", () => {
  const demo = "demo";

  it("has the string demo", () => {
    unit.string(demo).isIdenticalTo("demo");
  });
});
