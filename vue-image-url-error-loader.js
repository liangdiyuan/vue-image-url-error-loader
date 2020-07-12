var _loaderUtils = require("loader-utils");
let imageUrl = '';
function addOnErrorFunc(contents, newStr) {
  let start = contents.match(/<img\s+.*\s*/i);
  if (start) {
    let first = contents.substring(0, start.index);
    let sliceStr = contents.substr(start.index);
    let end = sliceStr.match(/\s*(\/?)>/);
    let content = "";
    if (end) {
      content = sliceStr.substr(0, end.index);
    }

    if (content.indexOf("onerror") < 0) {
      content += ` onerror="this.src='${imageUrl}'" `;
    }

    let imgStr = first + content;
    return addOnErrorFunc(
      sliceStr.substr(end.index),
      newStr ? newStr + imgStr : imgStr
    );
  } else {
    return newStr ? newStr + contents : contents;
  }
}

exports.default = function loader(content) {
  const options = (0, _loaderUtils.getOptions)(this) || {};
  imageUrl = options.imageUrl || '';
  return addOnErrorFunc(content);
};
