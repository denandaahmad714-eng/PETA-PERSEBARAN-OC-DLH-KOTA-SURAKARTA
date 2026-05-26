var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1);
var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_1,
                popuplayertitle: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW',
                interactive: false,
                title: '<img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1.png" /> [LapakGIS.com] Batas_Kecamatan_BIG_PPBW'
            });
var format_PSUKIYANTOPOINT_2 = new ol.format.GeoJSON();
var features_PSUKIYANTOPOINT_2 = format_PSUKIYANTOPOINT_2.readFeatures(json_PSUKIYANTOPOINT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSUKIYANTOPOINT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSUKIYANTOPOINT_2.addFeatures(features_PSUKIYANTOPOINT_2);
var lyr_PSUKIYANTOPOINT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSUKIYANTOPOINT_2, 
                style: style_PSUKIYANTOPOINT_2,
                popuplayertitle: 'P. SUKIYANTO (POINT)',
                interactive: true,
                title: '<img src="styles/legend/PSUKIYANTOPOINT_2.png" /> P. SUKIYANTO (POINT)'
            });
var format_PFERRYADISURYALINE_3 = new ol.format.GeoJSON();
var features_PFERRYADISURYALINE_3 = format_PFERRYADISURYALINE_3.readFeatures(json_PFERRYADISURYALINE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFERRYADISURYALINE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFERRYADISURYALINE_3.addFeatures(features_PFERRYADISURYALINE_3);
var lyr_PFERRYADISURYALINE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFERRYADISURYALINE_3, 
                style: style_PFERRYADISURYALINE_3,
                popuplayertitle: 'P. FERRY ADISURYA (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PFERRYADISURYALINE_3.png" /> P. FERRY ADISURYA (LINE)'
            });
var format_PTOTOKMARSONOLINE_4 = new ol.format.GeoJSON();
var features_PTOTOKMARSONOLINE_4 = format_PTOTOKMARSONOLINE_4.readFeatures(json_PTOTOKMARSONOLINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTOTOKMARSONOLINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTOTOKMARSONOLINE_4.addFeatures(features_PTOTOKMARSONOLINE_4);
var lyr_PTOTOKMARSONOLINE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTOTOKMARSONOLINE_4, 
                style: style_PTOTOKMARSONOLINE_4,
                popuplayertitle: 'P. TOTOK MARSONO (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PTOTOKMARSONOLINE_4.png" /> P. TOTOK MARSONO (LINE)'
            });
var format_PTOTOKMONUMEN45_5 = new ol.format.GeoJSON();
var features_PTOTOKMONUMEN45_5 = format_PTOTOKMONUMEN45_5.readFeatures(json_PTOTOKMONUMEN45_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTOTOKMONUMEN45_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTOTOKMONUMEN45_5.addFeatures(features_PTOTOKMONUMEN45_5);
var lyr_PTOTOKMONUMEN45_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTOTOKMONUMEN45_5, 
                style: style_PTOTOKMONUMEN45_5,
                popuplayertitle: 'P. TOTOK MONUMEN 45',
                interactive: true,
                title: '<img src="styles/legend/PTOTOKMONUMEN45_5.png" /> P. TOTOK MONUMEN 45'
            });
var format_PSLAMETRIYADILINE_6 = new ol.format.GeoJSON();
var features_PSLAMETRIYADILINE_6 = format_PSLAMETRIYADILINE_6.readFeatures(json_PSLAMETRIYADILINE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSLAMETRIYADILINE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSLAMETRIYADILINE_6.addFeatures(features_PSLAMETRIYADILINE_6);
var lyr_PSLAMETRIYADILINE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSLAMETRIYADILINE_6, 
                style: style_PSLAMETRIYADILINE_6,
                popuplayertitle: 'P. SLAMET RIYADI (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PSLAMETRIYADILINE_6.png" /> P. SLAMET RIYADI (LINE)'
            });
var format_PSLAMETRIYADI_7 = new ol.format.GeoJSON();
var features_PSLAMETRIYADI_7 = format_PSLAMETRIYADI_7.readFeatures(json_PSLAMETRIYADI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSLAMETRIYADI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSLAMETRIYADI_7.addFeatures(features_PSLAMETRIYADI_7);
var lyr_PSLAMETRIYADI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSLAMETRIYADI_7, 
                style: style_PSLAMETRIYADI_7,
                popuplayertitle: 'P. SLAMET RIYADI',
                interactive: true,
                title: '<img src="styles/legend/PSLAMETRIYADI_7.png" /> P. SLAMET RIYADI'
            });
var format_PHARTOTOLINE_8 = new ol.format.GeoJSON();
var features_PHARTOTOLINE_8 = format_PHARTOTOLINE_8.readFeatures(json_PHARTOTOLINE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHARTOTOLINE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHARTOTOLINE_8.addFeatures(features_PHARTOTOLINE_8);
var lyr_PHARTOTOLINE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHARTOTOLINE_8, 
                style: style_PHARTOTOLINE_8,
                popuplayertitle: 'P. HARTOTO (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PHARTOTOLINE_8.png" /> P. HARTOTO (LINE)'
            });
var format_PHARTOTOPOINT_9 = new ol.format.GeoJSON();
var features_PHARTOTOPOINT_9 = format_PHARTOTOPOINT_9.readFeatures(json_PHARTOTOPOINT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHARTOTOPOINT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHARTOTOPOINT_9.addFeatures(features_PHARTOTOPOINT_9);
var lyr_PHARTOTOPOINT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHARTOTOPOINT_9, 
                style: style_PHARTOTOPOINT_9,
                popuplayertitle: 'P. HARTOTO (POINT)',
                interactive: true,
                title: '<img src="styles/legend/PHARTOTOPOINT_9.png" /> P. HARTOTO (POINT)'
            });
var format_PSATRIADIDJATMIKA_10 = new ol.format.GeoJSON();
var features_PSATRIADIDJATMIKA_10 = format_PSATRIADIDJATMIKA_10.readFeatures(json_PSATRIADIDJATMIKA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSATRIADIDJATMIKA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSATRIADIDJATMIKA_10.addFeatures(features_PSATRIADIDJATMIKA_10);
var lyr_PSATRIADIDJATMIKA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSATRIADIDJATMIKA_10, 
                style: style_PSATRIADIDJATMIKA_10,
                popuplayertitle: 'P. SATRIADI DJATMIKA',
                interactive: true,
                title: '<img src="styles/legend/PSATRIADIDJATMIKA_10.png" /> P. SATRIADI DJATMIKA'
            });
var format_PUMARSAHID_11 = new ol.format.GeoJSON();
var features_PUMARSAHID_11 = format_PUMARSAHID_11.readFeatures(json_PUMARSAHID_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUMARSAHID_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUMARSAHID_11.addFeatures(features_PUMARSAHID_11);
var lyr_PUMARSAHID_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUMARSAHID_11, 
                style: style_PUMARSAHID_11,
                popuplayertitle: 'P. UMAR SAHID',
                interactive: true,
                title: '<img src="styles/legend/PUMARSAHID_11.png" /> P. UMAR SAHID'
            });
var format_PDASIMINLINE_12 = new ol.format.GeoJSON();
var features_PDASIMINLINE_12 = format_PDASIMINLINE_12.readFeatures(json_PDASIMINLINE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDASIMINLINE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDASIMINLINE_12.addFeatures(features_PDASIMINLINE_12);
var lyr_PDASIMINLINE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDASIMINLINE_12, 
                style: style_PDASIMINLINE_12,
                popuplayertitle: 'P. DASIMIN (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PDASIMINLINE_12.png" /> P. DASIMIN (LINE)'
            });
var format_PDASIMINPOINT_13 = new ol.format.GeoJSON();
var features_PDASIMINPOINT_13 = format_PDASIMINPOINT_13.readFeatures(json_PDASIMINPOINT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDASIMINPOINT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDASIMINPOINT_13.addFeatures(features_PDASIMINPOINT_13);
var lyr_PDASIMINPOINT_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDASIMINPOINT_13, 
                style: style_PDASIMINPOINT_13,
                popuplayertitle: 'P. DASIMIN (POINT)',
                interactive: true,
                title: '<img src="styles/legend/PDASIMINPOINT_13.png" /> P. DASIMIN (POINT)'
            });
var format_PMURWANTOLINE_14 = new ol.format.GeoJSON();
var features_PMURWANTOLINE_14 = format_PMURWANTOLINE_14.readFeatures(json_PMURWANTOLINE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMURWANTOLINE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMURWANTOLINE_14.addFeatures(features_PMURWANTOLINE_14);
var lyr_PMURWANTOLINE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMURWANTOLINE_14, 
                style: style_PMURWANTOLINE_14,
                popuplayertitle: 'P. MURWANTO (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PMURWANTOLINE_14.png" /> P. MURWANTO (LINE)'
            });
var format_PMURWANTOPOINT_15 = new ol.format.GeoJSON();
var features_PMURWANTOPOINT_15 = format_PMURWANTOPOINT_15.readFeatures(json_PMURWANTOPOINT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMURWANTOPOINT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMURWANTOPOINT_15.addFeatures(features_PMURWANTOPOINT_15);
var lyr_PMURWANTOPOINT_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMURWANTOPOINT_15, 
                style: style_PMURWANTOPOINT_15,
                popuplayertitle: 'P. MURWANTO (POINT)',
                interactive: true,
                title: '<img src="styles/legend/PMURWANTOPOINT_15.png" /> P. MURWANTO (POINT)'
            });
var format_PMULYONOLINE_16 = new ol.format.GeoJSON();
var features_PMULYONOLINE_16 = format_PMULYONOLINE_16.readFeatures(json_PMULYONOLINE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMULYONOLINE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMULYONOLINE_16.addFeatures(features_PMULYONOLINE_16);
var lyr_PMULYONOLINE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMULYONOLINE_16, 
                style: style_PMULYONOLINE_16,
                popuplayertitle: 'P. MULYONO (LINE)',
                interactive: true,
                title: '<img src="styles/legend/PMULYONOLINE_16.png" /> P. MULYONO (LINE)'
            });
var format_PMULYONOPOINT_17 = new ol.format.GeoJSON();
var features_PMULYONOPOINT_17 = format_PMULYONOPOINT_17.readFeatures(json_PMULYONOPOINT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMULYONOPOINT_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMULYONOPOINT_17.addFeatures(features_PMULYONOPOINT_17);
var lyr_PMULYONOPOINT_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMULYONOPOINT_17, 
                style: style_PMULYONOPOINT_17,
                popuplayertitle: 'P. MULYONO (POINT)',
                interactive: true,
                title: '<img src="styles/legend/PMULYONOPOINT_17.png" /> P. MULYONO (POINT)'
            });

lyr_ESRI_0.setVisible(true);lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.setVisible(true);lyr_PSUKIYANTOPOINT_2.setVisible(true);lyr_PFERRYADISURYALINE_3.setVisible(true);lyr_PTOTOKMARSONOLINE_4.setVisible(true);lyr_PTOTOKMONUMEN45_5.setVisible(true);lyr_PSLAMETRIYADILINE_6.setVisible(true);lyr_PSLAMETRIYADI_7.setVisible(true);lyr_PHARTOTOLINE_8.setVisible(true);lyr_PHARTOTOPOINT_9.setVisible(true);lyr_PSATRIADIDJATMIKA_10.setVisible(true);lyr_PUMARSAHID_11.setVisible(true);lyr_PDASIMINLINE_12.setVisible(true);lyr_PDASIMINPOINT_13.setVisible(true);lyr_PMURWANTOLINE_14.setVisible(true);lyr_PMURWANTOPOINT_15.setVisible(true);lyr_PMULYONOLINE_16.setVisible(true);lyr_PMULYONOPOINT_17.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1,lyr_PSUKIYANTOPOINT_2,lyr_PFERRYADISURYALINE_3,lyr_PTOTOKMARSONOLINE_4,lyr_PTOTOKMONUMEN45_5,lyr_PSLAMETRIYADILINE_6,lyr_PSLAMETRIYADI_7,lyr_PHARTOTOLINE_8,lyr_PHARTOTOPOINT_9,lyr_PSATRIADIDJATMIKA_10,lyr_PUMARSAHID_11,lyr_PDASIMINLINE_12,lyr_PDASIMINPOINT_13,lyr_PMURWANTOLINE_14,lyr_PMURWANTOPOINT_15,lyr_PMULYONOLINE_16,lyr_PMULYONOPOINT_17];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'kpdtn_mrk': 'kpdtn_mrk', });
lyr_PSUKIYANTOPOINT_2.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PFERRYADISURYALINE_3.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PTOTOKMARSONOLINE_4.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PTOTOKMONUMEN45_5.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PSLAMETRIYADILINE_6.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PSLAMETRIYADI_7.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PHARTOTOLINE_8.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PHARTOTOPOINT_9.set('fieldAliases', {'Name': 'Name', 'Personil': 'Personil', });
lyr_PSATRIADIDJATMIKA_10.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PUMARSAHID_11.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PDASIMINLINE_12.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PDASIMINPOINT_13.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PMURWANTOLINE_14.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PMURWANTOPOINT_15.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PMULYONOLINE_16.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_PMULYONOPOINT_17.set('fieldAliases', {'Name': 'Name', 'Nama': 'Nama', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'kpdtn_mrk': 'Range', });
lyr_PSUKIYANTOPOINT_2.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PFERRYADISURYALINE_3.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PTOTOKMARSONOLINE_4.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PTOTOKMONUMEN45_5.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PSLAMETRIYADILINE_6.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PSLAMETRIYADI_7.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PHARTOTOLINE_8.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PHARTOTOPOINT_9.set('fieldImages', {'Name': 'TextEdit', 'Personil': 'TextEdit', });
lyr_PSATRIADIDJATMIKA_10.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PUMARSAHID_11.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PDASIMINLINE_12.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PDASIMINPOINT_13.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PMURWANTOLINE_14.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PMURWANTOPOINT_15.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PMULYONOLINE_16.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PMULYONOPOINT_17.set('fieldImages', {'Name': 'TextEdit', 'Nama': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'kpdtn_mrk': 'no label', });
lyr_PSUKIYANTOPOINT_2.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PFERRYADISURYALINE_3.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PTOTOKMARSONOLINE_4.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PTOTOKMONUMEN45_5.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PSLAMETRIYADILINE_6.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PSLAMETRIYADI_7.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PHARTOTOLINE_8.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PHARTOTOPOINT_9.set('fieldLabels', {'Name': 'header label - visible with data', 'Personil': 'inline label - visible with data', });
lyr_PSATRIADIDJATMIKA_10.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PUMARSAHID_11.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PDASIMINLINE_12.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PDASIMINPOINT_13.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PMURWANTOLINE_14.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PMURWANTOPOINT_15.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PMULYONOLINE_16.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PMULYONOPOINT_17.set('fieldLabels', {'Name': 'header label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_PMULYONOPOINT_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});