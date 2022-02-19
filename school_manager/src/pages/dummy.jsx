const axios = require("axios")

const Call=()=>{
    axios.get('/homepage').then(Response=>(console.log(Response)))
}

const Dummy=()=>{
    return<>
        <button onClick={Call}>click me</button>
    </>
}
export default Dummy