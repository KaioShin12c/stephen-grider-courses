"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([1, -2, 3, 6, 0, 22]);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaddadsfadf");
const linkedList = new LinkedList_1.LinkedList();
numbersCollection.sort();
console.log(numbersCollection.data);
// const sort = new Sorter(charactersCollection);
// sort.sort();
// console.log(charactersCollection.data);
// linkedList.add(30);
// linkedList.add(-30);
// linkedList.add(40);
// linkedList.add(320);
// const sort = new Sorter(linkedList);
// sort.sort();
// linkedList.print();
