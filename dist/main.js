"use strict";function stickNavigation(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp(),$("#sticky-navigation").slideDown()}function unStickNavigation(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown(),$("#sticky-navigation").slideUp()}function isInBottom(){var i=$("#description"),n=i.height();return $(window).scrollTop()>$(window).height()-2*n}var sticky=!1;$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0);var currentPosition=0,imageCounter=$("[data-name='image-counter']").attr("content");console.log(imageCounter),setInterval(function(){imageCounter>currentPosition?currentPosition++:currentPosition=0,$("#gallery .inner").css({left:"-"+100*currentPosition+"%"})},3e3),$("#menu-opener").on("click",function(){$("#responsive-nav ul").toggleClass("active")}),$(window).scroll(function(){var i=isInBottom();i&&!sticky?(sticky=!0,stickNavigation(),console.log("mostrar")):!i&&sticky&&(sticky=!1,unStickNavigation(),console.log("ocultaar"))});
