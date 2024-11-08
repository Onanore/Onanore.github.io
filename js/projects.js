const projects = document.querySelectorAll(".project")

projects.forEach((project) => {
    project.addEventListener("click", () => {
        project.classList.toggle("active")
    })
})