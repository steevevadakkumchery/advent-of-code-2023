import { forEach } from "lodash";
import { isNumber } from "./utils";

const isSpecialChar = (char) => {
  return char == '*';
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
        return [xPos, yPos];
      }
    }
  }

  return false;
}

const day3Part2 = (dataInput) => {
  const lines = dataInput.split('\n');

  const partNumbers = [];
  const gears = {}

  forEach(lines, (line, index) => {
    let runningNumber = [];
    let isRunningNumberAPartNumber = false;

    for(let i = 0; i < line.length; i++) {
      const currentChar = line[i];

      if(!isNumber(currentChar)) {
        if(runningNumber.length) {
          if(isRunningNumberAPartNumber) {
            const number = +runningNumber.join('')
            partNumbers.push(number);
            if(gears[isRunningNumberAPartNumber]) {
              gears[isRunningNumberAPartNumber].push(number);
            } else {
              gears[isRunningNumberAPartNumber] = [number];
            }
          }

          runningNumber = [];
          isRunningNumberAPartNumber = false;
        }
      } else if(isNumber(currentChar)) {
        runningNumber.push(currentChar);
        const partCoordinates = isPartNumber({ lines, index, currentCharIndex: i, runningNumber });
        if(partCoordinates) {
          isRunningNumberAPartNumber = partCoordinates.join('-');
        }
      } 
    }

    if(runningNumber.length) {
      if(isRunningNumberAPartNumber) {
        const number = +runningNumber.join('')
        partNumbers.push(number);
        if(gears[isRunningNumberAPartNumber]) {
          gears[isRunningNumberAPartNumber].push(number);
        } else {
          gears[isRunningNumberAPartNumber] = [number];
        }
      }
    }
  })
  
  let gearRatio = 0;
  for(let [,value] of Object.entries(gears)) {
    if(value.length == 2) {
      gearRatio += value[0] * value[1];
    }
  }

  return gearRatio;
}

export default day3Part2;
