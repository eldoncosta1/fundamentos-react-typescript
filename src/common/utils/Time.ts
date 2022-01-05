export function TimeToSeconds(timer: string) {
  const [hours = '0', minutes = '0', seconds = '0']
    = timer.split(':');

  const hoursInSeconds = Number(hours) * 3600;
  const minutesInSeconds = Number(minutes) * 60;

  return hoursInSeconds + minutesInSeconds + Number(seconds);
}

export function MinutesToTimer(timer: number) {
  const minutes = Math.floor(timer / 60);

  const [minutesDezena, minutesUnidade] = String(minutes).padStart(2, '0');

  return [minutesDezena, minutesUnidade];
}

export function SecondsToTimer(timer: number) {
  const seconds = timer % 60;

  const [secondsDezena, secondsUnidade] = String(seconds).padStart(2, '0');

  return [secondsDezena, secondsUnidade];
}