// typing animation

const text = "Front-End Developer";
let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 100);

    }

}

typing();


// dark mode

document.getElementById("themeBtn").onclick = () => {

    document.body.classList.toggle("dark");

};


// cursor glow

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {

    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

});


// scroll progress

window.onscroll = () => {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress").style.width = scrolled + "%";

};


// back to top

document.getElementById("topBtn").onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};