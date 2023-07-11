const toRupiah = (number) => {
  const convert = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR"
  }).format(number)
  return `Rp ${convert}`
}

const convertDate = (dateddmmyyy) => {
  var date = new Date(dateddmmyyy);
  return (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) +
    '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) +
    '/' + date.getFullYear());
}

export { toRupiah, convertDate };