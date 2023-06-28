

/*
Potree.loadPointCloud("assets/05_POTREEDATA/pointclouds/index/cloud.js", "pointcloud", e => {
    let pointcloud = e.pointcloud;
    let material = pointcloud.material;
    viewer.scene.addPointCloud(pointcloud);
    material.pointColorType = Potree.PointColorType.RGB; // any Potree.PointColorType.XXXX
    material.size = 1;
    material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
    material.shape = Potree.PointShape.SQUARE;
    viewer.fitToScreen();
});
*/

// https://github.com/tentone/potree-core 
/*

Potree.PointColorType.RGB
Potree.PointColorType.COLOR
Potree.PointColorType.DEPTH
Potree.PointColorType.HEIGHT
Potree.PointColorType.INTENSITY
Potree.PointColorType.INTENSITY_GRADIENT
Potree.PointColorType.LOD
Potree.PointColorType.POINT_INDEX
Potree.PointColorType.CLASSIFICATION
Potree.PointColorType.RETURN_NUMBER
Potree.PointColorType.SOURCE
Potree.PointColorType.NORMAL
Potree.PointColorType.PHONG
Potree.PointColorType.RGB_HEIGHT
*/




// -----------------------------------------------
// laad een Geopackage
// -----------------------------------------------

//
/*
proj4.defs("WGS84", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");
//proj4.defs("pointcloud", viewer.getProjection());
proj4.defs("pointcloud", viewer.scene.pointclouds[0].projection);
const params = {
	transform: proj4("WGS84", "pointcloud"),
};


const params = {
};

const url = "./assets/PUNTENWOLK_N395/N395 klein demo - voorbeeld lijnen.gpkg";
//const geopackage = await Potree.GeoPackageLoader.loadUrl(url, params);
const geopackage = Potree.GeoPackageLoader.loadUrl(url, params);
viewer.scene.addGeopackage(geopackage);

*/
//
// -----------------------------------------------



