/*-*** - - *** 히스토리 페이지 *** - - ***-*/
$(document).ready(function () {

    //히스토리 li의 길이를 윈도우 길이만큼 리사이징
    $('#history').find('.history_imglist>li').css('height', $(window).height())
    $(window).resize(function () {
        var historyWinHeight = $(window).height()
        $('#history').find('.history_imglist>li').css('height', historyWinHeight)
    })





        $(window).scroll(function () {
            // 스크롤시 히스토리 이미지 나타내는 효과
            $('.history_imglist>li').each(function () {

                var scrollHistory = $(window).scrollTop()
                var harWin = $(window).height() / 1.3

                if ($(this).offset().top < scrollHistory + harWin && $(this).offset().top > scrollHistory) {
                    $(this).find('img').css('transform', 'scale(1)').css('opacity', '1')
                    $(this).siblings().find('img').css('transform', 'scale(0.3)').css('opacity', '0')
                    $(this).find('p').css('opacity', '1')
                    $(this).siblings().find('p').css('opacity', '0')
                }
            })


            var sh2 = $(window).scrollTop()
            if (sh2 < $('.ycut1').offset().top) {
                $('.year_num_wrap>p').eq(0).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(0).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(0).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(0).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(0).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(0deg)')
                
            }else if (sh2 >= $('.ycut1').offset().top && sh2 < $('.ycut2').offset().top) {
                $('.year_num_wrap>p').eq(1).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(1).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(1).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(1).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(1).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(60deg)')
                
            }else if (sh2 >= $('.ycut2').offset().top && sh2 < $('.ycut3').offset().top) {
                $('.year_num_wrap>p').eq(2).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(2).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(1).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(1).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(1).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(120deg)')
                
            }else if (sh2 >= $('.ycut3').offset().top && sh2 < $('.ycut4').offset().top) {
                $('.year_num_wrap>p').eq(3).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(3).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(2).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(2).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(2).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(180deg)')
                
            }else if (sh2 >= $('.ycut4').offset().top && sh2 < $('.ycut5').offset().top) {
                $('.year_num_wrap>p').eq(4).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(4).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(2).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(2).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(2).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(240deg)')
                
            }else if (sh2 >= $('.ycut5').offset().top) {
                $('.year_num_wrap>p').eq(5).css('display','block').siblings().css('display','none')
                $('.history_textlist>li').eq(5).css('display','block').siblings().css('display','none')
                $('.year_title>li').eq(3).css('color','#DA222A').siblings().css('color','#111')
                $('.year_dot>li').eq(3).find('img').attr('src','img/icon/history_dot_on.png')
                $('.year_dot>li').eq(3).siblings().find('img').attr('src','img/icon/history_dot.png')
                $('.ryb').css('transform','rotate(300deg)')
            }
            
            var sh3 = $(window).scrollTop()
            if(sh3 > 70){
                $('.hscroll').fadeOut()
            }else{
                $('.hscroll').fadeIn()
            }
            
        })
        
        var harWin2 = $(window).height() / 1.5
        $('.year_title>li').eq(0).click(function(){
            $('html,body').animate({scrollTop : $('.ycut0').offset().top + harWin2}, 800)
            return false
        })
        $('.year_title>li').eq(1).click(function(){
            $('html,body').animate({scrollTop : $('.ycut1').offset().top + harWin2}, 800)
            return false
        })
        $('.year_title>li').eq(2).click(function(){
            $('html,body').animate({scrollTop : $('.ycut3').offset().top + harWin2}, 800)
            return false
        })
        $('.year_title>li').eq(3).click(function(){
            $('html,body').animate({scrollTop : $('.ycut5').offset().top + harWin2}, 800)
            return false
        })

}) //도큐먼트 닫음


/*-*** - - *** 히스토리 페이지 끝 *** - - ***-*/
