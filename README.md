# Projeto de encerramento do Modulo 01: Jogo de Escolhas

## Introdução: 
 O projeto de encerramento do módulo 1 do curso Resilia Webdev é um jogo de escolhas. O grupo deveria escolher uma temática em que a história deve ser desenvolvida. O tema escolhido pelo grupo 02 foi "Chaves". O jogo tem como mecanismo principal de funcionamento as escolhas feitas pelo usuário. Elas deverão levar o jogador, com o personagem escolhido (Chaves, Chiquinha ou Quico) através de toda uma narrativa, na qual devem convencer seu responsável a bancar sua viagem de formatura para Acapulco. Cada personagem, a depender de suas escolhas, resutarão em "game over", perdendo a chance de viajar para Acapulco, e uma única opção que resultará na viagem de formatura com toda a turma.

## Requisitos necessários do projeto:
- Criar, ao mínimo, 3 personagens diferentes;<br>
- Implementar, no mínimo, 3 etapas/fases para cada personagem, cada uma em um arquivo diferente;<br>
- Textos da narrativa apresentados na página HTML;<br>
- Utilizar linguagem HTML5, CSS3 e Javascript;
- Verificação da entrada de dados do usuário realizada utilizando estruturas de repetição;<br>
- Estruturas condicionais utilizadas para guiar o jogador pela narrativa;<br>
- Funções devem ser criadas e utilizadas para uma maior e melhor legibilidade do código;<br>
- Fornecer o projeto desenvolvido em repositório no Github;<br>
- Os grupos devem organizar uma apresentação (slides) que será utilizada no dia e entregue posteriormente;

## Tecnologias utilizadas no projeto:
- HTML5;<br>
- CSS3;<br>
- Javascript;

## Tutoriais, explicações e orientações:
O jogo foi estruturado em HTML5, onde foi criada toda narrativa e cenários, positivos e negativos. Através de um botão apresentado na forma do personagem, ativado através da estrutura location.replace, na função vinculada ao botão, o usuário acessa a próxima fase.
Cada fase de cada personagem foi criada no HTML5 e estilizda com CSS3, usando as estrutras abaixo para conectar cada uma delas.
A optar por responder, o prompt fornece o espaço para inserção da resposta, inserida na função relativa à cada fase. A resposta apresenta uma estrutura condicionante de "if" ou "else if" que, com inserção da resposta correta, informa através da estrutura "alert" uma mensagem positiva e direciona para príxma fase, mediante uso da estrutura "location.replace", ou, no caso da resposta negativa, fornece um "alert" com uma mensagem negativa e direciona, também através de "location.replace", para a página de Game Over do personagem. Caso insira uma opção inálida, o prompt retorna uma mensagem  para que se insira uma das opções fornecidas. Ao acertar todas as respostas, o usuário finalmente será encaminhado para página de sucesso.

## Desafios:
Como primeiro projeto avaliativo, os desafios enfrentados foram o primeiro contato com a aaplicação prática de Javascript e detalhamentos mais específicos na estrutura do CSS3.
O projeto foi entrege mas segue sendo atualizado para que se atinja um objetivo final melhor, numa constante evolução.

## Assets Iniciais:
![imagem readme](https://user-images.githubusercontent.com/95878600/149215546-0e987db9-661d-49a2-b707-17a20a597e5c.png)

![imagem chaves1](https://user-images.githubusercontent.com/95878600/149219597-1336a56f-17b6-4942-9e14-e455489d8d3a.png)




 
