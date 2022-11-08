////////
//
// tag button selected
//
////////

//when tag is clicked, change which tag is active
$('.tag').click(function() {
    $('.tag').each(function() {
        $(this).removeClass('active')
    });

    $(this).addClass('active');
});

//when tag is selected, show and hide works as necessary
function tagSelected(tag) {
    $('.works').each(function() {
        if ($(this).hasClass(tag)) {
            $(this).removeClass('hide');
        } else {
            $(this).addClass('hide');
        }
    });
}

//copy email address when click (in case mailto: does not work)
let emailLink = document.getElementById("email");

emailLink.addEventListener('click', function(event) {
    let mail = "bexbuildsfun@gmail.com";
    navigator.clipboard.writeText(mail);
    alert(mail + " copied to clipboard.");
});

//mobile display
function displayMobileNavLinks() {
    let links = document.getElementById("mobile-links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

//show/hide sidebar and mobile-nav
let sidebar = document.getElementById("sidebar");
let mobileNav = document.getElementsByClassName("mobile-nav")[0];
let main = document.getElementById("main");
let worksGrid = document.getElementById("works");
  
function showMobileDisplay() {    
    sidebar.style.display = "none";
    mobileNav.style.display = "block";

    main.style.marginLeft = "0";
    worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(35vw, 1fr))";
}

function showDesktopDisplay() {    
    sidebar.style.display = "flex";
    mobileNav.style.display = "none";

    main.style.marginLeft = "20%";
    worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(25vw, 1fr))";
}

//check for window resize to either show mobile nav or sidebar
window.onresize = windowResizeCheck;
document.addEventListener('DOMContentLoaded', (event) => {
    windowResizeCheck()
});

function windowResizeCheck() {
  if((window.innerWidth <= 800 ) || ( window.innerHeight <= 600 )) {
    //show mobile display
    showMobileDisplay();
  } else {
    showDesktopDisplay();
  }
}


////////
//
// below is for opening work popups
//
////////

// var oh = document.getElementById("OctoHugsO");

// function openOctoHugs() {
//     console.log("open overlay!");
//     oh.style.display = "block";
// }

// function closeOctoHugs() {
//     oh.style.display = "none";
// }