import { Button, TextField, Checkbox} from '@mui/material'; // Correct import for MUI

const MaterialUI = () => {
  return (
    <>
      <h1>React MUI</h1>
      
    <div className='border-2 rounded-4 w-3/4 m-auto p-4' >
      {/* <h1>Form in MUI</h1> */}
    <h4>Personal Information</h4>
      <TextField id="filled-basic" label="First Name" variant="filled" className='col-lg-5 m-3'/>
      <TextField id="filled-basic" label="Last Name" variant="filled" className='col-lg-5 m-3'/>
      <TextField id="filled-basic" label="Email" variant="filled" className='col-lg-10 m-3'/>
    <h4 className=''>Subjects You Choose:</h4>

<div className="checkBoxContainer flex flex-wrap direction-row align-center justify-around border-2 rounded-4xl">

      <div className='col-lg-4 m-3 border rounded-4 '><Checkbox/><label>Biology</label></div>
      <div className='col-lg-4 m-3 border rounded-4 '><Checkbox/><label>Computer Science</label></div>
      <div className='col-lg-4 m-3 border rounded-4 '><Checkbox/><label>Mathematics</label></div>
      <div className='col-lg-4 m-3 border rounded-4 '><Checkbox/><label>English</label></div>
</div>
      
      
      
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">Success</Button>
    </div>
    
    
    
    </>
  );
};

export default MaterialUI;
