/**
 * Converts a `Date` to a string which can be used with the API.
 * @param date the date to be converted
 * @returns string representation of the date in the form of yyyy-mm-dd
 */
export default function (date = new Date()) {
  return `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(
    date.getDate()
  )}`;
}

function zeroPad(num: number) {
  return ('0' + num).slice(-2);
}
