"use client";

import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
import React, {useState} from "react";
import axios from 'axios'



const UploadVideo =() =>{

const [title, setTitle] = useState(null);
const [description, setDescription] = useState(null);
const [videoUrl, setVideoUrl] = useState(null);

const handleTitleChange = (e:any) => {
  setTitle(e.target.value);
};
const handleDescriptionChange = (e:any) => {
  setDescription(e.target.value);
}
const handleVideoUrlChange = (e:any) => {
  setVideoUrl(e.target.value);
}

const upload = () =>{
  console.log('checking')
  axios
    .post("http://localhost:4000/api/v1/storeVideo", {
      title,
      description,
      videoUrl
    })
    .then(function (response) {
      console.log(response,'response');
    })
    .catch(function (error) {
      console.log(error, 'error');
    });
}  
  return (
    <DashboardLayout>
      <div className="w-full rounded-lg ">
        <div className="items-center justify-center p-6 mx-auto ">
          <h2 className="mb-4 text-2xl font-semibold">Upload Recipe</h2>
          <form className="space-y-3">
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Title:
              </label>
              <input
                onChange={handleTitleChange}
                type="text"
                name="title"
                className="w-full p-2 border rounded"
                placeholder="Enter recipe title"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Description:
              </label>
              <textarea
                onChange={handleDescriptionChange}
                name="ingredients"
                className="w-full p-2 border rounded"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Video:
              </label>
              <input
                onChange={handleVideoUrlChange}
                type="file"
                accept="video/*"
                className="border"
              />
            </div>
            <button
              onClick={() => {
                upload();
              }}
              type="submit"
              className="p-2 text-white rounded bg-[#BA80E6] hover:bg-blue-600"
            >
              Upload Video
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

export default UploadVideo;
