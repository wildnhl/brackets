module.exports = function check(str, bracketsConfig) {
  let stack = [str[0]]
  for (let i = 1; i < str.length; i++) {
    stack.push(str[i])
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        stack[stack.length - 1] == bracketsConfig[j][1] &&
        stack[stack.length - 2] == bracketsConfig[j][0]
      ) {
        stack.pop()
        stack.pop()
      }
    }
  }
  return stack.length == 0
}
