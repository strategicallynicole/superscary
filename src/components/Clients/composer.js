/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 17:15:44
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import "./Testimonials";
import PartnerSlider from "./Slider";
import Testimonials from "./Testimonials";

class Clients extends Component {
    render() {
        return (            <>
            <section className="px-10 rounded client-area ptb-100">
           <div className="container">


<Testimonials />

<div className="my-10"></div>

        <PartnerSlider />

 </div>
</section>
   </>
        );
    }
}

export default Clients;
