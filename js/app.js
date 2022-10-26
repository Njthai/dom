document.addEventListener("DOMContentLoaded", () => {
    let icon = document.querySelector(".fa-solid");
    let header = document.querySelector("h1");
    icon.addEventListener("click", () => {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");
      document.body.classList.toggle("tour");
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("spin");
      header.classList.toggle("smack");
      if (header.textContent == "Good Morning!") {
        //   if (header.textContent.includes("Good Morning!")) {
        header.textContent = "Good Night!";
        console.log(header.textContent);
      } else {
        header.textContent = "Good Morning!";
      }
      const brackground = document.getElementById("brackground");
    const getRandomNumber = (limit) => {
        return Math.floor(Math.random() * limit);
    };
    const getRandomColor = () => {
        const h = getRandomNumber(360);
        const s = getRandomNumber(100);
        const l = getRandomNumber(100);

        return `hsl(${h}deg, ${s}%, ${l}%)`;
    };
    const setBrackgroundtColor = () => {
        const randomColor = getRandomColor();
        div.style.brackgroundColor = randomColor;
        div.style.color = randomColor;
    };
    setBrackgroundColor();
    setInterval(() => {
        setBrackgroundColor();
    }, 1500);
    });
  });