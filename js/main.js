// 스크롤내리면 gnb 디자인 변경

        $(document).ready(function(){
            function whiteGnb(){
                $('#header').find('.logo').find('img').attr('src','img/logo/top_logo.png')
                $('#header').css('background-color','#FFF');
                $('.headerbox1').css('border-bottom','1px solid #EEE');
                $('.lang').find('a').css('color','#666');
                $('.lang>li::after').css('color','#666');
                $('.headerbox1 .url').css('color','#333').css('border','1px solid #999');
                $('.headerbox2').css('border-bottom','1px solid #EEE');
                $('.gnb>ul>li>a').css('color','#333');
                $('.util>.search').css('background-position','0 30px');
                $('.util>.menu').css('background-position','30px 30px');
            }
            
            function toomGnb(){
                $('#header').find('.logo').find('img').attr('src','img/logo/white_logo.png')
                $('#header').css('background-color','rgba(0,0,0,0)');
                $('.headerbox1').css('border-bottom','1px solid rgba(250,250,250,0)');
                $('.lang').find('a').css('color','#FFF');
                $('.lang>li::after').css('color','#FFF');
                $('.headerbox1 .url').css('color','#FFF').css('border','1px solid #FFF');
                $('.headerbox2').css('border-bottom','1px solid rgba(250,250,250,0)');
                $('.gnb>ul>li>a').css('color','#FFF');
                $('.util>.search').css('background-position','0 0');
                $('.util>.menu').css('background-position','30px 0');
            }
            toomGnb();
            $('.gnb').mouseenter(function(){
                whiteGnb()
            })
            $('#header').mouseleave(function(){
                toomGnb()
            })
            
            $(window).scroll(function(){
                var noticeoffset = $('#noticeBar').offset().top
                var scrollTop = $(this).scrollTop()
                
                if(scrollTop<noticeoffset-200){ // 스크롤이 공지보다 위에있으면
                    toomGnb()
                    $('.gnb').mouseenter(function(){
                        whiteGnb()
                    })
                    $('#header').mouseleave(function(){
                        toomGnb()
                    })
                    
                }else{ //그 외에
                    whiteGnb()
                    $('#header').mouseleave(function(){
                        whiteGnb()
                    })
                }
                
                
            })
        })



//공지사항
   $(document).ready(function(){
            function noticeup(){
                $('.notice_frame>li:first').animate({marginTop: '-30px'},500, function(){
                    $('.notice_frame>li:first').appendTo('.notice_frame')
                    $('.notice_frame>li:last').css('margin-top','0')
                })
            }
            setInterval(noticeup, 3000)
   })

//섹션 이노베이션
    $(document).ready(function(){
            
                $('.sugar').click(function(){
                    $(this).stop().css({width: '70%'}).siblings().stop().css({width: '15%'})
                    $(this).find('.split_overbox').css('opacity','0')
                    $(this).siblings().find('.split_overbox').css('opacity','0.5')
                    $('.split_text1').fadeIn()
                    $('.split_text2').fadeOut()
                    $('.split_text3').fadeOut()
                })
            
                $('.food').click(function(){
                    $(this).stop().css({width: '70%'}).siblings().stop().css({width: '15%'})
                    $(this).find('.split_overbox').css('opacity','0')
                    $(this).siblings().find('.split_overbox').css('opacity','0.5')
                    $('.split_text1').fadeOut()
                    $('.split_text2').fadeIn()
                    $('.split_text3').fadeOut()
                })
                $('.bio').click(function(){
                    $(this).stop().css({width: '70%'}).siblings().stop().css({width: '15%'})
                    $(this).find('.split_overbox').css('opacity','0')
                    $(this).siblings().find('.split_overbox').css('opacity','0.5')
                    $('.split_text1').fadeOut()
                    $('.split_text2').fadeOut()
                    $('.split_text3').fadeIn()
                })
        })

//섹션 브랜드
    $(document).ready(function() {
            var brandNum = 0
            
            $('.white_next').click(function() {
                brandNum++
                if (brandNum > 5) {
                    brandNum = 0
                }
                $('.brand_list>li:first').animate({
                    marginLeft: -490
                }, 300, function() {
                    $('.brand_list>li:first').appendTo('.brand_list')
                    $('.brand_list>li:last').css('margin-left', '40px')
                })
                $('.color_area').eq(brandNum).fadeIn().siblings().fadeOut()
            })

            $('.white_prev').click(function() {
                brandNum--
                if (brandNum < 0) {
                    brandNum = 5
                }
                $('.brand_list>li:last').prependTo('.brand_list')
                $('.brand_list>li:first').css('margin-left', '-490px').animate({marginLeft: 40}, 300)
                $('.color_area').eq(brandNum).fadeIn().siblings().fadeOut()
            })
        })

//섹션 서스테인 꽃배경 변화

    $(document).ready(function() {
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $('body').mousemove(function(e){
                var pageX = e.pageX - ($(window).width() / 2);
                var pageY = e.pageY - ($(window).height() / 2);
                var newvalueX = width * pageX * -1 - 25;
                var newvalueY = height * pageY * -1 - 50;
                $('body').css("background-position", newvalueX+"px     "+newvalueY+"px");
        })
    })

//퀵메뉴 글씨 나타내기
    $(document).ready(function(){
            $('#quick>.imglist').find('li').each(function(index){
                $(this).mouseenter(function(){
                    $('#quick>.textlist').find('li').eq(index).slideDown().siblings().css('display','none')
                    $('.quick_line').css('width','80%')
                })
                $(this).mouseleave(function(){
                    $('#quick>.textlist').find('li').css('display','none')
                    $('.quick_line').css('width','0')
                })
            })
        })

//탑배너
    $(document).ready(function(){
            
            function imgSlider(num){
        
                $('.banner_img>li[data-index='+num+']').fadeIn()
                $('.banner_img>li[data-index!='+num+']').fadeOut()
                $('.banner_text>li[data-index='+num+']').css({'display': 'block', 'opacity': '0', 'margin-bottom': '50px'}).delay(0).animate({opacity: 1, marginBottom: 0, })
                $('.banner_text>li[data-index!='+num+']').css('display','none')
                $('.tbcontrols>li[data-index='+num+']').addClass('top_select')
                $('.tbcontrols>li[data-index!='+num+']').removeClass('top_select')
            }
            
            $('.banner_img>li').each(function(index){
                $(this).attr('data-index',index)
            })
            
            $('.tbcontrols>li').each(function(index){
                $(this).attr('data-index',index)
            })
            
            $('.banner_text>li').each(function(index){
                $(this).attr('data-index',index)
                $(this).click(function(){
                    imgSlider(index)
                    clickNum=index
                })
            })
        
            var video1 = $('.banner_img').find('.video1')
            var video2 = $('.banner_img').find('.video2')
            var clickNum = 0
            $('.next_btn').click(function(){
                clickNum++
                if(clickNum>1){
                    clickNum=0
                }
                imgSlider(clickNum)
                $(video1).get(0).currentTime = 0;
                $(video1).get(0).play();
                $(video2).get(0).currentTime = 0;
                $(video2).get(0).play();
            })
            $('.prev_btn').click(function(){
                clickNum--
                if(clickNum<0){
                    clickNum=1
                }
                imgSlider(clickNum)
                $(video1).get(0).currentTime = 0;
                $(video1).get(0).play();
                $(video2).get(0).currentTime = 0;
                $(video2).get(0).play();
            })
            
            function autoSlider(){
                $('.next_btn').trigger('click')
            }
            auto = setInterval(autoSlider, 7800)
            
            $('.stop_btn').click(function(){
                clearInterval(auto)
                $(video1).get(0).pause();
                $(video2).get(0).pause();
                
            })
            $('.play_btn').click(function(){
                clearInterval(auto)
                auto = setInterval(autoSlider, 7800)
                $(video1).get(0).currentTime = 0;
                $(video1).get(0).play();
                $(video2).get(0).currentTime = 0;
                $(video2).get(0).play();
            })
  
        })


//스크롤시 섹션 안의 객체 나타내기
    $(document).ready(function(){

        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop()
            $('section').each(function(){
                if(scrollTop > $(this).offset().top - 700){
                    $(this).find('.title').animate({top:0, opacity:1},500)
                    $(this).find('.s_title').delay(300).animate({top:0, opacity:1},500)
                    $(this).find('.viewmore').delay(600).animate({opacity:1},800)
                    $(this).find('.split').delay(600).animate({right:0, opacity:1},800)
                    
                    $(this).find('.area_wrap').delay(400).animate({left:0, opacity:1},400)
//                    $(this).find('.brand_frame').delay(800).animate({left:'50%', opacity:1},400)
                    
                    $(this).find('.div1').delay(400).animate({right:'0', opacity:1},800)
                }
            })
            var scrollTopIndex = $(this).scrollTop()
            if(scrollTopIndex > $('#trend').offset().top - 1000)
            $('.letter').animate({backgroundPositionX: -scrollTopIndex * 1}, 0)
            
        })
    })
