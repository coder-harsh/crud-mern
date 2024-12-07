import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
function AddUser() {
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        email: "",
        phone: "",
    });
    const resetData = () => {
        setFormData({
            name: "",
            fatherName: "",
            email: "",
            phone: "",
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
        const backend_url = import.meta.env.VITE_BACKEND_URL
        toast.promise(
            axios.post(backend_url + '/api/create', formData)
                .then((response) => {
                    console.log("Response:", response.data);
                    resetData();
                }),
            {
                loading: 'Submitting...',
                success: 'Form submitted successfully!',
                error: 'Failed to submit form. Please try again.',
            }
        );
    };
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Father's Name Field */}
                    <div>
                        <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                            Father's Name
                        </label>
                        <input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
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
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
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
                            className="mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
}

export default AddUser;
