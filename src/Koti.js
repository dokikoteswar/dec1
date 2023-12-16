import React from "react";
import { useState } from "react";


const Koti = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(password);
    const [cpassword, setCpassword] = useState("");
    console.log(password);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isCpassword, setIsCpassword] = useState(false);
    // let pass = false, cpass =false;
   
    const handelEmail =(e)=>{
          setEmail(e.target.value);
          const emailRegex =
          new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
          
          setIsValidEmail(emailRegex.test(e.target.value));
    } 
    const  valpassword = (e) =>{
          setPassword(e.target.value);
              // console.log(password.length>=8);
            setIsPassword(password.length>=8);

       


    }
    const valCpassword =(e)=>{
        setCpassword(e.target.value);
         setIsCpassword(password == cpassword);
         console.log(isCpassword);
    }
 
    function submitForm (e){
        // e.preventDefault();
        if(isValidEmail && isPassword && isCpassword){
            alert("form submited successfully")
        }
        

      
       

    }
     return(
        <form className="form" onSubmit={submitForm}>
        <p className="title">Email</p>
        <input type="email"  value={email}  onChange={handelEmail} />
      
        {!isValidEmail&&(
          <p className="redTest">Invaild email format</p>
        )}
        
        <p className="title">Password</p>
        <input type="password" value={password} onChange={valpassword} id="password"/>
        {/* <p className="passwordErr">Password must be at least 8 characters</p> */}
        {!isPassword&&(<p className="redTest">Password must be at least 8 characters</p>)
        }
        <div className="title"><p>Confirm Password</p></div>
        <input type="password"   onChange={valCpassword} />
         {!isCpassword&&(
          <p className="redTest">password do not match</p>
         )
         }
        <button type="submit>">Sing Up</button>
        </form>
     )
}

export default Koti;