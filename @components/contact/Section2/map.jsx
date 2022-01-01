import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {
                lat: "",
                long: ""
            }
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: false
        });
    }
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
        }
        // const triangleCoords = [
        //     { lat: 25.774, lng: -80.190 },
        //     { lat: 18.466, lng: -66.118 },
        //     { lat: 32.321, lng: -64.757 },
        //     { lat: 25.774, lng: -80.190 }
        // ];

        return (
            <div
                style={{
                    position: "relative",
                    height: "calc(100vh - 20px)"
                }}
            >
                <Map style={{}} google={this.props.google} zoom={11}>

                    {/* <Polygon
                        paths={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.35} /> */}
                    <Marker
                        // onClick={this.onMarkerClick}
                        icon={{
                            url: "/img/icon.svg",
                            anchor: new google.maps.Point(32, 32),
                            scaledSize: new google.maps.Size(64, 64)
                        }}
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCRw8NTcopyC-dMQHEKLTL-QSvq5xoJUXo",
    v: "3.30"
})(MapContainer);