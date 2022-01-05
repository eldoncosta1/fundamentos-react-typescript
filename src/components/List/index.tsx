
import { Task } from '../../types/Task';
import { ListItem } from '../ListItem';

import style from './list.module.scss';

interface ListProps {
  tasks: Task[];
  selectedTask: (selectedTask: Task) => void;
}

function List({ tasks, selectedTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            {...task}
            selectedTask={selectedTask}
          />
        ))}
      </ul>
    </aside>
  );
}

export { List };