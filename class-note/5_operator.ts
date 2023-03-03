// function logMessage(value: any){
//     console.log(value);
// }
//
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// union type 유니온 타입
let seho : string | number | boolean;
function logMessage(value: string | number){
    // 타입 가드
    if(typeof value === "number"){
        value.toLocaleString();
    };
    if(typeof value === "string"){
        value.toString();
    };
    throw new TypeError('value must be string or number');
};

logMessage('hello');
logMessage(100);

interface Developer{
    name: string;
    skill: string;
}
interface Person{
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person){
//     someone.name;
// }
// askSomeone({ name: 'Developer', skill: 'dpp' });
// askSomeone({ name: 'Captain', age: 100 });

function askSomeone(someone: Developer & Person){
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({ name: 'Developer', skill: 'dpp', age: 100 });
// askSomeone({ name: 'Captain', age: 100 });

// let seho2: string | number | boolean;
// let capt: string & number & boolean;