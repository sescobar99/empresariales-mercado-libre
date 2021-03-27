// import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"; //importando hooks de react
import productService from "./services/products";
// import sellerService from "./services/seller";

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
    productService.getProducts(searchTerm).then(result => {
      setProducts(result.results)}
      );
    console.log("efecto");
    // let 
  },[searchTerm]);
  //Cada vez que hay un cambio de estado react re-renderiza el componente que cambio
  //lo que hay dentro de [] se va a-renderizar con cada cambio
  //Cada que se actulaiza lo que hay en [] se ren
  
  //Un componente se renderiza cada 
  console.log("render");


  return (
    <div className="App">
      <img src={"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/117394139_1077892559272086_1045790931019337628_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFtbY7Zl4BFC__0reGeKFMqRq16EPzgbkZGrXoQ_OBuRvhms7CFgHh6nJCtSzKum64hrTVynoYZA2QhulTBP7iQ&_nc_ohc=GoVeAwS2IZsAX-vPgTm&_nc_ht=scontent.feoh1-1.fna&oh=14f9c1c431395083c1dc97751aad0289&oe=6082781B"} alt="En construccion"/>
      <h1>Sescobar Mercado Libre</h1>
      <form onSubmit={submitHandler}>
        <input type="search" onChange={changeHandler} value={valueInput}></input>
      </form>

      {products.map(product => {
        return (
        <div key={product.id}>
          <p>{product.title}</p>
            <a href={"https://api.mercadolibre.com/items/" + product.id}>
              <img src={product.thumbnail} alt="Thumbnail" />
            </a>
          <p>${product.price}</p>
        </div>
        )
      })}
      {/* En react cada hijo de un arreglo deberia tener una key(id unico) */}
    </div>
  );
}


export default App;
