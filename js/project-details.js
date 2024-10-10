document.addEventListener("DOMContentLoaded", function () {
  const projectDetailsElement = document.getElementById("project-details");
  const loadingIndicator = document.querySelector(".loading-indicator");

  if (!projectDetailsElement) {
    console.warn(
      'Element with ID "project-details" not found. Skipping project details script.'
    );
    return;
  }

  document.body.classList.add("loading");

  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get("project");

  const projects = {
    project1: {
      title: "Community Science Museum",
      description:
        "This is my Semester Project 1 assignment @ Noroff - School of technology and digital media. I created a website for an interactive science museum. The museum is called the Community Science Museum, and the target audience are children aged, 7-15 as well as families with children.",
      image: "/images/project1.png",
      tools: "HTML, CSS",
      links: {
        Netlify: "https://semesterproject1-inaforseth-1711.netlify.app/",
        GitHub:
          "https://github.com/Inamarie84/Semester-Project-1---Ina-Forseth",
      },
    },
    project2: {
      title: "Rainy Days",
      description:
        "This is my JavaScript 1 course assignement @ Noroff - School of technology and digital media. This is a website selling rain jackets using an external API. On the Rainy Days website you can view products, add to cart and checkout.",
      image: "/images/project2.png",
      tools: "Noroff external API, HTML, CSS, JavaScript",
      links: {
        Netlify: "https://cross-course-inamarie84.netlify.app/",
        GitHub:
          "https://github.com/Inamarie84/Semester-Project-1---Ina-Forseth",
      },
    },
    project3: {
      title: "Run The World",
      description:
        "This is my Project Exam 1 assignment @Noroff - School of technology and digital media. The blog is called Run The World and it is about Runcations - Running and Vacationing combined. The content is stored on a WordPress installation used as a Headless CMS. The blog is built using HTML, CSS and Javascript, and a call was made to the WordPress REST API to fetch the blog content.",
      image: "/images/project3.png",
      tools: "API from a WordPress installation, HTML, CSS and Javascript",
      links: {
        Netlify: "https://runtheworld-project-exam-1-ina.netlify.app/",
        GitHub: "https://github.com/Inamarie84/project-exam-1-inamarieforseth",
      },
    },
  };

  if (projects[project]) {
    const { title, description, image, tools, links } = projects[project];

    // Update the document title
    document.title = `Portfolio | ${title}`;

    const linksHtml = Object.entries(links)
      .map(
        ([key, value]) =>
          `<a href="${value}" target="_blank" class="button">${key}</a>`
      )
      .join(" ");

    projectDetailsElement.innerHTML = `
      <div class="project-details">
        <h1 class="project-title">${title}</h1>
        <img class="project-image" src="${image}" alt="${title} screenshot">
        <p class="project-description">${description}</p>
        <p class="project-tools"><strong>Tools:</strong> ${tools}</p>
        <div class="project-links"><strong>Links:</strong> ${linksHtml}</div>
        <button class="go-back-button" onclick="window.history.back()">Go Back</button>
      </div>
    `;
  } else {
    projectDetailsElement.innerHTML = `<p class="error-message">Project not found.</p>`;
  }

  document.body.classList.remove("loading");
});
