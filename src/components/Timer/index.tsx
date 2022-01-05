import { useEffect, useState } from "react";
import { Button } from "../Buton";
import { Clock } from "./Clock";

import { TimeToSeconds } from "../../common/utils/Time";

import { Task } from "../../types/Task";

import style from './timer.module.scss';

interface TimerProps {
  selected: Task | undefined;
  finishedTask: () => void;
}

function Timer({ selected, finishedTask }: TimerProps) {
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTimer(TimeToSeconds(selected.time));
    }
  }, [selected]);

  function handleCounter(timer: number = 0) {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        return handleCounter(timer - 1);
      }
      finishedTask();

    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock timer={timer} />
      </div>
      <Button onClick={() => handleCounter(timer)}>
        Começar!
      </Button>
    </div>
  )
}

export { Timer };