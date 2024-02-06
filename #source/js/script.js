Fancybox.bind("[data-fancybox]", {});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("open");
  $(this).toggleClass("open");
  $("html").toggleClass("lock");
});

$(".nav-link").click(function (event) {
  $(".header-nav").removeClass("open");
  $(".header-burger").removeClass("open");
});
$(".moreText").click(function (event) {
  $(".shadow").toggleClass("open");
  $(this).closest("section").find(".textBlock").toggleClass("open");
  if ($(this).text() == "Eще") $(this).text("Свернуть");
  else $(this).text("Eще");
});
$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();

  if (scrollPosition > 100) {
    $(".filerOpenBtn").addClass("scrolled");
  } else {
    $(".filerOpenBtn").removeClass("scrolled");
  }
});

$(".filerOpenBtn").click(function (event) {
  $(".modal-mobile-filter").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".modal-mobile-filter .close").click(function (event) {
  $(".modal-mobile-filter").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".modal-mobile-filter .filter-item").click(function (event) {
  $(".mobile-filters-content").toggleClass("open");
});
$(".mobile-filters-content .back").click(function (event) {
  $(".mobile-filters-content").toggleClass("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("homeCatalog_list");
  const showMoreButton = document.getElementById("showMoreButton");
  const catalogBtn = this.getElementById("catalogBtn");
  function updateListVisibility() {
    if (window.innerWidth <= 1024) {
      for (let i = 4; i < list.children.length; i++) {
        list.children[i].style.display = "none";
      }
      showMoreButton.style.display = "block";
    } else {
      for (let i = 0; i <= list.children.length; i++) {
        list.children[i].style.display = "block";
      }
      showMoreButton.style.display = "none";
    }
  }

  updateListVisibility();

  showMoreButton.addEventListener("click", function () {
    for (let i = 0; i < list.children.length; i++) {
      list.children[i].style.display = "block";
    }
    showMoreButton.style.display = "none";
    catalogBtn.style.display = "block";
  });

  window.addEventListener("resize", updateListVisibility);
});

$(".filter-item").click(function () {
  var dataIndex = $(this).data("index");
  $(".filter-item").removeClass("open");
  $(this).addClass("open");
  $(".filter_content-item").removeClass("open");
  $(".filter_content-item[data-index='" + dataIndex + "']").addClass("open");
});
$(".openPopup").click(function () {
  $(".filters-popup-wrapper").toggleClass("open");
});
$(".filters-popup-wrapper .close").click(function () {
  $(".filters-popup-wrapper").toggleClass("open");
});
$(".filters-popup-wrapper").click(function (event) {
  if ($(event.target).is(".filters-popup-wrapper")) {
    $(".filters-popup-wrapper").toggleClass("open");
  }
});
$(".openRevModal").click(function () {
  $(".leave_Rev_modal_wrapper").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".leave_Rev_modal_wrapper .close").click(function () {
  $(".leave_Rev_modal_wrapper").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".leave_Rev_modal_wrapper .close_modal").click(function () {
  $(".leave_Rev_modal_wrapper").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".leave_Rev_modal_wrapper").click(function (event) {
  if ($(event.target).is(".leave_Rev_modal_wrapper")) {
    $(".leave_Rev_modal_wrapper").toggleClass("open");
    $("html").toggleClass("lock");
  }
});
$(" .sort-item").click(function () {
  $(this).closest(".sort").find(".sort-item").removeClass("open");
  $(this).addClass("open");
});

//---------------------SLIDERS------------------------//

$(".gallery-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  // asNavFor: ".gallery-nav-slider",
});
$(".gallery-nav-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".gallery-slider",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
});
$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});

$(".similar_requests-slider").slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: $(".similar_requests").find(".prev"),
  nextArrow: $(".similar_requests").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//---------------------FORM---------------------------//

// const validation = new JustValidate("#main-form");

// var x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       var y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
// function closeAllSelect(elmnt) {
//   var x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// document.addEventListener("click", closeAllSelect);

// validation
//   .addField("#name", [
//     {
//       rule: "required",
//       errorMessage: "Name is required",
//     },
//     {
//       rule: "minLength",
//       value: 2,
//     },
//   ])
//   .addField("#tel", [
//     {
//       rule: "required",
//       errorMessage: "Phone number is required",
//     },
//     {
//       rule: "minLength",
//       value: 14,
//       errorMessage: "The field must contain a minimum of 10 characters",
//     },
//   ])
//   .addField("#email", [
//     {
//       rule: "required",
//       errorMessage: "Email is required",
//     },
//     {
//       rule: "email",
//       errorMessage: "Email is invalid!",
//     },
//   ]);
