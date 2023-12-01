import { isNumber } from "./utils";

function day1Part1 (dataInput) {
  const entries = dataInput.split('\n');
  
  const answer = entries.reduce((acc, curr) => {
    let leftPointer = 0;
    let rightPointer = curr.length - 1;

    let firstLeftNumber;
    let firstRightNumber;

    while(
      (firstLeftNumber == undefined || firstRightNumber == undefined)
      && (leftPointer < curr.length && rightPointer >= 0)
    ) {
      if (isNumber(curr[leftPointer]) && firstLeftNumber == undefined) {
        firstLeftNumber = curr[leftPointer];
      }

      if (isNumber(curr[rightPointer]) && firstRightNumber == undefined) {
        firstRightNumber = curr[rightPointer];
      }

      if(firstLeftNumber == undefined) { leftPointer++ }
      if(firstRightNumber == undefined) { rightPointer-- }
    }

    const jointNumber = +(firstLeftNumber + firstRightNumber);
    return acc + jointNumber
  }, 0)
  
  return answer
}

export default day1Part1;
