const Home = () => {
  return (
    <div>
      <div className="filtros">
        <div>
          <label htmlFor="breed">Buscar Palabra </label>
          <input type="text" name="breed" />
        </div>
        <div>
          <label htmlFor="breed">Ordenar Por </label>
          <select name="select">
            <option value="value1" selected>ID</option>
            <option value="value2">Nombre</option>
            <option value="value3">Peso</option>
          </select>
        </div>
        <div>
          <label htmlFor="breed">Orden ascendente o descendente </label>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="breed">Filtrar por </label>
          <select name="select">
            <option value="value1" selected>Sin filtrar</option>
            <option value="value2">Temperamento</option>
            <option value="value3">Raza</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
