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
let worksItems = document.getElementsByClassName("works");
  
function showMobileDisplay() {    
    sidebar.style.display = "none";
    mobileNav.style.display = "block";

    //redo grid
    main.style.marginLeft = "0";
    worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(35vw, 1fr))";

    //flex wrap works
    for(let i = 0; i < worksItems.length; i++) {
        worksItems[i].style.flexWrap = "wrap";
        worksItems[i].getElementsByTagName("p")[0].style.flexBasis = "100%";
    }
}

function showDesktopDisplay() {    
    sidebar.style.display = "flex";
    mobileNav.style.display = "none";

    //redo grid
    main.style.marginLeft = "20%";
    worksGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(25vw, 1fr))";

    //flex nowrap works
    for(let i = 0; i < worksItems.length; i++) {
        worksItems[i].style.flexWrap = "nowrap";
        worksItems[i].getElementsByTagName("p")[0].style.flexBasis = "auto";
    }
}

//check for window resize to either show mobile nav or sidebar
window.onresize = windowResizeCheck;
document.addEventListener('DOMContentLoaded', (event) => {
    windowResizeCheck();
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

////////
//
// below is for opening work popups
//
////////

let worksDivs = document.getElementById("works").getElementsByTagName("div");
for (let elem of worksDivs) {
    elem.addEventListener('click', function (e) {
        let h3 = elem.getElementsByTagName("h3")[0].innerText;
        openOverlay(h3)
    });
}

//overlay slideshow var
let slideIndex = 1;

function openOverlay(title) {
    for(let work of worksInfo){
        if(work.title == title) {
            //title
            document.getElementById("work-title").innerHTML = work.title;
            //subtitle
            document.getElementById("work-subtitle").innerHTML = work.subtitle;
            //keywords/tags
            document.getElementById("work-tags").innerHTML = "";
            for (let kw of work.keywords){
                let keywordSpan = document.createElement("SPAN");
                keywordSpan.innerHTML = kw;
                document.getElementById("work-tags").appendChild(keywordSpan); //work.keywords.join(", ");
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
            //images slideshow
            document.getElementById("work-slideshow").innerHTML="";
            if(work.images!=null) {
                for (let img of work.images) {
                    let slideImage = document.createElement("img");
                    slideImage.src = img;
                    slideImage.className="imgSlides";
                    document.getElementById("work-slideshow").appendChild(slideImage);
                }

                let leftArrow = document.createElement('button');
                leftArrow.innerText = "<";
                leftArrow.id = "leftArrow";
                leftArrow.addEventListener('click', function(e) {
                    plusDivs(-1);
                });
                let rightArrow = document.createElement('button');
                rightArrow.innerText = ">";
                rightArrow.id = "rightArrow";
                rightArrow.addEventListener('click', function(e) {
                    plusDivs(1);
                });
                document.getElementById("work-slideshow").appendChild(leftArrow);
                document.getElementById("work-slideshow").appendChild(rightArrow);

                slideIndex=1;
                showDivs(slideIndex);
            }
            
            //featured
            if(work.featured == null) {
                document.getElementById("work-featured").style.display = "none";
            } else {
                document.getElementById("work-featured").innerHTML = "";
                for(let f of work.featured) {
                    let featureSpan = document.createElement("SPAN");
                    featureSpan.innerHTML = "Featured on ";
                    if(f.URL != null) {
                        let featureHREF = document.createElement("a");
                        featureHREF.href = f.URL;
                        featureHREF.innerText = f.place;
                        featureHREF.target="_blank";
                        featureSpan.appendChild(featureHREF);
                    } else {
                        featureSpan.innerHTML+=f.date;
                    }
                    featureSpan.innerHTML+=" in "+f.date;
                    document.getElementById("work-featured").appendChild(featureSpan);
                }
            }

            //disable main pointer events and show overlay
            document.getElementById("body").style.pointerEvents = "none";
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
            document.getElementById("overlayBG").style.display = "block";
            document.getElementsByClassName("overlay")[0].scrollTop = 0;
        }
    }
}

function closeOverlay () {
    //disable overlay and allow all pointer events
    document.getElementById("body").style.pointerEvents = "all";
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    document.getElementById("overlayBG").style.display = "none";
}

function plusDivs(dir) {
  showDivs(slideIndex += dir);
}

function showDivs(dir) {
  let i;
  let imgs = document.getElementsByClassName("imgSlides");
  if (dir > imgs.length) {slideIndex = 1}
  if (dir < 1) {slideIndex = imgs.length} ;
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[slideIndex-1].style.display = "block";
}
