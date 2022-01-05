import { MinutesToTimer, SecondsToTimer } from '../../../common/utils/Time';
import style from './clock.module.scss';

interface ClockProps {
  timer: number | undefined;
}

function Clock({ timer = 0 }: ClockProps) {
  const [minutesDezena, minutesUnidade] = MinutesToTimer(timer);
  const [secondsDezena, secondsUnidade] = SecondsToTimer(timer);

  return (
    <>
      <span className={style.relogioNumero}>{minutesDezena}</span>
      <span className={style.relogioNumero}>{minutesUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDezena}</span>
      <span className={style.relogioNumero}>{secondsUnidade}</span>
    </>
  );
}

export { Clock };