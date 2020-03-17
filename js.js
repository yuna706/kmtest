$(function(){
    $("button").click(function(){
        $(this).fadeOut(500);
        setTimeout(function(){
            $("#q1").fadeIn(500);
        },500);
    })

    let total = [0,0,0,0];
    $(".list> li").click(function(){
        let ch = $(this).val();
        total[ch]++;

        let boomo = $(this).parents(".questions");
        let next = boomo.next();
        let next_grap = next.find(".grap> div");
        let grap_width = next_grap.text();

        boomo.fadeOut(500);
        setTimeout(function(){
            $(next).fadeIn(500);
        },500);

        setTimeout(function(){
            $(next_grap).animate({"width": grap_width}, 500);
        }, 500);
    })

    $("#q5").click(function(){
        let last_width = $("#loading> div").text();

        $("#loading> div").animate({"width" : last_width}, 2000);

        setTimeout(function(){
            $("#loading").fadeOut(500);
        }, 2000);

        setTimeout(function(){
            $(".result-view").fadeIn(500);
        }, 2500);
    })

    let max = total[0];
    let j = 0;
    for(let i = 1; i < 5; i++){
        if(max < tatal[i]){
            max = tatal[i];
            j++;
        }
    }
    
    let depar = $(".result-view> p");
    let ex = $(".result-view> div");

    console.log(j);
    switch(j){
        case 0:
            depar.text("마케팅 경영과");
            ex.html('마케팅경영과에서는 경영관련 분야의 기초 전문지식과 현장 실무능력을 배우며, 세무, 회계사무 분야 도제학교를 운영합니다. 금융, 회계, 마케팅 등 경영관련 직업 분야의 직무수행에 필요한 기초 전문지식과 현장 실무능력을 배우며, 산업현장과 교육과정을 연계하여 세무, 회계사무 분야 기업 맞춤형 인재를 기릅니다. <img src="img/ma1.png" alt="마케팅 경영과 사진1"> <img src="img/ma2.png" alt="마케팅 경영과 사진2">');
            break;
        }
})