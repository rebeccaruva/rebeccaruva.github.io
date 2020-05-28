////////
//
// tag button selected
//
////////

$('.tag').click(function() {
    $('.tag').each(function() {
        $(this).removeClass('active')
    });

    $(this).addClass('active');
});

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
// create larger boxes
//
////////

// var ctc = document.getElementById("ctc"); // work 0
// var oh = document.getElementById("oh"); // work 1
// var bools = [false, false];

// function workOpenClose(title) {
//     if (title == "ctc") {
//         if (bools[0]) {
//             ctc.innerHTML = "<h3>Cheddar the Cat</h3> <p>Cheddar the Cat is a virtual pet chrome extension.</p>";
//             bools[0] = false;
//         } else {
//             ctc.innerHTML = "<h3>Cheddar the Cat</h3> <p>Cheddar the Cat is a virtual pet chrome extension. Cheddar will sleep on your screen most of the time, but may also ask for water or pets. Cheddar will also love watching videos with you.</p>";
//             bools[0] = true;
//         }
//     }

//     if (title == "oh") {
//         if (bools[1]) {
//             oh.innerHTML = "<h3>Octo-hugs</h3> <p>Octo-hugs is a huggable plush toy created for children ages 5-8 with developmental disabilities.</p>";
//             bools[1] = false;
//         } else {
//             oh.innerHTML = "<h3>Octo-hugs</h3> <p>Octo-hugs is a huggable plush toy created for children ages 5-8 with developmental disabilities meant to support them in time of frustration. Exhibited online within Parsons Design and Technology's Hindsight Exhibition.</p>";
//             bools[1] = true;
//         }
//     }
// }

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

////////
//
// below is for nav change if all one page
//
////////

// var works = document.getElementById("works-link"),
// exhibit = document.getElementById("exhibit-link"),
// about = document.getElementById("about-link"),
// home = document.getElementById("home-link");

// works.addEventListener('mousedown', function() {
//     if(!works.classList.contains("active")) {
//       works.classList.add("active");
//       exhibit.classList.remove("active");
//       about.classList.remove("active");
//       home.classList.remove("active");
//     }
// });

// exhibit.addEventListener('mousedown', function() {
//     if(!exhibit.classList.contains("active")) {
//         exhibit.classList.add("active");
//         works.classList.remove("active");
//         about.classList.remove("active");
//         home.classList.remove("active");
//       }
// });

// about.addEventListener('mousedown', function() {
//     if(!about.classList.contains("active")) {
//         about.classList.add("active");
//         exhibit.classList.remove("active");
//         works.classList.remove("active");
//         home.classList.remove("active");
//       }
// });

// home.addEventListener('mousedown', function() {
//     if(!home.classList.contains("active")) {
//         home.classList.add("active");
//         exhibit.classList.remove("active");
//         about.classList.remove("active");
//         works.classList.remove("active");
//       }
// });