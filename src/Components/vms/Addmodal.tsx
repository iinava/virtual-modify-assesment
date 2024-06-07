"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { VendorData, AddModalProps } from "@/constants/types";
import { validationSchema } from "@/constants/schema";
import { z } from "zod";

export default function AddModal({ setVendors }: AddModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const parsedData = validationSchema.parse({
        ...formData,
        age: Number(formData.age),
      });
      setErrors({
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      });

      const response = await axios.post(`/api/vendors/add`, parsedData);
      const newVendor = response.data.data;
      setVendors((prevVendors) => [...prevVendors, newVendor]);
      setIsLoading(false);
      setShowModal(false);
      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (validationErrors) {
      if (validationErrors instanceof z.ZodError) {
        const tempErrors = validationErrors.errors.reduce(
          (acc, error) => ({ ...acc, [error.path[0]]: error.message }),
          {}
        );
        setErrors(tempErrors as any);
      } else {
        console.error("Error adding vendor", validationErrors);
      }
    }finally{
      setIsLoading(false)
    }
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
              <div className="border border-neutral-800 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
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
                  <form onSubmit={handleSubmit}>
                    <div className="max-w-sm space-y-3">
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                      <input
                        type="number"
                        className="custom-input"
                        placeholder="Enter age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {errors.age && (
                        <p className="text-red-500">{errors.age}</p>
                      )}
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && (
                        <p className="text-red-500">{errors.address}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-end p-6 rounded-b">
                      <button
                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-white text-black active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                     {
                      isLoading ? "Loading..." : "Add"
                     }
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
