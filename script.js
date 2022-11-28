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

openOverlay("Octo Hugs");

function openOverlay(title) {
    for(let work of worksInfo){
        if(work.title == title) {
            //title
            document.getElementById("work-title").innerHTML = work.title;
            //keywords
            for (let kw of work.keywords){
                let keywordSpan = document.createElement("SPAN");
                keywordSpan.innerHTML = kw;
                document.getElementById("work-keywords").appendChild(keywordSpan); //work.keywords.join(", ");
            }
            //main image
            document.getElementById("work-mainImage").src = work.mainImage;
            //role
            document.getElementById("work-role").innerHTML = work.role;
            //team
            if(work.team == null) {
                document.getElementById("work-team").parentNode.style.display = "none";
            } else {
                document.getElementById("work-team").innerHTML = work.team.join("<br>");
            }
            //timeline
            if(work.timeline == null) {
                document.getElementById("work-timeline").parentNode.style.display = "none";
            } else {
                document.getElementById("work-timeline").innerHTML = work.timeline;
            }
            //skills
            document.getElementById("work-skills").innerHTML = work.skills.join(", ");
            //tools
            document.getElementById("work-tools").innerHTML = work.tools.join(", ");
            //short description
            document.getElementById("work-shortDesc").innerHTML = work.shortDesc;
            //featured
            if(work.featured == null) {
                document.getElementById("work-featured").style.display = "none";
            } else {
                // let featureSpan = document.createElement("SPAN");
                // featureSpan.innerHTML = "Featured on"+work.featured.place;
                // document.getElementById("work-featured").appendChild(featureSpan);
                for(let f of work.featured) {
                    console.log("Featured on "+f.Place);
                }
            }
        }
    }
}
