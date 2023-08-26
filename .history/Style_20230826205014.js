function dark_mode(){
  // Lưu trạng thái dark-mode vào localStorage
  localStorage.setItem("mode", "true");
  // Thực hiện các thay đổi cần thiết cho dark-mode ở đây
  const banner__photo = document.querySelector(".banner__content");
  banner__photo.style.background =
    "linear-gradient(to right, #000, rgba(255, 255, 255, 0.92))";
  const banner__photo1 = document.querySelector(".ourClients ");
  banner__photo1.style.background =
    "linear-gradient(to right, #000, rgba(255, 255, 255, 0.92))";
  const email_BG = document.querySelector(".end-column");
  email_BG.style.backgroundColor = "#3b444b";

  var number__sections = document.querySelectorAll(`.section__color`);
  for (var section__color of number__sections) {
    section__color.style.backgroundColor = "#0d0d0d";
  }
  var number__a = document.querySelectorAll(`.nav-link`);
  for (var a of number__a) {
    a.style.color = "#abb8c3";
  }
  var number__text = document.querySelectorAll(`.textdark__color`);
  for (var text of number__text) {
    text.style.color = "#abb8c3";
  }
  var number__headers = document.querySelectorAll(`.headerdark__color`);
  for (var header of number__headers) {
    header.style.color = "white";
  }
  var number__pills = document.querySelectorAll(`.pilldark__color`);
  for (var pill of number__pills) {
    pill.style.backgroundColor = "#3b444b";
  }
  var number__lies = document.querySelectorAll(`.lidark__color`);
  for (var li of number__lies) {
    li.style.backgroundColor = "#0e1111";
  }
  var number__footer = document.querySelectorAll(`.footertext`);
  for (var endText of number__footer) {
    endText.style.color = "white";
  }
  var number__backgrounds = document.querySelectorAll(`.ourClients`);
  for (var background of number__backgrounds) {
    background.style.background =
      "linear-gradient(to right, #000, rgba(247, 249, 252, 0.77)), url(https://wp.w3layouts.com/masterwork/wp-content/themes/masterwork/assets/images/b2.jpg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";
    background.style.backgroundAttachment = "fixed";
  }
  var header__backgrounds = document.querySelectorAll(`.banner__content`);
  for (var background1 of header__backgrounds) {
    background1.style.background =
      "linear-gradient(to right, #000, rgba(255, 255, 255, 0.92)), url(https://wp.w3layouts.com/masterwork/wp-content/themes/masterwork/assets/images/banner.jpg)";
    background1.style.backgroundSize = "cover";
    background1.style.backgroundPosition = "center";
    background1.style.backgroundAttachment = "fixed";
  }
  var another_light_black = document.querySelectorAll(`.anothers_light_black`);
  for (var anothers_light_black of another_light_black) {
    anothers_light_black.style.backgroundColor = "#1a1a1a";
  }
  var search_color = document.querySelectorAll(`.search_color`);
  for (var search_color of search_color) {
    search_color.style.color = "#b7b7b7";
    search_color.style.borderColor = "#333";
  }
  
}
// 
function light_mode(){
  // Lưu trạng thái light-mode vào localStorage
  localStorage.setItem("mode", "false");
  // Thực hiện các thay đổi cần thiết cho light-mode ở đây
  const banner__photo = document.querySelector(".banner__content");
  banner__photo.style.background =
    "linear-gradient(to right, #fff, rgba(255, 255, 255, 0.92))";
  const banner__photo1 = document.querySelector(".ourClients ");
  banner__photo1.style.background =
    "linear-gradient(to right, #fff, rgba(255, 255, 255, 0.92))";
  const email_BG = document.querySelector(".end-column");
  email_BG.style.backgroundColor = "white";

  var number__sections = document.querySelectorAll(`.section__color`);
  for (var section__color of number__sections) {
    section__color.style.backgroundColor = "white";
  }
  var number__a = document.querySelectorAll(`.nav-link`);
  for (var a of number__a) {
    a.style.color = "#000";
  }
  var number__text = document.querySelectorAll(`.textdark__color`);
  for (var text of number__text) {
    text.style.color = "black";
  }
  var number__headers = document.querySelectorAll(`.headerdark__color`);
  for (var header of number__headers) {
    header.style.color = "black";
  }
  var number__pills = document.querySelectorAll(`.pilldark__color`);
  for (var pill of number__pills) {
    pill.style.backgroundColor = "#fff";
  }
  var number__lies = document.querySelectorAll(`.lidark__color`);
  for (var li of number__lies) {
    li.style.backgroundColor = "#fff";
  }

  var number__footer = document.querySelectorAll(`.footertext`);
  for (var endText of number__footer) {
    endText.style.color = "#5a5a5a";
  }
  var number__backgrounds = document.querySelectorAll(`.ourClients`);
  for (var background of number__backgrounds) {
    background.style.background =
      "linear-gradient(to right, #fff, rgba(247, 249, 252, 0.77)), url(https://wp.w3layouts.com/masterwork/wp-content/themes/masterwork/assets/images/b2.jpg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";
    background.style.backgroundAttachment = "fixed";
  }
  var header__backgrounds = document.querySelectorAll(`.banner__content`);
  for (var background1 of header__backgrounds) {
    background1.style.background =
      "linear-gradient(to right, #fff, rgba(255, 255, 255, 0.92)), url(https://wp.w3layouts.com/masterwork/wp-content/themes/masterwork/assets/images/banner.jpg)";
    background1.style.backgroundSize = "cover";
    background1.style.backgroundPosition = "center";
    background1.style.backgroundAttachment = "fixed";
  }
  var another_colors = document.querySelectorAll(`.another_color`);
  for (var another_color of another_colors) {
    another_color.style.backgroundColor = "#f7f9fc";
  }
  var search_color = document.querySelectorAll(`.search_color`);
  for (var search_color of search_color) {
    search_color.style.color = "#5a5a5a";
    search_color.style.borderColor = "#eee";
  }
}

// Kiểm tra trạng thái đã lưu trong localStorage khi trang được tải
window.addEventListener('DOMContentLoaded', function () {
  var mode = localStorage.getItem("mode");
  if (mode === "true") {
    dark_mode();
  } else if (mode === "false") {
    light_mode();
  }
});
