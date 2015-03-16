/**
 * resume 本应用特定脚本
 */
$(document).ready(function(){

    //window对象
    var $window = $(window);

    //
    $('section[data-type="story"]').each(function(){

        //当前section
        var $this = $(this), $thisOffset = $this.offset();

        //根据浏览器高度设置section的高度
        //$this.height($window.height());

        //var size = 'auto'+' '+($window.height())+'px';
        //$this.css({
        //    backgroundSize: size
        //});

        //缓存data数据
        $this.data('speed', $this.attr('data-speed'));

        //当浏览器滚动时
        $(window).scroll(function(){
            //section在视图内
            if( ( $window.scrollTop() + $window.height() ) >= ( $thisOffset.top ) &&
                ( $thisOffset.top + $this.height() ) >= ( $window.scrollTop()) ){

            }//section在视图内
        });//window scroll

    });

});