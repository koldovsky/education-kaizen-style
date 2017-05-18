$(function() {
    // $(window).scroll(kaizenInfoSlideInView);
    // $('#kaizen-info-slide').on('impress:stepenter', function(){
    //     enableDevopsCss();
    // });
});

var enableBwCss = function(){
    disableDevopsCss();
    disableEffectsCss();
};

var enableDevopsCss = function(){
    document.body.classList.add("devopsy");
    disableEffectsCss();
};

var disableDevopsCss = function(){
    document.body.classList.remove("devopsy");
};

var enableEffectsCss = function(){
    document.body.classList.add("effects");
    disableDevopsCss();
};

var disableEffectsCss = function(){
    document.body.classList.remove("effects");
};


function kaizenInfoSlideInView() {
    if (isScrolledIntoView('#kaizen-info-slide')) {
        enableDevopsCss();
    } else {
        enableBwCss();
    }
}



