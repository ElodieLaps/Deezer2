const zeroPad = (nb: number, places: number) => String(nb).padStart(places, '0')

const convertSecondsToHms = (d: number) => {
   d = Number(d);
   var h = Math.floor(d / 3600);
   var m = Math.floor(d % 3600 / 60);
   var s = Math.floor(d % 3600 % 60);

   return `${zeroPad(h, 2)}:${zeroPad(m, 2)}:${zeroPad(s, 2)}`;
}

export default convertSecondsToHms