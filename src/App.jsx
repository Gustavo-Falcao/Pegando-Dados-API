import { useEffect, useState } from 'react'
import './App.css'
import List from './List';

function App() {
  //const exemplo = useRef(null);
  //exemplo.current = 'Ola'
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 // const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      setArray(json)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error("Erro ao buscar dados", error);
      setIsLoading(false)
    });
  },[])

  return (
    <>
      <h1>Estudando o uso de UseEffect() e pegar dados API</h1>
      <h2>Informações usuario</h2>
      <div>
        {isLoading ? <p>Carregando...</p> : <List lista={array}/>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
