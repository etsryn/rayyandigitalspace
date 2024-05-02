window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i<reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            // reveals[i].classList.remove('active'); // Enable if want to remove elements on up-scroll
        }
    }
}

// ENDS HERE


var toggle_count = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_count%2==0) {
            toggle_count++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#fff";
            document.getElementById("logo").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_2").style.color = "#7E22CE";
            document.getElementById("color_change_item_3").style.color = "#000";
            document.getElementById("color_change_item_4").style.color = "#000";
            document.getElementById("color_change_item_5").style.color = "#000";
            document.getElementById("color_change_item_6").style.color = "#000";
            document.getElementById("color_change_item_7").style.color = "#000";
            document.getElementById("color_change_item_8").style.color = "#000";
            document.getElementById("color_change_item_9").style.color = "#000";
            document.getElementById("svgIcon").style.color = "#9333EA";
            document.getElementById("separator_line").style.backgroundColor = "#9CA3AF";
            document.getElementById("color_change_item_10").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.color = "#000";
            document.getElementById("color_change_item_11").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.color = "#000";
            document.getElementById("color_change_item_14").style.backgroundColor = "#F3F4F6";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#F3F4F6";
            document.getElementById("color_change_item_14").style.color = "#3E4856";
            document.getElementById("recommendation_card_second_child").style.color = "#3E4856";
            document.getElementById("color_change_item_15").style.color = "#000";
            document.getElementById("color_change_item_16").style.color = "#000";
        } else {
            toggle_count++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#1F2937";
            document.getElementById("logo").style.backgroundColor = "#1F2937";
            document.getElementById("color_change_item_2").style.color = "#D8B4FE";
            document.getElementById("color_change_item_3").style.color = "#fff";
            document.getElementById("color_change_item_4").style.color = "#fff";
            document.getElementById("color_change_item_5").style.color = "#fff";
            document.getElementById("color_change_item_6").style.color = "#fff";
            document.getElementById("color_change_item_7").style.color = "#fff";
            document.getElementById("color_change_item_8").style.color = "#fff";
            document.getElementById("color_change_item_9").style.color = "#fff";
            document.getElementById("svgIcon").style.color = "#fff";
            document.getElementById("separator_line").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_10").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.color = "#9CA3AF";
            document.getElementById("color_change_item_11").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.color = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#374151";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#374151";
            document.getElementById("color_change_item_14").style.color = "#9CA3AF";
            document.getElementById("recommendation_card_second_child").style.color = "#9CA3AF";
            document.getElementById("color_change_item_15").style.color = "#fff";
            document.getElementById("color_change_item_16").style.color = "#fff";

        }
    });
});

// ENDS HERE


var toggle_count = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon_").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_count%2==0) {
            toggle_count++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#fff";
            document.getElementById("logo").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_2").style.color = "#7E22CE";
            document.getElementById("color_change_item_3").style.color = "#000";
            document.getElementById("color_change_item_4").style.color = "#000";
            document.getElementById("color_change_item_5").style.color = "#000";
            document.getElementById("color_change_item_6").style.color = "#000";
            document.getElementById("color_change_item_7").style.color = "#000";
            document.getElementById("color_change_item_8").style.color = "#000";
            document.getElementById("color_change_item_9").style.color = "#000";
            document.getElementById("svgIcon").style.color = "#9333EA";
            document.getElementById("separator_line").style.backgroundColor = "#9CA3AF";
            document.getElementById("color_change_item_10").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.color = "#000";
            document.getElementById("color_change_item_11").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.color = "#000";
            document.getElementById("color_change_item_14").style.backgroundColor = "#F3F4F6";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#F3F4F6";
            document.getElementById("color_change_item_14").style.color = "#3E4856";
            document.getElementById("recommendation_card_second_child").style.color = "#3E4856";
            document.getElementById("color_change_item_15").style.color = "#000";
            document.getElementById("color_change_item_16").style.color = "#000";
        } else {
            toggle_count++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#1F2937";
            document.getElementById("logo").style.backgroundColor = "#1F2937";
            document.getElementById("color_change_item_2").style.color = "#D8B4FE";
            document.getElementById("color_change_item_3").style.color = "#fff";
            document.getElementById("color_change_item_4").style.color = "#fff";
            document.getElementById("color_change_item_5").style.color = "#fff";
            document.getElementById("color_change_item_6").style.color = "#fff";
            document.getElementById("color_change_item_7").style.color = "#fff";
            document.getElementById("color_change_item_8").style.color = "#fff";
            document.getElementById("color_change_item_9").style.color = "#fff";
            document.getElementById("svgIcon").style.color = "#fff";
            document.getElementById("separator_line").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_10").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.color = "#9CA3AF";
            document.getElementById("color_change_item_11").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.color = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#374151";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#374151";
            document.getElementById("color_change_item_14").style.color = "#9CA3AF";
            document.getElementById("recommendation_card_second_child").style.color = "#9CA3AF";
            document.getElementById("color_change_item_15").style.color = "#fff";
            document.getElementById("color_change_item_16").style.color = "#fff";

        }
    });
});


var toggle_dropdown_menu = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menu_3_icon").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_dropdown_menu%2==0) {
            toggle_dropdown_menu++;
            document.getElementById("nav_options").style.display = "flex";
        } else {
            toggle_dropdown_menu++;
            document.getElementById("nav_options").style.display = "none";
        }
    });
});

// ENDS HERE

// IF USER ON PC, REDUCED THE SCREEN WIDTH, THEN OF COURSE THE MENU ICON WILL GET VISIBLE, NOW IF USER TAPS IT SO NOW THE DROPDOWN APPEARS, AND NOW IF HE RESIZES THE SCREEEN TO AGAIN LARGER WIDTH THAN 700 PIXELS, THE DROPDOWN WILL STILL BE VISIBLE, SO THE FOLLOWING BETHOD WILL DISAPPPEAR THE DROPDOWN WHEN SCREEN-WIDTH EXCEEDS 700 PIXELS

// Function to handle screen resize
function handleResize() {
    // Get the current width of the screen
    const screenWidth = window.innerWidth;

    // Check if the screen width is at a defined pixel value
    if (screenWidth > 700) {
        // Do something when the screen width is 800px
        document.getElementById("nav_options").style.display = "none";
    } else {
        // Do something else when the screen width is not 800px

    }
}

// Listen for the resize event on the window object
window.addEventListener('resize', handleResize);

// Initial call to handleResize to handle screen size on page load
handleResize();

// ENDS HERE