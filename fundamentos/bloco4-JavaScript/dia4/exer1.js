let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    
  };
  console.log(`Bem-vinda, ${info.personagem}`)
// parte 2


  info.recorrente ="sim";

  console.log (info)
// parte 3


  for(let index in info){
    console.log (index)
  }
// parte 4 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: 
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  
};

console.log (`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos.titulo}`)

