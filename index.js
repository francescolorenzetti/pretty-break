export function prettyBreak(domElement, separator = '<br>') {
  const text = domElement.textContent;
  const elementWidth = domElement.scrollWidth;
  // measure text width in one line
  const textWrapper = document.createElement('span');
  textWrapper.style.whiteSpace = 'nowrap';
  textWrapper.innerText = text;
  domElement.innerHTML = textWrapper.outerHTML;
  // check if text needs breaking
  const textWidth = domElement.scrollWidth;
  // do nothing if text breaks in more than 2 lines
  if (textWidth / 2 > elementWidth) {
    domElement.innerHTML = text;
    return;
  }
  // break in the middle
  if (textWidth > elementWidth) {
    let middle = Math.floor(text.length / 2);
    const before = text.lastIndexOf(' ', middle);
    const after = text.indexOf(' ', middle + 1);
    if (middle - before < after - middle) {
      middle = before;
    } else {
      middle = after;
    }
    const s1 = text.substr(0, middle);
    const s2 = text.substr(middle + 1);
    domElement.innerHTML = s1 + separator + ' ' + s2;
    return;
  }
  // no need for breaking
  domElement.innerHTML = text;
}
