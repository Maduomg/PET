
//------carrossel----//

var contador = 1;
var img1 = "./src/img/carrossel/racao.png";
var img2 = "./src/img/carrossel/adestramento.png";
var img3 = "./src/img/carrossel/consulta.png";
var img4 = "./src/img/carrossel/horadobanho.png";
var img5 = "./src/img/carrossel/hotel.png";
var img6 = "./src/img/carrossel/produtobeleza.png";
var tempo=2500;
var exibir=setInterval("exibindo()",tempo);

function exibindo()
{
    document.images["slide"].src=eval("img" + contador)

    if (contador < 6)
    contador++;

    else
    contador = 1;
}

function anterior()
{
    clearInterval(exibir);

    //Comentario do Nathan: Esse é o bloco que faz com que so apareca 3 imagens por que ele quando chega em 2 ele vai pra 3 e de tres direto pra quatro
    //ou seja ele dobra 
    // if (contador === 2)
    // {
    //     contador = 3;
    // }
    // else if (contador === 3)
    // {
    //     contador = 4;     
    // }

    // else if (contador === 4)
    // {
    //     contador = 5;
    // }

    // else if (contador === 5)
    // {
    //     contador = 6;
    // }
    // else if (contador === 6)
    // {
    //     contador = 1;
    // }
    
    // else
    // {
    //     contador = 1;
    // }
    if (contador > 0) {
        contador--;
        console.log(contador)
    }
    
    else {
        contador = 6;
        console.log(contador)
    }

    document.images["slide"].src = eval("img"+ contador);           
    
    
    exibir = setInterval("exibindo()", tempo);

}

function proximo()
{
    clearInterval(exibir);
    document.images["slide"].src=eval("img" + contador);

    if (contador < 6)
    contador++;
    
    else
    contador = 1;

    exibir=setInterval("exibindo()", tempo);
}

//------ fim do carrossel ---------//

//----- Rolar para o topo ------//

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrolltop')
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() 
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

//----- Fim da rolagem --------//


//---- scroll -----// 


//---- Fim scroll ----//

//---- Hamburguer ---//
const btnH = document.getElementById("res");
const menuH = document.getElementById("hamburguer");
function menu(){
    btnH.classList.toggle("ativar");
    menuH.classList.toggle("visivel");
}

const html = document.getElementById("html");

function mudaFundo() {
    html.classList.toggle("darkmode");
}

//---- Fim do Hamburguer ---//

//-----Começo 

var normal = "#81d5ea"
var azul = "#2e9db9";

const sectionCachorro = document.getElementById("categoria_cachorro");
const sectionGato = document.getElementById("categoria_gato");
const sectionAves = document.getElementById("categoria_aves");
const sectionPeixe = document.getElementById("categoria_peixe");
const sectionRoedores = document.getElementById("categoria_roedores");

const btnCatCachorro = document.getElementById("btncat_cachorro");
const btnCatGato = document.getElementById("btncat_gato");
const btnCatAves = document.getElementById("btncat_aves");
const btnCatPeixe = document.getElementById("btncat_peixe");
const btnCatRoedores = document.getElementById("btncat_roedores");



function esconderSections() {
    sectionCachorro.style.display = "none";
    sectionGato.style.display = "none";
    sectionAves.style.display = "none";
    sectionPeixe.style.display = "none";
    sectionRoedores.style.display = "none";
    btnCatCachorro.style.background = normal;
    btnCatGato.style.background = normal;
    btnCatAves.style.background = normal;
    btnCatPeixe.style.background = normal;
    btnCatRoedores.style.background = normal;
}

function mostrarCachorro() {
    esconderSections();
    sectionCachorro.style.display = "flex";
    btnCatCachorro.style.background = azul;
}

function mostrarGato() {
    esconderSections();
    sectionGato.style.display = "flex";
    btnCatGato.style.background = azul;
}

function mostrarAves() {
    esconderSections();
    sectionAves.style.display = "flex";
    btnCatAves.style.background = azul;
}

function mostrarPeixe() {
    esconderSections();
    sectionPeixe.style.display = "flex";
    btnCatPeixe.style.background = azul;
}

function mostrarRoedores() {
    esconderSections();
    sectionRoedores.style.display = "flex";
    btnCatRoedores.style.background = azul;
}