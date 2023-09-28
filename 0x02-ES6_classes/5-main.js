// eslint-disable-next-line import/extensions
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building { }

try {
  // eslint-disable-next-line no-new
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}
