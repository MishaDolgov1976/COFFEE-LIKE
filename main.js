$(document).ready(function () {
  let navAction = function () {
    let scrollPosition = $(window).scrollTop();

    if (scrollPosition > 55) {
      $("nav").addClass("nav-scrolled");
    } else {
      $("nav").removeClass("nav-scrolled");
    }
  };
  $(window).bind("scroll", function () {
    navAction();
  });

  let navIcon = $(".nav-icon");
  let nav = $(".nav-links");
  navIcon.on("click", function () {
    nav.addClass("show");
  });
  $(".nav-links").on("click", function (e) {
    let mobileMenu = $(".nav-links ul").unbind("click");
    if (
      !mobileMenu.is(e.target) &&
      mobileMenu.has(e.target).length === 0 &&
      !navIcon.is(e.target)
    ) {
      nav.removeClass("show");
    }
  });

  if ($("body").hasClass("website")) {
    let navLink = $(".nav-items");

    for (let n = 0; n < navLink.length; n++) {
      $(navLink[n]).on("click", function (e) {
        let target = $(this).attr("href");
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top - 110,
          },
          {
            complete: function () {
              if ($(window).width() < 901) {
                $(".nav-links").removeClass("show");
              }
            },
          }
        );
      });
    }
  }
  // swiper home section
  const swiper = new Swiper(".home-swiper", {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".home-swiper .fa-arrow-left",
      prevEl: ".home-swiper .fa-arrow-right",
    },
  });
  // Tabs script js
  $(".tabs-item").on("click", function () {
    let dataId = $(this).attr("data-id");
    let $active = $("#" + dataId);
    let $siblings = $active.siblings(".tabs-body-item");

    $siblings.each(function () {
      let $this = $(this);
      $this.removeClass("tabs-body-item-active");
    });
    $active.addClass("tabs-body-item-active");

    $(this)
      .addClass("tabs-item-active")
      .siblings()
      .removeClass("tabs-item-active");
  });
  let swiper2 = new Swiper(".review-swiper", {
    loop: true,
    navigation: {
      nextEl: ".review-swiper .fa-arrow-left",
      prevEl: ".review-swiper .fa-arrow-right",
    },
  });
});

/**
 * 
 * <i class="fa-solid fa-bars-staggered"></i>
<i class="fa-solid fa-house-chimney"></i>
<i class="fa-solid fa-mug-saucer"></i>
<i class="fa-solid fa-layer-group"></i>
<i class="fa-solid fa-message"></i>
<i class="fa-solid fa-quote-left"></i>
<i class="fa-solid fa-blog"></i>
<i class="fa-solid fa-circle-info"></i>
<i class="fa-solid fa-mug-hot"></i>
<i class="fa-solid fa-face-grin-tears"></i>
<i class="fa-solid fa-thumbs-up"></i>
<i class="fa-solid fa-heart"></i>

 */
/**
 *
 *
 *  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(blog/5.jpg);
 *
 */
