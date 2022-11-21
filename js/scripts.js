function popup_out() {
    $("#video").empty(), $(".popup_overlay").fadeOut(150), $(".popup").fadeOut(150), $(".popup").removeClass("activePopup")
}

function formname(e) {
    $(".formname").attr("value", e), console.log("formname = " + e)
}

function popup1(e, t, o, a, n) {
    $(".popup_overlay1").fadeIn(150), $("#" + e).addClass("activePopup");
    var i = -($(".activePopup").outerHeight() / 2) + "px",
        p = -($(".activePopup").outerWidth() / 2) + "px";
    $(".activePopup").css({
        "margin-top": i,
        "margin-left": p,
        left: "50%",
        top: "50%"
    }), "" != o && $("#" + e).find(".popup_h1").html(o), "" != a && $("#" + e).find(".popup_h2").html(a), "" != n && $("#" + e).find('input[type="button"]').attr("value", n), $(".activePopup").fadeIn(150), $(".formname").attr("value", t)
}

function popup(e, t, o, a, n, i) { 
    // e - id popup
    // t - formname 
    // o - h1 
    // a - h2
    // n - btn name 
    
    $(".popup_overlay").show(), $("#" + e).addClass("activePopup");
    var p = -($(".activePopup").outerHeight() / 2) + "px",
        r = -($(".activePopup").outerWidth() / 2) + "px";
    $(".activePopup").css({
        "margin-top": p,
        "margin-left": r,
        left: "50%",
        top: "50%"
    });
    var l = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);
    if (null != l && $(".with_text.activePopup").css({
            "margin-top": p,
            "margin-left": "0px",
            left: "0%",
            top: "50%"
        }), "callback" == e) var s = "Заказать звонок",
        u = "Оставьте заявку, и&nbsp;наш менеджер<br>свяжется с&nbsp;вами в&nbsp;ближайшее время",
        c = "Заказать звонок";
    if ("request" == e) var s = "Оставить заявку",
        u = "Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!",
        c = "Оставить заявку";
    if ("question" == e) var s = "Задать вопрос",
        u = "Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!",
        c = "Задать вопрос";
    "" != o ? $("#" + e).find(".popup_h1").html(o) : $("#" + e).find(".popup_h1").html(s), "" != a ? $("#" + e).find(".popup_h2").html(a) : $("#" + e).find(".popup_h2").html(u), "" != n ? $("#" + e).find(".btn").html(n) : $("#" + e).find(".btn").html(c), $(".activePopup").show(), $(".formname").attr("value", t), $("#" + e).find(".icon").css({
        background: "url('img/c23_" + i + ".png') center center no-repeat"
    })
}


function popup_out() {
    $("#video").empty(), $(".popup_overlay").fadeOut(150), $(".popup").fadeOut(150), $(".popup").removeClass("activePopup")
}

function thx() {
    $('.popup').hide();
    $('.work_popup').hide();
    $('.popup').removeClass('activePopup');
    $('.work_popup').removeClass('activePopup');
    popup('thx', '');
    $('input[type="text"]:not(input[name="phone1"])').each(function(){
        $(this).val('');
    });
    $('div#loaderI').remove();
    $('div.button').show();
    $('textarea').val('');
      ga('send', 'event', 'knopka', 'lead');
      yaCounter39122940.reachGoal('lead');
}

$(window).resize(function() {
    var e = -($(".activePopup").outerHeight() / 2) + "px",
        t = -($(".activePopup").outerWidth() / 2) + "px";
    $(".activePopup").css({
        "margin-top": e,
        "margin-left": t,
        left: "50%",
        top: "50%"
    });
    var o = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);
    null != o && $(".with_text.activePopup").css({
        "margin-top": e,
        "margin-left": "0px",
        left: "0%",
        top: "50%"
    })
})

$(document).ready(function () {
    // <!-- SCRIPT OUIBOUNCE --> 
  var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
    aggressive: true,
    timer: 0,
    callback: function() { console.log('ouibounce fired!'); }
  });
  $('body').on('click', function() {
    $('#ouibounce-modal').hide();
  });
  $('#ouibounce-modal .modal-footer').on('click', function() {
    $('#ouibounce-modal').hide();
  });
  $('#ouibounce-modal .modal1').on('click', function(e) {
    e.stopPropagation();
  });
// <!-- END SCRIPT OUIBOUNCE -->

    // $(".telInput").mask("+999-999-999999",{placeholder:" "});

    $("#kor").click (function (){
        $('.con2').hide();
        $('.con1').show();
        $('#p3_shaga_panda').removeClass('p3_shaga_panda2');
        $('#p3_shaga_panda').addClass('p3_shaga_panda1');
        $('.p3_pod').removeClass('active_pod');
        $('.p3_kor').addClass('active_kor');
        document.getElementById('p3_shaga').style.height = '846px';
    });
    $("#pod").click (function (){
        $('.con2').show();
        $('.con1').hide();
        document.getElementById('p3_shaga').style.height = '1315px';
        $('#p3_shaga_panda').addClass('p3_shaga_panda2');
        $('#p3_shaga_panda').removeClass('p3_shaga_panda1');
        $('.p3_pod').addClass('active_pod');
        $('.p3_kor').removeClass('active_kor');
    });
});
$('.vk').click(function(){
    ga('send', 'event', 'knopka', 'vk');
});
$('.fb').click(function(){
    ga('send', 'event', 'knopka', 'fb');
});
$('.insta').click(function(){
    ga('send', 'event', 'knopka', 'insta');
});
$('.per').click(function(){
    ga('send', 'event', 'knopka', 'per');
});
$('.yt').click(function(){
    ga('send', 'event', 'knopka', 'yt');
});
$(document).ready (function () {
    $(".btn").click (function (){
        $('.loader_spin').show();
        $('input').removeClass('error');
        $form = $(this).parent();
        name = $('input[name="name"]', $form).val();
        email = $('input[name="email"]', $form).val ();
        phone = $('input[name="phone"]', $form).val ();
        load = $('input[name="load"]').val ();
        prefix = $('input[name="prefix"]').val ();
        referer = $('input[name="referer"]').val ();
        ref_url = $('input[name="ref_url"]').val ();
        formname = $('input[name="formname"]').val ();
        source = $('input[name="source"]').val ();
        medium = $('input[name="medium"]').val ();
        campaign = $('input[name="campaign"]').val ();
        content = $('input[name="content"]').val ();
        term = $('input[name="term"]').val ();
        vkprof = $('input[name="vkprof"]').val ();
        cityobu4enie = $('input[name="cityobu4enie"]',$form).val();
        spec = $('input[name="spec"]',$form).val();

        if(phone == '') {
            $('.phone', $form).addClass('error');
            console.log('error form');
            $('.loader_spin').hide();
            return false;
        }

     $.ajax ({
            url: "mail.php",
            type: 'POST',
            cache: false,
            data: { 'name':name, 
                    'email':email, 
                    'phone':phone, 
                    'prefix':prefix, 
                    'ref':referer,  
                    'formname':formname, 
                    'source':source, 
                    'medium':medium, 
                    'campaign':campaign, 
                    'content':content, 
                    'term':term}, 
            dataType: 'html',
            success: function (data) {
                thx();
            }
        });

        $('input[type="text"],input[type="tel"],input[type="email"]').each(function(){
            $(this).val('');
        });
                // end google
    });
});

$(".btn3").click (function (){
    $('input').removeClass('error');
    $form = $(this).parent();
    var email = $('input[name="email"]', $form).val ();

    if(name == '' || name == null || name == undefined){
        name = 'не заполнил';
    }
    if(email == '') {
        $('.email', $form).addClass('error');
        $('.loader_spin').hide();
         return false;
    }
    mailchimpsender();
});


function mailchimpsender(){
    $.ajax ({
        url: "//yourchina.us14.list-manage.com/subscribe/post?u=cfb88f8210ecd3c574562d10d&amp;id=8e143895ce",
        type: 'POST',
        cache: false,
        data: { 'FNAME':name, 
                'EMAIL':email, 
                'MMERGE4':phone     
            }, 
        dataType: 'html',
        success: function (data) {}
    });
    thx();
};

function listHeight(){
    var heights = [];
    var redHeight = $('div.half.red').height();
    $('div.listParent').each(function(){
        heights.push($(this).height());
    });
    var maxHeight = Math.max.apply(Math, heights);
    $('div.listParent').height(maxHeight);
    $('div.half.gray').height(redHeight);
}

$(function(){
    listHeight();
    $(window).resize(function(){
        listHeight();
    });

    //Показываем меню при прокрутке
    $(window).scroll(function(){

        var scrollTop = $(this).scrollTop();
        var fMenu = $('#fixedMenu');
        var fMenu_a = $('#fixedMenu a');

        if(scrollTop > 0) {
            $("#fixedMenu").slideDown(150);
        } else {
            $("#fixedMenu").slideUp(150);
        }

        var o_how_grant = $('#how_grant').offset().top - 200;
        var o_program_china = $('#program_china').offset().top - 200;
        var o_p3_shaga = $('#p3_shaga').offset().top - 200;
        var o_reviews_wr = $('#reviews_wr').offset().top - 200;
        var o_grants22 = $('#grants22').offset().top - 200;
        var o_live_wr = $('#live_wr').offset().top - 200;
        var o_food = $('#food').offset().top - 200;
        var o_contakty = $('#contakty').offset().top - 200;

       /* console.log("scropltop = " + scrollTop);
            console.log("o_enter = " + o_enter);
            console.log("o_univs = " + o_univs);
            console.log("o_videos =" + o_videos);*/

        if(scrollTop >= o_how_grant && scrollTop < o_program_china){
            console.log("111 - skoro budu");
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#how_grant"]').addClass('active');
        } else if(scrollTop >= o_program_china && scrollTop < o_p3_shaga){
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#program_china"]').addClass('active');
        } else if(scrollTop >= o_p3_shaga && scrollTop < o_reviews_wr) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#p3_shaga"]').addClass('active');
        } else if(scrollTop >= o_reviews_wr && scrollTop < o_grants22) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#reviews_wr"]').addClass('active');
        } else if(scrollTop >= o_grants22 && scrollTop < o_live_wr) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#grants22"]').addClass('active');
        } else if(scrollTop >= o_live_wr && scrollTop < o_food) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#live_wr"]').addClass('active');
        } else if(scrollTop >= o_food && scrollTop < o_contakty) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#food"]').addClass('active');
        } else if(scrollTop >= o_contakty) {
            fMenu_a.removeClass('active');
            fMenu.find('a[href="#contakty"]').addClass('active');
            console.log("222 - skoro budu");
            


        } else {
            fMenu_a.removeClass('active');
            console.log("333 - skoro budu");

        }

    });


    /* Крутилки-листалки */
    $("#ucarousel").owlCarousel({
        "items" : 1,
        "itemsDesktop": false,
        "itemsDesktopSmall": false,
        "itemsTablet" : false,
        "itemsTabletSmall": false,
        "itemsMobile": false,
    });

    $('#pcarousel').owlCarousel({
        "items" : 4,
        "itemsDesktop": false,
        "itemsDesktopSmall": false,
        "itemsTablet" : false,
        "itemsTabletSmall": false,
        "itemsMobile": false,
        "pagination": false,
        "navigation": true,
        "navigationText": ['<img src="/img/arr_left_w.png" />', '<img src="/img/arr_right_w.jpg" />']
    });

    $('#rcarousel').owlCarousel({
        "items" : 1,
        "itemsDesktop": false,
        "itemsDesktopSmall": false,
        "itemsTablet" : false,
        "itemsTabletSmall": false,
        "itemsMobile": false,
        "pagination": false,
        "navigation": true,
        "navigationText": ['<img src="/img/arr_left_w.png" />', '<img src="/img/arr_right_w.jpg" />']
    });

    $('#gcarousel').owlCarousel({
        "items" : 1,
        "itemsDesktop": false,
        "itemsDesktopSmall": false,
        "itemsTablet" : false,
        "itemsTabletSmall": false,
        "itemsMobile": false,
        "pagination": true,
    });
    /* /Крутилки-листалки */


});

// 8-02-2022
$(function() {
   $("input[name='phone']").each(function () {
       var iti = window.intlTelInput($(this)[0], {
            defaultCountry: 'auto',
            formatOnDisplay: true,
            hiddenInput: "full_number",
            preferredCountries: ['ru', 'kg', 'uz', 'tj'],
            utilsScript:'/js/utils.js',
        });
        $("input[name='phone']").on("countrychange", function(event) {
            var selectedCountryData = iti.getSelectedCountryData();
            newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),
            iti.setNumber("");
            mask = newPlaceholder.replace(/[1-9]/g, "0");
            $(this).mask(mask);
        });
        iti.promise.then(function() {
            $("input[name='phone']").trigger("countrychange");
        });
    });
    
});