/**
 * resume 本应用特定脚本
 */
$(document).ready(function(){

    //全局变量
    //页码索引
    var currentIndex = 0;
    //页数
    var pagesCount = $('.menu .item').length;
    //监听页面是否正处于滚动, 防止连续滚动
    var scrolling = false;

    //刷新或首次打开, 更新页面显示
    updatePageDisplay(currentIndex);

    //导航项点击处理
    $('.menu .item').click(function(){
        //获取当前选择的导航项
        var index = $('.menu .item').index(this);
        //更新页面显示
        updatePageDisplay(index);
    });

    //页面鼠标滚动时
    $('html,body').mousewheel(function(even, delta, deltaX, deltaY){
        if( delta > 0 && scrolling == false ){//向上
            scrolling = true;
            pageUp();
        }else if( delta < 0 && scrolling == false ){//向下
            scrolling = true;
            pageDown();
        }
    });

    function pageUp(){
        if( currentIndex > 0 ){
            currentIndex--;
        }
        updatePageDisplay(currentIndex);
    }

    function pageDown(){
        if( currentIndex < ( pagesCount - 1 ) ){
            currentIndex++;
        }
        updatePageDisplay(currentIndex);
    }

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
            duration:2000,
            easing: 'easeIn',
            complete:function() {
                //滚动完之后的操作, 可在此增加某些页的动画
                scrolling = false;
            }
        });

    }
});