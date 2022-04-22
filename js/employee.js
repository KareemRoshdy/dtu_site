let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("header .menu");
let logout_btn = document.querySelector("#logout");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.querySelector(".menu-btn i").classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("active");
  document.querySelector(".menu-btn i").classList.remove("active");
};

logout_btn.addEventListener("click", () => {
  window.location.href = "index.html";
});

let sections = document.querySelectorAll("section");
let sectionHome = document.querySelector("section.home");
let sectionResult = document.querySelector("section.result");
let lis = document.querySelectorAll(".menu li a");

lis.forEach((a) => {
  a.addEventListener("click", () => {
    sections.forEach((sec) => {
      sec.classList.remove("active");
      if (sec.classList.contains(a.dataset.sec)) {
        sec.classList.add("active");
      }
    });
  });
});

/*  =============================================== */

let stName = document.querySelector("#stName"); // Student name
let stId = document.querySelector("#stId"); // Student ID
let stPhase = document.querySelector("#stPhase"); // Student Phase
let stDept = document.querySelector("#stDept"); // Student Department
let stEmail = document.querySelector("#stEmail"); // Student Email
let submit = document.querySelector("#submit"); // Submit Btn

let stData;
// Check If you have student data in localStorage ?
if (localStorage.studentData != null) {
  stData = JSON.parse(localStorage.studentData);
} else {
  stData = [];
}

document.querySelector(".close_alert_erorr").onclick = () => {
  document.querySelector(".erorr_alert").classList.remove("active");
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
  if (
    stId.value == "" ||
    stName.value == "" ||
    stDept.value == "" ||
    stPhase.value == "" ||
    stEmail.value == ""
  ) {
    document.querySelector(".erorr_alert").classList.add("active");
  } else {
    // Get All Data From Inputs
    let stNewData = {
      studentId: stId.value,
      studentName: stName.value.toLowerCase(),
      studentDepartment: stDept.value.toLowerCase(),
      studentPhase: stPhase.value.toLowerCase(),
      studentEmail: stEmail.value.toLowerCase(),
    };

    // Create Object to Carry All Data
    if (
      stId.value != "" &&
      stName.value != "" &&
      stDept.value != "" &&
      stPhase.value != "" &&
      stEmail.value != ""
    ) {
      stData.push(stNewData);
    }

    // Seave Data In LocalStorge
    localStorage.studentData = JSON.stringify(stData);

    // Clear All Inputs After click On BTN
    clearData();

    // Add Data In Table
    showData();

    document.querySelector(".success_alert").classList.add("active");

    setTimeout(() => {
      document.querySelector(".success_alert").classList.remove("active");
    }, 2000);
  }
});

// Clear Function
function clearData() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

// Students Table Data

function showData() {
  let table = "";

  for (let i = 0; i < stData.length; i++) {
    table += `
    <tr>
    <td>${stData[i].studentId}</td>
    <td>${stData[i].studentName}</td>
    <td>${stData[i].studentDepartment}</td>
    <td>${stData[i].studentPhase}</td>
    <td>${stData[i].studentEmail}</td>
    <td><button onclick="update(${i});" id="update">Update</button></td>
    <td><button onclick="deleteData(${i});" id="delete">Delete</button></td>
  </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = table;

  let deleteAll = document.getElementById("deleteAll");
  if (stData.length > 0) {
    deleteAll.innerHTML = `
    <button onclick="deleteAllData();">Delete All (${stData.length})</button>
    `;
  } else {
    deleteAll.innerHTML = "";
  }
}
showData();

// Delete
let syeetAlert = document.querySelector(".syeetAlert");
let yesBtn = document.querySelector(".yes");
let noBtn = document.querySelector(".no");
function deleteData(i) {
  syeetAlert.classList.add("active");
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
  yesBtn.onclick = () => {
    syeetAlert.classList.remove("active");
    stData.splice(i, 1);
    // After Delete Return New Array Without the deleted item
    localStorage.studentData = JSON.stringify(stData);
    showData();
  };
  noBtn.onclick = () => {
    syeetAlert.classList.remove("active");
  };
}

// Delete All Data
function deleteAllData() {
  syeetAlert.classList.add("active");

  yesBtn.onclick = () => {
    syeetAlert.classList.remove("active");
    localStorage.clear();
    stData.splice(0);
    showData();
  };
  noBtn.onclick = () => {
    syeetAlert.classList.remove("active");
  };
}

// Update

let stNameUp = document.querySelector("#stNameUp"); // Student name
let stIdUp = document.querySelector("#stIdUp"); // Student ID
let stPhaseUp = document.querySelector("#stPhaseUp"); // Student Phase
let stDeptUp = document.querySelector("#stDeptUp"); // Student Department
let stEmailUp = document.querySelector("#stEmailUp"); // Student Email
let updateDataBtn = document.querySelector(".update");
let temp;

function update(i) {
  document.querySelector(".updateData form").classList.add("active");
  stIdUp.value = stData[i].studentId;
  stNameUp.value = stData[i].studentName;
  stDeptUp.value = stData[i].studentDepartment;
  stPhaseUp.value = stData[i].studentPhase;
  stEmailUp.value = stData[i].studentEmail;
  temp = i;
}
updateDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newData = {
    studentId: stIdUp.value,
    studentName: stNameUp.value,
    studentDepartment: stDeptUp.value,
    studentPhase: stPhaseUp.value,
    studentEmail: stEmailUp.value,
  };

  // add new data in array and remove last data
  stData[temp] = newData;

  // Save a new data in localstorage
  localStorage.studentData = JSON.stringify(stData);

  document.querySelectorAll(".updateData form input").forEach((e) => {
    e.value = "";
  });

  document.querySelector(".updateData form").classList.remove("active");

  showData();
});

document.querySelector(".closeUp").onclick = () => {
  document.querySelector(".updateData form").classList.remove("active");
};

// Search

let searchName = document.getElementById("searchName");
let searchId = document.getElementById("searchById");
let searchNameBtn = document.getElementById("search_name_btn");
let searchIdBtn = document.getElementById("search_id_btn");

// Seaarching By Name
searchName.addEventListener("input", () => {
  let inputNameVal = searchName.value.toLowerCase();
  let table = "";
  for (let i = 0; i < stData.length; i++) {
    if (stData[i].studentName.includes(inputNameVal)) {
      table += `
      <tr>
      <td>${stData[i].studentId}</td>
      <td>${stData[i].studentName}</td>
      <td>${stData[i].studentDepartment}</td>
      <td>${stData[i].studentPhase}</td>
      <td>${stData[i].studentEmail}</td>
      <td><button onclick="update(${i});" id="update">Update</button></td>
      <td><button onclick="deleteData(${i});" id="delete">Delete</button></td>
      </tr>
    `;
    }
  }
  document.getElementById("tbody").innerHTML = table;
});

// Searching By ID
searchId.addEventListener("input", () => {
  let inputIdVal = searchId.value;
  let table = "";
  for (let i = 0; i < stData.length; i++) {
    if (stData[i].studentId.includes(inputIdVal)) {
      table += `
      <tr>
      <td>${stData[i].studentId}</td>
      <td>${stData[i].studentName}</td>
      <td>${stData[i].studentDepartment}</td>
      <td>${stData[i].studentPhase}</td>
      <td>${stData[i].studentEmail}</td>
      <td><button onclick="update(${i});" id="update">Update</button></td>
      <td><button onclick="deleteData(${i});" id="delete">Delete</button></td>
      </tr>
    `;
    }
  }
  document.getElementById("tbody").innerHTML = table;
});

searchNameBtn.onclick = () => {
  searchName.focus();
  searchId.value = "";
  showData();
};

searchIdBtn.onclick = () => {
  searchId.focus();
  searchName.value = "";
  showData();
};
