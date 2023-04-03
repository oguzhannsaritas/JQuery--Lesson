$(function () {
    $(".menu").mouseover(function () {
        $(this).css("color", " rgba(0, 0, 0, 0.445);");
    });
    $(function () {
        $(".menu").mouseleave(function () {
            $(this).css("color", "black");
        });
    })

    animasyon();

    function animasyon() {


        var say = 1;
        setInterval(function () {

            var a = "lion1" + say + ".jpg";

            $("#img2").fadeOut(3000, function () {
                $(this).queue(function () {
                    $(this).attr("src", a);
                    $(this).dequeue();

                });
                $(".menu").fadeIn(3000);

            });

            say++;
            if (say == 1) {
                say = 1;

            }


        }, 3000);





        $("#kapan").mouseover(function () { 
            $(this).css("cursor", "pointer");
            
        });
        $("#kapan").click(function () {

            $("#cerez").css("display", "none");
            
        });




    }

    $(".kırmızı").mouseover(function () { 
        $(this).css("color", "red");
    });
    $(".kırmızı").mouseleave(function () { 
        $(this).css("color", "gray");
    });
    $(".mavi").mouseover(function () { 
        $(this).css("color", "blue");
    });
    $(".mavi").mouseleave(function () { 
        $(this).css("color", "gray");
    });
    $(".yesil").mouseover(function () { 
        $(this).css("color", "green");
    });
$(".yesil").mouseleave(function () { 
    $(this).css("color", "gray");
});















});