function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(document.getElementById("surveyForm"));
  const dataObj = Object.fromEntries(formData.entries());
  console.log(dataObj); // See everyone's combined contributions
}
