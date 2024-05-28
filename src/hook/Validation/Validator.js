function Validator(options) {
  var form = document.querySelector(options.form);
  console.log(form);
  if (form) {
    options.rules.forEach(function (rule) {
      var input = document.querySelector(rule.selector);
      console.log(input);
      if (input) {
        input.onblur = function () {
          var errorMes = rule.test(input.value);
          var ele = document.querySelector(rule.selector);
          if (errorMes) {
            ele.style.border = '1px solid red';
          } else {
            ele.style.border = '1px solid #ccc';
          }
        };
      }
    });
  }
}

export default Validator;
