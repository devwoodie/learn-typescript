//함수의 타입을 정의

function sum(a: number, b:number):number {
    return a +b;
};
sum(10, 20);

//함수의 옵셔널 파라미터(?)
function log(a: string, b?: string, c?: string){

}
log('hello world');
log('wow', 'hello');