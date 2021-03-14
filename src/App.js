import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"; //importando hooks de react
import productService from "./services/products"

function App() {
  const [valueInput, setValueInput] = useState(""); //useState tiene ¿atributos? (dos cositas),Base conceptual de react: manejo de estado
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const vs var vs let
  //var hacia perder el scope -> [deprecated]
  //let y const no dejan perder el scope
  //Para tipo primitivo se define que cosnt no cambia pero para otro tipo (arrays,..) se puede definir con const
  //Cuando se crea con let creamos en memoria dinamica
  //Guardar en const para no manejarlas en memoria dinamica.

  const changeHandler = (event) => {
    setValueInput(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(valueInput);
  };
  
  //hook de react
  useEffect(() => {
    productService.getProducts(searchTerm).then(result => setProducts(result.results));
    console.log("efecto");
  },[searchTerm]);
  //Cada vez que hay un cambio de estado react re-renderiza el componente que cambio
  //lo que hay dentro de [] se va a-renderizar con cada cambio
  //Cada que se actulaiza lo que hay en [] se ren
  
  //Un componente se renderiza cada 
  console.log("render");


  return (
    <div className="App">
      <h1>Sescobar Mercado Libre</h1>
      <form onSubmit={submitHandler}>
        <input type="search" onChange={changeHandler} value={valueInput}></input>
      </form>

      {products.map(product => {
        return (
        <div key={product.id}>
          <p>{product.title}</p>
          <img src={product.thumbnail}></img>
          <p>${product.price}</p>
        </div>
        )
      })}
      {/* En react cada hijo de un arreglo deberia tener una key(id unico) */}
    </div>
  );
}


export default App;
