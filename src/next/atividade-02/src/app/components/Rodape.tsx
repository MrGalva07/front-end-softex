/*8. Componente de Rodapé:
Crie um componente chamado Rodape que renderize um rodapé <footer> com informações
personalizáveis. */



const Rodape = (props:any) => {
  return (
    <footer className="flex justify-between bg-black w-full h-16-">
        <div className="flex flex-col ">
            <span>{props.nomePag}</span>
            <span>Entre em contato:</span>
            <span>{props.email}</span>
            <span>{props.telefone}</span>

        </div>
        <div>
            <img src={props.url} alt="logo" />
        </div>
    </footer>
  )
}

export default Rodape