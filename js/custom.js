/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR FACTORY            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";

//===RevolutionSliderActiver===
function revolutionSliderActiver() {
  if ($(".rev_slider_wrapper #slider1").length) {
    $("#slider1").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      delay: 5000,

      navigationType: "bullet",
      navigationArrows: "0",
      navigationStyle: "preview3",

      dottedOverlay: "yes",

      hideTimerBar: "off",
      onHoverStop: "off",
      autoHeight: "off",
      minHeight: 420,
      fallbacks: {
        simplifyAll: "on",
        disableFocusListener: true,
      },
      navigation: {
        arrows: { enable: true },
        touch: {
          touchenabled: "on",
          swipe_direction: "horizontal",
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      gridwidth: [1200, 1024, 778, 480],
      gridheight: [600, 580, 500, 420],
    });
  }
}

//====Main menu===
function mainmenu() {
  var navcollapse = $(".main-menu .navigation li");
  navcollapse.hover(function () {
    $(this).children("ul").stop(true, false, true).slideToggle(300);
  });
  //Submenu Dropdown Toggle
  if ($(".main-menu .mobile-menu li.dropdown ul").length) {
    $(".main-menu .mobile-menu li.dropdown").append(
      '<div class="dropdown-btn"></div>',
    );

    //Dropdown Button
    $(".main-menu .mobile-menu li.dropdown .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
        $(this).toggleClass("open");
      },
    );
  }
}

//===Header Sticky===
function stickyHeader() {
  if ($(".stricky").length) {
    var strickyScrollPos = 100;
    if ($(window).scrollTop() > strickyScrollPos) {
      $(".stricky").addClass("stricky-fixed");
      $(".scroll-to-top").fadeIn(1500);
    } else if ($(this).scrollTop() <= strickyScrollPos) {
      $(".stricky").removeClass("stricky-fixed");
      $(".scroll-to-top").fadeOut(1500);
    }
  }
}

//===scoll to Top===
function scrollToTop() {
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
      );
    });
  }
}

//===Search box ===
function searchbox() {
  //Search Box Toggle
  if ($(".seach-toggle").length) {
    //Dropdown Button
    $(".seach-toggle").on("click", function () {
      $(this).toggleClass("active");
      $(this).next(".search-box").toggleClass("now-visible");
    });
  }
}

// ===Project===
function projectMasonaryLayout() {
  if ($(".masonary-layout").length) {
    $(".masonary-layout").isotope({
      layoutMode: "masonry",
    });
  }

  if ($(".post-filter").length) {
    $(".post-filter li")
      .children("span")
      .on("click", function () {
        var Self = $(this);
        var selector = Self.parent().attr("data-filter");
        $(".post-filter li").children("span").parent().removeClass("active");
        Self.parent().addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
  }

  if ($(".post-filter.has-dynamic-filter-counter").length) {
    // var allItem = $('.single-filter-item').length;

    var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
      "li",
    );

    activeFilterItem.each(function () {
      var filterElement = $(this).data("filter");
      console.log(filterElement);
      var count = $(".gallery-content").find(filterElement).length;

      $(this)
        .children("span")
        .append('<span class="count"><b>' + count + "</b></span>");
    });
  }
}

//===Prettyphoto Lightbox===
function prettyPhoto() {
  $("a[data-rel^='prettyPhoto']").prettyPhoto({
    animation_speed: "normal",
    slideshow: 3000,
    autoplay_slideshow: false,
    fullscreen: true,
    social_tools: false,
  });
}

//=== Fact counter ===
function CounterNumberChanger() {
  var timer = $(".timer");
  if (timer.length) {
    timer.appear(function () {
      timer.countTo();
    });
  }
}

//=== Tool tip ===
function tooltip() {
  if ($(".tool_tip").length) {
    $(".tool_tip").tooltip();
  }
  $;
}

//=== Accordion Box ===
function accordion() {
  if ($(".accordion-box").length) {
    $(".accordion-box .accord-btn").on("click", function () {
      if ($(this).hasClass("active") !== true) {
        $(".accordion .accord-btn").removeClass("active");
      }

      if ($(this).next(".accord-content").is(":visible")) {
        $(this).removeClass("active");
        $(this).next(".accord-content").slideUp(500);
      } else {
        $(this).addClass("active");
        $(".accordion .accord-content").slideUp(500);
        $(this).next(".accord-content").slideDown(500);
      }
    });
  }
}

//=== Cart Touch Spin ===
function cartTouchSpin() {
  if ($(".quantity-spinner").length) {
    $("input.quantity-spinner").TouchSpin({
      verticalbuttons: true,
    });
  }
}

//=== Select menu ===
function selectDropdown() {
  if ($(".selectmenu").length) {
    $(".selectmenu").selectmenu();
  }
}

//=== Price Filter===
function priceFilter() {
  if ($(".price-ranger").length) {
    $(".price-ranger #slider-range").slider({
      range: true,
      min: 10,
      max: 200,
      values: [11, 99],
      slide: function (event, ui) {
        $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
        $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
      },
    });
    $(".price-ranger .ranger-min-max-block .min").val(
      "$" + $(".price-ranger #slider-range").slider("values", 0),
    );
    $(".price-ranger .ranger-min-max-block .max").val(
      "$" + $(".price-ranger #slider-range").slider("values", 1),
    );
  }
}

//=== Prealoder===
function prealoader() {
  if ($(".prealoader").length) {
    $(".prealoader").delay(2000).fadeOut(500);
  }
}

// ===Date picker ===
function datepicker() {
  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }
}

//=== Thm scroll anim===
function thmScrollAnim() {
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }
}

//=== Contact Form Validation ===
if ($("#contact-form").length) {
  $("#contact-form").validate({
    submitHandler: function (form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before(
        '<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>',
      );
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType: "json",
        success: function (data) {
          if (data.status == "true") {
            $(form).find(".form-control").val("");
          }
          form_btn.prop("disabled", false).html(form_btn_old_msg);
          $(form_result_div).html(data.message).fadeIn("slow");
          setTimeout(function () {
            $(form_result_div).fadeOut("slow");
          }, 6000);
        },
      });
    },
  });
}

// team-slider
if ($(".team-carousel").length) {
  $(".team-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    dotsEach: true,
    margin: 30,
    dotsSpeed: 1000,
    smartSpeed: 1000,
    pagination: true,
    nav: false,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1366: {
        items: 4,
      },
    },
  });
}

// partners-slider
if ($(".brand-carousel").length) {
  $(".brand-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    pagination: false,
    dotsSpeed: 1000,
    smartSpeed: 1500,
    margin: 30,
    nav: true,
    items: 6,
    navElement: "span",
    navText: [
      "<span class='fa fa-angle-left'></span>",
      "<span class='fa fa-angle-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
}
// partners-slider
if ($(".testimonial-carousel").length) {
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    pagination: false,
    dotsSpeed: 1000,
    smartSpeed: 1500,
    margin: 30,
    items: 3,
    nav: false,
    responsive: {
      767: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
}

function teamCarosule() {
  if ($("#our-team-construct .owl-carousel").length) {
    $("#our-team-construct .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
}

function projectcarousel() {
  if ($(".latest-project-carousel").length) {
    $(".latest-project-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1200,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        767: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
}

function awardsCarousel() {
  if ($(".awards-carousel").length) {
    $(".awards-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
}

function productSingleInteractions() {
  if ($(".product-single-slider").length) {
    $(".product-single-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 700,
      items: 1,
    });
  }

  if ($(".product-variant-tabs").length) {
    $(".product-variant-tabs a").on("click", function (e) {
      var target = $($(this).attr("href"));
      if (!target.length) return;
      e.preventDefault();
      $(".product-variant-tabs a").removeClass("active");
      $(this).addClass("active");
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        700,
      );
    });
  }
}

function productTabs() {
  var productData = {
    "product-rigid-trucks.html": {
      title: "Rigid Trucks",
      items: [
        {
          title: "Tipper Bodies",
          slug: "product-tipper-bodies.html",
          desc: "Purpose-built tipper body solutions for rigid truck applications.",
        },
        {
          title: "Platform",
          slug: "product-platform.html",
          desc: "Flat platform bodies designed for practical material movement.",
        },
        {
          title: "Containers",
          slug: "product-containers.html",
          desc: "Container body solutions for secure and efficient transport.",
        },
      ],
    },
    "product-semi-trailers.html": {
      title: "Semi-Trailers",
      items: [
        {
          title: "Flatbed",
          slug: "product-flatbed.html",
          desc: "Open-deck trailer platform for versatile cargo movement.",
        },
        {
          title: "Skeleton",
          slug: "product-skeleton.html",
          desc: "Lightweight skeletal trailer platform for container logistics.",
        },
        {
          title: "Containerized Trailers",
          slug: "product-containerized-trailers.html",
          desc: "Container-focused trailers for reliable long-haul operations.",
        },
        {
          title: "Semi Low Bed",
          slug: "product-semi-low-bed.html",
          desc: "Semi low bed trailer solution for heavy and oversized equipment.",
        },
        {
          title: "Low Bed",
          slug: "product-low-bed.html",
          desc: "Low bed trailer platform for heavy-duty industrial transport.",
        },
        {
          title: "Port Trailers",
          slug: "product-port-trailers.html",
          desc: "Trailer systems tailored for port and terminal operations.",
        },
        {
          title: "Tipping Trailers",
          slug: "product-tipping-trailers.html",
          desc: "Tipping trailer solutions for bulk and construction material movement.",
        },
        {
          title: "Sidewall Trailers",
          slug: "product-sidewall-trailers.html",
          desc: "Sidewall trailer configuration for stable cargo containment.",
        },
      ],
    },
    "product-special-purpose-vehicles.html": {
      title: "Special Purpose Vehicles",
      items: [],
    },
    "product-defense-products.html": {
      title: "Defense Products",
      items: [],
    },
  };

  var subToCategory = {};
  $.each(productData, function (categorySlug, category) {
    $.each(category.items, function (_, item) {
      subToCategory[item.slug] = categorySlug;
    });
  });

  function getSlug(url) {
    url = url || "";
    if (url.indexOf("#") !== -1) {
      return url.split("#").pop().split("?")[0];
    }
    return url.split("/").pop().split("?")[0];
  }

  function productUrl(slug) {
    return "product.html#" + slug;
  }

  function makeSidebar(categorySlug, activeSlug) {
    var category = productData[categorySlug];
    var html = "<h3>" + category.title + "</h3><ul>";
    if (category.items.length) {
      $.each(category.items, function (_, item) {
        var active = item.slug === activeSlug ? ' class="active"' : "";
        html +=
          "<li" +
          active +
          '><a href="' +
          productUrl(item.slug) +
          '">' +
          item.title +
          "</a></li>";
      });
    } else {
      html += '<li class="active"><a href="#">Coming Soon</a></li>';
    }
    html += "</ul>";
    $(".product-sidebar").html(html);
  }

  function makeCards(categorySlug) {
    var category = productData[categorySlug];
    if (!category.items.length) {
      $(".product-detail-page .col-md-9").html(
        '<div class="product-detail-content"><h2>' +
          category.title +
          "</h2><h3>Coming Soon</h3></div>",
      );
      return;
    }

    var html = '<div class="product-card-list">';
    $.each(category.items, function (_, item) {
      html +=
        '<a class="product-list-card" href="' + productUrl(item.slug) + '">';
      html += "<span>Sub Products</span>";
      html += "<strong>" + item.title + "</strong>";
      html += "<small>" + item.desc + "</small>";
      html += "</a>";
    });
    html += "</div>";
    $(".product-detail-page .col-md-9").html(html);
  }

  function showCategory(categorySlug) {
    if (!productData[categorySlug]) return;
    $(".product-category-link")
      .removeClass("active")
      .filter('[href$="#' + categorySlug + '"], [href="' + categorySlug + '"]')
      .addClass("active");
    makeSidebar(categorySlug, "");
    makeCards(categorySlug);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", productUrl(categorySlug));
    }
  }

  function showProduct(productSlug) {
    var categorySlug = subToCategory[productSlug];
    if (!categorySlug) return;

    var item = null;
    $.each(productData[categorySlug].items, function (_, candidate) {
      if (candidate.slug === productSlug) item = candidate;
    });
    if (!item) return;

    $(".product-category-link")
      .removeClass("active")
      .filter('[href$="#' + categorySlug + '"], [href="' + categorySlug + '"]')
      .addClass("active");
    makeSidebar(categorySlug, productSlug);
    $(".product-detail-page .col-md-9").html(
      '<div class="product-detail-content"><h2>' +
        item.title +
        "</h2><h3>Coming Soon</h3></div>",
    );
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", productUrl(productSlug));
    }
  }

  if (!$(".product-detail-page").length) return;

  var initialSlug = getSlug(window.location.href);
  if (productData[initialSlug]) {
    showCategory(initialSlug);
  } else if (subToCategory[initialSlug]) {
    showProduct(initialSlug);
  }

  $(document).on("click", ".product-category-link", function (e) {
    e.preventDefault();
    showCategory(getSlug($(this).attr("href")));
  });

  $(document).on(
    "click",
    ".product-sidebar a, .product-list-card",
    function (e) {
      var slug = getSlug($(this).attr("href"));
      if (subToCategory[slug]) {
        e.preventDefault();
        showProduct(slug);
      }
    },
  );
}

// Image popup
function imgpopup() {
  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled: true },
      });
    });
  }
}

// 31. Tabs Box
if ($(".tabs-box").length) {
  //Tabs
  $(".tabs-box .tab-buttons .tab-btn").on("click", function () {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    target
      .parents(".tabs-box")
      .find(".tab-buttons")
      .find(".tab-btn")
      .removeClass("active-btn");
    $(this).addClass("active-btn");
    target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
    target
      .parents(".tabs-box")
      .find(".tabs-content")
      .find(".tab")
      .removeClass("active-tab");
    $(target).fadeIn(300);
    $(target).addClass("active-tab");
  });
}

// Dom Ready Function
jQuery(document).on("ready", function () {
  (function ($) {
    // add your functions
    revolutionSliderActiver();
    mainmenu();
    scrollToTop();
    prettyPhoto();
    CounterNumberChanger();
    accordion();
    cartTouchSpin();
    selectDropdown();
    priceFilter();
    datepicker();
    searchbox();
    tooltip();
    thmScrollAnim();
    teamCarosule();
    projectcarousel();
    awardsCarousel();
    productSingleInteractions();
    imgpopup();
  })(jQuery);
});

// Scroll Function
jQuery(window).on("scroll", function () {
  (function ($) {
    stickyHeader();
  })(jQuery);
});

// Instance Of Fuction while Window Load event
jQuery(window).load("load", function () {
  (function ($) {
    projectMasonaryLayout();
    prealoader();
  })(jQuery);
});
