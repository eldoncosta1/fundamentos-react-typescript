import { Task } from '../../types/Task';

import style from './listitem.module.scss';

interface ListItemProps extends Task {
  selectedTask: (selectedTask: Task) => void;
}

function ListItem({
  name,
  time,
  selected,
  finished,
  id,
  selectedTask
}: ListItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${finished ? style.itemCompletado : ''}`}
      onClick={() => !finished && selectedTask({
        id,
        name,
        time,
        selected,
        finished
      })}>
      <h3>{name}</h3>
      <span>{time}</span>
      {finished && <span className={style.concluido} aria-label="task-finished"></span>}
    </li>
  );
}

export { ListItem };