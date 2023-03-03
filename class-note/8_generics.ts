// function logText(text){
//     console.log(text);
//     return text;
// };
// logText(10);
// logText('qwe');
// logText(true);


// 제네릭 기본 문법
// function logText<T>(text:T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('hi');

// function logText(text: string){
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }
// function logNumber(num: number){
//     console.log(num);
//     return num;
// }
// function logText(text: string | number){
//     console.log(text);
//     return text;
// };
//

function logText<T>(text: T): T{
    console.log(text);
    return text;
};
const str = logText<string>('wow');
str.toString();

const login = logText<boolean>(true);

// logText('a');
// logText(10);

//인터페이스에 제네릭을 선언하는 방법

interface Dropdown<T>{
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };

//제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function(text){
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi','hoh']);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType{
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logTextLength('ss');

//제네릭 타입 제한 3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

// getShoppingItemOption(10);
getShoppingItemOption('name');

