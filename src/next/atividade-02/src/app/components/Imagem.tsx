/*5. Componente de Imagem:
Crie um componente chamado Imagem
 que renderize uma imagem <img> com um URL de imagem
personalizável e uma descrição alternativa. */


const Imagem = (props:any) => {
  return (
    <div className="flex flex-col">
        <img src={props.url} alt="image" />
        <p> {props.descricao} </p>
    </div>
  )
}

export default Imagem