const splitSkills = () => {
  let skills = document.getElementById("skillsId");
  skills.innerHTML = skills.innerHTML.split(",").join(" • ");
}

const onload = () => {
  splitSkills();
}
