import { nanoid } from 'nanoid';
import localStorageApi from './local-storage-api';
import { renderTaskList } from './render-tasks';

export function onTaskFromSubmit(evt) {
  evt.preventDefault();
  const { taskName, taskDescription } = evt.target.elements;
  const name = taskName.value.trim();
  const description = taskDescription.value.trim();

  if (!name || !description) return alert('Fields are empty');
  const task = {
    name,
    description,
    id: nanoid(),
  };

  console.log(task);

  localStorageApi.saveTask(task);
  renderTaskList(localStorageApi.getTasks());
  evt.target.reset();
}
