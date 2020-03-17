$(function(){
    $("button").click(function(){
        $(this).fadeOut(500);
        setTimeout(function(){
            $("#q1").fadeIn(500);
            },500
        )
    })

    let total = [0,0,0,0];
    $(".list> li").click(function(){
        let ch = $(this).val();
        total[ch]++;
        let boomo = $(this).parents(".questions");
        let next = boomo.next();
        let next_grap = next.find(".grap> div");
        let grap_width = next_grap.text();

        console.log(grap_width);

        boomo.fadeOut(500);
        setTimeout(function(){
            $(next).fadeIn(500);
            },500
        )
        setTimeout(function(){
            $(next_grap).animate({"width": grap_width}, 500);
        }, 500)
    })
    $("#q5").click(function(){
        
    })
})