$(function () {

    let icon_img = "/nairo/static/img/moon.jpg";

    $(document).on("click", "#icon", function () {
        let mode = $(this).data("change_mode");

        if (mode == 'moon') {
            $("body").addClass("theme-light");
            $(this).data("change_mode", "sun");
            icon_img="/nairo/static/img/moon.jpg";
        } else {
            $("body").removeClass("theme-light");
            icon_img="/nairo/static/img/sun.jpg";
            $(this).data("change_mode", "moon");
        }
       $("#icon").attr("src", icon_img);
    });


  /*  var icon = document.getElementById("icon");
    icon.onclick = function () {
        document.body.classList.toggle("theme-light");
        if (document.body.classList.contains("theme-light")) {
            icon.src = "/nairo/static/img/moon.jpg";
        } else {
            icon.src = "/nairo/static/img/sun.jpg";
        }

    }*/
})
