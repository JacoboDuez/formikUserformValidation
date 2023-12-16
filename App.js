import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";


function App() {
  const formik = {
      initialValues:{
        name:'',
        email:'',
        password:''
      },
      onSubmit: values =>{
        console.log('form:', values);
      },
      validate: values=>{
        let checkingApproval = true;
        if(values.name.length ==0 || values.password.length== 0){
          values.errors = 'Field required';
          checkingApproval =false;
        }
        if(!values.email.includes("@") || ! values.email.includes(".")) {
          values.errors = 'Username should be in an email format';
          checkingApproval =false;
        }
        if(checkingApproval) alert("Successful Login");
      }
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input  name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
