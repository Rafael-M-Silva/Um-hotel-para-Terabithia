const nomeHotel = window.prompt("Qual o nome do Hotel?");
alert(`O nome do hotel é ${nomeHotel}`);

const nomeUsuario = window.prompt("Qual o nome de usuario?");
const senhaUsuario = window.prompt("Qual a senha do usuario?");
const senha = 2678;

const menu = () => {
  let opcao = window.prompt(`
    1: Reserva de quartos.
    2: Cadastrar Hospede.
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
      valorCadastroHospede();
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

// INICIO RESERVA QUARTO
const reservaQuarto = () => {
  const valorDiaria = promptForNumber("Qual o valor padrão da diária?");
  const quantasDiarias = promptForNumber("Quantas diárias serão necessárias?");

  if (valorDiaria < 0 || quantasDiarias < 0) {
    window.alert(`Valor inválido, ${nomeUsuario}`);
    menu();
    return;
  }

  const valorDiarias = (valorDiaria * quantasDiarias)
    .toFixed(2)
    .replace(".", ",");
  alert(`O valor de ${valorDiaria} dias de hospedagem é de R$${valorDiarias}`);
  const nomeHospede = window.prompt("Qual o nome do hóspede?");
  const confirmacaoHospede = window
    .prompt(
      `${nomeUsuario}, você confirma a hospedagem para ${nomeHospede} por ${quantasDiarias} dias? S/N`
    )
    .toUpperCase();

  if (confirmacaoHospede == "S") {
    alert(
      `${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$${valorDiarias}.`
    );
  } else if (confirmacaoHospede == "N") {
    alert(`${nomeUsuario}, reserva não efetuada`);
    menu();
  }

  menu();
};


// FIM RESERVA QUARTO

/* INICIO CADASTRO HOSPEDE */
let hospedeCadastrado = [];
let valorTotal = 0;
let gratuidade = 0;
let meia = 0;

const valorCadastroHospede = () => {
  const valorPadraoDiaria = promptForNumber("Qual o valor padrão da diária?");
  cadastroHospede(valorPadraoDiaria)
};

const cadastroHospede = (valorPadraoDiaria) => {
  const nomeHospede = window.prompt("Qual o nome do Hóspede?");
  const precoFixo = Number(valorPadraoDiaria)

  if (nomeHospede.toUpperCase() == "PARE") {
    alert(`
      ${nomeUsuario}, o valor total das hospedagens é: R$${valorTotal}
      ${hospedeCadastrado.length} hospede cadastrado(s)
      ${gratuidade} gratuidade(s)
      ${meia} meia(s)
    `);
    menu();
    return;
  }
  hospedeCadastrado.push(nomeHospede);


  const idadeHospede = promptForNumber("Qual a idade do Hóspede?");

  if (idadeHospede <= 6) {
    alert(
      `${nomeHospede} cadastrada(o) com sucesso. ${nomeHospede} possui gratuidade`
    );
    gratuidade++;
  } else if (idadeHospede < 82) {
    valorTotal += precoFixo;
    alert(`${nomeHospede} cadastrada(o) com sucesso.`);
  } else if (idadeHospede >= 82) {
    valorTotal += precoFixo / 2;
    alert(`${nomeHospede} cadastrada(o) com sucesso. ${nomeHospede} paga meia`);
    meia++;
  }

  cadastroHospede(valorPadraoDiaria)
}
/* FIM CADASTRO HOSPEDE */


const promptForNumber = (message) => {
  let checkMessage;

  do {
    checkMessage = parseFloat(window.prompt(message));
  } while (isNaN(checkMessage));

  return checkMessage;
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
