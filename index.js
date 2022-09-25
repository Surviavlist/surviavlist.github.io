const projects = document.getElementById('projects').getElementsByClassName('project')

for (project of projects) {
  
  project.onclick = () => {
    location.href = project.getAttribute('link')
  }
  
  project.style.background = `linear-gradient(to right, #${ Math.floor(Math.random()*16777215).toString(16) } 5%, white 5%)`
}
