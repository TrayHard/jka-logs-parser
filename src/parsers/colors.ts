export const colorRegEx = /[^\^]*(\^[0-9](?:[^\^]*))/g;

const getColoredNickname = (name: string): string => {
  const matcher = name.match(colorRegEx);
  // @ts-ignore
  if (!matcher) return name.white;
  const colored = matcher.reduce((acc, namePart) => {
    const colorCode = namePart.substr(0, 2);
    // @ts-ignore
    const color = EColors[colorCode];
    return acc + namePart.substr(2)[color];
  }, '')
  console.log(colored.bold);
  return colored.bold as unknown as string;
}
