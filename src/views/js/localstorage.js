function createstorage() {
  const email = document.getElementById("emailCreate");

  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("email", email.value);
    location.href = "/signup";

    // Retrieve
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
  }
}

const emailCreate = document.getElementById("email");

if (typeof Storage !== "undefined") {
  // Store

  emailCreate.value = localStorage.getItem("email");
  // Retrieve
} else {
  console.log("Sorry, your browser does not support Web Storage...");
}
