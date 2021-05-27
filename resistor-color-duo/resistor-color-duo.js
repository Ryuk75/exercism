export const decodedValue = (two_colors) => {
  let index_one=COLORS.indexOf(two_colors[0].toLowerCase());
  let index_two=COLORS.indexOf(two_colors[1].toLowerCase());
  return +`${index_one}${index_two}`;
};
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];