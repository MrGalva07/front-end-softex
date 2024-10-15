/* 2. Componente de Título:
Crie um componente chamado Titulo que renderize um título de página <h1> com um texto
personalizável.*/



const Titulo = (props:any) => {
  return (
    <div>
        <h1>{props.title}</h1>
        </div>
  )
}

export default Titulo