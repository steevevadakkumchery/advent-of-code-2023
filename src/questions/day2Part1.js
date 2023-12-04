const day2Part1 = (dataInput) => {
  const games = dataInput.split('\n');

  const possibleGames = [];

  const gameCubesAvailable = { red: 12,  green: 13, blue: 14 }

  games.map((game) => {
    const [gameName, gameRounds] = game.split(":");

    const gameRoundsList = gameRounds.trim().split('; ');
    const isGamePossible = gameRoundsList.reduce((acc, round) => {
      if(!acc) { return false; }

      const cubes = round.split(', ').reduce((acc, cube) => { return { ...acc, [cube.split(' ')[1]]: +cube.split(' ')[0] } }, {
        red: 0, blue: 0, green: 0
      });

      if(cubes.red <= gameCubesAvailable.red && cubes.green <= gameCubesAvailable.green && cubes.blue <= gameCubesAvailable.blue) {
        return true;
      } else {
        return false;
      }
    }, true)

    if(isGamePossible) {
      possibleGames.push(+gameName.split(' ')[1])
    }
  })

  return possibleGames.reduce((acc, curr) => acc + curr, 0)
}

export default day2Part1;
