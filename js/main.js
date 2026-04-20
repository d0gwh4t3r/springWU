

const yearEl    = document.getElementById("year");
const updatedEl = document.getElementById("updated");

if (yearEl)     yearEl.textContent    = new Date().getFullYear();
if (updatedEl)  updatedEl.textContent = new Date().toLocaleDateString("sv-SE");




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
      if (target) target.classList.add("visible");
      btn.classList.add("active");
    });
  });
}




function handleSubmit() {
  const required = [
    { id: "lagnamn",    label: "Lagnamn" },
    { id: "klubb",      label: "Klubb" },
    { id: "aldersklass",label: "Åldersklass" },
    { id: "antal",      label: "Antal spelare" },
    { id: "fornamn",    label: "Förnamn" },
    { id: "efternamn",  label: "Efternamn" },
    { id: "email",      label: "E-post" },
    { id: "telefon",    label: "Telefon" },
  ];

  
  document.querySelectorAll(".field-error").forEach(function (el) {
    el.remove();
  });
  document.querySelectorAll(".input-error").forEach(function (el) {
    el.classList.remove("input-error");
  });

  let hasError = false;

  required.forEach(function (field) {
    const el = document.getElementById(field.id);
    if (!el) return;
    if (!el.value || el.value.trim() === "") {
      hasError = true;
      el.classList.add("input-error");
      const err = document.createElement("span");
      err.className = "field-error";
      err.textContent = field.label + " är obligatoriskt.";
      el.parentNode.appendChild(err);
    }
  });

  const villkor = document.getElementById("villkor");
  if (villkor && !villkor.checked) {
    hasError = true;
    const check = villkor.parentNode;
    const err = document.createElement("span");
    err.className = "field-error";
    err.textContent = "Du måste godkänna reglerna.";
    check.appendChild(err);
  }

  if (hasError) return;

  
  const btn = document.getElementById("submitBtn");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Skickar...";
  }

  setTimeout(function () {
    const success = document.getElementById("successMsg");
    if (success) success.classList.add("visible");
    if (btn) {
      btn.style.display = "none";
    }
  }, 800);
}