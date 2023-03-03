//타입 추론 기본1
let a = 'abc';

function getB(b = 10){
    let c = 'hi';
    return b + c;
};

//타입 추론 기본2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// };
// let shoppingItem: Dropdown<string> = {
//     value: 'sss',
//     title: 'hello'
// };

//타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
};
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
};

let derailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'c',
    tag: 'a'
};

//Best Common Type
let arr = [1,2,true,'ss'];
