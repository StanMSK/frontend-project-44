export default function getRandomNumber(min, max) {
  const rand = Math.random() * (max + 1 - min) + min;
  return Math.floor(rand);
}
