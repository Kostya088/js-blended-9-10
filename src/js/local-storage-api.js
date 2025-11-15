const STORAGE_KEY = 'tasks';

function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function initTasks() {
  const tasks = getTasks() ?? [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export default { getTasks, saveTask, initTasks };
