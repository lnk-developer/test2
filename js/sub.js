/*-*** - - *** 인베스트 페이지 *** - - ***-*/


    $(document).ready(function(){ 
        // 재무상태표 + 누르면 나타내기
        $('#barchart>#barchart3>h3>.jaemoo_plus').click(function(){
            if($(this).is('.opentable')){
                $(this).removeClass()
                $('#barchart>#barchart3>.jaemootable_wrap').slideUp('slow')
            }else{
                $(this).addClass('opentable')
                $('#barchart>#barchart3>.jaemootable_wrap').slideDown('slow')
            }
        })
        
        // 손익계산서 + 누르면 나타내기
        $('#barchart>#barchart3>h3>.sonik_plus').click(function(){
            if($(this).is('.opentable')){
                $(this).removeClass()
                $('#barchart>#barchart3>.soniktable_wrap').slideUp('slow')
            }else{
                $(this).addClass('opentable')
                $('#barchart>#barchart3>.soniktable_wrap').slideDown('slow')
            }
        })
        
        //주주현황 재무정보 빨간색 탭스
        $('#investTop>ul>li').each(function(index){
            $(this).click(function(){
                $(this).css('background-color','#DA222A').css('color','#FFF')
                $(this).siblings().css('background-color','#FFF').css('color','#222')
                $('#page_wrap>div').eq(index).fadeIn().siblings().css('display','none')
            })
        })
        
        //제무제표 스크롤 시 효과
        var scrollTrue = true
        $(window).scroll(function(){
            var scrollTopInvest = $(window).scrollTop()
            var yoyacTop = $('#barchart1>h3').offset().top
            if (scrollTopInvest > yoyacTop - 800) {
                if (scrollTrue) {
                    // 제무제표 수치 등장 애니메이션
                    $('.boxthreep1').animate({
                        opacity: 1
                    }, 600)
                    $('.boxthreep2').delay(300).animate({
                        opacity: 1
                    }, 600)
                    $('.boxthreep3').delay(600).animate({
                        opacity: 1
                    }, 600)

                    // 제무제표 수치가 올라가는 애니메이션    
                    var score11 = 67
                    var score12 = 0
                    var score21 = 45
                    var score22 = 0
                    var score31 = 62
                    var score32 = 0

                    function score() {
                        score11++
                        score12 += 19
                        score21++
                        score22 += 13
                        score31++
                        score32 += 10
                        if (score11 > 26) {
                            score11 = 26
                        }
                        if (score12 > 430) {
                            score12 = 430
                        }
                        if (score21 > 13) {
                            score21 = 13
                        
                        }
                        if (score22 > 631) {
                            score22 = 631
                        }
                        if (score31 > 12) {
                            score31 = 12
                        }
                        if (score32 > 799) {
                            score32 = 799
                        }

                        $('.box_numl1').html(score11 + ',' + score12)
                        $('.box_numl2').html(score21 + ',' + score22)
                        $('.box_numl3').html(score31 + ',' + score32)

                    }
                    auto = setInterval(score, 20)
                    scrollTrue = false
                }

            }
        })

    }) //도큐먼트 레디 닫히는곳

    // 스크롤 시 페이지 섹션안의 객체 나타내기!!!!
    //인베스트페이지 지구지구
    $(document).ready(function(){
        
        $('#investTop').find('.earth_gif').animate({top: '60%', opacity: 1}, 500)
        $('#investTop').find('h2').delay(300).animate({top: '60%', opacity: 1}, 500)
        $('#investTop').find('p').delay(600).animate({top: '60%', opacity: 1}, 500)
        
        $(window).scroll(function(){
            var scrollTopInvest2 = $(window).scrollTop()
            $('#page_wrap').find('section').each(function(){
                if(scrollTopInvest2 > $(this).offset().top - 900){
                    $(this).find('h3').animate({opacity:1},700)
                    $(this).find('#mycleft').delay(400).animate({opacity:1},700)
                    $(this).find('#mycright').delay(800).animate({opacity:1},700)
                }
            })
        })
    }) //도큐먼트 레디 닫힘


/*-*** - - *** 인베스트 페이지 끝 *** - - ***-*/