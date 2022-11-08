////////
//
// tag button selected
//
////////

// //when tag is clicked, change which tag is active
// $('.tag').click(function() {
//     $('.tag').each(function() {
//         $(this).removeClass('active')
//     });

//     $(this).addClass('active');
// });

// //when tag is selected, show and hide works as necessary
// function tagSelected(tag) {
//     $('.works').each(function() {
//         if ($(this).hasClass(tag)) {
//             $(this).removeClass('hide');
//         } else {
//             $(this).addClass('hide');
//         }
//     });
// }

// //copy email address when click (in case mailto: does not work)
// let emailLink = document.getElementById("email");

// emailLink.addEventListener('click', function(event) {
//     let mail = "bexbuildsfun@gmail.com";
//     navigator.clipboard.writeText(mail);
//     alert(mail + " copied to clipboard.");
// });

// //mobile display
// function displayMobileNavLinks() {
//     let links = document.getElementById("mobile-links");
//     if (links.style.display === "block") {
//         links.style.display = "none";
//     } else {
//         links.style.display = "block";
//     }
// }

// //show/hide sidebar and mobile-nav
// let sidebar = document.getElementById("sidebar");
// let mobileNav = document.getElementsByClassName("mobile-nav")[0];
// let main = document.getElementById("main");
// let worksGrid = document.getElementById("works");
// let worksItems = document.getElementsByClassName("works");
  
// function showMobileDisplay() {    
//     sidebar.style.display = "none";
//     mobileNav.style.display = "block";

//     //redo grid
//     main.style.marginLeft = "0";
//     worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(35vw, 1fr))";

//     //flex wrap works
//     for(let i = 0; i < worksItems.length; i++) {
//         worksItems[i].style.flexWrap = "wrap";
//         worksItems[i].getElementsByTagName("p")[0].style.flexBasis = "100%";
//     }
// }

// function showDesktopDisplay() {    
//     sidebar.style.display = "flex";
//     mobileNav.style.display = "none";

//     //redo grid
//     main.style.marginLeft = "20%";
//     worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(25vw, 1fr))";

//     //flex nowrap works
//     for(let i = 0; i < worksItems.length; i++) {
//         worksItems[i].style.flexWrap = "nowrap";
//         worksItems[i].getElementsByTagName("p")[0].style.flexBasis = "auto";
//     }
// }

// //check for window resize to either show mobile nav or sidebar
// window.onresize = windowResizeCheck;
// document.addEventListener('DOMContentLoaded', (event) => {
//     windowResizeCheck();
// });

// function windowResizeCheck() {
//   if((window.innerWidth <= 800 ) || ( window.innerHeight <= 600 )) {
//     //show mobile display
//     showMobileDisplay();
//   } else {
//     showDesktopDisplay();
//   }
// }


////////
//
// below is for opening work popups
//
////////

let worksInfo={"works":[
    {"title": "Octo Hugs", "subtitle": "A huggable plush toy", "keywords":["toy", "hardware", "IoT"], "role": "Lead Designer", "Team": null, "Skills":["Research", "Interaction Design", "User Research", "User Testing", "Prototyping", "UX/UI","Fabrication"], "Tools":["Embedded Controller (Arduino)", "C/C++", "Adobe Illustrator", "Figma"], "Timeline":"7 months", "Short Description": "Octo-hugs is a customizable, huggable plush toy created for children ages 5-8 years old with developmental disabilities to support them in times when they need a soothing hug, something soft to touch, or relaxing sounds to hear. When Octo-hugs is hugged the toy will play ocean sounds, light up, and vibrate lightly to soothe the child. The toy is accompanied by an online site for parents to customize Octo-hugs with their child.", "Featured at":[{"Place":"Instructables.com", "URL": "https://www.instructables.com/Octo-hugs-a-Huggable-Octopus-Plush-Toy/","Date":"December 2019"}, {"Place":"HINDSIGHT Exhibition", "URL":null, "Date": "May 2020"}, {"Place":"HINDSIGHT Publication", "URL":null, "Date": "May 2020"}]}
    ]};

    openOverlay("Octo Hugs");

function openOverlay(title) {
    console.log("open overlay! "+title);
}
