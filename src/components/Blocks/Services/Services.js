import React, { Component } from 'react';
import { Link } from "gatsby";
import "./Services.scoped.scss";
import services from "./data.js";
import { FaBullhorn } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import SectionTitle from "../../Titles/SectionTitle";
import Floaters from "../../Parallax/floaters";
class Services extends Component {
    render() {
        return (

            <section className="offer-area pt-100 pb-70">
                <Floaters>
			    <div className="container">
                    <SectionTitle title="Services" subtitle="What We Offer" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto quaerat eaque sapiente accusantium ad ut explicabo consequuntur fuga quidem? Sint." />


                    <div className="row">
                    {services.map((services, i, title, description, icon, linkhref) => (
 <div className="col-lg-4 col-sm-6">
 <div className="single-offer bg-black-gradient">
     <i className={services.icon}></i>
     <h3>
         <Link href={services.linkhref}>
             <a className="text-white dincondensed">{services.title}</a>
         </Link>
     </h3>
     <p className="text-white roboto">{services.description}</p>
 </div>
</div>
   ))}









                    </div>
                </div>

</Floaters>
            </section>
        );
    }
}

export default Services;
