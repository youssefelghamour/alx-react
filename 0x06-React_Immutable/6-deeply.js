const { List, Map } = require('immutable');

export const mergeDeeplyElements = (page1, page2) => Map(page1).mergeDeep(Map(page2)).toList();