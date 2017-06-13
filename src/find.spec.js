import { fuzzy, exact } from './';
import itemMap from '../test/itemsMap.json';

describe('map find', () => {
  it('should find exact', () => {
    const actual = exact(itemMap, "Cleric's Sneakthief Mask of Rage");
    expect(actual).to.equal(121);
  });

  it('should find fuzzy', () => {
    const actual = fuzzy(itemMap, 'Monster');
    expect(actual).to.include({
      'Legendary Kudu\'s Monster Loot Box': 65497,
      'MONSTER ONLY Moa Unarmed Pet': 1,
    });
  });
});
