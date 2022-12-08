//마우스 휠 스크롤 부드럽게 - lucid
    $(window).on('load', function() {
	  $(this).impulse();
	});

//맨위로이동
    $(document).ready(function(){
            
            $('#goTop').click(function(){
                $('html,body').animate({scrollTop : 0}, 800)
                return false
            })
            
//            var scrollHeight = $(document).height();
//            
//            $('#goBottom').click(function(){
//                $('html,body').animate({scrollTop : scrollHeight}, 900);
//                return false;
//            });
        });

//스크롤탑 화살표 이미지 변경
    $(document).ready(function(){
        $('#goTop').mouseenter(function(){
                $(this).find('img').attr('src','img/icon/up_white.png')
            })
        $('#goTop').mouseleave(function(){
                $(this).find('img').attr('src','img/icon/up_black.png')
            })
   })

//맨위로가는 버튼 보였다 안보였다 하기
    $(document).ready(function(){
        $(window).scroll(function(){
            var scrollTopgo = $(this).scrollTop()
            if(scrollTopgo<800){
                $('#goTop').css('display','none')
            }else{             
                $('#goTop').css('display','block')
            }
        })
    })

//푸터 - 패밀리사이트
    $(document).ready(function(){
        var ficon = 0
        
        $('footer').find('.family_site').click(function(){
            $(this).find('.site_list').fadeToggle()
            ficon += 180
            $(this).find('.family_icon').rotate({duration: 200, animateTo: ficon })
        })
    })

//검색창
    $(document).ready(function(){
        $('li.search').click(function(){
            $('#searchground').css('display','block')
        })
        $('#searchground').find('.close').click(function(){
            $(this).parents('#searchground').css('display','none')
        })
    })






//오른쪽에서 나오는 흰배경 gnb 나타나고 사라지기
    $(document).ready(function(){ //메뉴열기
        $('#m_header').find('.m_util>.menu').click(function(){
            $('#m_gnb').css('right','0')
        })
        
        
        $('#header').find('.menu').click(function(){ //PC버전도 똑같이 적용
            $('#m_gnb').css('right','0')
        })
        $('#m_gnb>ul>li').each(function(index){
            $(this).click(function(){
                $(this).css('color','#eecb7f').siblings().css('color','#FBFBFB')
                $('.m_subbox>ul').eq(index).fadeIn().siblings().css('display','none')
                $(this).find('.namewrite').css('opacity','1').animate({paddingLeft: '0'}, 400)
                $(this).siblings().find('.namewrite').css('opacity','0').css('padding-left','20px')
                $(this).find('a').css('color','#CCC')
                $(this).siblings().find('a').css('color','#333')
            })
        })
        
        $('#m_gnb>.x_btn').click(function(){ //메뉴닫기
            $('#m_gnb').css('right','-100%')
        })
        $('#m_gnb>.x_btn').mouseenter(function(){
            $(this).css('transform','rotate(180deg)')
        })
        $('#m_gnb>.x_btn').mouseleave(function(){
            $(this).css('transform','rotate(0deg)')
        })
    })

// gnb 서브메뉴 나타내기 
    $(document).ready(function(){
            $('.gnb>ul>li').mouseenter(function(){
            $(this).find('.sub').stop().fadeIn('fast').parent('li').siblings().find('.sub').css('display','none')
            })
            $('.gnb>ul>li').mouseleave(function(){
                $(this).find('.sub').stop().fadeOut('fast')
            })
            $('.gnb>ul>li').focusin(function(){
            $(this).find('.sub').stop().fadeIn('fast').parent('li').siblings().find('.sub').css('display','none')
            })
            $('.gnb>ul>li').focusout(function(){
                $(this).find('.sub').stop().fadeOut('fast')
            })
        })


//스크롤 조금 내리면 헤더의 맨윗줄만 사라짐
    $(document).ready(function(){
        $(window).scroll(function(){
            var scrollTop2 = $(this).scrollTop()

            if(scrollTop2<20 ){
                $('.headerbox1').css('margin-top','0')
                $('#header').find('.sub').css('top','140px')
            }else{             
                $('.headerbox1').css('margin-top','-50px')
                $('#header').find('.sub').css('top','90px')
            }
        })
    })

            