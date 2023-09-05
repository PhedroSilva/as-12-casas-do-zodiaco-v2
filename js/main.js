
function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const valor1 = document.querySelector('#valor1').value;
    const valor2 = "2023"+"/"+valor1+"/"+valor;

    //valor2 = ;
    //
    alert(`o valor é ${valor2}`);


    if (valor >= "2023/05/21"&&valor2 <="2023/06/20") {
        texto.innerHTML = "Gêmeos<p>Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.</p>";
        imagem.setAttribute("src", "img/gemeos.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/10/23"&&valor2 <="2023/11/21") {
        texto.innerHTML = "Escorpião<p>Kardia pode ter sido o mais poderoso cavaleiro de escorpião que já viveu, tendo domínio pleno sobre o sétimo sentido de modo a perecer comum para ele, mesmo possuindo uma rara doença cardíaca que necessitava do gelo de seu amigo, Dégel de aquário, para diminuir sua febre.</p>";
        imagem.setAttribute("src", "img/escorpiao.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/02/19"&&valor2 <="2023/03/20") {
        texto.innerHTML = "Peixes<p>Pode derrotar qualquer inimigo se estiver lutando com toda sua força.</p>";
        imagem.setAttribute("src", "img/peixes.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/01/21"&&valor2 <="2023/02/18") {
        texto.innerHTML = "Aquario<p>O mestre do mestre de Hyoga é tranquilamente um dos mais poderosos Cavaleiros de Ouro, o que fica claro tanto durante a saga do Santuário quanto durante os primeiros episódios da saga de Hades.</p>";
        imagem.setAttribute("src", "img/aquario.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/03/21"&&valor2 <="2023/04/20") {
        texto.innerHTML = "Aries<p>Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.</p>";
        imagem.setAttribute("src", "img/aries.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/06/21"&&valor2 <="2023/07/22") {
        texto.innerHTML = "Câncer<p>Máscara da Morte de Câncer ( 蟹座 キャンサー のデスマスク, Kyansā no Desumasuku?) é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.</p>";
        imagem.setAttribute("src", "img/cancer.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/12/22"&&valor2 <="2023/01/20") {
        texto.innerHTML = "Capricórnio<p>Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena.</p>";
        imagem.setAttribute("src", "img/capricornio.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/07/23"&&valor2 <="2023/08/22") {
        texto.innerHTML = "Leão<p>Aiolia. o mais famoso Cavaliero de Leão é Aiolia, que sofreu no santuário após seu irmão, Aiolos, ser acusado de traição.</p>";
        imagem.setAttribute("src", "img/leao.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/09/23"&&valor2 <="2023/10/22") {
        texto.innerHTML = "Libra<p>Basicamente um soco direto, emanado com cosmo parecido com uma rajada de um dragão que, se acertar, leva o oponente pelos ares, enquanto o poder do golpe varia pelo cosmo que Dohko mostra no momento de sua execução.</p>";
        imagem.setAttribute("src", "img/libra.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/11/22"&&valor2 <="2023/12/21") {
        texto.innerHTML = "Sagitário<p>Aiolos de Sagitário ( 射手座 サジタリアス のアイオロス, Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX.</p>";
        imagem.setAttribute("src", "img/sagitario.png");
        imagem.setAttribute("width", "300px");
    }
    else if (valor >= "2023/04/21"&&valor2 <="2023/05/20") {
        texto.innerHTML = "Touro<p>Foi ele quem, após ter um chifre da armadura arrancado por Seiya, decidiu permitir que os Cavaleiros de Bronze seguissem adiante, tornando possível todos os acontecimentos marcantes e emocionantes que sucedem este primeiro embate nas 12 casas.</p>";
        imagem.setAttribute("src", "img/touro.png");
        imagem.setAttribute("width", "300px");
    }
    else if(valor >= "2023/05/21"&&valor2 <="2023/06/20"){
        texto.innerHTML = "Virgem<p>Shaka de Virgem (乙女座バルゴのシャカ Barugo no Shaka?) é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário.</p>";
        imagem.setAttribute("src", "img/virgem.png");
        imagem.setAttribute("width", "300px");
    }
}