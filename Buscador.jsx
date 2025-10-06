export const Buscador = ({ onSubmit, valorInput, onChange }) => {
  return (
    <div className="form-buscador">
      <form onSubmit={onSubmit} className="buscador-form">
        <input
          value={valorInput}
          onChange={onChange}
          className="buscador"
          placeholder="Busca un gif..."
        />
        <button type="submit" className="boton-buscar">
          🔍 Buscar
        </button>
      </form>
    </div>
  );
};
