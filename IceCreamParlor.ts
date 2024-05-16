/*
https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true
*/

'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m: number, arr: number[]): number[] {
  let result:number[]=[];
  let sizeOfArr:number=arr.length;
  for(let i:number=0; i<sizeOfArr; ++i){
    let currElementAtIndexI:number=arr[i];
    let haveFoundPairOrNot:boolean=false;
    for(let j:number=0; j<sizeOfArr; ++j){
      if(i!=j){
        let otherPairMemberNeededToBeFound:number=m-currElementAtIndexI;
        if(arr[j]===otherPairMemberNeededToBeFound){
          result.push(i+1);
          result.push(j+1);
          haveFoundPairOrNot=true;
          result.sort((A, B)=>(A-B));
          break;
        }
      }
    }
    if(haveFoundPairOrNot===true) break;
  }
  return result;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const m: number = parseInt(readLine().trim(), 10);

        const n: number = parseInt(readLine().trim(), 10);

        const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result: number[] = icecreamParlor(m, arr);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
