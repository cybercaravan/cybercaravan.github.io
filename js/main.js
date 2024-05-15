$(window).scroll(function(){
  var sticky = $('.nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('nav-sticky');
  else sticky.removeClass('nav-sticky');
});
$(".open-nav").click(function(){
   $('.nav-items').addClass('nav-show')
});
$(".close-nav").click(function(){
  $('.nav-items').removeClass('nav-show')
});
$(".nav-link").click(function(){
  $('.nav-items').removeClass('nav-show')
});



$('.calendar-owl').owlCarousel({
    items:1,
    loop:false,
    margin:10,
    nav:true,
    dots: false,
})

$('.video-owl').owlCarousel({
  items:3,
  loop:false,
  margin:5,
  nav:true,
  dots: true,
  responsive:{
    0:{
        items:2
    },
    480:{
      items:2
    },
    624:{
      items:2
    },
    768:{
        items:3
    },
    1024:{
        items:3
    }
}
})


// const optionMenu = document.querySelector(".select-menu"),
//   selectBtn = optionMenu.querySelector(".select-btn"),
//   options = optionMenu.querySelectorAll(".option"),
//   sBtn_text = optionMenu.querySelector(".sBtn-text");

// selectBtn.addEventListener("click", () =>
//   optionMenu.classList.toggle("active")
// );

// options.forEach((option) => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerHTML;
//     sBtn_text.innerHTML = selectedOption;

//     optionMenu.classList.remove("active");
//   });
// });



$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
      if ($this.children('option').eq(i).is(':selected')){
        $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
      }
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
    $list.find('li.is-selected').removeClass('is-selected');
    $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});