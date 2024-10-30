const { Map, is } = require('immutable');

export const areMapsEqual = (map1, maps2) => is(map1, map2);