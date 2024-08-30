import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApplyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    insuranceType: '',
    additionalInfo: '',
    planType: '',
    coverType: '',
    sumInsured: '',
    tenure: '',
    // businessType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v8/createform', formData);
      console.log(response);
      if (response.status === 200) {
        toast.success('Form submitted successfully! Redirecting...');
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
          sumInsured: '',
          tenure: '',
          // businessType: ''
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-gray-100 py-8">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
                  Type of Insurance
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="Health Gain Policy">Health Gain Policy</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Personal Accident">Personal Accident</option>
                  <option value="Overseas Travel Insurance">Overseas Travel Insurance</option>
                  <option value="Schengen Travel Insurance">Schengen Travel Insurance</option>
                  <option value="Student Travel Insurance">Student Travel Insurance</option>
                  <option value="Asia Travel Insurance">Asia Travel Insurance</option>
                  <option value="Senior Citizen Travel Insurance">Senior Citizen Travel Insurance</option>
                  <option value="Annual Multi Trip Insurance">Annual Multi Trip Insurance</option>
                  <option value="Car Insurance">Car Insurance</option>
                  <option value="Two Wheeler Insurance">Two Wheeler Insurance</option>
                  <option value="Comprehensive Car Insurance">Comprehensive Car Insurance</option>
                  <option value="Commercial Vehicle Insurance">Commercial Vehicle Insurance</option>
                  <option value="Fire Insurance">Fire Insurance</option>
                  <option value="Engineering Insurance">Engineering Insurance</option>
                  <option value="Marine Insurance">Marine Insurance</option>
                  <option value="Liability Insurance">Liability Insurance</option>
                  <option value="Package Insurance">Package Insurance</option>
                  <option value="Burglary and Housebreaking">Burglary and Housebreaking</option>
                  <option value="Group Mediclaim Insurance">Group Mediclaim Insurance</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="planType" className="block text-sm font-medium text-gray-700">
                  Plan Type
                </label>
                <select
                  id="planType"
                  name="planType"
                  value={formData.planType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a Plan</option>
                  <option value="base">Base</option>
                  <option value="topup">TopUp</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="coverType" className="block text-sm font-medium text-gray-700">
                  Cover Type
                </label>
                <select
                  id="coverType"
                  name="coverType"
                  value={formData.coverType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a Cover</option>
                  <option value="Individual">Individual</option>
                  <option value="Family Floater">Family Floater</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="sumInsured" className="block text-sm font-medium text-gray-700">
                  Select Sum Insured
                </label>
                <select
                  id="sumInsured"
                  name="sumInsured"
                  value={formData.sumInsured}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="3 Lakh">3 Lakh</option>
                  <option value="5 Lakh">5 Lakh</option>
                  <option value="7 Lakh">7 Lakh</option>
                  <option value="10 Lakh">10 Lakh</option>
                  <option value="15 Lakh">15 Lakh</option>
                  <option value="25 Lakh">25 Lakh</option>
                  <option value="50 Lakh">50 Lakh</option>
                  <option value="100 Lakh">100 Lakh</option>
                  <option value="200 Lakh">200 Lakh</option>
                  <option value="300 Lakh">300 Lakh</option>
                  <option value="600 Lakh">600 Lakh</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">
                  Tenure
                </label>
                <select
                  id="tenure"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="1 year">1 year</option>
                  <option value="2 year">2 year</option>
                  <option value="3 year">3 year</option>
                </select>
              </div>
              {/* <div className="mb-4">
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="New Business">New Business</option>
                  <option value="Existing">Existing</option>
                  <option value="Renewal">Renewal</option>
                  <option value="Porting">Porting</option>
                </select>
              </div> */}
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ApplyForm;
