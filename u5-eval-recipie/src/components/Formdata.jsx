import db from "./db"

const Handlesubmit=(e)=>{
    e.preventDefault()
    var obj={
      title:e.target.title.value,
      ingredients:e.target.ingredients.value,
      time:e.target.time.value,
      instruction:e.target.instruction.value,
      image_url:e.target.img.value
    }

    console.log(obj)
    db.push(obj)
    console.log('db',db)
  }

  export default Handlesubmit