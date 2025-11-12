import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ImageUploadForm = ({ userInformation, setUserInformation }) => {
  const [preview, setPreview] = useState(userInformation?.imageprofile || "");

  const formik = useFormik({
    initialValues: {
      imageprofile: userInformation?.imageprofile || "", // same key name
    },
    validationSchema: Yup.object({
      imageprofile: Yup.mixed()
        .required("Image is required")
        .test(
          "fileSize",
          "File too large (max 10MB)",
          (value) => !value || (value && value.size <= 10 * 1024 * 1024)
        )
        .test(
          "fileType",
          "Unsupported file format (use PNG, JPG, JPEG)",
          (value) =>
            !value ||
            ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
        ),
    }),
    onSubmit: (values) => {
      if (values.imageprofile && typeof values.imageprofile !== "string") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUserInformation({
            ...userInformation,
            imageprofile: reader.result, // store base64
          });
          alert("✅ Image uploaded successfully!");
          console.log(userInformation);
          
        };
        reader.readAsDataURL(values.imageprofile);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("imageprofile", file);

      // Preview image instantly
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-5 px-3 rounded-md bg-gray-900 text-white mb-10">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gray-800 p-5 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Upload Your Profile Image
        </h2>

        <label
          htmlFor="imageprofile"
          className="block text-gray-300 mb-2 font-medium"
        >
          Select an Image:
        </label>

        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-xl p-6 hover:border-blue-500 transition">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover mb-3 border border-gray-600"
            />
          ) : (
            <div className="text-gray-400 mb-2">No image selected</div>
          )}

          <input
            id="imageprofile"
            name="imageprofile"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <label
            htmlFor="imageprofile"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Choose File
          </label>
        </div>

        {formik.touched.imageprofile && formik.errors.imageprofile ? (
          <p className="text-red-400 text-sm mt-2 text-center">
            {formik.errors.imageprofile}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 hover:bg-green-700 py-2 rounded-md text-lg font-semibold"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
