/*------------- Count dowm times set auction --------------*/

let allDays = []
let allHours = []
let allMinutes = []
let allSeconds = []

function matchTimes() {
  let takeTimesCount = [...$('.times-countdown')].map(div => div.innerHTML)
  let distance = []

  for(i in takeTimesCount) {
    var countDownDate = new Date(new Number(takeTimesCount[i])).getTime();
    // Find the distance between now and the count down date
    var count = countDownDate - new Date().getTime();
    // Time calculations for days, hours, minutes and seconds
    distance.push(count)
    var days = Math.floor(distance[i] / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance[i] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance[i] % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance[i] % (1000 * 60)) / 1000);
    allDays.push(days)
    allHours.push(hours)
    allMinutes.push(minutes)
    allSeconds.push(seconds)
    var result = `${allDays[i]}d ${allHours[i]}h ${allMinutes[i]}m ${allSeconds[i]}s `
  }

  // Update the count down every 1 second
  var x = setInterval(function() {
    for(let j = 0; j < takeTimesCount.length; j++){
      // If the count down is over, write some text
      // $('.times-countdown').map((key, val) => val.text())
      if (distance < 0) {
        clearInterval(x);
        $('.times-countdown').text('EXPIRED').css("color", "#fc2403")
      }
    }
  }, 1000);
}

matchTimes()