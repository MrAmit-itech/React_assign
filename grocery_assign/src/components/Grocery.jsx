

const Final=({title,status,id,handletoggle})=>{
    return<>
        <li>{title}{' '}
        <button onClick={()=>{handletoggle(id)}} >delete</button></li>
    </>
}

export default Final