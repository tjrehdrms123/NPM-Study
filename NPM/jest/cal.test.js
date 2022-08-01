const cal = require("./cal");

test("adds 1 + 2 to equal 3", () => {
  expect(cal.sum(1, 2)).toBe(3);
});

test("adds 5 - 1 to equal 4", () => {
  expect(cal.miuns(5, 1)).toBe(4);
});
