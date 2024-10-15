/* 3. Componente de Botão:
Crie um componente chamado Botao que
 renderize um botão <button> com um texto
personalizável e uma função de clique.*/


const Botao: React.FC<{ texto: string; onClick: () => void }> = ({ texto, onClick }) => {
    return (
      <button onClick={onClick}>
        {texto}
      </button>
    );
  
}

export default Botao