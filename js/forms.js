$("#form-submit").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      window.location = "../pages/thankyou.html/";
    });
  });