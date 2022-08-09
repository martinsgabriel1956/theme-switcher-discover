const checkbox = document.querySelector("input[type=checkbox]");
const body = document.body;

function handleChangeTheme() {
  handleToggleSwitcher();
  
  if (this.checked) {
    body.classList.add("dark");
    localStorage.setItem("@theme", "dark");
  } else {
    body.classList.add("light");
    localStorage.setItem("@theme", "light");
  }
}

getStoragedTheme();


function handleToggleSwitcher() {
  if(body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
  } else {
    body.classList.replace("light", "dark");
  }
}

function getStoragedTheme() {
  const myTheme = localStorage.getItem("@theme");
  
  if(myTheme === "dark") {
    checkbox.checked = true;
    body.classList.add("dark");
  } else {
    checkbox.checked = false;
    body.classList.add("light");
  }
}

checkbox.addEventListener("change", handleChangeTheme);
