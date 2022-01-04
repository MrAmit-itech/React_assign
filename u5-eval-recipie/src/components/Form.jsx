import Handlesubmit from "./Formdata"

const DisplayForm=()=>{

    return(
        <div className="App">
     <div className='left'>
         <form onSubmit={Handlesubmit} action="">
           <table>
            <tbody>
            <tr>
             <td>Title:</td>
             <td><input id='title' type="text" placeholder='enter value' /></td>
           </tr>
           <tr>
             <td>Ingredients:</td>
             <td> <input id='ingredients' type="text" placeholder='enter value' /> </td>
           </tr>
           <tr>
             <td>Time to cook:</td>
             <td><input id='time' type="datetime-local" placeholder='enter value' /> </td>
           </tr>
           <tr>
             <td>Instructions:</td>
             <td><input id='instruction' type="text" placeholder='enter value' /> </td>
           </tr>  
           <tr>
             <td>Image:</td>
             <td><input id='img' type="url" placeholder='enter url' /> </td>
           </tr> 
           <tr>
              <td><input type="submit" /></td>
            </tr>  
            </tbody>
           </table>
          </form> 
     </div>
     <div>
       
     </div>
     
    </div> 
    )
}

export default DisplayForm