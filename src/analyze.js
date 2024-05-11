export function analyzeArray(array) {
  if (!Array.isArray(array))
    return Error(
      "Why are you analyzing something that is not an array using me?",
    );

  const result = {
    min: +Infinity,
    max: -Infinity,
  };

  let sum = 0;
  for (const element of array) {
    if (typeof element !== "number") return { length: array.length };

    if (element < result.min) result.min = element;
    if (element > result.max) result.max = element;

    sum += element;
  }
  result.average = sum / array.length;
  result.length = array.length;

  return result;
}
