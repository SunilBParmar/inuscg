$(function() {
  mobileManipulations();
  if ($(".floating-objects").length) {
    parallaxHeroObjects()
  }
  if ($(".rating-star").length) {
    $(".rating-star").rateYo({
      ratedFill: "#FF9E29",
      normalFill: "#eee",
      starWidth: "17px",
      spacing: "5px",
      starSvg: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\<g clip-path="url(#clip0_0:190)">\
      <path d="M18.949 7.96065L18.949 7.96066L18.9517 7.9689C18.988 8.07839 18.9904 8.19627 18.9588 8.30718C18.9272 8.41795 18.863 8.51665 18.7745 8.59046C18.7744 8.59055 18.7743 8.59064 18.7742 8.59074L15.1836 11.5792L14.8226 11.8797L14.9353 12.3356L16.0752 16.9462L16.0752 16.9462L16.0774 16.9549C16.1064 17.0663 16.101 17.1838 16.0621 17.2921C16.0231 17.4004 15.9524 17.4944 15.8591 17.5619L15.8564 17.5638C15.77 17.6268 15.6666 17.6623 15.5597 17.6656C15.4527 17.6689 15.3473 17.6399 15.2572 17.5823L15.2548 17.5808L11.2508 15.0442L11.2325 15.0326L11.2136 15.0221C11.1384 14.9803 10.9782 14.9071 10.7654 14.9274C10.5942 14.9437 10.47 15.0145 10.4113 15.0541L6.70578 17.4015L6.70451 17.4023C6.59178 17.4741 6.46007 17.5102 6.32652 17.506C6.19297 17.5019 6.06376 17.4576 5.95572 17.379L5.95397 17.3777C5.83832 17.2941 5.75062 17.1775 5.70234 17.0432C5.65406 16.9089 5.64746 16.7632 5.6834 16.6251L5.68442 16.621L6.75736 12.4006L6.87296 11.9459L6.51464 11.643L2.90758 8.59412L2.90759 8.59411L2.90355 8.59074C2.81494 8.5169 2.75062 8.41809 2.71895 8.30718C2.68729 8.19627 2.68976 8.07839 2.72604 7.9689L2.72608 7.96892L2.72872 7.96065C2.76225 7.85537 2.82673 7.76265 2.91375 7.69458C3.00077 7.62651 3.10629 7.58624 3.21654 7.57904L7.90495 7.27454L8.37668 7.2439L8.55252 6.8051L10.3275 2.37566L10.3276 2.37568L10.3305 2.36821C10.3702 2.26579 10.44 2.17776 10.5306 2.11563C10.6211 2.0536 10.7281 2.02026 10.8378 2.01996C10.8379 2.01996 10.838 2.01996 10.8381 2.01996C10.8382 2.01996 10.8382 2.01996 10.8382 2.01996C10.9483 2.02 11.0558 2.05328 11.1466 2.11544C11.2375 2.17762 11.3075 2.2658 11.3473 2.36842L11.3473 2.36843L11.3493 2.3735L13.0983 6.77751L13.2724 7.21593L13.743 7.24886L18.4577 7.57882L18.4612 7.57904C18.5714 7.58624 18.677 7.62651 18.764 7.69458C18.851 7.76265 18.9155 7.85537 18.949 7.96065Z" stroke="#FF9E29" stroke-width="1.5"/>\
      </g><defs><clipPath id="clip0_0:190"><rect width="20.3226" height="20.3226" fill="white" transform="translate(0.677422)"/></clipPath></defs></svg>'
    });
  }
  if ($(".testimonial-slider").length) {
    var maxHeight = -1;
    $('.testimonial-slider .card').each(function() {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    });
    $('.testimonial-slider .card').each(function() {
      $(this).css('height', maxHeight + 'px');
    });
    $('.testimonial-slider').slick({
      vertical: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.testimonial-shadow-slider'
    });
    $('.testimonial-shadow-slider').slick({
      vertical: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.testimonial-slider'
    });
  }
  $("header span.icon.hamburger").on("click", function() {
    $(".right-sidebar").addClass("opened");
    $("body").addClass("modal-open");
  });
  $(window).resize(function() {
    mobileManipulations();
  });
});

function parallaxHeroObjects() {
  console.log("inide funtio");
  const parallaxContainer = document.getElementById("hero");
  const chouchin = document.querySelectorAll(".floatingitems");

  const fixer = 0.003;

  gsap.registerEffect({
    name: "mousemoveParallax",
    effect: (targets, config) => {
      return gsap.set(targets, { x: config.x, y: config.y });
    }
  });

  document.addEventListener("mousemove", function(event) {
    const pageX =
      event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5;

    const pageY =
      event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5;

    chouchin.forEach((item) => {
      const speedX = item.getAttribute("data-speed-x");
      const speedY = item.getAttribute("data-speed-y");

      gsap.effects.mousemoveParallax(item, {
        x: (item.offsetLeft + pageX * speedX) * fixer,
        y: (item.offsetTop + pageY * speedY) * fixer
      });
    });
  });

}

function mobileManipulations() {
  console.log("Inside mobileManipulations() function");
  console.log($(window).width());

  var headerUL = $("header ul.nav");
  if (jQuery(".right-sidebar").length) {
    jQuery(".right-sidebar").remove();
  }

  if ($(".pudding-slider").length) {
    $('.pudding-slider .card').removeAttr("style");
    $(".pudding-slider.slick-initialized.slick-slider").slick("unslick");
    var maxHeight = -1;
    $('.pudding-slider .card').each(function() {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    });
    $('.pudding-slider .card').each(function() {
      $(this).css('height', maxHeight + 'px');
    });
    console.log("pudding slider initialised");
    $('.pudding-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '25vw',
      arrows: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          centerPadding: '20px',
        }
      }]
    });
  }
  if ($(window).width() < 992) {
    if ($(window).width() < 768) {
      if ($("section#cms-gallary ul").length) {
        var cmsHt = $("section#cms-gallary > .container").outerHeight();
        console.log("Gallery height " + cmsHt);
        $("section#hero").css("padding-bottom", (cmsHt / 2 + 40) + "px");
        $("section.info-blocks.grandma").css("padding-top", (cmsHt / 2 + 75) + "px");
      }
    }
    $("header").append("<div class='right-sidebar'><span class='icon close' onclick='closeSidebar()'></span></div>");
    jQuery(".right-sidebar ul").remove();
    $("header .right-sidebar").prepend($(headerUL));
  } else {
    $("section#hero").removeAttr("style");
    $("section.info-blocks.grandma").removeAttr("style");
    $(".right-sidebar").remove();
    $(headerUL).insertAfter($("header .logo"));
  }
}

function closeSidebar() {
  $(".right-sidebar").removeClass("opened");
  $("body").removeClass("modal-open");
}