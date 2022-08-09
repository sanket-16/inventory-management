export default function fetchItems(setItems) {
    fetch("http://localhost:5000/inventory", { method: "GET" })
      .then((res) => res.json())
      .then((result) => setItems(result));
}