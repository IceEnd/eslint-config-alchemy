/*eslint block-scoped-var: "error"*/
function doIf() {
  var build;
  if (true) {
      build = true;
  }
  console.log(build);
  return ;
}

if (foo) foo++; else doSomething();
