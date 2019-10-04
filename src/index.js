import { switchCaller } from './utils';

const obj = {
    kind: 'block'
};

switchCaller(obj);
// Uncommenting next line makes it resolve as expected
// switcher(obj);