// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
const srt: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}