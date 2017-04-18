import React, { Component } from "react";
import axios from 'axios';

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const styles = {
  marker: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #C9C9C9'
  }
}

class Map extends Component {
  constructor (props) {
    super(props);
  }

  render(){
    return (
      <div>
      <ReactMapboxGl
        style="mapbox://styles/mapbox/outdoors-v9"
        accessToken="pk.eyJ1IjoibmtiZWxvdyIsImEiOiJjajFoZzlkem4wMDhiMzNwbWN4NXRoanh4In0.Yy_FmJCSFQjYifouyPCTOQ"
        containerStyle={{
          height: "50vh",
          width: "100vw"
        }}
        center={[this.props.lon, this.props.lat]}
        zoom={[8.5]}>
      
      { 
        this.props.campgrounds &&
          this.props.campgrounds.map((campground) =>(
            <Marker
              key={campground.id}
              style={styles.marker}
              coordinates={[campground.longitude, campground.latitude]}>
              <img style= {{
                    maxHeight:'20px',
                    maxWidth:'20px',
                    height: 'auto',
                    width: 'auto'
                  }} src="http://www.symbols.com/gi.php?type=1&id=770&i=1" />
            </Marker>
        ))
      }

    { 
      this.props.lodgings &&
        this.props.lodgings.map((lodging) =>(
          <Marker
            key={lodging.id}
            style={styles.marker}
            coordinates={[lodging.geometry.location.lng, lodging.geometry.location.lat]}>
            <img style= {{
                  maxHeight:'20px',
                  maxWidth:'20px',
                  height: 'auto',
                  width: 'auto'
                }} src="https://cdn3.iconfinder.com/data/icons/map/500/hotel-512.png" />
          </Marker>       
      ))
    }


    </ReactMapboxGl>
    </div>
    )
  }
}

export default Map;