var a = 1;           // 禁用var

let b = 1;           // const 代替 let
console.warn(b);     // console 有警告 但不报错

const c = [1,2];
const e = 1,f = 2;

const d = {
  type: '1',
  name: '233',
};
const {type,name} = d;   // 前后空格

if(a === 1)        // 关键字前要有空格
{
  a = 2;
}
else
{
  a = 3;
}

const a_b = 1;   // 驼峰命名

const foo = {
  bar: "baz",   // 用单引号
  qux: 'quux'
};
console.warn(foo[ 'bar']);

function test() {
  console.warn(233);
}
test
();
test();

if (a) {
    a = 4;  // 强制统一的缩进 2
}
