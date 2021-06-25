/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 15:54:50
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from "react";
import { faBullhorn, faChessQueenPiece, faPinbrushPencil } from '@fortawesome/pro-thin-svg-icons'

const ServiceList = [
    {
        icon: {faBullhorn},
        title: 'Business Stratagy',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: {faChessQueenPiece},
        title: 'Website Development',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: {faPinbrushPencil},
        title: 'Marketing & Reporting',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]


class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                <i class="fa-thin fa-${val.icon}"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;
