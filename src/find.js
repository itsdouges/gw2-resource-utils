// @flow

import pickBy from 'lodash/pickBy';

type ResourceMap = {
  [string]: number,
};

export function fuzzy (resourceMap: ResourceMap, nameToFind: string) {
  const nameToFindLower = nameToFind.toLowerCase();
  return pickBy(resourceMap, (value, key) => key.toLowerCase().includes(nameToFindLower));
}

export function exact (resourceMap: ResourceMap, nameToFind: string) {
  return resourceMap[nameToFind] || null;
}
