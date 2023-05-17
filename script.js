const path = document.querySelector("#path");
const pathLength = path.getTotalLength();
console.log(pathLength);
path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = scrollTop/(scrollHeight-clientHeight);
    path.style.strokeDashoffset = pathLength * (1-scrollPercentage);
}
window.addEventListener("scroll", scrollHandler);