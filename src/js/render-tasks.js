import { refs } from './refs';

export function renderTaskList(tasks) {
  const markup = tasks
    .map(
      ({ name, description, id }) => `
    <li class="task-list-item">
    <button class="task-list-item-btn" data-id="${id}">Delete</button>
    <h3>${name}</h3>
    <p>${description}</p>
    </li>;`
    )
    .join('');
  refs.taskList.innerHTML = markup;
}
