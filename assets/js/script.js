let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value")

let progressStartValue = 0,
    progressEndValue = 82,
    speed = 50;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#fecc77 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress)
    }
    console.log(progressStartValue)

}, speed)
