function SimplePassword(str) {
  const smallStr = str.toLowerCase();
  const regExp1 =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-=+_(){~"':،ـ×÷<>}]).{8,30}/s;
  const regExp2 = /^(?!password)/s;

  return regExp1.test(str) && regExp2.test(smallStr);
}
console.log(SimplePassword("turkeyAAA90="));
