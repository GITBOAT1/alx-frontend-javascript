/*
import ClassRoom from './0-classroom';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize);
*/

import ClassRoom from "./0-classroom.js";

test("Initialize an instance of ClassRoom set to 100", () => {
  const room = new ClassRoom(100);
  expect(room._maxStudentsSize).toBe(100);
});
