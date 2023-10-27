const nomeHotel = window.prompt("Qual o nome do Hotel?");
alert(`O nome do hotel é ${nomeHotel}`);

const nomeUsuario = window.prompt("Qual o nome de usuario?");
const senhaUsuario = window.prompt("Qual a senha do usuario?");
const senha = 2678;

const inicio = () => {
  alert(
    `Bem vindo ao Hotel ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!".`
  );
  reservaQuarto();
};

const sair = () => {
  alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
};

const reservaQuarto = () => {
  const valorDiaria = Number(window.prompt("Qual o valor padrão da diária?"));

  if (valorDiaria <= 0) {
    alert(`Valor inválido, ${nomeUsuario}`);
    inicio();
    return;
  }

  alert("proxima funcao");
};

if (senhaUsuario == senha) {
  alert("Acesso Liberado!");
  inicio();
} else {
  alert("Acesso Negado!");
}
