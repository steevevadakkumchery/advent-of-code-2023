import { compact, forEach, includes } from "lodash";

const day4Part2 = (dataInput) => {
  const cards = dataInput.split('\n');
  const cardMultipliers = {}
  const cardsToCount = [];

  forEach(cards, (card) => {
    const [cardName, cardNumbers] = card.split(': ');
    let [winningNumbers, currentNumbers] = cardNumbers.split(' | ');
    winningNumbers = compact(winningNumbers.split(' '));
    currentNumbers = compact(currentNumbers.split(' '));

    const numberOfWinningNumbers = currentNumbers.filter((number) => includes(winningNumbers, number)).length;
    const cardNumber = cardName.split(' ').at(-1);
    cardsToCount.push(cardNumber)
    if(!cardMultipliers[cardNumber]) {
      cardMultipliers[cardNumber] = Array(numberOfWinningNumbers).fill(null).map((c,index) => {
        const winningCardNumber = +cardNumber;
        const nextCard = (index + 1);
        return nextCard < cards.length ? (winningCardNumber + nextCard).toString() : 0;
      })
    }
  })

  let pointer = 0;
  while(pointer < cardsToCount.length - 1) {
    const multiplier = cardMultipliers[cardsToCount[pointer]];
    multiplier && cardsToCount.push(...multiplier);
    pointer++;
  }
  
  return cardsToCount.length;
}

export default day4Part2;
