import { season, temperature } from './named_exports.mjs';
import { name, age } from './inline_exports.mjs';
import getData from './default_export.mjs';
import DEFAULT_SERVER, {
    USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed_exports.mjs';

console.log(season);
console.log(temperature);
console.log(name);
console.log(age);

getData('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((error) => console.error(error));

console.log(DEFAULT_SERVER);
console.log(USERNAME + ':' + MY_PASSWORD);
