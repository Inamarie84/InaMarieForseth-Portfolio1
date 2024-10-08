document.addEventListener("DOMContentLoaded", function () {
  const projectDetailsElement = document.getElementById("project-details");

  // Get query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get("project");

  // Define project details
  const projects = {
    project1: {
      title: "Community Science Museum",
      description: "Details about the Community Science Museum project...",
      image: "/images/project1.png",
    },
    project2: {
      title: "Rainy Days",
      description: "Details about the Rainy Days project...",
      image: "/images/project2.png",
    },
    project3: {
      title: "Run The World",
      description: "Details about the Run The World project...",
      image: "/images/project3.png",
    },
  };

  // Load project details
  if (projects[project]) {
    const { title, description, image } = projects[project];
    projectDetailsElement.innerHTML = `
          <div class="project-details">
              <h1 class="project-title">${title}</h1>
              <img class="project-image" src="${image}" alt="${title} screenshot">
              <p class="project-description">${description}</p>
              <button class="go-back-button" onclick="window.history.back()">Go Back</button>
          </div>
      `;
  } else {
    projectDetailsElement.innerHTML = `<p class="error-message">Project not found.</p>`;
  }
});
