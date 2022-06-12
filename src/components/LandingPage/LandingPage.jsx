import React from 'react'
import Detailsfourth from "../Detailsfourth/Detailsfourth";
import Footer from "../Footer/Footer";
import GetStarted from "../Getstarted/GetStarted";
import Hire from "../Hire/Hire";
import Jobsearch from "../Jobsearch/Jobsearch";
import Navbar from "../Navbar/Navbar";
import Withexpertia from "../Withexpertia/Withexpertia";

const LandingPage = () => {
  return (
    <div>
        <Navbar />
      <GetStarted />
      <Withexpertia />
      <Detailsfourth />
      <Jobsearch />
      <Hire />
      <Footer />
    </div>
  )
}

export default LandingPage