import fetch from 'node-fetch';
import {formatData} from '../utils/formatData';

//  All three calls.
export async function callAllEndPointsFn() {
  const breakingBadURL = process.env.Breaking_Bad_URL;
  const catURL = process.env.Cat_URL;
  const dogURL = process.env.Dog_URL;

  const urls = [breakingBadURL, catURL, dogURL];

  let requests = urls.map(url => fetch(url));

  let allResults = Promise.all(requests)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => formatData(data))

  return allResults
}