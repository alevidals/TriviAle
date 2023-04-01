function getRandomNumber() {
  return Math.random() - 0.5;
}

export function shuffle<T>(array: T[]): T[] {
  return array.sort(getRandomNumber);
}

export function htmlDecode(input: string) {
  const doc = new DOMParser().parseFromString(input, "text/html");

  return doc.documentElement.textContent ?? "";
}
