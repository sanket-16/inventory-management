import Axios from "axios";


export default async function addItem(data,setData) {
  const payload = {
    name: data.name,
    cost: data.cost,
    stock: data.stock
  }
  await Axios.post("http://localhost:5000/inventory",payload)
  .then(res=> {
    console.log(res.data);
    setData({ name: "", cost: 0, stock: 0 })
  })
}
