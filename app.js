const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("a").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText =event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations +=  1;
    }, 30);
}
