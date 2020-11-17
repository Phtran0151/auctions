let elm = document.getElementById('price_decimal')
let num = elm.textContent || elm.innerText
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
elm.innerText = numberWithCommas(num)