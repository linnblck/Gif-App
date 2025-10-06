import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearch } from "./useSearch";

function App() {
  //Estado
  const { valorInput, onChange, onSubmit, gifs, estaCargando } = useSearch()
  //JSX
  return (
    <div className="card">

      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {
        estaCargando ?
          (<h2>Cargando... ⏳</h2>) :
          (
            <GridGifs
              gifs={gifs}
            />
          )
      }

    </div>
  )
}

export default App;
