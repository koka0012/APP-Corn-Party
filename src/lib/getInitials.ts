export default (text: string) => {
  const split = text.split(" ");
  if (split.length < 2) {
    return split[0].charAt(0).toUpperCase();
  }

  return `${split[0].charAt(0).toUpperCase()} ${split[1]
    .charAt(0)
    .toUpperCase()}`;
};
