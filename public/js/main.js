$(function () {


    $("#icon").click(function () {
        let mode = $(this).data("change_mode");
        if (mode == 'moon') {
            $("body").addClass("theme-light");
        } else {
            $("body").removeClass("theme-light");
        }
    })


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
