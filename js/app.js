$("#project-1").click(function() {
    window.open("http://plr108.github.io/ballpark-map/index.html", "_blank");

});

$("#project-2").click(function() {
    window.open("http://plr108.github.io/feed-the-ladybugs/index.html", "_blank");

});

$("#project-3").click(function() {
    window.open("http://plr108.github.io/resume/index.html", "_blank");

});

$("#project-4").click(function() {
    window.open("http://plr108.github.io/web-perf/index.html", "_blank");

});

$("#project-5").click(function() {
    window.open("http://plr108.github.io/mccsings/index.html", "_blank");
});

$("#project-6").click(function() {
    window.open("http://plr108.github.io/jasmine-testing/index.html", "_blank");

});

$(".project").hover(function() {
        $(this).find(".project-title").css("text-decoration", "underline");
        var titleDiv = $(this).find(".project-title");
        $(this).find(".project-description").css("text-decoration", "underline");
        var descriptionDiv = $(this).find(".project-description");

        $(this).find(".project-repo").hover(function() {
            titleDiv.css("text-decoration", "none");
            descriptionDiv.css("text-decoration", "none");
        },
        function() {
            titleDiv.css("text-decoration", "underline");
            descriptionDiv.css("text-decoration", "underline");
        });
    },
    function() {
        $(this).find(".project-title").css("text-decoration", "none");
        $(this).find(".project-description").css("text-decoration", "none");
    });


$(".project-repo").click(function() {
    if ($(this).find("a").length) {
        window.open("https://github.com/plr108/ballpark-map", "_blank");
    }
});
