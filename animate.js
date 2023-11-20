const options = document.querySelectorAll(".option");

options.forEach(option => {
  option.addEventListener("click", function () {
    options.forEach(opt => opt.classList.remove("active"));
    this.classList.add("active");
    const type = this.dataset.option;
    
    setTimeout(function () {
      const time = document.querySelector(".time");
      time.classList.remove("day", "night", "dusk", "sunset");
      time.classList.add(type);
    }, 500);
  });
});

window.onbeforeunload = function() {
    return true;
  }
  
  window.onload = function() {
    if (performance.navigation.type == 1) {
      window.location.href = 'index.html';
    }
  }


  