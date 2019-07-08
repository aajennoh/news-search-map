import React from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
  } from 'react-simple-maps';

export default function Map() {
    return (
        <div className='map'>
            <ComposableMap
                projectionConfig={{
                    scale: 215,
                    rotation: [-11,0,0],
                }}
                width={980}
                height={551}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >
                <ZoomableGroup>
                <Geographies geography={ `${process.env.PUBLIC_URL}/world-50m.json` }>
                    {(geographies, projection) => geographies.map(geography => (
                    <Geography
                        key={ geography.id }
                        geography={ geography }
                        projection={ projection }
                        />
                    ))}
                </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>

    )
}