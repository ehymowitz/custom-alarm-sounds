import CustomAlarmSoundsModule from "./CustomAlarmSoundsModule";

export function setAlarm(
  hour: number,
  minute: number,
  artist: string,
  uri: string
): void {
  return CustomAlarmSoundsModule.setAlarm(hour, minute, artist, uri);
}
