var button = document.querySelector(".search-button");
var popup = document.querySelector(".hotel-search");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var form = popup.querySelector("form");
 button.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.toggle("hotel-search-show");
 arrival.focus();
    });
 form.addEventListener("submit", function (evt) {
   if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.classList.add("hotel-search-error");
      }
    });

 window.addEventListener("keydown", function (evt){
   if (evt.keyCode === 27){
   if (popup.classList.contains ("hotel-search-show")) {
        evt.preventDefault();
        popup.classList.remove("hotel-search-show");
      }
    }
});
