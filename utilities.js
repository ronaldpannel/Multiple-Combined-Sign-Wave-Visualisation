function mapRange(value, oldMin, oldMax, newMin, newMax) {
  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;
  const newValue = ((value - oldMin) * newRange) / oldRange + newMin;
  return newValue;
}

function constrain(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
