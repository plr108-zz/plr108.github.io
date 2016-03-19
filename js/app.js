var projects = [{

    projectID: 0,
    imgID: "project-image-1",
    icon: "images/project1-icon.png",
    small: "images/project1-small.png",
    medium: "images/project1-medium.png",
    large: "images/project1-large.png"
}, {
    projectID: 1,
    imgID: "project-image-2",
    icon: "images/project2-icon.png",
    small: "images/project2-small.png",
    medium: "images/project2-medium.png",
    large: "images/project2-large.png"
}, {
    projectID: 2,
    imgID: "project-image-3",
    icon: "images/project3-icon.png",
    small: "images/project3-small.png",
    medium: "images/project3-medium.png",
    large: "images/project3-large.png"
}, {
    projectID: 3,
    imgID: "project-image-4",
    icon: "images/project4-icon.png",
    small: "images/project4-small.png",
    medium: "images/project4-medium.png",
    large: "images/project4-large.png"
}, {
    projectID: 4,
    imgID: "project-image-5",
    icon: "images/project5-icon.png",
    small: "images/project5-small.png",
    medium: "images/project5-medium.png",
    large: "images/project5-large.png"
}, {
    projectID: 5,
    imgID: "project-image-6",
    icon: "images/project6-icon.png",
    small: "images/project6-small.png",
    medium: "images/project6-medium.png",
    large: "images/project6-large.png"
}];

var projectView = {

    setProjectImages: function() {
        //var width = $(document).width();
        var smallBreakpoint1 = 400;
        var mediumBreakpoint1 = 500;
        var largeBreakpoint1 = 560;
        var iconBreakpoint = 640;
        var smallBreakpoint2 = 784;
        var mediumBreakpoint2 = 984;
        var largeBreakpoint2 = 1104;
        var imageMode = 0;

        var width = width = Math.max( $(window).width(), window.innerWidth);

        if (width >= 1104) {
            imageMode = 3;
        } else if (width >= 984) {
            imageMode = 2;
        } else if (width >= 784) {
            imageMode = 1;
        } else if (width >= 640) {
            imageMode = 0;
        } else if (width >= 560) {
            imageMode = 3;
        } else if (width >= 500) {
            imageMode = 2;
        } else if (width >= 400) {
            imageMode = 1;
        } else {
            imageMode = 0;
        }

        projectView.setProjectImageSources(imageMode);
    },

    // loop through the project img elements and set the src image
    // mode 0: icon
    // mode 1: small
    // mode 2: medium
    // mode 3: large
    setProjectImageSources: function(mode) {
        for (var i = 0; i < projects.length; i++) {
            switch (mode) {
                case 0:
                    $("#" + projects[i].imgID).attr("src", projects[i].icon);
                    break;
                case 1:
                    $("#" + projects[i].imgID).attr("src", projects[i].small);
                    break;
                case 2:
                    $("#" + projects[i].imgID).attr("src", projects[i].medium);
                    break;
                case 3:
                    $("#" + projects[i].imgID).attr("src", projects[i].large);
                    break;
                default:
                    $("#" + projects[i].imgID).attr("src", projects[i].icon);
                    console.log("projectView.setProjectImageSources(): invalid mode value: " + mode);
            }
        }
    },

    init: function() {

        projectView.setProjectImages();

        $(window).resize(function() {
            projectView.setProjectImages();
        });

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


        $("#project-1-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/ballpark-map", "_blank");
            }
        });

        $("#project-2-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/feed-the-ladybugs", "_blank");
            }
        });

        $("#project-3-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/resume", "_blank");
            }
        });

        $("#project-4-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/web-perf", "_blank");
            }
        });

        $("#project-5-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/mccsings", "_blank");
            }
        });

        $("#project-6-repo").click(function() {
            if ($(this).find("a").length) {
                window.open("https://github.com/plr108/jasmine-testing", "_blank");
            }
        });
    }
}

projectView.init();