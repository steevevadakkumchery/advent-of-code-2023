import day1Part1 from "./day1Part1";
import day1Part2 from "./day1Part2";
import day2Part1 from "./day2Part1";
import day2Part2 from "./day2Part2";
import day3Part1 from "./day3Part1";
import day3Part2 from "./day3Part2";
import day4Part1 from "./day4Part1";
import day4Part2 from "./day4Part2";

const questionsInfo =[{
  id: '1-1',
  initalInput: 
`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
  initialInputAnswer: 142,
  code: day1Part1,
  complete: true
}, {
  id: '1-2',
  initalInput: `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`,
  initialInputAnswer: 281,
  code: day1Part2,
  complete: true
}, {
  id: '2-1',
  initalInput: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
  initialInputAnswer: 8,
  code: day2Part1,
  complete: true
}, {
  id: '2-2',
  initalInput: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
  initialInputAnswer: 2286,
  code: day2Part2,
  complete: true
}, {
  id: '3-1',
  initalInput: `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
  initialInputAnswer: 4361,
  code: day3Part1,
  complete: true
}, {
  id: '3-2',
  initalInput: `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
  initialInputAnswer: 467835,
  code: day3Part2,
  complete: true
}, {
  id: '4-1',
  initalInput: `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
  initialInputAnswer: 13,
  code: day4Part1,
  complete: true
}, {
  id: '4-2',
  initalInput: `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
  initialInputAnswer: 30,
  code: day4Part2,
  complete: true
}]

export default questionsInfo
