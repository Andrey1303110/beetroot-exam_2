function initMap() {
    var customIcon = "./img/icons/pin.png";
      var uluru = {lat: 49.230745, lng: 28.442362};
      var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    var marker = new google.maps.Marker({position: uluru, icon: customIcon, map: map});
}

function ekran () {
  alert (`Ширина экрана = ${window.innerWidth} Высота экрана = ${window.innerHeight}`)
}

ekran ();

