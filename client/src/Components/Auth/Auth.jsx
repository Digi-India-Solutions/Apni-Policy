import React, { useEffect, useState } from 'react';
import './auth.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

function Auth() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.apnipolicy.in/api/v8/getform');
            const reversedData = response.data.data.reverse(); // Reverse the data array
            setData(reversedData);
            // console.log(reversedData)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // const handleDelete = async (_id) => {
    //     try {
    //         await axios.delete(`https://api.apnipolicy.in/api/v8/deleteform/${_id}`);
    //         toast.success('Item deleted successfully');
    //         fetchData(); // Fetch updated data after deletion
    //     } catch (error) {
    //         toast.error('Error deleting item');
    //         console.error('Error deleting item:', error);
    //     }
    // };

    const handleDelete = async (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`https://api.apnipolicy.in/api/v8/deleteform/${_id}`);
                    console.log(res.data);
                    toast.success("Enquiry Deleted");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Enquiry has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message);
                }
            }
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className='auth-section'>
                <div className="auth-heading">
                    <span>Form Details</span>
                </div>
            <div className="auth-container">
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Zip Code</th>
                            <th>Insurance Type</th>
                            <th>Additional Info</th>
                            <th>Plan Type</th>
                            <th>Cover Type</th>
                            <th>Sum Insured</th>
                            <th>Tenure</th>
                            {/* <th>Business Type</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item._id}>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.zipCode}</td>
                                <td>{item.insuranceType}</td>
                                <td>{item.additionalInfo}</td>
                                <td>{item.planType}</td>
                                <td>{item.coverType}</td>
                                <td>{item.sumInsured}</td>
                                <td>{item.tenure}</td>
                                {/* <td>{item.businessType}</td> */}
                                <td>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <div className="pagination">
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>Next</button>
                </div>
                <ToastContainer /> {/* ToastContainer for displaying toast notifications */}
        </section>
    );
}

export default Auth;
