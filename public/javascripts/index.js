$(function(){
    $('.tab-list').on('click', '.tab-item', function(){
        $(this).addClass('focus').siblings().removeClass('focus');
    })
});