"use strict";

import * as _ from 'lodash';

import { ANSWER } from './modules/constants';
import SmartClass from './modules/functions';
import { OtherClass } from './modules/lib';


let words: string[] = ['hello', 'world'];
_.each(words, word => console.log(word));

console.log('here are some number: ');
[1, 2, 3].map(n => n ** 2).forEach(console.log)


console.log(`but we only trust this one: ${ANSWER}`);


console.log('et voilà!');

let instance: SmartClass = new SmartClass();
instance.doSomethingSmart();

var t: OtherClass = new OtherClass();
t.justDoIt();

console.log('--- END several modules used and no one hurt ---')