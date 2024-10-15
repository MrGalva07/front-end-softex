/*4. Componente de Lista de Itens:
Crie um componente chamado ListaItens que renderize uma lista não ordenada <ul> contendo uma
série de itens de lista <li>, onde cada item pode ter um texto personalizável. */



const ListaItens: React.FC<{ itens: string[] }> = ({ itens }) => {
    return (
      <ul id="lista">
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
}

export default ListaItens