module.exports = function check(str, bracketsConfig) {
var chars = str.split(''),
stack = [],
open = ['{', '(', '['],
close = ['}', ')', ']'],
closeIndex,
openIndex;
for (var i = 0, len = chars.length; i < len; i++) {
openIndex = open.indexOf(chars[i]);
if (openIndex !== -1) {
stack.push(openIndex);
continue;
}
closeIndex = close.indexOf(chars[i]);
if (closeIndex !== -1) {
openIndex = stack.pop();
if (closeIndex !== openIndex) {
return false;
}
}
}
bracketsConfig = bracketsConfig.map(elem => elem.join(""));
replaceBrackets = string => {
for (let i = bracketsConfig.length - 1; i >= 0; i--) {
if (string.includes(bracketsConfig[i])) {
string = string.replace(bracketsConfig[i], "");
return replaceBrackets(string);
} else if (string.length === 0) {
return true;
}
}
return false;
};
return replaceBrackets(str);

if (stack.length !== 0) {
return false;
}

return true;
}
