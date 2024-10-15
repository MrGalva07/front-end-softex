/*7. Componente de Cabeçalho:
Crie um componente chamado Cabecalho que renderize um cabeçalho <header> com um título e
uma descrição personalizáveis. */


const Cabecalho = (props:any) => {
  return (
    <header className="flex bg-black text-white flex-col w-full h-10">
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>

    </header>
  )
}

export default Cabecalho