!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=document;const r=document;let o=r.querySelector(".js-rival-first"),s=r.querySelector(".js-rival-second");function l(e){const t=r.querySelector(".js-swiper-event"),n=r.createElement("div");n.classList.add("swiper-wrapper"),e.forEach(e=>{const t=`<div class="swiper-slide">\n    <div class="slider__item">\n      <div class="hexagon">\n        <div class="hexagon__center">\n          <div class="hexagon__figure">\n            <div class="hexagon__active">\n              <div class="hexagon__prop">${e.location}</div>\n              <div class="hexagon__big-date">${e.date}</div>\n              <div class="hexagon__time">${e.time}</div>\n              <a class="hexagon__buy" href="#">Купить билет</a>\n            </div>\n            <div class="hexagon__date">${e.date}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>`;n.insertAdjacentHTML("beforeEnd",t)}),t.appendChild(n);var i=new Swiper(".js-swiper-event",{slidesPerView:5,initialSlide:2,spaceBetween:30,centeredSlides:!0,touchReleaseOnEdges:!0,breakpoints:{1200:{slidesPerView:3},767:{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".slider .swiper-button-next",prevEl:".slider .swiper-button-prev"}}},on:{slideChange:function(){o.textContent=e[this.activeIndex].rivals.first,s.textContent=e[this.activeIndex].rivals.second,setTimeout(function(){let e=r.querySelectorAll(".swiper-slide");for(let t=0;t<e.length;t++)e[t].classList.remove("swiper-slide-small");let t=r.querySelector(".swiper-slide-prev");if(t){let e=t.previousElementSibling;e&&e.classList.add("swiper-slide-small")}},40)}}}),l=function(e,t,n){var i;return function(){var r=this,o=arguments,s=n&&!i;clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(r,o)},t),s&&e.apply(r,o)}}(function(e){if(0==!!e&&(e=window.event),((e.wheelDelta?e.wheelDelta/120:e.detail/-3)||!1)>0){let e=i.activeIndex-1;i.slideTo(e)}else{let e=i.activeIndex+1;i.slideTo(e)}},150),a=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";document.attachEvent?document.attachEvent("on"+a,function(e){l(e)}):document.addEventListener&&document.addEventListener(a,function(e){l(e)},!1);const c=r.querySelectorAll(".swiper-slide"),d=r.querySelectorAll(".hexagon"),u=Array.from(c);for(let e of d)e.addEventListener("click",function(){const t=e.parentNode.parentNode,n=u.indexOf(t);i.slideTo(n)})}!function(e){for(let t of e)""!=t.getAttribute("href")&&"#"!=t.getAttribute("href")||t.setAttribute("href","javascript:void(0)")}(document.querySelectorAll("a")),function(e,t){const n=i.querySelector(e),r=i.querySelector(t);n.addEventListener("click",function(){r.classList.toggle("active")})}(".js-hamburger",".js-wrapper"),function(e,t,n){var i=new XMLHttpRequest;i.open(t,e,!0),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=i.responseText,t=JSON.parse(e);n(t)}else console.log("xhr failed")},i.send()}("https://yeffasol.github.io/event/data/events.json","GET",function(e){l(e)})}]);