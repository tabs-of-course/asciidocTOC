const div_ids = [];
const link_ids = [];
const content_ids = [];

var slider_paddingLeft_div             = document.getElementById("paddingLeft_div");
var slider_paddingTop_div              = document.getElementById("paddingTop_div");
var slider_paddingRight_div            = document.getElementById("paddingRight_div");
var slider_paddingBottom_div           = document.getElementById("paddingBottom_div");

var slider_paddingLeft_div_val         = document.getElementById("paddingLeft_div_val");
var slider_paddingTop_div_val          = document.getElementById("paddingTop_div_val");
var slider_paddingRight_div_val        = document.getElementById("paddingRight_div_val");
var slider_paddingBottom_div_val       = document.getElementById("paddingBottom_div_val");


var slider_paddingLeft_content          = document.getElementById("paddingLeft_content");
var slider_paddingTop_content           = document.getElementById("paddingTop_content");
var slider_paddingRight_content         = document.getElementById("paddingRight_content");
var slider_paddingBottom_content        = document.getElementById("paddingBottom_content");

var slider_paddingLeft_content_val      = document.getElementById("paddingLeft_content_val");
var slider_paddingTop_content_val       = document.getElementById("paddingTop_content_val");
var slider_paddingRight_content_val     = document.getElementById("paddingRight_content_val");
var slider_paddingBottom_content_val    = document.getElementById("paddingBottom_content_val");

var slider_fontsize_div                 = document.getElementById("fontsize_div");
var slider_fontsize_div_val             = document.getElementById("fontsize_div_val");

var slider_fontsize_content             = document.getElementById("fontsize_content");
var slider_fontsize_content_val         = document.getElementById("fontsize_content_val");

var button_closeAll                     = document.getElementById("close_all");
var button_openAll                      = document.getElementById("open_all");

var picker_color_div_BG                 = document.getElementById("color_div_BG");
var picker_color_link                   = document.getElementById("color_link");

var picker_color_div_BG_f                 = document.getElementById("color_div_BG_f");
var picker_color_link_f                   = document.getElementById("color_link_f");

  

div_ids[0] = document.getElementById("div_id_0");
div_ids[1] = document.getElementById("div_id_1");
div_ids[2] = document.getElementById("div_id_2");
div_ids[3] = document.getElementById("div_id_3");
div_ids[4] = document.getElementById("div_id_4");
div_ids[5] = document.getElementById("div_id_5");
div_ids[6] = document.getElementById("div_id_6");
div_ids[7] = document.getElementById("div_id_7");
div_ids[8] = document.getElementById("div_id_8");
div_ids[9] = document.getElementById("div_id_9");
div_ids[10] = document.getElementById("div_id_10");
div_ids[11] = document.getElementById("div_id_11");
div_ids[12] = document.getElementById("div_id_12");

link_ids[0] = document.getElementById("link_id_0");
link_ids[1] = document.getElementById("link_id_1");
link_ids[2] = document.getElementById("link_id_2");
link_ids[3] = document.getElementById("link_id_3");
link_ids[4] = document.getElementById("link_id_4");
link_ids[5] = document.getElementById("link_id_5");
link_ids[6] = document.getElementById("link_id_6");
link_ids[7] = document.getElementById("link_id_7");
link_ids[8] = document.getElementById("link_id_8");
link_ids[9] = document.getElementById("link_id_9");
link_ids[10] = document.getElementById("link_id_10");
link_ids[11] = document.getElementById("link_id_11");
link_ids[12] = document.getElementById("link_id_12");

content_ids[0] = document.getElementById("content_id_0");
content_ids[1] = document.getElementById("content_id_1");
content_ids[2] = document.getElementById("content_id_2");
content_ids[3] = document.getElementById("content_id_3");
content_ids[4] = document.getElementById("content_id_4");
content_ids[5] = document.getElementById("content_id_5");
content_ids[6] = document.getElementById("content_id_6");
content_ids[7] = document.getElementById("content_id_7");
content_ids[8] = document.getElementById("content_id_8");
content_ids[9] = document.getElementById("content_id_9");
content_ids[10] = document.getElementById("content_id_10");
content_ids[11] = document.getElementById("content_id_11");
content_ids[12] = document.getElementById("content_id_12");


slider_paddingLeft_div.addEventListener('input', function() {
    slider_paddingLeft_div_val.innerText = slider_paddingLeft_div.value + "px";

    div_ids.forEach(element => {
        element.style.paddingLeft = slider_paddingLeft_div.value + "px";
    });

});
slider_paddingTop_div.addEventListener('input', function() {
    slider_paddingTop_div_val.innerText = slider_paddingTop_div.value + "px";

    div_ids.forEach(element => {
        element.style.paddingTop = slider_paddingTop_div.value + "px";
    });

});
slider_paddingRight_div.addEventListener('input', function() {
    slider_paddingRight_div_val.innerText = slider_paddingRight_div.value + "px";

    div_ids.forEach(element => {
        element.style.paddingRight = slider_paddingRight_div.value + "px";
    });

});
slider_paddingBottom_div.addEventListener('input', function() {
    slider_paddingBottom_div_val.innerText = slider_paddingBottom_div.value + "px";

    div_ids.forEach(element => {
        element.style.paddingBottom = slider_paddingBottom_div.value + "px";
    });

});

slider_paddingLeft_content.addEventListener('input', function() {
    slider_paddingLeft_content_val.innerText = slider_paddingLeft_content.value + "px";

    content_ids.forEach(element => {
        element.style.paddingLeft = slider_paddingLeft_content.value + "px";
    });

});
slider_paddingTop_content.addEventListener('input', function() {
    slider_paddingTop_content_val.innerText = slider_paddingTop_content.value + "px";

    content_ids.forEach(element => {
        element.style.paddingTop = slider_paddingTop_content.value + "px";
    });

});
slider_paddingRight_content.addEventListener('input', function() {
    slider_paddingRight_content_val.innerText = slider_paddingRight_content.value + "px";

    content_ids.forEach(element => {
        element.style.paddingRight = slider_paddingRight_content.value + "px";
    });

});
slider_paddingBottom_content.addEventListener('input', function() {
    slider_paddingBottom_content_val.innerText = slider_paddingBottom_content.value + "px";

    content_ids.forEach(element => {
        element.style.paddingBottom = slider_paddingBottom_content.value + "px";
    });

});

slider_fontsize_div.addEventListener('input', function() {
    slider_fontsize_div_val.innerText = slider_fontsize_div.value + "px";

    div_ids.forEach(element => {
        element.style.fontSize = slider_fontsize_div.value + "px";
    });

});

slider_fontsize_content.addEventListener('input', function() {
    slider_fontsize_content_val.innerText = slider_fontsize_content.value + "px";

    content_ids.forEach(element => {
        element.style.fontSize = slider_fontsize_content.value + "px";
    });

});

button_closeAll.addEventListener('click', function() {


    div_ids.forEach(element => {
        element.setAttribute("open", "");
    });

});

button_openAll.addEventListener('click', function() {


    div_ids.forEach(element => {
        element.setAttribute("open", "open");
    });

});

picker_color_div_BG.addEventListener('input', function() {


    div_ids.forEach(element => {
        element.style.backgroundColor = picker_color_div_BG.value;
    });

});


picker_color_link.addEventListener('input', function() {


    link_ids.forEach(element => {
        element.style.color = picker_color_link.value;
    });
    

});

picker_color_div_BG_f.addEventListener('input', function() {


    div_ids.forEach(element => {
        element.style.backgroundColor = picker_color_div_BG_f.value;
    });

});


picker_color_link_f.addEventListener('input', function() {


    link_ids.forEach(element => {
        element.style.color = picker_color_link_f.value;
    });
    

});
