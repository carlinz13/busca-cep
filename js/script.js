let endereco = document.querySelector(".endereco2")
let cep = document.getElementById("cep")
 let botao = document.getElementById("button1")

    const mensagem1 = document.getElementById("mensagem1")
async function consultar() {
 const valorCep = cep.value.replace(/\D/g, "");
if (valorCep.length !==8) {
mensagem1.innerText = "Digite um CEP válido com 8 números"
    return;
}
try{
   const link = `https://viacep.com.br/ws/${valorCep}/json`;
 
const repostadolink = await fetch(link);
const dadosCepJyson = await repostadolink.json();

 
    console.log(dadosCepJyson)

     if (dadosCepJyson.erro) {
            mensagem1.innerText = "CEP não encontrado!";
            return;}


if (dadosCepJyson)
    { 



document.querySelector(".result").innerHTML = `
    <h2>CEP: ${valorCep}</h2>
    <p>Rua: ${dadosCepJyson.logradouro}</p>
    <p>Cidade: ${dadosCepJyson.localidade}</p>
    <p>Bairro: ${dadosCepJyson.bairro}</p>
    <p>Estado: ${dadosCepJyson.uf}</p>

         
`;
   document.querySelector(".result").style.display = "block";

            mensagem1.innerText = "CEP encontrado!";
    
}

} catch(error) {
    console.error("Erro ao buscar o CEP:", error);
    mensagem1.innerText = "Erro ao consultar o CEP!";


}}


    

