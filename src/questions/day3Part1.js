import { forEach } from "lodash";
import { isNumber } from "./utils";

const isSpecialChar = (char) => {
  return char !== '.' && !isNumber(char);
}

const isPartNumber = ({ lines, index, currentCharIndex, runningNumber }) => {
  let levelsX;
  let levelsY;

  if(runningNumber.length == 1) {
    levelsY = [index - 1, index, index + 1].filter((level) => level >= 0 && level < lines.length);
    levelsX = [currentCharIndex - 1, currentCharIndex, currentCharIndex + 1].filter((level) => level >=0 && level < lines[index].length);
  } else {
    levelsY = [index - 1, index, index + 1].filter((level) => level >= 0 && level < lines.length);
    levelsX = [currentCharIndex, currentCharIndex + 1].filter((level) => level >=0 && level < lines[index].length);
  }

  for(let x = 0; x < levelsX.length; x++) {
    for(let y = 0; y < levelsY.length; y++) {
      const xPos = levelsX[x];
      const yPos = levelsY[y];

      if(xPos == currentCharIndex && yPos == index) {
        continue;
      }
  
      if(isSpecialChar(lines[yPos][xPos])) {
        return true;
      }
    }
  }

  return false;
}

const day3Part1 = (dataInput) => {
  const lines = dataInput.split('\n');

  const partNumbers = [];

  forEach(lines, (line, index) => {
    let runningNumber = [];
    let isRunningNumberAPartNumber = false;

    for(let i = 0; i < line.length; i++) {
      const currentChar = line[i];

      if(!isNumber(currentChar)) {
        if(runningNumber.length) {
          if(isRunningNumberAPartNumber) {
            partNumbers.push(+runningNumber.join(''))
          }

          runningNumber = [];
          isRunningNumberAPartNumber = false;
        }
      } else if(isNumber(currentChar)) {
        runningNumber.push(currentChar);
        if(isPartNumber({ lines, index, currentCharIndex: i, runningNumber })) {
          isRunningNumberAPartNumber = true;
        }
      } 
    }

    if(runningNumber.length) {
      if(isRunningNumberAPartNumber) {
        partNumbers.push(+runningNumber.join(''))
      }
    }
  })

  return partNumbers.reduce((acc, curr) => acc + curr, 0);
}

export default day3Part1;
