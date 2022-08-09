import Axios from "axios";


export default async function deleteItem(event) {
    const id = event.target.id;
    
  const payload = {
    id: id
  }
  await Axios({
    method: "delete",
    url :"http://localhost:5000/inventory",
    data: payload
})
  .then(res=> {
    console.log(res.data);
  })
}

