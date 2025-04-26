import dayjs from './esm/index.js'

export function getDayjs(dt) {
  return dayjs(dt ? dt : new Date());
}
