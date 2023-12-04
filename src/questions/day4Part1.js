import { compact, forEach, includes } from "lodash";

const day4Part1 = (dataInput) => {
  const cards = dataInput.split('\n');
  let total = 0;
  forEach(cards, (card) => {
    const cardNumbers = card.split(': ')[1];
    let [winningNumbers, currentNumbers] = cardNumbers.split(' | ');
    winningNumbers = compact(winningNumbers.split(' '));
    currentNumbers = compact(currentNumbers.split(' '));

    const wonNumbers = currentNumbers.filter((number) => includes(winningNumbers, number));
    total += wonNumbers.length ? Math.pow(2, wonNumbers.length - 1) : 0
  })

  return total;
}

export default day4Part1;
