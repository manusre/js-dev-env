import '../index.css';
import numeral from 'numeral';

const val = numeral(1000).format('$0,0.00');
console.log(`I would pay ${val} fro this setup`); // eslint-disable-line no-console
