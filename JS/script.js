function appFunctions() {
  youtuberName();
  navSlide();
}
appFunctions();
function youtuberName() {
  const youTubers = document.querySelector("#youtuberName");
  let nameArray = [
    "Jordan Walters",
    "Tomas Webb",
    "Howard Pena",
    "Darren Jones",
    "Sean Santos",
    "Kirk Webster",
    "Adrian Robbins",
  ];
  let profilePicArray = [
    "/Images/Random Human Img/1.jfif",
    "/Images/Random Human Img/2.jfif",
    "/Images/Random Human Img/3.jfif",
    "/Images/Random Human Img/4.jfif",
    "/Images/Random Human Img/5.jfif",
    "/Images/Random Human Img/6.jfif",
    "/Images/Random Human Img/7.jfif",
  ];
  renderImgandName(nameArray, profilePicArray);
  function renderImgandName(nameArray, profilePicArray) {
    let listItems = "";
    for (let i = 0; i < nameArray.length; i++) {
      listItems += `
      <li>
        <div class="youTuberImgDiv">
            <img src="${profilePicArray[i]}" alt="" />
        </div>
        <div class="youTuberNameDiv">
            <h2>${nameArray[i]}</h2>
        </div>
      </li>
    `;
    }
    // For show more option:-
    listItems += `
    <li>
        <a href="#showMore">
        <div class="youTuberImgDiv">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="light-white"
            >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path
                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
            />
            </svg>
        </div>
        <div class="youTuberNameDiv"><h2>Show More</h2></div>
        </a>
    </li>
    `;
    youTubers.innerHTML = listItems;
  }
}

function navSlide() {
  const burger = document.querySelector("#leftNavbarli");
  const navSlideBarClose = document.querySelector(".nav-left-close");
  const navSlideBarOpen = document.querySelector(".nav-left-open");

  burger.addEventListener("click", function () {
    navSlideBarClose.classList.toggle("nav-left-close-display");
    navSlideBarOpen.classList.toggle("nav-left-open-display");
  });
}
