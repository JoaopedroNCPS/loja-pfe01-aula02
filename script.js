const uri = './assets/dados.json';
var produtos = [
    {produto: 'Boné'},
    {produto: 'Camiseta'},
    {produto: 'Sueter'},
    {produto: 'Calça'},
    {produto: 'Casaco'},
    {produto: 'Luvas'},
    {produto: 'Meias'},
    {produto: 'Kit'}
];
fetch(uri)
    .then(resp => resp.json())
    .then(resp => { produtos = resp;
    }).then(() =>mostrarCards())

function mostrarCards(){
    const main = document.querySelector('main');
    produtos.forEach(p=>{
        main.innerHTML += `
        <div class="card">
            <h3>${p.produto}</h3>
            <img src="${p.imagem}" alt="${p.produto}">
            <p>Preco: ${p.preco}</p>
            <button>Detalhes</button>
        </div>
            `;
    })
}
