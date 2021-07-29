export const getRandomNum = (limit: number, offset: number = 0): number =>
  {
    const randomNum = Math.random();
    const nextNum = offset + (randomNum * limit);
    const flooredNum = Math.floor(nextNum)
    return flooredNum;
  };
