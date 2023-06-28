var mymap = L.map('leafletmap', {
	center: [52, 6],
    zoom: 13,
    maxZoom: 23,
    minZoom: 3,
    detectRetina: true, // detect whether the sceen is high resolution or not.
    attributionControl: false
});

var mybounds = [[51, 5],[53, 7]];

// Add Basemap
//L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);
// L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{


L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

/*
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 13,
    maxZoom: 23,
    attributionControl: false
}).addTo(mymap);
*/


// ORTHO KAART WMS
/*
var tiles = L.tileLayer('http://research.engr.oregonstate.edu/lidar/pointcloud/20171107_USVI/googlemaps/DiviCarinaBay_ortho_10mm_googlemaps/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 22,
    minNativeZoom: 13,
    maxZoom: 23,
    noWrap: true,
    bounds: mybounds,
    attributionControl: false
}).addTo(mymap);
*/

L.control.attribution({position: 'bottomleft'}).addTo(mymap);

var uasmarker=new L.marker([0,0], {
    draggable: true,
    icon: L.divIcon({
        html: '<i class="fa fa-circle "></i>',
        iconSize: [10, 10],
        className: 'cammarker'
    })
});

// Uncaught ReferenceError: markerdragged is not defined --> daarom volgende rege uitgecommenteerd
// uasmarker.on("drag",markerdragged);

var lookatmarker=new L.marker([0,0], {
    icon: L.divIcon({
        html: '<i class="fa fa-circle "></i>',
        iconSize: [10, 10],
        className: 'camlookatmarker'
    })
});


var camerafootprintpolygon=new L.Polygon([[0,0],[0,0],[0,0],[0,0]],{color:'orange', weight: 5, className: 'camerafootprint'});

var imagefootprintpolygon=new L.Polygon([[0,0],[0,0],[0,0],[0,0]],{color:'cyan', weight: 5, className: 'imagefootprint'});

uasmarker.addTo(mymap);
lookatmarker.addTo(mymap);
camerafootprintpolygon.addTo(mymap);
imagefootprintpolygon.addTo(mymap);
