const unit = require("unit.js");
import { add, add2 } from "../src/add/add";

describe("Demo Unit Test Using Unit.js", () => {
  const sum = add(2, 2);

  it("can add two numbers", () => {
    unit.number(sum).is(4);
  });
});
