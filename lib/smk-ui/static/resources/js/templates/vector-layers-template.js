Vue.component('vector-layers',
{
    props: ['config', 'vectorLayers'],
    template:   
        `<form id="vectorLayersForm" style="padding: 0px; margin: 0px;">
        <div class="row" style="padding: 0px; margin: 0px;">
            <div id="vectorImport" class="col s5" style="height: calc(100vh - 282px);">
                <div class="row">
                    <div class="col s12" style="margin-top: 15px;">
                        <select id="vectorType">
                            <option value="" disabled selected>Choose vector type</option>
                            <option value="vector">GeoJSON</option>
                            <option value="kml">KML</option>
                            <option value="kmz">KMZ</option>
                            <option value="shape">Shapefile (zip only)</option>
                            <!--option value="pgdb">PGDB</option-->
                            <option value="fgdb">FGDB (zip only, v10 and lower)</option>
                            <option value="csv">CSV</option>
                            <option value="wfs">WFS</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="file-field input-field">
                            <div class="btn blue-grey darken-2">
                                <span>File</span>
                                <input type="file" id="vectorFileUpload">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-left: 1px;">
                    <p>If you do not want to import a file as an attachment, you can embedd an external URL to any GeoJSON data endpoint</p>
                </div>                
                <div class="row">
                    <div class="col s12 input-field">
                        <input id="vectorUrl" type="text">
                        <label for="vectorUrl">External URL (must return geojson)</label>
                    </div>
                </div>
                <div class="row" >
                    <div class="col s12 input-field">
                        <input id="vectorName" type="text">
                        <label for="vectorName">Name</label>
                    </div>
                </div>
            </div>
            <div class="col s2">
                <div style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                    <div id="importButton" class="row" style="padding: 0px; margin: 5px;">
                        <a class="waves-effect waves-light btn-small blue-grey darken-2" onclick="createVectorLayer();"><em style="position: absolute; top: 4px; left: 4px;" class="material-icons center">keyboard_arrow_right</em></a>
                    </div>
                    <div id="importSpinner" class="row" style="display: none;">
                        <div class="preloader-wrapper big active">
                            <div class="spinner-layer spinner-blue-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="addedCatalogLayers" class="col s5" style="height: calc(100vh - 282px);">
                <h5>Existing Vector layers</h5>
                <ul id="catalogLayersList" class="collection" style="height: 100%; overflow: auto;">
                    <catalog-item v-for="layer in vectorLayers"
                                  v-bind:layer="layer"
                                  v-bind:key="layer.id">
                    </catalog-item>
                </ul>
            </div>
        </div>
    </form>`
});