/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:37:56
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from "react";
import PropTypes from "prop-types";
// components
import Sidebar from "../../src/components/Sidebar/Sidebar.js";
import NavbarSearchUser from "../../src/components/Navbars/NavbarSearchUser.js";
import HeaderUser from "../../src/components/Headers/Admin/HeaderUser.js";
import FooterAdmin from "../../src/components/Footers/Admin/FooterAdmin.js";

export default function Admin2({ sidebar, navbar, header, footer, children }) {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbar} />
        <HeaderUser {...header} />
        <div className="w-full px-4 mx-auto -mt-24 md:px-10">
          {children ? (
            children
          ) : (
            <div className="relative flex flex-col items-center content-center justify-center w-full p-40 text-center bg-white border border-solid rounded h-500-px border-blueGray-200">
              <h1 className="mt-0 mb-2 text-6xl font-normal leading-normal">
                Here will be your content, instead of this box!
              </h1>
              <p>
                You can add one of the width utility classes to make it a little
                smaller.
              </p>
            </div>
          )}
          <FooterAdmin {...footer} />
        </div>
      </div>
    </>
  );
}

Admin2.defaultProps = {
  sidebar: {},
  navbar: {},
  header: {},
  footer: {},
};

Admin2.propTypes = {
  // props to pass to the Sidebar component
  sidebar: PropTypes.object,
  // props to pass to the NavbarSearchUser component
  navbar: PropTypes.object,
  // props to pass to the HeaderUser component
  header: PropTypes.object,
  // props to pass to the FooterAdmin component
  footer: PropTypes.object,
};
