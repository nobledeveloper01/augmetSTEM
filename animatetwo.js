document.querySelectorAll(".option").forEach(function (option) {
    option.addEventListener("click", function () {
      document.querySelectorAll(".person-type").forEach(function (person) {
        person.classList.remove("active");
      });
      document.querySelectorAll(".option").forEach(function (opt) {
        opt.classList.remove("active");
      });
      this.classList.add("active");
      var type = this.getAttribute("data-option");
      console.log(type);
  
      setTimeout(function () {
        if (type === "home") {
          document.querySelector(".home-body").classList.add("active");
        } else if (type === "outdoor") {
          document.querySelector(".outdoor-person").classList.add("active");
        }
      }, 500);
    });
  });

  window.onbeforeunload = function() {
    return true;
  }
  
  window.onload = function() {
    if (performance.navigation.type == 1) {
      window.location.href = 'animate.html';
    }
  }
