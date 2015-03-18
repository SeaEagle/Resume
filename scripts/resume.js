/**
 * resume 本应用特定脚本
 */
$(document).ready(function(){

    //全局变量
    var currentIndex = 0;
    var currentPageTop = 0;

    //刷新或首次打开, 更新页面显示
    updatePageDisplay(currentIndex);

    //导航项点击处理
    $('.menu .item').click(function(){
        //获取当前选择的导航项
        var index = $('.menu .item').index(this);
        //更新页面显示
        updatePageDisplay(index);
    });

    //页面滚动时
    $(window).scroll(function(){

        if(){//向下滑动

        }else if(){//向上滑动

        }else{//回到原处

        }
    });

    //window对象
    //var $window = $(window);
    //
    //$('section[data-type="story"]').each(function(){
    //    //当前section
    //    var $this = $(this), $thisOffset = $this.offset();
    //    //缓存data数据
    //    $this.data('speed', $this.attr('data-speed'));
    //    //当浏览器滚动时
    //    $(window).scroll(function(){
    //        //section在视图内
    //        if( ( $window.scrollTop() + $window.height() ) >= ( $thisOffset.top ) &&
    //            ( $thisOffset.top + $this.height() ) >= ( $window.scrollTop()) ){
    //        }//section在视图内
    //    });//window scroll
    //
    //});

    //根据索引, 更新页面显示
    function updatePageDisplay(index){
        //更新页码索引
        updateCurrentIndex(index);
        //激活导航当前选项, 将其他选项去除激活
        activeChooseItem(index);
        //滚动到指定的页
        scrollChooseItem(index);
    }

    //更新当前页索引
    function updateCurrentIndex(index){
        //当前页码索引
        currentIndex = index;
    }

    //激活index对应的导航项, 去除其他选项的激活状态
    function activeChooseItem(index){
        $('.menu .item').eq(index).addClass('active').siblings().removeClass('active');
    }

    //滚动到指定的页
    function scrollChooseItem(index){
        $('html, body').animate({
            scrollTop:$('.container section').eq(index).offset().top
        }, {
            duration:1000,
            complete:function() {
                //滚动完之后的操作, 可在此增加某些页的动画
                currentPageTop = $('.container section').eq(index).offset().top;
            }
        });

    }
});