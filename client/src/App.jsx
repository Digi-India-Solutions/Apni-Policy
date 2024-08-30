import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BottomFooter from './Components/Footer/BottomFooter'
import About from './Pages/About/About'
// import SinglePage from './Pages/SinglePage/SinglePage'
import Contact from './Pages/Contact/Contact'
import HealthGainPolicy from './Pages/InsurancePages/HealthGainPolicy'
import Wellness from './Pages/InsurancePages/Wellness'
import PersonalAccident from './Pages/InsurancePages/PersonalAccident'
import OverseasTravelInsurance from './Pages/InsurancePages/OverseasTravelInsurance'
import SchengenTravelInsurance from './Pages/InsurancePages/SchengenTravelInsurance'
import StudentTravelInsurance from './Pages/InsurancePages/StudentTravelInsurance'
import AsiaTravelInsurance from './Pages/InsurancePages/AsiaTravelInsurance'
import SeniorCitizenTravelInsurance from './Pages/InsurancePages/SeniorCitizenTravelInsurance'
import AnnualMultiTripInsurance from './Pages/InsurancePages/AnnualMultiTripInsurance'
import CarInsurance from './Pages/InsurancePages/CarInsurance'
import TwoWheelerInsurance from './Pages/InsurancePages/TwoWheelerInsurance'
import ComprehensiveCarInsurance from './Pages/InsurancePages/ComprehensiveCarInsurance'
import CommercialVehicleInsurance from './Pages/InsurancePages/CommercialVehicleInsurance'
import FireInsurance from './Pages/InsurancePages/FireInsurance'
import EngineeringInsurance from './Pages/InsurancePages/EngineeringInsurance'
import MarineInsurance from './Pages/InsurancePages/MarineInsurance'
import LiabilityInsurance from './Pages/InsurancePages/LiabilityInsurance'
import PackageInsurance from './Pages/InsurancePages/PackageInsurance'
import Form from './Pages/Form/Form'
import ApplyForm from './Pages/Form/ApplyForm'
import Testimonial from './Pages/Testimonial/Testimonial'
import Auth from './Components/Auth/Auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/single-page' element={<SinglePage />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/form' element={<Form />} />
          <Route path='/active-form' element={<ApplyForm />} />

          <Route path='/testimonial' element={<Testimonial />} />


          <Route path='/health-gain-policy' element={<HealthGainPolicy />} />
          <Route path='/wellness' element={<Wellness />} />
          <Route path='/personal-accident' element={<PersonalAccident />} />

          <Route path='/Overseas-Travel-Insurance' element={<OverseasTravelInsurance />} />
          <Route path='/Schengen-Travel-Insurance' element={<SchengenTravelInsurance />} />
          <Route path='/Student-Travel-Insurance' element={<StudentTravelInsurance />} />
          <Route path='/Asia-Travel-Insurance' element={<AsiaTravelInsurance />} />
          <Route path='/Senior-Citizen-Travel-Insurance' element={<SeniorCitizenTravelInsurance />} />
          <Route path='/Annual-Multi-Trip-Insurance' element={<AnnualMultiTripInsurance />} />

          <Route path='/Car-Insurance' element={<CarInsurance />} />
          <Route path='/Two-Wheeler-Insurance' element={<TwoWheelerInsurance />} />
          <Route path='/Comprehensive-Car-Insurance' element={<ComprehensiveCarInsurance />} />
          <Route path='/Commercial-Vehicle-Insurance' element={<CommercialVehicleInsurance />} />

          <Route path='/Fire-Insurance' element={<FireInsurance />} />
          <Route path='/Engineering-Insurance' element={<EngineeringInsurance />} />
          <Route path='/Marine-Insurance' element={<MarineInsurance />} />
          <Route path='/Liability-Insurance' element={<LiabilityInsurance />} />
          <Route path='/Package-Insurance' element={<PackageInsurance />} />

          <Route path='/Burglary-and-Housebreaking' element={<PackageInsurance />} />
          <Route path='/Fire-Insurance' element={<FireInsurance />} />
          <Route path='/Package-Insurance' element={<PackageInsurance />} />
          <Route path='/Marine-Insurance' element={<MarineInsurance />} />
          <Route path='/Group-Mediclaim-Insurance' element={<PackageInsurance />} />

          <Route path='/auth/admin' element={<Auth />} />
        </Routes>
        <Footer />
        <BottomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
