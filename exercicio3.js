/*
3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo, receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de importo mediante a faixa salarial + adicional dos benefícios.

Para calcular o percentual de imposto segue as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.005
De R$1100.00 a R$2500.00 = 10.005
Maior que R$2500.00 = 15.00% 

Exemplo:
        2000.00
        250.00
Saída:
        2050.00
*/

const { gets, print } = require('./funcoes-auxiliares03');

const salario = gets();
const beneficio = gets();

function calcularImposto(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salario);

const valorImposto = calcularImposto(salario, aliquotaImposto);

const valorATransferir = salario - valorImposto + beneficio;

print(valorATransferir);