function test() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('Header_wrapper__u8iUe').style.top = '0';
    } else {
      document.getElementById('Header_wrapper__u8iUe').style.top = '-50px';
    }
    prevScrollpos = currentScrollPos;
  };
}

export default test;
