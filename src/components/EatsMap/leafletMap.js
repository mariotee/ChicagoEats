/*
 * NOTE: the leaflet map config is managed in public/index.html
 */

import React from 'react';
import Leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends React.Component {
  componentDidMount() {
    this.map = Leaflet.map('map', {
      dragging: !Leaflet.Browser.mobile,
      center: [41.8500, -87.6500],
      zoom: 11,
    });
    /*
     *  Providers can be managed with utils/leaflet-providers.js
     *  OR they can be managed with urls found from the following:
     *  http://leaflet-extras.github.io/leaflet-providers/preview/
     *
     *  some personal favourites:
     *  Cartoon-Like with detailed zooms: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
     *  Sattelite view with detailed zooms: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
     *  Darker Cartoon-Like, no detailed zoom: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
     *
     */
    const mapProviderURL =
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
    const options = {
      
    };
    Leaflet.tileLayer(mapProviderURL, options).addTo(this.map);
    this.loadMap();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
  }

  componentDidUpdate() {
    this.map.removeLayer(this.markerGroup);
    this.loadMap();
  }

  loadMap = () => {
    this.markerGroup = Leaflet.layerGroup().addTo(this.map);

    this.props.data.forEach((location) => {
      let marker = Leaflet.marker([location.latitude, location.longitude]);

      let popupContent = `
        <div>
          ${location.name}: ${location.address}
          <br/>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('mouseover', () => marker.openPopup());
      marker.on('mouseout', () => marker.closePopup());
      marker.on('click', () => marker.openPopup());
      marker.addTo(this.markerGroup);
    });
  };

  render() {
    return <div id="map" style={{ width: '80vw', height: '80vh', margin: '32px auto' }} />;
  }
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  clickMarker: PropTypes.func.isRequired,
};

export default Map;