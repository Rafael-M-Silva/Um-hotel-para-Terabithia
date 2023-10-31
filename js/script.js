const nomeHotel = window.prompt("Qual o nome do Hotel?");
alert(`O nome do hotel é ${nomeHotel}`);

const nomeUsuario = window.prompt("Qual o nome de usuario?");
const senhaUsuario = window.prompt("Qual a senha do usuario?");
const senha = 2678;

const menu = () => {
  let opcao = window.prompt(`
    1: para chamar a func 1.
    2: para chamar a func 2.
    3: para chamar a func 3.
    4: para chamar a func 4.
    5: para chamar a func 5.
    6: para chamar a func 6.
    7: para chamar a func 7.
    0: para sair do sistema!.
  `);

  switch (opcao) {
    case "1":
      reservaQuarto();
      break;
    case "2":
      cadastroHospede();
      break;
    case "3":
      pesquisaHospede();
      break;
    case "4":
      cadastroEmpresaEvento();
      break;
    case "5":
      buffetHotel();
      break;
    case "6":
      abastecerCarro();
      break;
    case "7":
      manutencaoArCondicionado();
      break;
    case "0":
      sair();
      break;
    default:
      alert("Digito invalido! Vamos tentar novamente :)");
      menu();
      break;
  }
};

const inicio = () => {
  alert(
    `Bem vindo ao Hotel ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!".`
  );

  menu();
};

const sair = () => {
  alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
};

const reservaQuarto = () => {
  alert("funcao reservar quarto");
  inicio();
};

const cadastroHospede = () => {
  alert("funcao cadastroHospede");
  inicio();
};

const pesquisaHospede = () => {
  alert("funcao pesquisaHospede");
  inicio();
};

/* Eventos do hotel */

const cadastroEmpresaEvento = () => {
  alert("funcao cadastroEmpresaEvento");
  inicio();
};

const buffetHotel = () => {
  alert("funcao buffetHotel");
  inicio();
};

const auditorioEvento = () => {};

const dataEvento = () => {};

const abastecerCarro = () => {
  alert("funcao abastecerCarro");
  inicio();
};

const manutencaoArCondicionado = () => {
  alert("funcao manutencaoArCondicionado");
  inicio();
};

if (senhaUsuario == senha) {
  alert("Acesso Liberado!");
  inicio();
} else {
  alert("Acesso Negado!");
}
