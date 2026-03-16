const year = new Date().getFullYear();

document.getElementById("year").textContent = year;

const yearEl    = document.getElementById("year");
const updatedEl = document.getElementById("updated");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (updatedEl) {
  updatedEl.textContent = new Date().toLocaleDateString("sv-SE");
}

const tabBtns = document.querySelectorAll(".tab-btn");

if (tabBtns.length > 0) {
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const dayId = btn.getAttribute("data-day");

     
      document.querySelectorAll(".day-panel").forEach(function (panel) {
        panel.classList.remove("visible");
      });

      tabBtns.forEach(function (b) {
        b.classList.remove("active");
      });

   
      const target = document.getElementById(dayId);
      if (target) {
        target.classList.add("visible");
      }
      btn.classList.add("active");
    });
  });
}