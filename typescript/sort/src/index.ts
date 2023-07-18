import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([1, -2, 3, 6, 0, 22]);
const charactersCollection = new CharactersCollection("Xaddadsfadf");
const linkedList = new LinkedList();

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
