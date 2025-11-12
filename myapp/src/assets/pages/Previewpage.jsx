import React, { useEffect, useState } from 'react'
import Typeone from '../typetemplate/Typeone'
import Typetwo from '../typetemplate/Typetwo';
import Typethree from '../typetemplate/Typethree';
import { useOutletContext, useParams } from 'react-router';

const Previewpage = () => {

    const [resumetype,Setresumetype]=useState("normal")
const {userInformation,setUserInformation}=useOutletContext()
const {id}=useParams()

useEffect(()=>{
Setresumetype(id)
},[])
    const Handleswitchfunction=()=>{
        switch(resumetype){

            case "normal":return <Typetwo userInformation={userInformation} setUserInformation={setUserInformation}/>;
            case "ats":return <Typethree userInformation={userInformation} setUserInformation={setUserInformation}/>;
            case "modern":return <Typeone userInformation={userInformation} setUserInformation={setUserInformation}/>;
            default:return<Typetwo/>

        }
    }
  return (
    <div className='w-full flex justify-center items-center min-h-screen  bg-gray-400 '>
        <div className='mt-30 mb-30  bg-gray-400'>
            {Handleswitchfunction()}
        </div>
      
    </div>
  )
}

export default Previewpage
