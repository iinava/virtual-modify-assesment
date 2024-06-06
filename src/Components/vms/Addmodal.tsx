"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

export default function Addmodal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/vendors/add`,formData);
      console.log(response);
    } catch (error) {
      console.error("Error adding vendor", error);
    } finally {
      setIsLoading(false);

    }
    setShowModal(false);
    setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      });
  };

  return (
    <>
      <button
        className="bg-white text-black active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new vendor
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border border-neutral-800 rounded-lg shadow-lg relative flex flex-col w-full bg-black  outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold">Add</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col justify-center items-center">
                  <form>
                    <div className="max-w-sm space-y-3">
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        className="custom-input"
                        placeholder="Enter age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        className="custom-input"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {/* <button onClick={handleSubmit}>
                        add
                      </button> */}
                    </div>
                    <div className="flex items-center justify-end p-6 rounded-b">
                      <button
                        className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={(e: any) => handleSubmit(e)}
                        className="bg-white text-black active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
