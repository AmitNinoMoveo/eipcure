export const getRandomNum = (limit: number, min: number = 0): number => {
    return Math.floor( min + Math.random()*limit);
};

export const isTitleTooLong = (title: string, lettersLimit: number): boolean => title.length > lettersLimit