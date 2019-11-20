function init_map() {
	var var_location = new google.maps.LatLng(47.0504148,8.2975875);

	var var_mapoptions = {
	  center: var_location,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapTypeControl: true,
	  panControl:false,
	  rotateControl:false,
	  streetViewControl: true,
		scrollwheel: false,
	  styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
	};

	/* var var_marker = new google.maps.Marker({
		position: var_location,
		map: var_map,
		title:"Office"}); */

	var var_map = new google.maps.Map(document.getElementById("map-canvas"),
		var_mapoptions);

	/* var_marker.setMap(var_map);	 */
	
	var contentString = 
			'<div id="infowindow_content">'+
            '<p><strong>AXON IVY</strong><br>'+
            'Schloessli Schoenegg<br>' +
						'Wilhelmshoehe<br>' +
            '6003 Lucerne'+
            '</div>';
 
        var var_infowindow = new google.maps.InfoWindow({
            content: contentString,
			position: var_location
          });
 
		var_infowindow.open(var_map);
	}

google.maps.event.addDomListener(window, 'load', init_map);