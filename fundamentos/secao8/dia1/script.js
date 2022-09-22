const newEmployees = (chamar) => {
    const employees = {
        pessoa1: chamar('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        pessoa2: chamar('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        pessoa3: chamar('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const criarEmail = (criar) => {

    const email = criar.replace(' ', '_');
    return `${email}@betrybe.com`;
}

console.log(newEmployees(criarEmail))
