import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Button } from '../Buton';

import style from './form.module.scss';

import { Task } from '../../types/Task';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Form({ setTasks }: FormProps) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          name,
          time,
          selected: false,
          finished: false,
          id: uuid()
        }
      ]
    );
    setName('');
    setTime('00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleAddTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={name}
          onChange={
            (event) => setName(event.target.value)
          }
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          value={time}
          onChange={
            (event) => setTime(event.target.value)
          }
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export { Form };