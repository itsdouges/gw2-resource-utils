// @flow

import axios from 'axios';
import PromiseThrottle from 'promise-throttle';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });

const IDS_PER_CALL = 200;
const makeUrl = (path, ids) => `https://api.guildwars2.com/v2/${path}${ids ? `?ids=${ids.join(',')}` : ''}`;

const throttle = new PromiseThrottle({
  requestsPerSecond: 10,
  promiseImplementation: Promise,
});

export async function build (resourceType: string) {
  const { data: ids } = await axios.get(makeUrl(resourceType));
  const promises = [];

  while (ids.length) {
    const idsToFetch = ids.splice(0, IDS_PER_CALL);
    const promise = () =>
      axios
      .get(makeUrl(resourceType, idsToFetch))
      .then(({ data }) => data)
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err) || process.exit(1));

    promises.push(throttle.add(promise));
  }

  const results = await Promise.all(promises);

  const resourceMap = results.reduce((arr, resources) => arr.concat(resources), [])
    .reduce((obj, resource) => ({
      ...obj,
      [resource.name]: resource.id,
    }), {});

  return resourceMap;
}
