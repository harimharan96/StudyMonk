// home page

// candidates

const candidates = [
  {
    name: "Hariharan M",
    location: "Bengaluru",
    jobRole: "Frontend",
    skillSets: "ReactJS",
  },
  {
    name: "Rajesh",
    location: "Delhi",
    jobRole: "Backend",
    skillSets: "NodeJS",
  },
  {
    name: "Krishna",
    location: "Mumbai",
    jobRole: "Frontend",
    skillSets: "ReactJS",
  },
  {
    name: "Sandhya",
    location: "Chennai",
    jobRole: "Fullstack",
    skillSets: "MERN",
  },
  {
    name: "Ganesh",
    location: "Mumbai",
    jobRole: "Devops",
    skillSets: "Kubernetes",
  },
  {
    name: "Kiran",
    location: "Chennai",
    jobRole: "Frontend",
    skillSets: "ReactJS",
  },
  {
    name: "Sandhya",
    location: "Chennai",
    jobRole: "Fullstack",
    skillSets: "MERN",
  },
  {
    name: "Ganesh",
    location: "Mumbai",
    jobRole: "Devops",
    skillSets: "Kubernetes",
  },
  {
    name: "Kiran",
    location: "Chennai",
    jobRole: "Frontend",
    skillSets: "ReactJS",
  },
];

let filteredCandidates = [];

const userListTemplate = document.querySelector("[data-user-template]");
const userListContainer = document.querySelector("[data-user-list-container]");
const filterInputLocation = document.querySelector("[data-filter-location]");
const filterInputJobRole = document.querySelector("[data-filter-job-role]");

filterInputLocation.addEventListener("change", (e) => {
  const value = e.target.value.toLowerCase();
  filteredCandidates.forEach((candidate) => {
    const isVisible = candidate.location.toLowerCase().includes(value);
    candidate.element.classList.toggle("hide", !isVisible);
  });
});
filterInputJobRole.addEventListener("change", (e) => {
  const value = e.target.value.toLowerCase();
  filteredCandidates.forEach((candidate) => {
    const isVisible = candidate.jobRole.toLowerCase().includes(value);
    candidate.element.classList.toggle("hide", !isVisible);
  });
});

filteredCandidates = candidates.map((candidate) => {
  const list = userListTemplate.content.cloneNode(true).children[0];
  const name = list.querySelector("[data-name]");
  const location = list.querySelector("[data-location]");
  const jobRole = list.querySelector("[data-job-role]");
  const skillSets = list.querySelector("[data-skill-sets]");
  name.textContent = candidate.name;
  location.textContent = candidate.location;
  jobRole.textContent = candidate.jobRole;
  skillSets.textContent = candidate.skillSets;
  userListContainer.append(list);
  return {
    name: candidate.name,
    location: candidate.location,
    jobRole: candidate.jobRole,
    skillSets: candidate.skillSets,
    element: list,
  };
});
