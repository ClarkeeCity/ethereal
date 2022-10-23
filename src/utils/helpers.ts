/* eslint-disable no-param-reassign */
// Small function to convert seconds into a readable time foramt.
// eslint-disable-next-line import/prefer-default-export
export function durationToTime(duration: number | undefined): string {
  if (duration === undefined) return '0:00';
  duration = Math.floor(duration);
  const m = Math.floor(duration / 60);
  const s = duration % 60;

  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
