const form = document.getElementById("feedbackForm");
const resultMessage = document.getElementById("resultMessage");

const fields = {
  studentName: document.getElementById("studentName"),
  email: document.getElementById("email"),
  mobile: document.getElementById("mobile"),
  department: document.getElementById("department"),
  comments: document.getElementById("comments")
};

const errorFields = {
  studentName: document.getElementById("studentNameError"),
  email: document.getElementById("emailError"),
  mobile: document.getElementById("mobileError"),
  department: document.getElementById("departmentError"),
  gender: document.getElementById("genderError"),
  comments: document.getElementById("commentsError")
};

function clearErrors() {
  Object.values(errorFields).forEach((el) => {
    el.textContent = "";
  });
}

function setError(fieldName, message) {
  errorFields[fieldName].textContent = message;
}

function getSelectedGender() {
  const selected = document.querySelector('input[name="gender"]:checked');
  return selected ? selected.value : "";
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateForm() {
  clearErrors();
  resultMessage.textContent = "";
  resultMessage.className = "result-message";

  let isValid = true;

  const nameValue = fields.studentName.value.trim();
  const emailValue = fields.email.value.trim();
  const mobileValue = fields.mobile.value.trim();
  const departmentValue = fields.department.value;
  const commentsValue = fields.comments.value.trim();
  const genderValue = getSelectedGender();

  if (nameValue.length === 0) {
    setError("studentName", "Student Name is required.");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    setError("email", "Please enter a valid email address.");
    isValid = false;
  }

  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobileValue)) {
    setError("mobile", "Mobile number must be exactly 10 digits.");
    isValid = false;
  }

  if (!departmentValue) {
    setError("department", "Please select a department.");
    isValid = false;
  }

  if (!genderValue) {
    setError("gender", "Please select a gender.");
    isValid = false;
  }

  const words = countWords(commentsValue);
  if (words < 10) {
    setError("comments", "Feedback Comments should have at least 10 words.");
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valid = validateForm();
  if (valid) {
    resultMessage.textContent = "Form submitted successfully.";
    resultMessage.className = "result-message result-success";
  } else {
    resultMessage.textContent = "Please fix the errors before submitting.";
    resultMessage.className = "result-message result-failure";
  }
});

form.addEventListener("reset", () => {
  clearErrors();
  resultMessage.textContent = "Form has been reset.";
  resultMessage.className = "result-message";
});
