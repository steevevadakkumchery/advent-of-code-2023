const day2Part2 = (dataInput) => {
  const games = dataInput.split('\n');

  const powerNumbers = [];

  games.map((game) => {
    const gameRoundsList = game.split(":")[1].trim().split('; ');

    const minCubesRequired = gameRoundsList.reduce((acc, round) => {

      const cubes = round.split(', ').reduce((acc, cube) => { return { ...acc, [cube.split(' ')[1]]: +cube.split(' ')[0] } }, {
        red: 0, blue: 0, green: 0
      });

      return {
        red: Math.max(acc.red, cubes.red),
        blue: Math.max(acc.blue, cubes.blue),
        green: Math.max(acc.green, cubes.green) 
      }
    }, { red: 0, blue: 0, green: 0});

    powerNumbers.push((minCubesRequired.red || 1) * (minCubesRequired.blue || 1) * (minCubesRequired.green || 1));
  })

  return powerNumbers.reduce((acc, curr) => acc + curr, 0)
}

export default day2Part2;
