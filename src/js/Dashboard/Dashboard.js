function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function colors(count) {
  let colors = [];
  for (let hue = 0; hue < count; hue++) {
    colors.push(hslToHex(hue * 360 / count, 91, 69));
  }
  colors[count - 1] = '#6f6af8'
  return colors.reverse();
}

export {colors};
