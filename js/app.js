"use strict";

alert(
  "이 페이지는 취업을 위한 비상업적 포트폴리오 용도로 사용됨을 알려드립니다."
);

// mobile 메뉴 열기
$(".open_menu a").on("click", function () {
  $(".menu_wrap_mo").fadeIn();
  $(".mypage a").focus();
});
$(".menu_close").on("click", function () {
  $(".menu_wrap_mo").fadeOut();
});
$(".lang_dropdown:last a").on("blur", function () {
  $(".menu_wrap_mo").fadeOut();
  $(".open_menu a").focus();
});

//mobile ver. 서브메뉴 열기
$(".menu_wrap_mo .main_menu > li > a").on("click", function () {
  $(this).next().slideToggle(200);
  $(this).toggleClass("on");
  $(this).parent().siblings().children(".sub_menu").slideUp(200);
  $(this).parent().siblings().children("a").removeClass("on");
  return false;
});
$(".menu_wrap_mo .main_menu li:last-child a").on("focusout", function () {
  $(this).parents(".sub_menu").stop().slideUp(200);
});

//pc ver. 서브메뉴 열기
$(".menu_wrap_pc .main_menu li").on("mouseover focusin", function () {
  $(this).addClass("on");
  $(this).siblings().removeClass("on");
  $(this).stop().siblings().children(".sub_menu").slideUp(200);
  $(this).stop().children(".sub_menu").slideDown(200);
});

$(".menu_wrap_pc .main_menu li").on("mouseleave", function () {
  $(this).removeClass("on");
  $(this).stop().children(".sub_menu").slideUp(200);
});

$(".menu_wrap_pc .sub_menu li:last-child a").on("focusout", function () {
  $(this).parents(".sub_menu").stop().slideUp(200);
});

// util
$(".lang_default").on("click focusin", function () {
  $(this).siblings(".lang_dropdown").stop().slideToggle(200);
});
$(".lang_dropdown > li:last-child a").on("focusout", function () {
  $(this).parent().parent().stop().slideUp(200);
});

// familysite
$(".family_txt").on("click focusin", function () {
  $(this).parent().toggleClass("active");
});
$(".dropmenu li:last-child a").on("focusout", function () {
  $(this).parent().parent().parent().parent().removeClass("active");
});

//맨 위로 이동
$(".goto_top").click(function () {
  $("html").animate({
    scrollTop: 0,
  });
});

$(window).on("scroll", function () {
  const headerHeight = $("header").outerHeight();
  const scrollTop = $(window).scrollTop();
  const elTop = $(".scroll_begin").offset().top;
  const docHeight = $(document).height();
  const winHeight = $(window).height();

  if (scrollTop > headerHeight) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }

  if (scrollTop >= elTop) {
    $(".btn_top").fadeIn();
  } else {
    $(".btn_top").fadeOut();
  }

  if (scrollTop === docHeight - winHeight) {
    $(".btn_top").addClass("btm");
  } else {
    $(".btn_top").removeClass("btm");
  }
});
