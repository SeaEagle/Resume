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
    updatePageDisplay(currentIndex, currentIndex);

    //导航项点击处理
    $('.menu .item').click(function(){
        //获取当前选择的导航项
        var index = $('.menu .item').index(this);
        //更新页面显示
        updatePageDisplay(currentIndex, index);
    });

    //页面鼠标滚动时
    $('html,body').mousewheel(function(even, delta, deltaX, deltaY){
        if( delta > 0 && scrolling == false ){//向上
            pageUp();
        }else if( delta < 0 && scrolling == false ){//向下
            pageDown();
        }
    });

    //鼠标向上翻页
    function pageUp(){
        if( currentIndex > 0 ){
            scrolling = true;
            updatePageDisplay(currentIndex, currentIndex-1);
        }
        console.info('up: '+currentIndex);
    }

    //鼠标向下翻页
    function pageDown(){
        if( currentIndex < ( pagesCount - 1 ) ){
            scrolling = true;
            updatePageDisplay(currentIndex, currentIndex+1);
        }
        console.info('down: '+currentIndex);
    }

    //根据索引, 更新页面显示
    function updatePageDisplay(fromIndex, toIndex){
        //滚动到指定的页
        scrollChooseItem(fromIndex, toIndex);
        //激活导航当前选项, 将其他选项去除激活
        activeChooseItem(toIndex);
        //更新页码索引
        updateCurrentIndex(toIndex);
    }

    //滚动到指定的页
    function scrollChooseItem(fromIndex, toIndex){

        //console.info($('section[data-type="story"]').eq(fromIndex).attr('class'));
        //console.info($('section[data-type="story"]').eq(toIndex).attr('class'));

        $('html, body').animate({
            scrollTop: $('.container section').eq(toIndex).offset().top
        }, {
            duration:1000,
            complete:function() {
                //滚动完之后的操作, 可在此增加某些页的动画
                scrolling = false;
            }
        });

        //$('section[data-type="story"]').eq(fromIndex).animate({
        //    width: '0%'
        //}, 1000, 'easeInOutCubic', function(){
        //    $('section[data-type="story"]').eq(toIndex).show();
        //});

    }

    //激活index对应的导航项, 去除其他选项的激活状态
    function activeChooseItem(index){
        $('.menu .item').eq(index).addClass('active').siblings().removeClass('active');
    }

    //更新当前页索引
    function updateCurrentIndex(index){
        //当前页码索引
        currentIndex = index;
    }

});