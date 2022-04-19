$("#theme").on("click", function() {
    // RETURN TO LIGHT MODE
    if( $(".header").hasClass("dark")) {
        $(".header").removeClass("dark");
        $("#infoCard").css({"background-color":"#372E2E"});
        $("#infoCard").css({"color":"#FDF6EE"});
        $("html").css({"background-color":"#FDF6EE"});
        $(".nav").css({"background-color":"#FDF6EE"});
        $("#bgcoloring").css({"background-color":"#FDF6EE"});
        $("a").css({"color": "#372E2E"});
        $("a").on("mouseover", function() {
            $(this).css({"color": "#52463F"});
        }).on("mouseout", function() {
            $(this).css({"color": "#372E2E"});
        });
        $("#mainName").css({"text-shadow": "1px 7px 7px rgba(0,0,0, 0.25)"});
        $(".card-header").css({"background-color":"#372E2E"});
        $(".btn").css({"color":"#FDF6EE"});
        $("#theme").css({"background-color":"#FDF6EE"});
        $(this).addClass("fa-moon");
        $(this).removeClass("fa-sun");
        $(this).css({"color": "#372E2E"});
    } else {
        // TURN ON DARK MODE
        $(".header").addClass("dark");
        $("#infoCard").css({"background-color":"#FDF6EE"});
        $("#infoCard").css({"color":"#372E2E"});
        $("html").css({"background-color":"#372E2E"});
        $(".nav").css({"background-color":"#372E2E"});
        $("#bgcoloring").css({"background-color":"#372E2E"});
        $("a").css({"color": "#FDF6EE"});
        $("a").on("mouseover", function() {
            $(this).css({"color": "#e2d9ce"});
        }).on("mouseout", function() {
            $(this).css({"color": "#FDF6EE"});
        });
        $("#mainName").css({"text-shadow": "1px 7px 7px rgba(253,246,238, 0.25)"});
        $(".card-header").css({"background-color":"#FDF6EE"});
        $(".btn").css({"color":"#372E2E"});
        $("#theme").css({"background-color":"#372E2E"});
        $(this).removeClass("fa-moon");
        $(this).addClass("fa-sun");
        $(this).css({"color": "#FDF6EE"});
    }
});
