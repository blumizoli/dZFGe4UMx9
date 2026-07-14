var size = 0;
var placement = 'point';

var style_vasttengely_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#c71932";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("LINE_NO") !== null) {
        labelText = String(feature.get("LINE_NO"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(199,25,50,1.0)', lineDash: [1.9,3.8], lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
