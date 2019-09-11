const clock = document.querySelector('.clock');



setInterval(()=>{
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  let html = `<span>${hour}</span>:<span>${minute}</span>:<span>${seconds}</span>`
  clock.innerHTML = html;
}, 1000)


