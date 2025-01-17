export function TextLimit({ hero, text, limit }) {
  if (hero) limit = 400;
  const limitedText =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p>{limitedText}</p>;
}
