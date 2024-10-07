function getModuleName() {
  return "dynami" + "c";
}

// 동적으로 이름 변경이 가능
const dynamicModuleName = getModuleName();

module.exports = {
  [dynamicModuleName]: dynamicModuleName,
};
