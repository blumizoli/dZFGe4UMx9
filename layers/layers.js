var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Bpkerlet_2 = new ol.format.GeoJSON();
var features_Bpkerlet_2 = format_Bpkerlet_2.readFeatures(json_Bpkerlet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bpkerlet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bpkerlet_2.addFeatures(features_Bpkerlet_2);
var lyr_Bpkerlet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bpkerlet_2, 
                style: style_Bpkerlet_2,
                popuplayertitle: 'Bp. kerület',
                interactive: false,
                title: '<img src="styles/legend/Bpkerlet_2.png" /> Bp. kerület'
            });
var format_Klterlet_3 = new ol.format.GeoJSON();
var features_Klterlet_3 = format_Klterlet_3.readFeatures(json_Klterlet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klterlet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klterlet_3.addFeatures(features_Klterlet_3);
var lyr_Klterlet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klterlet_3, 
                style: style_Klterlet_3,
                popuplayertitle: 'Külterület',
                interactive: false,
                title: '<img src="styles/legend/Klterlet_3.png" /> Külterület'
            });
var format_Belterlet_4 = new ol.format.GeoJSON();
var features_Belterlet_4 = format_Belterlet_4.readFeatures(json_Belterlet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belterlet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belterlet_4.addFeatures(features_Belterlet_4);
var lyr_Belterlet_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belterlet_4, 
                style: style_Belterlet_4,
                popuplayertitle: 'Belterület',
                interactive: true,
                title: '<img src="styles/legend/Belterlet_4.png" /> Belterület'
            });
var format_Megye_5 = new ol.format.GeoJSON();
var features_Megye_5 = format_Megye_5.readFeatures(json_Megye_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Megye_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Megye_5.addFeatures(features_Megye_5);
var lyr_Megye_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Megye_5, 
                style: style_Megye_5,
                popuplayertitle: 'Megye',
                interactive: true,
                title: '<img src="styles/legend/Megye_5.png" /> Megye'
            });
var format_vasttengely_6 = new ol.format.GeoJSON();
var features_vasttengely_6 = format_vasttengely_6.readFeatures(json_vasttengely_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vasttengely_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vasttengely_6.addFeatures(features_vasttengely_6);
var lyr_vasttengely_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vasttengely_6, 
                style: style_vasttengely_6,
                popuplayertitle: 'vasúttengely',
                interactive: false,
                title: '<img src="styles/legend/vasttengely_6.png" /> vasúttengely'
            });
var format_hmszelvny_7 = new ol.format.GeoJSON();
var features_hmszelvny_7 = format_hmszelvny_7.readFeatures(json_hmszelvny_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hmszelvny_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hmszelvny_7.addFeatures(features_hmszelvny_7);
var lyr_hmszelvny_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hmszelvny_7,
maxResolution:3.500558269032745,
 
                style: style_hmszelvny_7,
                popuplayertitle: 'hm szelvény',
                interactive: false,
                title: '<img src="styles/legend/hmszelvny_7.png" /> hm szelvény'
            });
var format_ttengely_8 = new ol.format.GeoJSON();
var features_ttengely_8 = format_ttengely_8.readFeatures(json_ttengely_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ttengely_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ttengely_8.addFeatures(features_ttengely_8);
var lyr_ttengely_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ttengely_8, 
                style: style_ttengely_8,
                popuplayertitle: 'úttengely',
                interactive: false,
                title: '<img src="styles/legend/ttengely_8.png" /> úttengely'
            });
var format_kmszelvny_9 = new ol.format.GeoJSON();
var features_kmszelvny_9 = format_kmszelvny_9.readFeatures(json_kmszelvny_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kmszelvny_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kmszelvny_9.addFeatures(features_kmszelvny_9);
var lyr_kmszelvny_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kmszelvny_9,
maxResolution:22.403572921809573,
 
                style: style_kmszelvny_9,
                popuplayertitle: 'km szelvény',
                interactive: false,
                title: '<img src="styles/legend/kmszelvny_9.png" /> km szelvény'
            });
var format_Zajrnykolfal_10 = new ol.format.GeoJSON();
var features_Zajrnykolfal_10 = format_Zajrnykolfal_10.readFeatures(json_Zajrnykolfal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zajrnykolfal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zajrnykolfal_10.addFeatures(features_Zajrnykolfal_10);
var lyr_Zajrnykolfal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zajrnykolfal_10, 
                style: style_Zajrnykolfal_10,
                popuplayertitle: 'Zajárnyékoló fal',
                interactive: true,
                title: '<img src="styles/legend/Zajrnykolfal_10.png" /> Zajárnyékoló fal'
            });
var group_Zajrnykolfal = new ol.layer.Group({
                                layers: [lyr_Zajrnykolfal_10,],
                                fold: 'close',
                                title: 'Zajárnyékoló fal'});
var group_Kzt = new ol.layer.Group({
                                layers: [lyr_ttengely_8,lyr_kmszelvny_9,],
                                fold: 'open',
                                title: 'Közút'});
var group_Vast = new ol.layer.Group({
                                layers: [lyr_vasttengely_6,lyr_hmszelvny_7,],
                                fold: 'open',
                                title: 'Vasút'});
var group_Kzigazgats = new ol.layer.Group({
                                layers: [lyr_Bpkerlet_2,lyr_Klterlet_3,lyr_Belterlet_4,lyr_Megye_5,],
                                fold: 'open',
                                title: 'Közigazgatás'});
var group_Alaprteg = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,],
                                fold: 'open',
                                title: 'Alapréteg'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_Bpkerlet_2.setVisible(true);lyr_Klterlet_3.setVisible(true);lyr_Belterlet_4.setVisible(true);lyr_Megye_5.setVisible(true);lyr_vasttengely_6.setVisible(true);lyr_hmszelvny_7.setVisible(true);lyr_ttengely_8.setVisible(true);lyr_kmszelvny_9.setVisible(true);lyr_Zajrnykolfal_10.setVisible(true);
var layersList = [group_Alaprteg,group_Kzigazgats,group_Vast,group_Kzt,group_Zajrnykolfal];
lyr_Bpkerlet_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Namelc': 'Namelc', 'A8id': 'A8id', 'MI_STYLE': 'MI_STYLE', 'MI_PRINX': 'MI_PRINX', });
lyr_Klterlet_3.set('fieldAliases', {'fid': 'fid', 'NUTS5NAME': 'NUTS5NAME', 'NUTS5KSH': 'NUTS5KSH', 'NUTS5RANG': 'NUTS5RANG', 'NUTS4NAME': 'NUTS4NAME', 'NUTS4CODE': 'NUTS4CODE', 'NUTS4CENTE': 'NUTS4CENTE', 'NUTS3NAME': 'NUTS3NAME', 'NUTS3CODE': 'NUTS3CODE', 'NUTS2NAME': 'NUTS2NAME', 'NUTS2CODE': 'NUTS2CODE', 'NUTS1NAME': 'NUTS1NAME', 'NUTS1CODE': 'NUTS1CODE', 'NUTS0NAME': 'NUTS0NAME', 'NUTS0CODE': 'NUTS0CODE', 'PLACE': 'PLACE', 'ZIP': 'ZIP', 'NEPESSEG20': 'NEPESSEG20', 'NO20180101': 'NO20180101', 'FERFI20180': 'FERFI20180', 'JARASNEV': 'JARASNEV', 'JARASKOZPO': 'JARASKOZPO', 'JARASKOD': 'JARASKOD', });
lyr_Belterlet_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Name': 'Name', 'Namelc': 'Namelc', 'A8id': 'A8id', 'Adminclass': 'Adminclass', 'MI_STYLE': 'MI_STYLE', 'MI_PRINX': 'MI_PRINX', 'area': 'area', });
lyr_Megye_5.set('fieldAliases', {'NUTS5NAME': 'NUTS5NAME', 'NUTS5KSH': 'NUTS5KSH', 'NUTS5RANG': 'NUTS5RANG', 'NUTS4NAME': 'NUTS4NAME', 'NUTS4CODE': 'NUTS4CODE', 'NUTS4CENTE': 'NUTS4CENTE', 'NUTS3NAME': 'NUTS3NAME', 'NUTS3CODE': 'NUTS3CODE', 'NUTS2NAME': 'NUTS2NAME', 'NUTS2CODE': 'NUTS2CODE', 'NUTS1NAME': 'NUTS1NAME', 'NUTS1CODE': 'NUTS1CODE', 'NUTS0NAME': 'NUTS0NAME', 'NUTS0CODE': 'NUTS0CODE', 'PLACE': 'PLACE', 'ZIP': 'ZIP', 'NEPESSEG20': 'NEPESSEG20', 'NO20120101': 'NO20120101', 'FERFI20120': 'FERFI20120', 'done': 'done', });
lyr_vasttengely_6.set('fieldAliases', {'GEODBID': 'GEODBID', 'NAME': 'NAME', 'LINE_NO': 'LINE_NO', 'BRIDGE': 'BRIDGE', 'D_B_L': 'D_B_L', 'D_B_R': 'D_B_R', 'B_W_L': 'B_W_L', 'B_W_R': 'B_W_R', 'BTHICKESS': 'BTHICKESS', 'LREF_LOS_L': 'LREF_LOS_L', 'LREF_LOS_R': 'LREF_LOS_R', 'RREF_LOS_R': 'RREF_LOS_R', 'RREF_LOS_L': 'RREF_LOS_L', 'CON_H_L': 'CON_H_L', 'CON_H_R': 'CON_H_R', 'EMI_CALC': 'EMI_CALC', 'TRACKBASE': 'TRACKBASE', 'RAILROUGH': 'RAILROUGH', 'RAILJOINTS': 'RAILJOINTS', 'RADIUS': 'RADIUS', 'B_TRANSFER': 'B_TRANSFER', 'ELONGATION': 'ELONGATION', 'NOISEMAP': 'NOISEMAP', });
lyr_hmszelvny_7.set('fieldAliases', {'FID': 'FID', 'SZELV_SZAM': 'SZELV_SZAM', 'ZONA_FID': 'ZONA_FID', 'HUSZ': 'HUSZ', 'GEOM_Y': 'GEOM_Y', 'GEOM_X': 'GEOM_X', 'szelv': 'szelv', });
lyr_ttengely_8.set('fieldAliases', {'KEZD': 'KEZD', 'VEGE': 'VEGE', 'KSZAM': 'KSZAM', 'UTNEV': 'UTNEV', 'PKOD': 'PKOD', 'KKOD': 'KKOD', 'VKOD': 'VKOD', 'KEKM': 'KEKM', 'KEMT': 'KEMT', 'VEKM': 'VEKM', 'VEMT': 'VEMT', 'KWGSX': 'KWGSX', 'KWGSY': 'KWGSY', 'VWGSX': 'VWGSX', 'VWGSY': 'VWGSY', 'RSHOSSZ': 'RSHOSSZ', 'SZHO': 'SZHO', 'KUTKA': 'KUTKA', 'NUTKA': 'NUTKA', 'NUTKA1': 'NUTKA1', 'NUTKA2': 'NUTKA2', 'SZAKJEL': 'SZAKJEL', 'KFAZON': 'KFAZON', 'KFTIP': 'KFTIP', 'KFMEGJ': 'KFMEGJ', 'FSVV': 'FSVV', 'SAVOSSZ': 'SAVOSSZ', 'ONGJ': 'ONGJ', 'OJ': 'OJ', 'OMOT': 'OMOT', 'EV': 'EV', 'ASZ': 'ASZ', 'BUSZCS': 'BUSZCS', 'BUSZE': 'BUSZE', 'OBUSZ': 'OBUSZ', 'NYSZER': 'NYSZER', 'POTKTGK': 'POTKTGK', 'KTGK': 'KTGK', 'NTGK': 'NTGK', 'KNTGK': 'KNTGK', 'OTGK': 'OTGK', 'SZGK': 'SZGK', 'OSZGK': 'OSZGK', 'MKP': 'MKP', 'KPF': 'KPF', 'LASSU': 'LASSU', 'SPEC': 'SPEC', 'JELLEG1': 'JELLEG1', 'JELLEG2': 'JELLEG2', 'SEBKTIP': 'SEBKTIP', 'SEBKORL': 'SEBKORL', 'SEBKOK': 'SEBKOK', 'SEBKIR': 'SEBKIR', 'SEBKD': 'SEBKD', 'SEBVD': 'SEBVD', 'SEBKIEG': 'SEBKIEG', 'SEBMEGJ': 'SEBMEGJ', 'SEBKEZD': 'SEBKEZD', 'SEBVEG': 'SEBVEG', 'KORFORG': 'KORFORG', 'ZAJTERK': 'ZAJTERK', 'AKAT1': 'AKAT1', 'AKAT2': 'AKAT2', 'AKAT3': 'AKAT3', 'ZAJ_TEMP': 'ZAJ_TEMP', 'V_1': 'V_1', 'V_2-3': 'V_2-3', 'T_na_akat1': 'T_na_akat1', 'T_na_akat2': 'T_na_akat2', 'T_na_akat3': 'T_na_akat3', 'T_es_akat1': 'T_es_akat1', 'T_es_akat2': 'T_es_akat2', 'T_es_akat3': 'T_es_akat3', 'T_ej_akat1': 'T_ej_akat1', 'T_ej_akat2': 'T_ej_akat2', 'T_ej_akat3': 'T_ej_akat3', 'HOSSZABBIT': 'HOSSZABBIT', 'S_Leq_nap': 'S_Leq_nap', 'S_Leq_este': 'S_Leq_este', 'S_Leq_ejj': 'S_Leq_ejj', 'Fh_ak1_na': 'Fh_ak1_na', 'Fh_ak2_na': 'Fh_ak2_na', 'Fh_ak3_na': 'Fh_ak3_na', 'Fh_ak1_es': 'Fh_ak1_es', 'Fh_ak2_es': 'Fh_ak2_es', 'Fh_ak3_es': 'Fh_ak3_es', 'Fh_ak1_ej': 'Fh_ak1_ej', 'Fh_ak2_ej': 'Fh_ak2_ej', 'Fh_ak3_ej': 'Fh_ak3_ej', 'id': 'id', 'length': 'length', });
lyr_kmszelvny_9.set('fieldAliases', {'KEZD': 'KEZD', 'VEGE': 'VEGE', 'KSZAM': 'KSZAM', 'UTNEV': 'UTNEV', 'PKOD': 'PKOD', 'KKOD': 'KKOD', 'VKOD': 'VKOD', 'KSZELV': 'KSZELV', 'VSZELV': 'VSZELV', 'KEKM': 'KEKM', 'KEMT': 'KEMT', 'VEKM': 'VEKM', 'VEMT': 'VEMT', 'KEOVX': 'KEOVX', 'KEOVY': 'KEOVY', 'VEOVX': 'VEOVX', 'VEOVY': 'VEOVY', 'KWGSX': 'KWGSX', 'KWGSY': 'KWGSY', 'VWGSX': 'VWGSX', 'VWGSY': 'VWGSY', 'RSHOSSZ': 'RSHOSSZ', 'SZHO': 'SZHO', 'KUTKA': 'KUTKA', 'NUTKA': 'NUTKA', 'NUTKA1': 'NUTKA1', 'NUTKA2': 'NUTKA2', 'SZAKJEL': 'SZAKJEL', 'KFAZON': 'KFAZON', 'KFTIP': 'KFTIP', 'KFRB': 'KFRB', 'KFRK': 'KFRK', 'KFMEGJ': 'KFMEGJ', 'FSVV': 'FSVV', 'SAVOSSZ': 'SAVOSSZ', 'ONGJ': 'ONGJ', 'OJ': 'OJ', 'OMOT': 'OMOT', 'EV': 'EV', 'ASZ': 'ASZ', 'BUSZCS': 'BUSZCS', 'BUSZE': 'BUSZE', 'OBUSZ': 'OBUSZ', 'NYSZER': 'NYSZER', 'POTKTGK': 'POTKTGK', 'KTGK': 'KTGK', 'NTGK': 'NTGK', 'KNTGK': 'KNTGK', 'OTGK': 'OTGK', 'SZGK': 'SZGK', 'OSZGK': 'OSZGK', 'MKP': 'MKP', 'KPF': 'KPF', 'LASSU': 'LASSU', 'SPEC': 'SPEC', 'JELLEG1': 'JELLEG1', 'JELLEG2': 'JELLEG2', 'SEBKTIP': 'SEBKTIP', 'SEBKORL': 'SEBKORL', 'SEBKOK': 'SEBKOK', 'SEBKIR': 'SEBKIR', 'SEBKD': 'SEBKD', 'SEBVD': 'SEBVD', 'SEBKIEG': 'SEBKIEG', 'SEBMEGJ': 'SEBMEGJ', 'SEBKEZD': 'SEBKEZD', 'SEBVEG': 'SEBVEG', 'RBTIP': 'RBTIP', 'FLBT': 'FLBT', 'IRANY': 'IRANY', 'RBTSZ': 'RBTSZ', 'KMJEL': 'KMJEL', });
lyr_Zajrnykolfal_10.set('fieldAliases', {'fid': 'fid', 'GEODBID': 'GEODBID', 'WALL_H': 'WALL_H', 'CONST_H': 'CONST_H', 'REFL_LOS_L': 'REFL_LOS_L', 'REFL_LOS_R': 'REFL_LOS_R', 'CON_E_H': 'CON_E_H', 'layer': 'layer', 'path': 'path', });
lyr_Bpkerlet_2.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Namelc': 'TextEdit', 'A8id': 'TextEdit', 'MI_STYLE': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_Klterlet_3.set('fieldImages', {'fid': '', 'NUTS5NAME': 'TextEdit', 'NUTS5KSH': 'TextEdit', 'NUTS5RANG': 'TextEdit', 'NUTS4NAME': 'TextEdit', 'NUTS4CODE': 'TextEdit', 'NUTS4CENTE': 'TextEdit', 'NUTS3NAME': 'TextEdit', 'NUTS3CODE': 'TextEdit', 'NUTS2NAME': 'TextEdit', 'NUTS2CODE': 'TextEdit', 'NUTS1NAME': 'TextEdit', 'NUTS1CODE': 'TextEdit', 'NUTS0NAME': 'TextEdit', 'NUTS0CODE': 'TextEdit', 'PLACE': 'TextEdit', 'ZIP': 'TextEdit', 'NEPESSEG20': 'TextEdit', 'NO20180101': 'TextEdit', 'FERFI20180': 'TextEdit', 'JARASNEV': 'TextEdit', 'JARASKOZPO': 'TextEdit', 'JARASKOD': 'TextEdit', });
lyr_Belterlet_4.set('fieldImages', {'fid': '', 'Id': 'Range', 'Name': 'TextEdit', 'Namelc': 'TextEdit', 'A8id': 'Range', 'Adminclass': 'Range', 'MI_STYLE': 'TextEdit', 'MI_PRINX': 'TextEdit', 'area': 'TextEdit', });
lyr_Megye_5.set('fieldImages', {'NUTS5NAME': 'TextEdit', 'NUTS5KSH': 'TextEdit', 'NUTS5RANG': 'TextEdit', 'NUTS4NAME': 'TextEdit', 'NUTS4CODE': 'TextEdit', 'NUTS4CENTE': 'TextEdit', 'NUTS3NAME': 'TextEdit', 'NUTS3CODE': 'TextEdit', 'NUTS2NAME': 'TextEdit', 'NUTS2CODE': 'TextEdit', 'NUTS1NAME': 'TextEdit', 'NUTS1CODE': 'TextEdit', 'NUTS0NAME': 'TextEdit', 'NUTS0CODE': 'TextEdit', 'PLACE': 'TextEdit', 'ZIP': 'TextEdit', 'NEPESSEG20': 'TextEdit', 'NO20120101': 'TextEdit', 'FERFI20120': 'TextEdit', 'done': 'Range', });
lyr_vasttengely_6.set('fieldImages', {'GEODBID': 'TextEdit', 'NAME': 'TextEdit', 'LINE_NO': 'TextEdit', 'BRIDGE': 'Range', 'D_B_L': 'TextEdit', 'D_B_R': 'TextEdit', 'B_W_L': 'TextEdit', 'B_W_R': 'TextEdit', 'BTHICKESS': 'TextEdit', 'LREF_LOS_L': 'TextEdit', 'LREF_LOS_R': 'TextEdit', 'RREF_LOS_R': 'TextEdit', 'RREF_LOS_L': 'TextEdit', 'CON_H_L': 'Range', 'CON_H_R': 'Range', 'EMI_CALC': 'Range', 'TRACKBASE': 'TextEdit', 'RAILROUGH': 'TextEdit', 'RAILJOINTS': 'TextEdit', 'RADIUS': 'TextEdit', 'B_TRANSFER': 'TextEdit', 'ELONGATION': 'TextEdit', 'NOISEMAP': 'TextEdit', });
lyr_hmszelvny_7.set('fieldImages', {'FID': 'TextEdit', 'SZELV_SZAM': 'TextEdit', 'ZONA_FID': 'TextEdit', 'HUSZ': 'TextEdit', 'GEOM_Y': 'TextEdit', 'GEOM_X': 'TextEdit', 'szelv': 'Range', });
lyr_ttengely_8.set('fieldImages', {'KEZD': 'Range', 'VEGE': 'Range', 'KSZAM': 'TextEdit', 'UTNEV': 'TextEdit', 'PKOD': 'Range', 'KKOD': 'TextEdit', 'VKOD': 'TextEdit', 'KEKM': 'TextEdit', 'KEMT': 'TextEdit', 'VEKM': 'TextEdit', 'VEMT': 'TextEdit', 'KWGSX': 'TextEdit', 'KWGSY': 'TextEdit', 'VWGSX': 'TextEdit', 'VWGSY': 'TextEdit', 'RSHOSSZ': 'TextEdit', 'SZHO': 'TextEdit', 'KUTKA': 'TextEdit', 'NUTKA': 'TextEdit', 'NUTKA1': 'TextEdit', 'NUTKA2': 'TextEdit', 'SZAKJEL': 'TextEdit', 'KFAZON': 'TextEdit', 'KFTIP': 'TextEdit', 'KFMEGJ': 'TextEdit', 'FSVV': 'TextEdit', 'SAVOSSZ': 'TextEdit', 'ONGJ': 'TextEdit', 'OJ': 'TextEdit', 'OMOT': 'TextEdit', 'EV': 'TextEdit', 'ASZ': 'TextEdit', 'BUSZCS': 'TextEdit', 'BUSZE': 'TextEdit', 'OBUSZ': 'TextEdit', 'NYSZER': 'TextEdit', 'POTKTGK': 'TextEdit', 'KTGK': 'TextEdit', 'NTGK': 'TextEdit', 'KNTGK': 'TextEdit', 'OTGK': 'TextEdit', 'SZGK': 'TextEdit', 'OSZGK': 'TextEdit', 'MKP': 'TextEdit', 'KPF': 'TextEdit', 'LASSU': 'TextEdit', 'SPEC': 'TextEdit', 'JELLEG1': 'TextEdit', 'JELLEG2': 'TextEdit', 'SEBKTIP': 'TextEdit', 'SEBKORL': 'TextEdit', 'SEBKOK': 'TextEdit', 'SEBKIR': 'TextEdit', 'SEBKD': 'DateTime', 'SEBVD': 'DateTime', 'SEBKIEG': 'TextEdit', 'SEBMEGJ': 'TextEdit', 'SEBKEZD': 'TextEdit', 'SEBVEG': 'TextEdit', 'KORFORG': 'Range', 'ZAJTERK': 'Range', 'AKAT1': 'TextEdit', 'AKAT2': 'TextEdit', 'AKAT3': 'TextEdit', 'ZAJ_TEMP': 'TextEdit', 'V_1': 'Range', 'V_2-3': 'Range', 'T_na_akat1': 'TextEdit', 'T_na_akat2': 'TextEdit', 'T_na_akat3': 'TextEdit', 'T_es_akat1': 'TextEdit', 'T_es_akat2': 'TextEdit', 'T_es_akat3': 'TextEdit', 'T_ej_akat1': 'TextEdit', 'T_ej_akat2': 'TextEdit', 'T_ej_akat3': 'TextEdit', 'HOSSZABBIT': 'Range', 'S_Leq_nap': 'TextEdit', 'S_Leq_este': 'TextEdit', 'S_Leq_ejj': 'TextEdit', 'Fh_ak1_na': 'TextEdit', 'Fh_ak2_na': 'TextEdit', 'Fh_ak3_na': 'TextEdit', 'Fh_ak1_es': 'TextEdit', 'Fh_ak2_es': 'TextEdit', 'Fh_ak3_es': 'TextEdit', 'Fh_ak1_ej': 'TextEdit', 'Fh_ak2_ej': 'TextEdit', 'Fh_ak3_ej': 'TextEdit', 'id': 'TextEdit', 'length': 'TextEdit', });
lyr_kmszelvny_9.set('fieldImages', {'KEZD': 'Range', 'VEGE': 'Range', 'KSZAM': 'TextEdit', 'UTNEV': 'TextEdit', 'PKOD': 'Range', 'KKOD': 'TextEdit', 'VKOD': 'TextEdit', 'KSZELV': 'TextEdit', 'VSZELV': 'TextEdit', 'KEKM': 'TextEdit', 'KEMT': 'TextEdit', 'VEKM': 'TextEdit', 'VEMT': 'TextEdit', 'KEOVX': 'TextEdit', 'KEOVY': 'TextEdit', 'VEOVX': 'TextEdit', 'VEOVY': 'TextEdit', 'KWGSX': 'TextEdit', 'KWGSY': 'TextEdit', 'VWGSX': 'TextEdit', 'VWGSY': 'TextEdit', 'RSHOSSZ': 'TextEdit', 'SZHO': 'TextEdit', 'KUTKA': 'TextEdit', 'NUTKA': 'TextEdit', 'NUTKA1': 'TextEdit', 'NUTKA2': 'TextEdit', 'SZAKJEL': 'TextEdit', 'KFAZON': 'TextEdit', 'KFTIP': 'TextEdit', 'KFRB': 'TextEdit', 'KFRK': 'TextEdit', 'KFMEGJ': 'TextEdit', 'FSVV': 'TextEdit', 'SAVOSSZ': 'TextEdit', 'ONGJ': 'TextEdit', 'OJ': 'TextEdit', 'OMOT': 'TextEdit', 'EV': 'TextEdit', 'ASZ': 'TextEdit', 'BUSZCS': 'TextEdit', 'BUSZE': 'TextEdit', 'OBUSZ': 'TextEdit', 'NYSZER': 'TextEdit', 'POTKTGK': 'TextEdit', 'KTGK': 'TextEdit', 'NTGK': 'TextEdit', 'KNTGK': 'TextEdit', 'OTGK': 'TextEdit', 'SZGK': 'TextEdit', 'OSZGK': 'TextEdit', 'MKP': 'TextEdit', 'KPF': 'TextEdit', 'LASSU': 'TextEdit', 'SPEC': 'TextEdit', 'JELLEG1': 'TextEdit', 'JELLEG2': 'TextEdit', 'SEBKTIP': 'TextEdit', 'SEBKORL': 'TextEdit', 'SEBKOK': 'TextEdit', 'SEBKIR': 'TextEdit', 'SEBKD': 'DateTime', 'SEBVD': 'DateTime', 'SEBKIEG': 'TextEdit', 'SEBMEGJ': 'TextEdit', 'SEBKEZD': 'TextEdit', 'SEBVEG': 'TextEdit', 'RBTIP': 'TextEdit', 'FLBT': 'TextEdit', 'IRANY': 'TextEdit', 'RBTSZ': 'TextEdit', 'KMJEL': 'TextEdit', });
lyr_Zajrnykolfal_10.set('fieldImages', {'fid': '', 'GEODBID': 'TextEdit', 'WALL_H': 'TextEdit', 'CONST_H': 'Range', 'REFL_LOS_L': 'TextEdit', 'REFL_LOS_R': 'TextEdit', 'CON_E_H': '', 'layer': '', 'path': '', });
lyr_Bpkerlet_2.set('fieldLabels', {'Id': 'hidden field', 'Name': 'no label', 'Namelc': 'hidden field', 'A8id': 'hidden field', 'MI_STYLE': 'hidden field', 'MI_PRINX': 'hidden field', });
lyr_Klterlet_3.set('fieldLabels', {'fid': 'hidden field', 'NUTS5NAME': 'no label', 'NUTS5KSH': 'hidden field', 'NUTS5RANG': 'hidden field', 'NUTS4NAME': 'hidden field', 'NUTS4CODE': 'hidden field', 'NUTS4CENTE': 'hidden field', 'NUTS3NAME': 'hidden field', 'NUTS3CODE': 'hidden field', 'NUTS2NAME': 'hidden field', 'NUTS2CODE': 'hidden field', 'NUTS1NAME': 'hidden field', 'NUTS1CODE': 'hidden field', 'NUTS0NAME': 'hidden field', 'NUTS0CODE': 'hidden field', 'PLACE': 'hidden field', 'ZIP': 'hidden field', 'NEPESSEG20': 'hidden field', 'NO20180101': 'hidden field', 'FERFI20180': 'hidden field', 'JARASNEV': 'hidden field', 'JARASKOZPO': 'hidden field', 'JARASKOD': 'hidden field', });
lyr_Belterlet_4.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Name': 'no label', 'Namelc': 'hidden field', 'A8id': 'hidden field', 'Adminclass': 'hidden field', 'MI_STYLE': 'hidden field', 'MI_PRINX': 'hidden field', 'area': 'hidden field', });
lyr_Megye_5.set('fieldLabels', {'NUTS5NAME': 'hidden field', 'NUTS5KSH': 'hidden field', 'NUTS5RANG': 'hidden field', 'NUTS4NAME': 'hidden field', 'NUTS4CODE': 'hidden field', 'NUTS4CENTE': 'hidden field', 'NUTS3NAME': 'no label', 'NUTS3CODE': 'hidden field', 'NUTS2NAME': 'hidden field', 'NUTS2CODE': 'hidden field', 'NUTS1NAME': 'hidden field', 'NUTS1CODE': 'hidden field', 'NUTS0NAME': 'hidden field', 'NUTS0CODE': 'hidden field', 'PLACE': 'hidden field', 'ZIP': 'hidden field', 'NEPESSEG20': 'hidden field', 'NO20120101': 'hidden field', 'FERFI20120': 'hidden field', 'done': 'hidden field', });
lyr_vasttengely_6.set('fieldLabels', {'GEODBID': 'hidden field', 'NAME': 'no label', 'LINE_NO': 'no label', 'BRIDGE': 'hidden field', 'D_B_L': 'hidden field', 'D_B_R': 'hidden field', 'B_W_L': 'hidden field', 'B_W_R': 'hidden field', 'BTHICKESS': 'hidden field', 'LREF_LOS_L': 'hidden field', 'LREF_LOS_R': 'hidden field', 'RREF_LOS_R': 'hidden field', 'RREF_LOS_L': 'hidden field', 'CON_H_L': 'hidden field', 'CON_H_R': 'hidden field', 'EMI_CALC': 'hidden field', 'TRACKBASE': 'hidden field', 'RAILROUGH': 'hidden field', 'RAILJOINTS': 'hidden field', 'RADIUS': 'hidden field', 'B_TRANSFER': 'hidden field', 'ELONGATION': 'hidden field', 'NOISEMAP': 'hidden field', });
lyr_hmszelvny_7.set('fieldLabels', {'FID': 'no label', 'SZELV_SZAM': 'no label', 'ZONA_FID': 'no label', 'HUSZ': 'no label', 'GEOM_Y': 'no label', 'GEOM_X': 'no label', 'szelv': 'no label', });
lyr_ttengely_8.set('fieldLabels', {'KEZD': 'no label', 'VEGE': 'no label', 'KSZAM': 'no label', 'UTNEV': 'no label', 'PKOD': 'no label', 'KKOD': 'no label', 'VKOD': 'no label', 'KEKM': 'no label', 'KEMT': 'no label', 'VEKM': 'no label', 'VEMT': 'no label', 'KWGSX': 'no label', 'KWGSY': 'no label', 'VWGSX': 'no label', 'VWGSY': 'no label', 'RSHOSSZ': 'no label', 'SZHO': 'no label', 'KUTKA': 'no label', 'NUTKA': 'no label', 'NUTKA1': 'no label', 'NUTKA2': 'no label', 'SZAKJEL': 'no label', 'KFAZON': 'no label', 'KFTIP': 'no label', 'KFMEGJ': 'no label', 'FSVV': 'no label', 'SAVOSSZ': 'no label', 'ONGJ': 'no label', 'OJ': 'no label', 'OMOT': 'no label', 'EV': 'no label', 'ASZ': 'no label', 'BUSZCS': 'no label', 'BUSZE': 'no label', 'OBUSZ': 'no label', 'NYSZER': 'no label', 'POTKTGK': 'no label', 'KTGK': 'no label', 'NTGK': 'no label', 'KNTGK': 'no label', 'OTGK': 'no label', 'SZGK': 'no label', 'OSZGK': 'no label', 'MKP': 'no label', 'KPF': 'no label', 'LASSU': 'no label', 'SPEC': 'no label', 'JELLEG1': 'no label', 'JELLEG2': 'no label', 'SEBKTIP': 'no label', 'SEBKORL': 'no label', 'SEBKOK': 'no label', 'SEBKIR': 'no label', 'SEBKD': 'no label', 'SEBVD': 'no label', 'SEBKIEG': 'no label', 'SEBMEGJ': 'no label', 'SEBKEZD': 'no label', 'SEBVEG': 'no label', 'KORFORG': 'no label', 'ZAJTERK': 'no label', 'AKAT1': 'no label', 'AKAT2': 'no label', 'AKAT3': 'no label', 'ZAJ_TEMP': 'no label', 'V_1': 'no label', 'V_2-3': 'no label', 'T_na_akat1': 'no label', 'T_na_akat2': 'no label', 'T_na_akat3': 'no label', 'T_es_akat1': 'no label', 'T_es_akat2': 'no label', 'T_es_akat3': 'no label', 'T_ej_akat1': 'no label', 'T_ej_akat2': 'no label', 'T_ej_akat3': 'no label', 'HOSSZABBIT': 'no label', 'S_Leq_nap': 'no label', 'S_Leq_este': 'no label', 'S_Leq_ejj': 'no label', 'Fh_ak1_na': 'no label', 'Fh_ak2_na': 'no label', 'Fh_ak3_na': 'no label', 'Fh_ak1_es': 'no label', 'Fh_ak2_es': 'no label', 'Fh_ak3_es': 'no label', 'Fh_ak1_ej': 'no label', 'Fh_ak2_ej': 'no label', 'Fh_ak3_ej': 'no label', 'id': 'no label', 'length': 'no label', });
lyr_kmszelvny_9.set('fieldLabels', {'KEZD': 'no label', 'VEGE': 'no label', 'KSZAM': 'no label', 'UTNEV': 'no label', 'PKOD': 'no label', 'KKOD': 'no label', 'VKOD': 'no label', 'KSZELV': 'no label', 'VSZELV': 'no label', 'KEKM': 'no label', 'KEMT': 'no label', 'VEKM': 'no label', 'VEMT': 'no label', 'KEOVX': 'no label', 'KEOVY': 'no label', 'VEOVX': 'no label', 'VEOVY': 'no label', 'KWGSX': 'no label', 'KWGSY': 'no label', 'VWGSX': 'no label', 'VWGSY': 'no label', 'RSHOSSZ': 'no label', 'SZHO': 'no label', 'KUTKA': 'no label', 'NUTKA': 'no label', 'NUTKA1': 'no label', 'NUTKA2': 'no label', 'SZAKJEL': 'no label', 'KFAZON': 'no label', 'KFTIP': 'no label', 'KFRB': 'no label', 'KFRK': 'no label', 'KFMEGJ': 'no label', 'FSVV': 'no label', 'SAVOSSZ': 'no label', 'ONGJ': 'no label', 'OJ': 'no label', 'OMOT': 'no label', 'EV': 'no label', 'ASZ': 'no label', 'BUSZCS': 'no label', 'BUSZE': 'no label', 'OBUSZ': 'no label', 'NYSZER': 'no label', 'POTKTGK': 'no label', 'KTGK': 'no label', 'NTGK': 'no label', 'KNTGK': 'no label', 'OTGK': 'no label', 'SZGK': 'no label', 'OSZGK': 'no label', 'MKP': 'no label', 'KPF': 'no label', 'LASSU': 'no label', 'SPEC': 'no label', 'JELLEG1': 'no label', 'JELLEG2': 'no label', 'SEBKTIP': 'no label', 'SEBKORL': 'no label', 'SEBKOK': 'no label', 'SEBKIR': 'no label', 'SEBKD': 'no label', 'SEBVD': 'no label', 'SEBKIEG': 'no label', 'SEBMEGJ': 'no label', 'SEBKEZD': 'no label', 'SEBVEG': 'no label', 'RBTIP': 'no label', 'FLBT': 'no label', 'IRANY': 'no label', 'RBTSZ': 'no label', 'KMJEL': 'no label', });
lyr_Zajrnykolfal_10.set('fieldLabels', {'fid': 'hidden field', 'GEODBID': 'hidden field', 'WALL_H': 'no label', 'CONST_H': 'hidden field', 'REFL_LOS_L': 'hidden field', 'REFL_LOS_R': 'hidden field', 'CON_E_H': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Zajrnykolfal_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});