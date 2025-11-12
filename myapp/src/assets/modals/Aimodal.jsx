import axios from "axios";
import React, { useState } from "react";
import { useOutletContext } from "react-router";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";

const AiInputModal = ({open, setOpen,loading,datatype,Prompt,Setloading,HandlePrompt,Setprompt,userInformation,texttype,Placeholder}) => {


  return (
    <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}} exit={{opacity:0, translateX:-50}} className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Ask AI
      </button>

      {/* Modal backdrop */}
      {open && (
        <div className={`fixed  inset-0 bg-black/50 flex items-center justify-center z-50`}>
          {/* Modal panel */}
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-lg overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                AI Assistant
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {loading&&<Button
  fullWidth
  loading
  loadingPosition="end"
  endIcon={<SaveIcon />}
  variant="contained"
  color="primary"
>
  Wait a moment... AI generating {texttype} ...
</Button>
}

            {/* Body */}
            <div className="px-6 py-5">
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows="6"
                value={Prompt}
                onChange={(e)=>Setprompt(e.target.value)}
                placeholder={Placeholder}
              ></textarea>
              <p className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400">
                {
                datatype=="about"&&userInformation.personalDetails.about || datatype=="role"&&userInformation.experience.role ||"AI generated about wil appear here..."}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <button className="px-4 py-1 rounded-md bg-linear-to-r text-xs from-purple-600 via-blue-600 to-purple-700 text-white hover:bg-indigo-700 " onClick={HandlePrompt}>
                  Generate 
                </button>
                <button className="bg-blue-800 px-4 py-1 rounded-md  border text-xs text-white hover:bg-blue-500" onClick={HandlePrompt}>
                  Rewrite
                </button>
                
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t px-6 py-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button onClick={()=>setOpen(false)} className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                Save 
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AiInputModal;
