# DOJO Javascript #2

Esta é uma versao simplificada do problema do hotel do nosso processo seletivo.
O arquivo hotels exporta um array de 3 hoteis.
Cada hotel tem tarifas de preco para dia de semana e dias de fim de semana.
O objetivo final é: dado um número de dias de semana e de fim de semana, identificar o nome do hotel com a tarefa mais barata. Caso os precos mais baratos estejam empatados, escolher o hotel com maior rating.

Passos:
1 - Terminar a funcao getPrice, usando o destructuring para ler valores do hotel.
2 - Usar o map e o spread operator para criar um clones do array de hoteis com os precos
3 - usar o sort para escolher o hotel
4 - printar o nome do hotel escolhido