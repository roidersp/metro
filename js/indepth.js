var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="86372c07-97fa-42ba-b6cd-a12f3be067e3";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

$(document).on("click",".indepth_menu_item",function(){
		 console.log("test");
		 var num_menu=$(this).attr("num");
		 var position = $("#indepth_distrito"+num_menu).position();
		 var f_top
		 if(detect_mobile()){
			 f_top=position.top-61;
		 }else{
			 f_top=position.top;
		 }
		$('html, body').animate({
			scrollTop: f_top
		}, 000);
	 });

var indepth_skrllr=function(){
	 var s = skrollr.init();

}

var indepth_menu=function(){
	$('.indepth_cover').waypoint(function(direction) {
		$("#indepth_menu").fadeOut();
		$(".indepth_share").fadeOut();
	});
	
	 $('#indepth_distrito0').waypoint(function(direction) {
		 if(direction=='down'){
			 $("#indepth_menu").fadeIn("slow");
			 $(".indepth_share").fadeIn("slow");
		 }else{
			  $("#indepth_menu").fadeOut();
			   $(".indepth_share").fadeOut();
		 }
		 
		 $("#indepth_menu").show();
		  $(".indepth_share").show();
		 $(".indepth_menu").removeClass("active");
		 var num_menu=$(this).attr("num");
		 $("#indepth_menu_0").addClass("active");
		 
		
	});
	
	 $('#indepth_footer').waypoint(function(direction) {
		 if(direction=='down'){
			 $("#indepth_menu").fadeOut();
			 $(".indepth_share").fadeOut("slow");
		 }else{
			  $("#indepth_menu").fadeIn("slow");
			  $(".indepth_share").fadeIn("slow");
		 }
		 
		
	},{offset: 'bottom-in-view'});
	
	
	
	
	$(".indepth_distritos").waypoint(function(direction){
		 $("#indepth_menu").show();
		 $(".indepth_share").show();
		 $(".indepth_menu_item").removeClass("active");
		 var num_menu=$(this).attr("num");
		 $("#indepth_menu_"+num_menu).addClass("active");		 
	},{offset: '70px'});
	
	$(".indepth_distritos").waypoint(function(direction){
		 $("#indepth_menu").show();
		 $(".indepth_share").show();
		 $(".indepth_menu_item").removeClass("active");
		 var num_menu=$(this).attr("num");
		 $("#indepth_menu_"+num_menu).addClass("active");
		 
	},{offset: 'bottom-in-view'});
	
	$("#indepth_distritos").waypoint(function(direction){
		$(".indepth_menu_item").removeClass("active");
		 $("#indepth_menu_0").addClass("active");
	},{offset: 'bottom-in-view'});
	
	 $("#indepth_menu").hide();
	 
	 

}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};





indepth_sizeAdjust(true);

$(".iframe").ready(function(){
	$(".iframe .player .rounded-box").css("background","rgba(176, 215, 0, 0.75)");
})




function orientacionCambiada()
{
    if (window.matchMedia("(orientation: portrait)").matches) {
  alert("portrait");
}

if (window.matchMedia("(orientation: landscape)").matches) {
	alert("landscape");
   // you're in LANDSCAPE mode
}
}

    if (window.matchMedia("(orientation: portrait)").matches) {
  alert("portrait");
}

if (window.matchMedia("(orientation: landscape)").matches) {
	alert("landscape");
   // you're in LANDSCAPE mode
}

window.addEventListener("orientationchange", orientacionCambiada, false);


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_menu();
	indepth_skrllr();
	var ventana_alto = $(window).height();
	var mobile=detect_mobile();
	if(!mobile){
		
		var dta_ventana=ventana_alto-60-(ventana_alto*.20);
		$('#indepth_cover').css("height",(ventana_alto-60-(ventana_alto*.20))+"px");
		$('#indepth_cover').attr("data-0","height:"+(dta_ventana)+"px");
		$('#indepth_cover').attr("data-50","height:"+(dta_ventana*.75)+"px;");
		$('#indepth_cover').attr("data-100","height:"+(dta_ventana*.50)+"px;");
		$('#indepth_cover').attr("data-1500","height:"+(dta_ventana*.60)+"px;");
		
	}else{
		$('#indepth_cover').css("height",(ventana_alto-60)+"px");
	}
	indepth_preloadImgs();
	
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
			 $('#indepth_cover_view').css("position","absolute");
    }else{
    	
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",(ventana_alto*.80)+"px");


	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		var ventana_alto = $(window).height();
    	
    	 if(ventana_alto>600){
	 	
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
		
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    var ventana_alto = $(window).height();
	var mobile=detect_mobile();
	if(!mobile){
		var dta_ventana=ventana_alto-60-(ventana_alto*.20);
		$('#indepth_cover').css("height",(ventana_alto-60-(ventana_alto*.20))+"px");
		$('#indepth_cover').attr("data-0","height:"+(dta_ventana)+"px;margin-top:0px;");
		$('#indepth_cover').attr("data-50","height:"+(dta_ventana*.75)+"px;margin-top:50px;");
		$('#indepth_cover').attr("data-100","height:"+(dta_ventana*.50)+"px;margin-top:100px;");
		$('#indepth_cover').attr("data-1500","height:"+(dta_ventana*.60)+"px;margin-top:150px;");
		indepth_skrllr();
	}else{
		$('#indepth_cover').css("height",(ventana_alto-60)+"px");
	}
})