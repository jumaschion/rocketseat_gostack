const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

const getProjectById = id => projects.find(project => project.id === id);

//Local Middleware
function checkIdAlreadyExists(req, res, next) {
  const { id } = req.params;

  const idProject = getProjectById(id);

  if (!idProject) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}

//Local middleware counter

function requestCounter(req, res, next) {
  console.count("Number of requests");

  return next();
}

//Global Middleware
server.use(requestCounter);

//Get all projects

server.get(["/projects", "/"], (req, res) => {
  return res.json(projects);
});

//Creating a project
//OK
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = { id, title, tasks: [] };

  projects.push(project);
  return res.json(project);
});

/**
 * Route params: id
 * Request body: title
 * Creating a task
 */
server.post("/projects/:id/tasks", checkIdAlreadyExists, (req, res) => {
  const { title } = req.body;
  const idProject = getProjectById(id);

  idProject.tasks.push(title);

  return res.json(idProject);
});

/**
 * Route params: id
 * Request body: title
 * Edit ou change the project title according to ID
 */
server.put("/projects/:id", checkIdAlreadyExists, (req, res) => {
  const { title } = req.body;
  const idProject = getProjectById(id);

  idProject.title = title;

  return res.json(idProject.title);
});

server.delete("/projects/:id", checkIdAlreadyExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(project => project.id === id);
  projects.splice(index, 1);
  return res.send();
});

server.listen(3000);
