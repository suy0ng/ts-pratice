let count = 0; // 숫자
count += 1;
// count = '문자열' //이러면 에러가 발생한다

const message: string = "Hello World!!"; // 문자열

const done: boolean = true; //불리언 값

const numbers: number[] = [1, 2, 3]; //숫자 배열
const messages: string[] = ["Hello", "World!", "TypeScripts"]; // 문자열 배열

// messages.push(1)                               // 숫자를 넣으려고 하면 오류 발생!

let mightBeUndefined: string | undefined = undefined; // string일수도 있고 undifined일수도 있다.
let nullableNumber: number | null = null;        // number일수도 있고 null 일수도 있음

let color: "red" | "orange" | "yellow" = "red"; // red,orange,yellow 중 하나임
color = "yellow";
// color = 'green'                             // color에 Green을 넣을수 없음! 에러가 발생한다
