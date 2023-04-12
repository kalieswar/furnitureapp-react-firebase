import React from 'react';
import { TwinSpin} from "react-cssfx-loading"
import '../plugins/plugin.css';


const Loading = () => {
  return (
    <div className='loading'>
        <div className='container'>
            <div className='loaderIcon'>
                <TwinSpin height={"100px"} width={"100px"} color='#7c2c0c' duration='2s'/>
            </div>
        </div>
    </div>
  )
}

export default Loading