import * as Yup from "yup"



export const Signupschema = Yup.object({
    name:Yup.string().min(4).required("pleease ener your name"),
    email:Yup.string().email("please enter valid email").required("please enter email")
    ,
    phone:Yup.string().min(10).required("please enter phone number"),
     about:Yup.string().min(10).required("pleease ener your about"),
      title:Yup.string().min(4).required("pleease ener your title"),
      address:Yup.string().min(4).required("pleease ener your address"),
   
})


export const QualificationSchema=Yup.object({
    course:Yup.string().required("please enter course"),
    college:Yup.string().min(5).required("enter collage name"),
    passyear:Yup.string().required("enter pass year"),
    grade:Yup.string().required("required grade")
})