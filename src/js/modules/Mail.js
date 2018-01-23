var $ = require("jquery");
var form = $(".form__form");
var button = $(".form__button");
function sent(form) {
    var form = $(form);
    var data = form.serialize();
  
    $.ajax({
      data: data,
      url: '/php/post.php',
      type: 'post',
      dataType: 'text'
    });
  
    button.click(function() {
      alert('Сообщение отправлено!'); 
    })

  };
  module.exports = new sent;
  