export function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // случайное значение от 0 до 255 для красного канала
  const g = Math.floor(Math.random() * 256); // случайное значение от 0 до 255 для зеленого канала
  const b = Math.floor(Math.random() * 256); // случайное значение от 0 до 255 для синего канала
  return `rgb(${r}, ${g}, ${b})`;
}
