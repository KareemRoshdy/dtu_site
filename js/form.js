let chose = document.querySelectorAll(".chose a");
let employeeForm = document.querySelector("form.employee");
let studentForm = document.querySelector("form.student");

chose.forEach((e) => {
  e.addEventListener("click", () => {
    chose.forEach((a) => {
      a.classList.remove("active");
      e.classList.add("active");
    });

    if (e.dataset.obj === "employee") {
      employeeForm.style.transform = `translateX(${0}px)`;
      studentForm.style.transform = `translateX(${-1000}px)`;
    } else {
      employeeForm.style.transform = `translateX(${1000}px)`;
      studentForm.style.transform = `translateX(${0}px)`;
    }
  });
});

let inputs = document.querySelectorAll(".inputBox input");

inputs.forEach((e) => {
  e.addEventListener("focus", () => {
    if (e.dataset.user === "user") {
      document.querySelector(".inputBox .user-st").style.color = "#305497";
      document.querySelector(".inputBox .user-emp").style.color = "#305497";
    } else if (e.dataset.pass === "pass") {
      document.querySelector(".inputBox .lok-st").style.color = "#305497";
      document.querySelector(".inputBox .lok-emp").style.color = "#305497";
    }
  });
  e.addEventListener("blur", () => {
    if (e.dataset.user === "user") {
      document.querySelector(".inputBox .user-st").style.color = "#333";
      document.querySelector(".inputBox .user-emp").style.color = "#333";
    } else if (e.dataset.pass === "pass") {
      document.querySelector(".inputBox .lok-st").style.color = "#333";
      document.querySelector(".inputBox .lok-emp").style.color = "#333";
    }
  });
});

let alert = document.querySelector(".alert");

let stEmailInput = document.querySelector(".stEmail");
let stPassInput = document.querySelector(".stPass");
let empEmailInput = document.querySelector(".empEmail");
let empPassInput = document.querySelector(".empPass");
let stlogin = document.querySelector("#stlogin");
let emplogin = document.querySelector("#emplogin");

let closeAlert = document.getElementById("closeAlert");
let closeAlertBtn = document.getElementById("alertBtn");

stlogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    stEmailInput.value == "" ||
    stPassInput.value == "" ||
    stEmailInput.value != "kareem" ||
    stPassInput.value != 123
  ) {
    alert.classList.add("active");
  } else {
    if (stEmailInput.value == "kareem" && stPassInput.value == 123) {
      window.location = "studentPage.html";
    }
  }
});

emplogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    empEmailInput.value == "" ||
    empPassInput.value == "" ||
    empEmailInput.value != "kareem" ||
    empPassInput.value != 123
  ) {
    alert.classList.add("active");
  } else {
    if (empEmailInput.value == "kareem" && empPassInput.value == 123) {
      window.location = "employee.html";
    }
  }
});

closeAlert.addEventListener("click", () => {
  alert.classList.remove("active");
});
closeAlertBtn.addEventListener("click", () => {
  alert.classList.remove("active");
});

// passEye

let passEye = document.querySelectorAll(".passEye");

// passEye.addEventListener("click", () => {
//   if (passEye.classList.contains("fa-eye-slash")) {
//     passEye.classList.remove("fa-eye-slash");
//     passEye.style.color = "#305497";
//     stPassInput.setAttribute("type", "text");
//   } else {
//     passEye.classList.add("fa-eye-slash");
//     passEye.style.color = "#000";
//     stPassInput.setAttribute("type", "password");
//   }
// });

passEye.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("fa-eye-slash")) {
      e.classList.remove("fa-eye-slash");
      e.style.color = "#305497";
      if (e.classList.contains("st")) {
        stPassInput.setAttribute("type", "text");
      } else if (e.classList.contains("emp")) {
        empPassInput.setAttribute("type", "text");
      }
    } else {
      e.classList.add("fa-eye-slash");
      e.style.color = "#000";
      if (e.classList.contains("st")) {
        stPassInput.setAttribute("type", "password");
      } else if (e.classList.contains("emp")) {
        empPassInput.setAttribute("type", "password");
      }
    }
  });
});
