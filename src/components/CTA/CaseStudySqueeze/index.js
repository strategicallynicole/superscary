import React from "react";
import "../../../styles/globals.scss";
import "./casestudysqueeze.scoped.scss";
import HubspotForm from 'react-hubspot-form';

export default function CaseStudySqueeze() {
    return (
        <>
      <div className="gradientbgdiv">
        <div className="max-w-full px-4 py-8 mx-auto sm:px-3 lg:py-8 lg:px-4 lg:flex lg:items-center">
          <div className="px-5 lg:w-0 lg:flex-1">
            <h2 className="text-4xl font-extrabold leading-tight text-white underline dincondensed sm:text-4xl" id="newsletter-headline">
Case Studies
            </h2>
            <h3 className="text-lg font-semibold leading-snug text-white grotesk sm:text-lg md:mb-5" id="newsletter-headline px-5 py-5">
              Sign Up To Receive Email Access To Our Case Studies
            </h3>
            <p className="max-w-3xl px-1 py-3 mt-3 text-sm text-white roboto ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p>
          </div>


          <div className="px-5 mt-10 lg:w-0 lg:flex-1">

 <HubspotForm
    portalId='8988772'
    formId='bff8392c-14d9-4cd6-b1bd-89957d284489'
    onSubmit={() => console.log('Submit!')}
    onReady={(form) => console.log('Form ready!')}
    loading={<div>Loading...</div>}
    />
</div>


        </div>

          </div>
      </>
    )
  }
