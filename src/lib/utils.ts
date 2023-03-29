function getRandomNumber() {
  return Math.random() - 0.5;
}

export function shuffle<T>(array: T[]): T[] {
  return array.sort(getRandomNumber);
}
