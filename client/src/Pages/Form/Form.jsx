import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const InsuranceName = sessionStorage.getItem('InsuranceName');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    insuranceType: InsuranceName || '',
    additionalInfo: '',
    planType: '',
    coverType: '',
    sumInsured: '',
    tenure: '',
    // businessType: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setFormData((prevData) => ({
      ...prevData,
      insuranceType: InsuranceName || '',
    }));
  }, [InsuranceName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if all required fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    if (!isFormValid) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      const response = await axios.post('https://api.apnipolicy.in/api/v8/createform', formData);
      // console.log(response);
      if (response.status === 200) {
        toast.success('Form Submitted Successfully! Redirecting...');
        sessionStorage.removeItem('InsuranceName');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          zipCode: '',
          insuranceType: '',
          additionalInfo: '',
          planType: '',
          coverType: '',
          SumInsured: '',
          Tenure: '',
          // BusinessType: ''
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section className="form-section">
      <ToastContainer />
      <div className="form-container">
        <div className="heading">
          <h2>Personal Detail</h2>
        </div>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="planType" className="block text-sm font-medium text-gray-700">Plan Type</label>
              <select
                id="planType"
                name="planType"
                value={formData.planType}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select a Plan</option>
                <option value="base">Base</option>
                <option value="topup">TopUp</option>
              </select>
            </div>
            <div className="form-group half-width">
              <label htmlFor="coverType" className="block text-sm font-medium text-gray-700">Cover Type</label>
              <select
                id="coverType"
                name="coverType"
                value={formData.coverType}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select a Cover</option>
                <option value="Individual">Individual</option>
                <option value="Family Floater">Family Floater</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="sumInsured" className="block text-sm font-medium text-gray-700">Select Sum Insured</label>
              <select
                id="sumInsured"
                name="sumInsured"
                value={formData.SumInsured}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select</option>
                <option value="3 Lack">3 Lack</option>
                <option value="5 Lack">5 Lack</option>
                <option value="7 Lack">7 Lack</option>
                <option value="10 Lack">10 Lack</option>
                <option value="15 Lack">15 Lack</option>
                <option value="25 Lack">25 Lack</option>
                <option value="50 Lack">50 Lack</option>
                <option value="100 Lack">100 Lack</option>
                <option value="200 Lack">200 Lack</option>
                <option value="300 Lack">300 Lack</option>
                <option value="600 Lack">600 Lack</option>
              </select>
            </div>
            <div className="form-group half-width">
              <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">Tenure</label>
              <select
                id="tenure"
                name="tenure"
                value={formData.Tenure}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select</option>
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            {/* <div className="form-group half-width">
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.BusinessType}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select</option>
                <option value="New Business">New Business</option>
                <option value="Existing">Existing</option>
                <option value="Renewal">Renewal</option>
                <option value="Porting">Porting</option>
              </select>
            </div> */}
            <div className="form-group half-width">
              <label htmlFor="insuranceType">Insurance Name</label>
              <input
                type="text"
                id="insuranceType"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit Inquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
