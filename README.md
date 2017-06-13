# [@gw2armory/resource-utils](https://github.com/madou/@gw2armory/resource-utils)

[![NPM version](http://img.shields.io/npm/v/@gw2armory/resource-utils.svg?style=flat-square)](https://www.npmjs.com/package/@gw2armory/resource-utils)
[![NPM downloads](http://img.shields.io/npm/dm/@gw2armory/resource-utils.svg?style=flat-square)](https://www.npmjs.com/package/@gw2armory/resource-utils)
[![Build Status](http://img.shields.io/travis/madou/@gw2armory/resource-utils/master.svg?style=flat-square)](https://travis-ci.org/madou/@gw2armory/resource-utils)
[![codecov](https://codecov.io/gh/madou/@gw2armory/resource-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/@gw2armory/resource-utils)
[![Dependency Status](http://img.shields.io/david/madou/@gw2armory/resource-utils.svg?style=flat-square)](https://david-dm.org/madou/@gw2armory/resource-utils)

Creates maps of gw2 resources with associated helper utilities.

## Installation

```sh
npm install @gw2armory/resource-utils
```

## Api

### `build (resourceName: string) => Promise<ResourceMap>`

```javascript
import { build } from '@gw2armory/resource-utils';

const nameToIdMap = await build('items');
// { "MONSTER ONLY Moa Unarmed Pet":1 ... }
```

#### `ResourceMap`

```json
{
 "Item Name": 10
}
```

### `exact (map: ResourceMap, itemName: string) => ?number`

```javascript
import { exact } from '@gw2armory/resource-utils';

const exact = exact(nameToIdMap, 'MONSTER ONLY Moa Unarmed Pet');
// 1
```

### `fuzzy (map: ResourceMap, itemName: string) => ?number`

```javascript
import { fuzzy } from '@gw2armory/resource-utils';

const exact = fuzzy(nameToIdMap, 'monster');
// { "Legendary Kudu's Monster Loot Box": 65497, ... }
```

### Testing

```bash
npm test
```
