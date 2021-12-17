// writing simple react App Test , using Jest . 

let array=[{chatdata:""}]
test('adds 1 + 2 to equal 3', () => {
  expect(array.length).toBe(1);
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('chart data', () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({chatdata: 6, barChat: 3}).toEqual({
    chatdata: expect.toBeWithinRange(1, 10),
    barChat: expect.not.toBeWithinRange(11, 20),
  });
});



