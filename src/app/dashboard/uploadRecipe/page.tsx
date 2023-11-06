"use client";

import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
// import React, {useState} from "react";
import SERVICE from "@/service";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";





 function uploadRecipe() {


  return (
    <DashboardLayout>
      <div className="w-full rounded-lg ">
        <div className="items-center justify-center p-6 mx-auto ">
          <h2 className="mb-4 text-2xl font-semibold">Upload Recipe</h2>
          <form
            className="space-y-3"
          >
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Title:
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border rounded"
                placeholder="Enter recipe title"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Ingredients:
              </label>
              <textarea
                name="ingredients"
                className="w-full p-2 border rounded"
                placeholder="Enter ingredients"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Instructions:
              </label>
              <textarea
                name="instructions"
                className="w-full p-2 border rounded"
                placeholder="Enter instructions"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Image:
              </label>
              <input type="file" accept="image/*" className="border" />
            </div>
            <button
              type="submit"
              className="p-2 text-white rounded bg-[#BA80E6] hover:bg-blue-600"
            >
              Upload Recipe
            </button>
          </form>
        </div>
      </div>
      <section>
        <div>list of recipes bt title only with a delete button</div>
      </section>
    </DashboardLayout>
  );

  
}

export default uploadRecipe
