/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 02:22:09
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/

import React, { useState, useRef } from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
            backdropFilter: 'blur( 7.5px )',
         position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}
export default Particles;
