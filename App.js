import './App.css';

import { TextField,Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function App() {
  //create state
  const [age,setage]=useState(0)
 
  const [weight,setweight]=useState(0)
  const handlecalculate=(e)=>{
    e.preventDefault()
  
      let output=2*age+5
      setweight(output)
    
  }
  const handleReset=()=>{
    setage(0)
    setweight(0)
    
  }
return (
   <div className='app'>
    <div className='container'>
      {/*heading part*/}
      <div className='heading_text'>
    <h1>KIDS WEIGHT CALCULATOR</h1>
    <h1>Calculate your kids weight in one click</h1>
    </div>
    {/*amount div*/}
    <div className='total-amount-card'>
      <div className='card-text'>
        <h3> {weight} Kg</h3>
        <h3>Weight in Kilogram(Kg)</h3>
      </div>
   </div>
    {/*insert form*/}
    <form onSubmit={handlecalculate}>
      <div style={{marginTop:'40px'}}className='all-inputs'>
      <div className='inpu-field'>
      <TextField id="outlined-basic" label="Please enter kid age:" variant="outlined" value={age ||""}onChange={e=>setage(e.target.value)}/>
      </div>
     
      </div>
      <Stack className='btnGroup' spacing={9}direction="row">
      <Button type='submit' className='btn' style={{backgroundColor:"pink"}} variant="contained">Calculate</Button>
      <Button onClick={handleReset}className='btn'style={{backgroundColor:"pink"}} variant="contained">Reset</Button>
      </Stack>
    </form>
    </div>
   </div>
  );
}


export default App;
