// var lists=$('menu').children();
var title_span = $('.title-list li span');
console.log(title_span);


// 下拉菜单
$('.area').on('touchstart', function () {
    $('.title-list li:not(.area)').removeClass('title-color');
    $('.title-list li:not(.area) .sp-up').hide();
    $('.title-list li:not(.area) .sp-down').show();
    $('.area-list').toggle();
    $(this).toggleClass('title-color');
    $('.area-list~div').hide();
    $(this).find('.sp-down').toggle();
    $(this).find('.sp-up').toggle();
});
$('.price').on('touchstart', function () {
    $('.title-list li:not(.price)').removeClass('title-color');
    $('.title-list li:not(.price) .sp-up').hide();
    $('.title-list li:not(.price) .sp-down').show();
    $(this).toggleClass('title-color');
    $('.price-list').toggle();
    $('.price-list~div').hide();
    $('.area-list').hide();
    $(this).find('.sp-down').toggle();
    $(this).find('.sp-up').toggle();

});
$('.type').on('touchstart', function () {
    $('.title-list li:not(.type)').removeClass('title-color');
    $('.title-list li:not(.type) .sp-up').hide();
    $('.title-list li:not(.type) .sp-down').show();
    $(this).toggleClass('title-color');
    $('.type-list').toggle();
    $('.price-list').hide();
    $('.area-list').hide();
    $('.more-list').hide();
    $(this).find('.sp-down').toggle();
    $(this).find('.sp-up').toggle();
    $('.type-list button').on('touchstart', function () {
        $('.type-list').hide();
        $('.title-list li .sp-up').hide();
        $('.title-list li .sp-down').show();
        $('.title-list li').removeClass('title-color');
    })
});
$('.more').on('touchstart', function () {
    $('.title-list li:not(.more)').removeClass('title-color');
    $('.title-list li:not(.more) .sp-up').hide();
    $('.title-list li:not(.more) .sp-down').show();
    $('.more-list').toggle();
    $(this).toggleClass('title-color');
    $('.price-list').hide();
    $('.type-list').hide();
    $('.area-list').hide();
    $(this).find('.sp-down').toggle();
    $(this).find('.sp-up').toggle();
    $('.more-list button').on('touchstart', function () {
        $('.more-list').hide();
        $('.title-list li .sp-up').hide();
        $('.title-list li .sp-down').show();
        $('.title-list li').removeClass('title-color');
    })
});

// 内容选择
$('.chose-one li').on('touchstart', function () {
    $(this).parents('.chose-one').find('li').removeClass('title-color')
    $(this).toggleClass('title-color');
    
})

// $('.area-middle li').on('touchstart',function(){
//     $(this).toggleClass('title-color')
// })









// 简化修改
// var title = $('.title-list').children('li');
// var lists = $('.menu').children('div');
// console.log(lists)
// title.each(function (index, item) {
//     console.log(item, index);
//     // for(var i=0;i<=index,i++){

//     // }
// })
