export function add(...terms) {
  if (terms.length === 0) return NaN;

  let sum = 0;
  for (let i = 0; i < terms.length; i++) {
    if (!terms[i] && terms[i] !== 0) return NaN;

    const n = Number(terms[i]);
    if (n === NaN) return NaN;

    sum += n;
  }

  return sum;
}

export function subtract(...terms) {
  if (terms.length === 0) return NaN;

  let difference = 0;
  for (let i = 0; i < terms.length; i++) {
    if (!terms[i] && terms[i] !== 0) return NaN;

    const n = Number(terms[i]);
    if (n === NaN) return NaN;

    if (i === 0) difference = n;
    else difference -= n;
  }

  return difference;
}

export function multiply(...factors) {
  if (factors.length === 0) return NaN;

  let product = 1;
  for (let i = 0; i < factors.length; i++) {
    if (!factors[i] && factors[i] !== 0) return NaN;

    const n = Number(factors[i]);
    if (n === NaN) return NaN;

    product *= n;
  }

  return product;
}

export function divide(...dividends) {
  if (dividends.length === 0) return NaN;

  let quotient = 0;
  for (let i = 0; i < dividends.length; i++) {
    if (!dividends[i] && dividends[i] !== 0) return NaN;

    const n = Number(dividends[i]);
    if (n === NaN) return NaN;

    if (n === 0) return undefined;

    if (i === 0) quotient = n;
    else quotient /= n;
  }

  return quotient;
}
