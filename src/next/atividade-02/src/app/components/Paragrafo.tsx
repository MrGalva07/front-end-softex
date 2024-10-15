/*6. Componente de Parágrafo:
Crie um componente chamado Paragrafo que renderize um parágrafo <p> com texto personalizável. */



const Paragrafo = (props:any) => {
  return (
    <div>
        <p>{props.text}</p>
    </div>
  )
}

export default Paragrafo