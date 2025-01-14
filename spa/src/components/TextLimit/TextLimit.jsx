export function TextLimit({ text, limit }) {
  const limitedText =
    text.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p>{limitedText}</p>;
}
