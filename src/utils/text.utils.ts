export function truncate(text: string, lengthMax: number) {
  if (text.length > lengthMax) {
    return (text = text.slice(0, lengthMax - 1)) + "...";
  } else {
    return text;
  }
}
