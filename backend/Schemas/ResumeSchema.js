import mongoose from "mongoose";

const Resumeschema=new mongoose.Schema({
 Useremail: {
    type: String,
    required: true},
  
personalDetails: {
    name: {
      type: String,
      required:true,

      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
   
      unique: true,
      lowercase: true,
      
    },
    phone: {
      type: String,
     
    },
    title: {
      type: String,
      
      trim: true,
    },
    about: {
      type: String,
      
     
    },
    address: {
      type: String,
     
    },
  },

  // 🔹 Media / Social Links
  media: {
    linkedin: {
      type: String,
      
    },
    github: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
  },

  // 🔹 Skills
  skills: {
    skillone: {
      type: String,
      
    },
    skilltwo: {
      type: String,
      default: "",
    },
    skillthree: {
      type: String,
      default: "",
    },
  },

  // 🔹 Experience Section
  experience: {
    company: {
      type: String,
      required: true, 
    },
    job: {
      type: String,
 
    },
    role: {
      type: String,

      minlength: 20,
    },
  },

  // 🔹 Education Section
  education: {
    course: {
      type: String,
      
    },
    college: {
      type: String,
     
    },
    passyear: {
      type: String,
     
    },
    grade: {
      type: String,
      
    },
  },

  // 🔹 Optional: Created/Updated timestamps
}, { timestamps: true });

// Middleware for updating timestamps
Resumeschema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});




const Resumemodel=mongoose.model("Resume",Resumeschema)

export default Resumemodel