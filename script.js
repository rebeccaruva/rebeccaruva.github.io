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
  
function showMobileDisplay() {    
    sidebar.style.display = "none";
    mobileNav.style.display = "block";

    //redo grid
    main.style.marginLeft = "0";
}

function showDesktopDisplay() {    
    sidebar.style.display = "flex";
    mobileNav.style.display = "none";

    //redo grid
    main.style.marginLeft = "20%";
}

//check for window resize to either show mobile nav or sidebar
window.onresize = windowResizeCheck;
document.addEventListener('DOMContentLoaded', (event) => {
    windowResizeCheck();
});

function windowResizeCheck() {
    if(isMobile.any()) {
        //show mobile display
        showMobileDisplay();
    } else {
        if((window.innerWidth <= 800 ) || ( window.innerHeight <= 600 )) {
            //show mobile display
            showMobileDisplay();
        } else {
            showDesktopDisplay();
        }
    }
}

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
    
};