let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Secounds = document.getElementById("Secounds");
let Am = document.getElementById("Am");
let Pm = document.getElementById("Pm");
let Day = document.getElementById("Day");
let Month = document.getElementById("Month");
let Year = document.getElementById("Year");
let Monday = document.getElementById("monday");
let Tuesday = document.getElementById("tuesday");
let Wednesday = document.getElementById("wednesday");
let Thursday = document.getElementById("thursday");
let Friday = document.getElementById("friday");
let Saturday = document.getElementById("saturday");
let Sunday = document.getElementById("sunday");

const ShowWatchDetails = () => {
  let NewDate = new Date();
  Hours.innerText = NewDate.getHours() - 12;
  Minutes.innerText = NewDate.getMinutes();
  Secounds.innerText = NewDate.getSeconds();
  Day.innerText = NewDate.getDate();
  Month.innerText = NewDate.getMonth() + 1;
  Year.innerText = NewDate.getFullYear();

  switch (NewDate.getDay()) {
    case 0:
      Sunday.style.opacity = "1";
      Sunday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 1:
      Monday.style.opacity = "1";
      Monday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 2:
      Tuesday.style.opacity = "1";
      Tuesday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 3:
      Wednesday.style.opacity = "1";
      Wednesday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 4:
      Thursday.style.opacity = "1";
      Thursday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 5:
      Friday.style.opacity = "1";
      Friday.style.animation = "maintext 3s infinite ease-in-out";
      break;
    case 6:
      Saturday.style.opacity = "1";
      Saturday.style.animation = "maintext 3s infinite ease-in-out";
      break;
  }
  if (NewDate.getHours() >= 12) {
    Pm.style.opacity = "1";
    Pm.style.animation = "maintext 3s infinite ease-in-out";
  } else {
    Am.style.opacity = "1";
    Am.style.animation = "maintext 3s infinite ease-in-out";
  }
};

setInterval(ShowWatchDetails, 1000);
