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