var fotorama;
$(function () {
	// 1. Initialize fotorama manually.
	var $fotoramaDiv = $('#fotorama').fotorama();

	// 2. Get the API object.
	fotorama = $fotoramaDiv.data('fotorama');


    $('#fotorama')
        .on('mouseover', function (e) {
           $('#zoom_area').show();

          


        })
        .on('mousemove', function (e) {
        	var lens, cx, cy, img, result;
		  	img = $('.fotorama__active').find('img').first()[0]; 
		  	result = document.getElementById("zoomer");
		    cx = result.offsetWidth / 40;
  			cy = result.offsetHeight / 40;


  			 var pos, x, y;
		    result.style.backgroundImage = "url('" + img.src + "')";
		    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

		    /*prevent any other actions that may occur when moving over the image:*/
		    e.preventDefault();
		    /*get the cursor's x and y positions:*/
		    pos = getCursorPos(e);
		    /*calculate the position of the lens:*/

		    x = pos.x - (20);
		    y = pos.y - (20);
		    /*prevent the lens from being positioned outside the image:*/
		    if (x > img.width - 40) {
		      x = img.width - 40;
		    }
		    if (x < 0) {
		      x = 0;
		    }
		    if (y > img.height - 40) {
		      y = img.height - 40;
		    }
		    if (y < 0) {
		      y = 0;
		    }
		    /*display what the lens "sees":*/
		    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
			function getCursorPos(e) {
			    var a, x = 0,
			      y = 0;
			    e = e || window.event;
			    /*get the x and y positions of the image:*/
			    a = img.getBoundingClientRect();
			    /*calculate the cursor's x and y coordinates, relative to the image:*/
			    x = e.pageX - a.left;
			    y = e.pageY - a.top;
			    /*consider any page scrolling:*/
			    x = x - window.pageXOffset;
			    y = y - window.pageYOffset;
			    return {
			      x: x,
			      y: y
			    };
			}


		   
        })
        .on('mouseout', function (e) {
            $('#zoom_area').hide();
        });

}); 

 
function zoom_ayarla (x,y, image) {
	console.log(x,y, image);
}


function  change_image (deger) {
	fotorama.show(deger);

}



function tum_fiyat_dusurenler (urun_id) {


	$.getJSON(home_url+'Product/all/'+urun_id, function(data) { 
		var veri = '<ul class="islem_gecmisi_tam">'; 
		$.each(data, function( index, value ) {
			console.log(value);
		 	veri += '<li><div class="kullanan"> <b>'+(index+1)+'.</b> '+value.eposta+'</div><div class="zaman">'+moment(parseInt(value.zaman)).format('DD/MM/YYYY HH:mm:ss')+'</div></li>';
		});

		veri += '</ul>';

		bootbox.alert({
		    title: "Son Fiyata bakanların tam listesi",
		    message: veri,
		    className: 'listem'
		 });

     }); 	



}





