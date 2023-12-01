import { get } from "lodash";
import { isNumber } from "./utils";

function day1Part2 (dataInput) {
  const numberToWordsGraph = {
    o: {n: { e: 1 }},
    t: {h: {r: {e: {e: 3}}},w: { o: 2 }},
    f: {i: {v: {e: 5 }},o: {u: { r: 4}}},
    s: {e:{v: {e:{n: 7}}},i: {x: 6}},
    e: {i: {g: {h: {t: 8}}}},
    n: {i: {n: {e : 9}}}
  }
  const numberToWordsGraphReverse = {
    e: {e:{r:{h:{t: 3}}}, n: {o: 1, i: {n: 9 }}, v: {i: {f: 5}}},
    o: {w: {t: 2}},
    r: {u: {o: {f: 4}}},
    x: {i: {s: 6}},
    n: {e: {v: {e: {s: 7}}}},
    t: {h: {g: {i: {e: 8}}}},
  }

  const entries = dataInput.split('\n');
  
  const answer = entries.reduce((acc, curr) => {
    let formatted = curr;
    
    let leftPointer = 0;
    let rightPointer = formatted.length - 1;

    let firstLeftNumber;
    let firstRightNumber;

    while(
      (firstLeftNumber == undefined || firstRightNumber == undefined)
      && (leftPointer < formatted.length && rightPointer >= 0)
    ) {
      const leftChar = formatted[leftPointer];
      if (isNumber(leftChar) && firstLeftNumber == undefined) {
        firstLeftNumber = leftChar;
      } else {
        const leftRunningWord = [leftChar];
        let interimPointer = leftPointer + 1;

        while(typeof get(numberToWordsGraph, leftRunningWord.join('.')) == 'object' && interimPointer < formatted.length && firstLeftNumber == undefined) {
          const interimChar = formatted[interimPointer];
          if (isNumber(interimChar) && firstLeftNumber == undefined) {
            firstLeftNumber = interimChar;
          } else {
            leftRunningWord.push(interimChar);
            interimPointer++;
          }
        }

        if(firstLeftNumber == undefined && isNumber(get(numberToWordsGraph, leftRunningWord.join('.')))) {
          firstLeftNumber = get(numberToWordsGraph, leftRunningWord.join('.')).toString();
        }
      }

      const rightChar = formatted[rightPointer];
      if (isNumber(rightChar) && firstRightNumber == undefined) {
        firstRightNumber = rightChar;
      } else {
        const rightRunningWord = [rightChar];
        let interimPointer = rightPointer - 1;

        while(typeof get(numberToWordsGraphReverse, rightRunningWord.join('.')) == 'object' && interimPointer >= 0 && firstRightNumber == undefined) {
          const interimChar = formatted[interimPointer];
          if (isNumber(interimChar) && firstRightNumber == undefined) {
            firstRightNumber = interimChar;
          } else {
            rightRunningWord.push(interimChar);
            interimPointer--;
          }
        }

        if(firstRightNumber == undefined && isNumber(get(numberToWordsGraphReverse, rightRunningWord.join('.')))) {
          firstRightNumber = get(numberToWordsGraphReverse, rightRunningWord.join('.')).toString();
        }
      }

      if(firstLeftNumber == undefined) { leftPointer++ }
      if(firstRightNumber == undefined) { rightPointer-- }
    }

    const jointNumber = +(firstLeftNumber + firstRightNumber);
    return acc + jointNumber
  }, 0)
  
  return answer
}

export default day1Part2;