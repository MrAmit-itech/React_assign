import Groceryinput from "./GroceryInput"


const Grocerylist=()=>{
    const arr = []
    const Todo=(data)=>{
       console.log('received in parent',data)
       arr.push(data)
    }
    const Printarr=()=>{
        console.log(arr)
    }
   return<>
        <Groceryinput getdata={Todo} listinarr={Printarr} />
   </>
}
export default Grocerylist