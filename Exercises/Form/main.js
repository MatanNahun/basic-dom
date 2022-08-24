console.log("hi");

const containerForm = document.getElementById("container");

const validate = function () {
  const inputName = document.getElementById("inputName").value;

  const inputSalary = document.getElementById("inputSalary").value;

  const inputBirthday = document.getElementById("inputBirthday").value;

  const inputPhone = document.getElementById("inputPhone").value;

  if (inputName.length <= 2) {
    // console.log("name must have at least 3 characters");
    const inputNameError = document.createElement("div");
    inputNameError.setAttribute("class", "errorMessage");
    inputNameError.innerHTML = "name must have at least 3 characters";
    inputNameError.style.color = "#c0392b";
    inputNameError.style.fontFamily = "Helvetica";
    containerForm.appendChild(inputNameError);
  } else if (inputSalary < 10000 || inputSalary > 16000) {
    // console.log("Salary must be greater than 10,000 but less than 16,000");
    const inputSalaryError = document.createElement("div");
    inputSalaryError.setAttribute("class", "errorMessage");
    inputSalaryError.innerHTML =
      "Salary must be greater than 10,000 but less than 16,000";
    inputSalaryError.style.color = "#c0392b";
    inputSalaryError.style.fontFamily = "Helvetica";
    containerForm.appendChild(inputSalaryError);
  } else if (!inputBirthday) {
    // console.log("Birthday may not be null");
    const inputBirthdayError = document.createElement("div");
    inputBirthdayError.setAttribute("class", "errorMessage");
    inputBirthdayError.innerHTML = "Birthday may not be null";
    inputBirthdayError.style.color = "#c0392b";
    inputBirthdayError.style.fontFamily = "Helvetica";
    containerForm.appendChild(inputBirthdayError);
  } else if (inputPhone.length !== 10) {
    // console.log("Phone must be 10 digits long");
    const inputPhoneError = document.createElement("div");
    inputPhoneError.setAttribute("class", "errorMessage");
    inputPhoneError.innerHTML = "Phone must be 10 digits long";
    inputPhoneError.style.color = "#c0392b";
    inputPhoneError.style.fontFamily = "Helvetica";
    containerForm.appendChild(inputPhoneError);
  } else {
    // console.log("form is good");
    document.getElementById("container").style.display = "none";

    const welcomeMessage = document.createElement("div");
    welcomeMessage.innerHTML = `welcome ${inputName}`;
    welcomeMessage.style.color = "#1abc9c";
    welcomeMessage.style.fontFamily = "Helvetica";
    document.body.appendChild(welcomeMessage);
  }
};
