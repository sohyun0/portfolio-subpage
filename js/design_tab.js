$(document).ready(function(){

    var tabList = $('#tab-list>li');

    var tabCon = $('#tab-content>div');
    tabList.on('click',function(e){
        e.preventDefault();
        var i = $(this).index();
        console.log(i);
        //tab-list
        tabList.removeClass('on');
        tabList.eq(i).addClass('on');
        //tab-content
        tabCon.removeClass('on');
        tabCon.eq(i).addClass('on');
    })
    //탭을 누른다
    //해당 박스가 나온다
})
