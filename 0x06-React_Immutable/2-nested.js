const { Map } = require('immutable');

export default function accessImmutableObject(object, array) {
    map = Map(object);
    return map.getIn(array);
}