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