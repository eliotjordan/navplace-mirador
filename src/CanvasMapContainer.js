import {MapContainer} from 'react-leaflet';
import { connect } from 'react-redux';
import CanvasMap from "./CanvasMap";
import React, {useEffect, useState} from "react";
import AutoFocusControl from "./AutoFocusControl";
import {addResource} from "mirador/dist/es/src/state/actions/catalog";
import {addWindow} from "mirador/dist/es/src/state/actions/window";

function CanvasMapContainer(props) {
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [zoom, setZoom] = useState(true);
    const prefix = window.location.origin ;
    const figgy = "https://figgy.princeton.edu/manifests/"

    useEffect(() => {
        props.addResource(prefix + "/manifests/50aeeb68.json");
        props.addResource(prefix + "/manifests/3386ca56.json");
        props.addResource(prefix + "/manifests/c4edf252.json");
        props.addResource(prefix + "/manifests/c9df4fd8.json");
        props.addResource(prefix + "/manifests/e438a1e3.json");
        props.addResource(prefix + "/manifests/fbc43e41.json");
        props.addResource(figgy + "32146ff6-c93d-4b14-b198-6fb518b44042" + "/v3");
        props.addResource(figgy + "723b0cc9-918c-42e1-80ec-d989ea011f35" + "/v3");
        props.addResource(figgy + "310dcfd3-d44b-4979-943a-e4d748fb6d4d" + "/v3");
        props.addResource(figgy + "a07eca8a-f425-461b-8b91-3fe75f84258f" + "/v3");
        props.addResource(figgy + "3c76c5a1-7555-4602-aa36-1c5b0271321e" + "/v3");
        props.addResource(figgy + "87c2f5fa-0418-446d-a152-8c6aafd16271" + "/v3");
        props.addResource(figgy + "4bf8b692-db42-47d1-b722-cddaf88627ce" + "/v3");
        props.addResource(figgy + "c7e11cfe-8c7d-4a65-ae39-9b769a86bf45" + "/v3");
        props.addResource(figgy + "77dd894e-a2c6-4294-97d4-8bd275a47600" + "/v3");
        props.addResource(figgy + "c3f5da55-5d97-4abc-b8f1-442e350a36cb" + "/v3");
    });


    return (
        <MapContainer center={[0, 0]} zoom={1}>
            <CanvasMap manifests={props.manifests} windows={props.windows} addWindow={props.addWindow} setNeedsUpdate={setNeedsUpdate}
                       zoom={zoom}/>
            <AutoFocusControl zoom={zoom} setZoom={setZoom} addManifest={props.addResource}/>
        </MapContainer>
    );
}

const mapDispatchToProps = {
    addResource: addResource,
    addWindow: addWindow
};

const mapStateToProps = function(state) {
    return {
        manifests: state.manifests,
        windows: state.windows
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasMapContainer)
