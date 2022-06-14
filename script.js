let nome = "Diego"
let sobrenome = "Monteiro"
let anoNascimento = 1988
let cidade = "Leopoldina-MG"
let importarAno = new Date()
let anoAtual = importarAno.getFullYear()

console.log(`Eu sou o ${nome} ${sobrenome} tenho ${anoAtual - anoNascimento} anos e moro em ${cidade}`)