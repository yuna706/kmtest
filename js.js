$(function(){
    $("button").click(function(){
        $(this).fadeOut(500);
        setTimeout(function(){
            $("#q1").fadeIn(500);
        },500);
    })

    let total = new Array(0,0,0,0);

    $(".list> li").click(function(){
        let ch = $(this).val();
        total[ch]++;

        console.log(total[0],total[1],total[2],total[3]);

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

        
        let max = total[0];
        let max_bang = 0;

        for(let i = 0; i < total.length; i++){
            if(max <= total[i]){
                max = total[i];
                max_bang = i;
            }
        }
        console.log(max_bang, max);

        let depar = $(".result-view> p");
        let ex = $(".result-view> div");

        switch(max_bang){
            case 0:
                depar.text("마케팅 경영과");
                ex.append('<h3>마케팅 경영과에서는 경영관련 분야의 기초 전문지식과 현장 실무능력을 배우며, 세무, 회계사무 분야 도제학교를 운영합니다.</h3><br>');
                ex.append('<p>금융, 회계, 마케팅 등 경영관련 직업 분야의 직무수행에 필요한 기초 전문지식과 현장 실무능력을 배우며, 산업현장과 교육과정을 연계하여 세무, 회계사무 분야 기업 맞춤형 인재를 기릅니다.</p>');
                ex.append('<br><img src="img/ma1.jpg" alt="마케팅 경영과 사진1"><br> <img src="img/ma2.jpg" alt="마케팅 경영과 사진2"> <br> <a href="http://www.kmh.hs.kr/main.php?menugrp=020200&master=html&act=page">마케팅경영과 더 알아보기</a>');
                break;
            case 1:
                depar.text("베이커리 카페과");
                ex.append('<h3>현장의 전문가로부터 직접 지도받으며, 창의력과 기술력을 갖춘 업계 최고의 전문 인재를 양성합니다.</h3><br>');
                ex.append('<p>국내 최고의 명장, 기능장 등 26개 업체와 협약을 체결하여 직접 지도받고, 제과 제빵, 식음료, 바리스타 교육 등 체계적이고 전문적인 교육과정에 따라 기본적인 제과제빵부터 창작 레시피 개발까지 실력을 쌓아 베이커리 및 외식사업 분야의 전문가를 양성합니다.</p>');
                ex.append('<br><img src="img/ba1.jpg" alt="베이커리 카페과 사진1"> <br><img src="img/ba2.jpg" alt="베이커리 카페과 사진2"> <br> <a href="http://www.kmh.hs.kr/main.php?menugrp=020500&master=html&act=page">베이커리카페과 더 알아보기</a>');
                break;
            case 2:
                depar.text("패션산업 디자인과");
                ex.append('<h3>패션 디자인과 시각 디자인에 열정이 있고 흥미가 있는 학생이라면, 교육과정을 통해 패션 관련 전문가로 꿈을 펼칠 수 있는 기회가 주어집니다.</h3><br>');
                ex.append('<p>의상을 기획하고 스케치하는 과정을 통해 제품을 제작하여 브랜딩화 합니다. 교육과정 이수 후에는 패션 관련 학과 진학 및 패션 관련 기업 취업을 목표로 하고 있습니다.</p>');
                ex.append('<br><img src="img/fa1.jpg" alt="패션산업 디자인과 사진1"><br> <img src="img/fa2.jpg" alt="패션산업 디자인과 사진2"> <br> <a href="http://www.kmh.hs.kr/main.php?menugrp=020300&master=html&act=page">패션산업디자인과 더 알아보기</a>');
                break;
            case 3:
                depar.text("앱 서비스과");
                ex.append('<h3>앱 서비스과에서는 입학과 동시에 학생의 진로희망을 토대로 맞춤형 교육을 실시하고 있습니다.</h3><br>');
                ex.append('<p>4차 산업혁명 시대의 선두주자로써 앱(App) 관련 문화 콘텐츠 산업 활성화를 위해 모바일앱 개발 및 화면디자인, 미디어콘텐츠 제작 등 스마트 기기에 적합한 콘텐츠를 기획, 제작할 수 있는 앱서비스 분야의 하이브리드형 인재를 양성합니다.</p>');
                ex.append('<br><img src="img/app1.jpg" alt="앱 서비스과 사진1"><br> <img src="img/app2.jpg" alt="앱 서비스과 사진2"> <br> <a href="http://www.kmh.hs.kr/main.php?menugrp=020400&master=html&act=page">앱서비스과 더 알아보기</a>');
                break;
        };
    })
})
