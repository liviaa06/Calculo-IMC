const calcular = document.getElementById('calcular');
/*Esse código obtém uma referência para o elemento HTML com o id "calcular" e armazena 
essa referência na constante chamada "calcular". Essa referência permite que você faça 
referência e manipule esse elemento no código JavaScript. */

function imc () {
    /* Esse código define uma função chamada "imc" sem parâmetros. 
    Esta função será executada quando for chamada em algum ponto do programa. 
    O código dentro dessa função irá descrever as instruções a serem executadas 
    quando a função for invocada.*/

    const nome = document.getElementById('nome').value;
    /* Esse código obtém o valor do campo de entrada com o id "nome" em um documento 
    HTML. Ele armazena esse valor na variável chamada "nome". Assim, é possível acessar 
    e utilizar o valor digitado pelo usuário nesse campo de entrada no restante do código 
    JavaScript.*/

    const altura = document.getElementById('altura').value;
    /* Esse código obtém o valor do campo de entrada com o id "altura" em um documento HTML. 
    Ele armazena esse valor na variável chamada "altura". Assim, é possível acessar e utilizar 
    o valor digitado pelo usuário nesse campo de entrada no restante do código JavaScript.*/

    const peso = document.getElementById('peso').value;
    /*Esse código obtém o valor do campo de entrada com o id "peso" em um documento HTML. 
    Ele armazena esse valor na variável chamada "peso". Assim, é possível acessar e utilizar 
    o valor digitado pelo usuário nesse campo de entrada no restante do código JavaScript. */

    const resultado = document.getElementById('resultado');
    /*Esse código obtém a referência para o elemento HTML com o id "resultado" e armazena essa 
    referência na constante chamada "resultado". Essa referência permite manipular esse elemento 
    no código JavaScript, como por exemplo, alterar o conteúdo exibido nesse elemento. */


    if (nome !== '' && altura !== '' && peso !== '') {
        /* Esse código verifica se as variáveis "nome", "altura" e "peso" não estão vazias. 
        O operador !== significa "diferente de", então a condição será verdadeira se todas 
        as três variáveis não forem vazias. Se a condição for verdadeira, o bloco de código 
        dentro do if será executado. Caso contrário, se pelo menos uma das variáveis estiver 
        vazia, o bloco de código dentro do if será ignorado.*/

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        /* Esse código calcula o valor do Índice de Massa Corporal (IMC) com base nos valores 
        armazenados nas variáveis "peso" e "altura". O cálculo é realizado dividindo o peso 
        pela altura ao quadrado. O resultado é formatado com uma casa decimal usando o método 
        toFixed(1) e armazenado na constante chamada "valorIMC". O IMC é usado como uma medida 
        para avaliar se uma pessoa está dentro de faixas consideradas saudáveis ou não.*/
        
        let classificacao = '';
        /* Esse código declara uma variável chamada "classificacao" e atribui a ela um valor 
        vazio (uma string vazia). A variável "classificacao" pode ser usada posteriormente 
        para armazenar ou atualizar alguma classificação específica com base em algum critério 
        do programa.*/

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }/* Esse código verifica se o valor da variável "valorIMC" é menor que 18.5. Se essa 
        condição for verdadeira, significa que o índice de massa corporal está abaixo de 18.5, 
        indicando que a pessoa está abaixo do peso considerado saudável. Nesse caso, a variável 
        "classificacao" é atualizada com a string 'abaixo do peso.'. Essa atualização permite 
        armazenar a classificação da pessoa com base no seu IMC para uso posterior no programa.*/

        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }/* Esse código verifica se o valor da variável "valorIMC" é menor que 25, assumindo que 
        a condição anterior (valorIMC < 18.5) tenha sido falsa. Se essa nova condição for verdadeira, 
        significa que o índice de massa corporal está abaixo de 25, indicando que a pessoa está 
        dentro do peso considerado ideal. Nesse caso, a variável "classificacao" é atualizada 
        com a string 'com peso ideal. Parabéns!!!'. Essa atualização permite armazenar a classificação 
        da pessoa com base no seu IMC para uso posterior no programa.*/

        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }/*Esse código verifica se o valor da variável "valorIMC" é menor que 30, assumindo que as 
        condições anteriores tenham sido falsas. Se essa nova condição for verdadeira, significa 
        que o índice de massa corporal está abaixo de 30, indicando que a pessoa está levemente 
        acima do peso considerado ideal. Nesse caso, a variável "classificacao" é atualizada com 
        a string 'levemente acima do peso.'. Essa atualização permite armazenar a classificação 
        da pessoa com base no seu IMC para uso posterior no programa. */

        else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }/* Esse código verifica se o valor da variável "valorIMC" é menor que 35, assumindo 
        que as condições anteriores tenham sido falsas. Se essa nova condição for verdadeira, 
        significa que o índice de massa corporal está abaixo de 35, indicando que a pessoa 
        está com obesidade grau I. Nesse caso, a variável "classificacao" é atualizada com a 
        string 'com obesidade grau I.'. Essa atualização permite armazenar a classificação da 
        pessoa com base no seu IMC para uso posterior no programa.*/
        
        else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }
        else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
/*Esse código adiciona um evento de clique ao elemento com o identificador "calcular" e 
associa a função "imc" como manipulador desse evento. Quando o elemento com o 
identificador "calcular" for clicado, a função "imc" será executada.*/