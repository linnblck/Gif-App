import { useState } from "react";

export const useSearch = () => {
     const [valorInput, setValorInput] = useState('');
      const [gifs, setGifs] = useState([]);
      const [estaCargando, setEstaCargando] = useState(false);
    
      const onChange = (evento) => {
        const valor = evento.target.value;
        setValorInput(valor);
      }
    
     const getGifs = async (query) => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=UlxFTIVzvwVOWz6CyI762J1fAWx7Ysqe&q=${encodeURIComponent(query)}&limit=10`;
      setEstaCargando(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch(url);
      const data = await response.json();
      setEstaCargando(false);
      console.log(data);
      return data.data;
    }
    
    
    const onSubmit = async (evento)=>{
      evento.preventDefault();
      const gifs = await getGifs(valorInput)
      setGifs(gifs)
    }
    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
        estaCargando

    }
}