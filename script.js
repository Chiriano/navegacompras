// Lista de 50 produtos
const produtos = [
    { nome: 'Frigideira Multifuncional Antiaderente 4 em 1 Ovos Hambúrguer Omelete Com Alça De Madeira', imagem: 'Imagens/1.png', link: 'https://s.shopee.com.br/1Vjkz13PdC' },
    { nome: 'Kit 10 Potes Vidro Hermético 1040ml Retangular 4 Travas Marmita Premium', imagem: 'Imagens/2.png', link: 'https://shopee.com.br/product/811924245/21899192645' },
    { nome: 'Seladora à Vácuo para Armazenar Alimentos Domésticos', imagem: 'Imagens/3.png', link: 'https://s.shopee.com.br/1qMbPWquds' },
    { nome: 'Suspensa Modular Escorredor Louça Organizador Estante de asfalto duplo 65/85cm', imagem: 'Imagens/4.png', link: 'https://s.shopee.com.br/9pOswYLwMK' },
    { nome: 'Porta Condimentos Temperos Giratório Potes Vidro Tampa Dosadora Preto', imagem: 'Imagens/5.png', link: 'https://s.shopee.com.br/9KScMDDhXs' },
    { nome: 'Marmita Elétrica Bivolt Para Casa Automovel Taxi Uber 12v 24v 110v 220v C/ 2 Cabos', imagem: 'Imagens/6.png', link: 'https://s.shopee.com.br/60CAOOJxB7' },
    { nome: 'Cortador Elétrico De Legumes 4 Em 1 Sem Fio Alho Com Carregamento USB Triturador Durável Ferramenta De Cozinha', imagem: 'Imagens/7.png', link: 'https://s.shopee.com.br/7AO7uwF0LJ' },
    { nome: '1 Afiador Amolador De Facas Em Aço Inox Com 3 Borda Profissional Base Emborrachado Promoção', imagem: 'Imagens/8.png', link: 'https://s.shopee.com.br/4fgmwRevzh' },
    { nome: 'Lixeira com Sensor Automático Inteligente Abre Fácil em Toque Cesto Lixo Banheiro Cozinha Escritório 16 Litros', imagem: 'Imagens/9.png', link: 'https://s.shopee.com.br/4q0D9wfCp4' },
    { nome: 'Puff Gigante Redondo140x20 Sem Enchimento Suede Premium Linha Gold', imagem: 'Imagens/10.png', link: 'https://s.shopee.com.br/1LQKzhde6T' },
    { nome: 'Relógio De Parede Diy Clock De 40cm De Largura , De Fundo De Sala De Estar Personality Nordic No-Punch Mute Paste', imagem: 'Imagens/11.png', link: 'https://s.shopee.com.br/1B6uqFMod7' },
    { nome: 'Estatueta Pantera Negra Decoração De Escritório Sala Casa Mesa Estante Escultura Elegante', imagem: 'Imagens/12.png', link: 'https://s.shopee.com.br/30YZwIzTFp' },
    { nome: 'Ampulheta de Vidro Decorativa Temporizador de Areia 5 15 30 Minutos Decoração Casa', imagem: 'Imagens/13.png', link: 'https://s.shopee.com.br/8Ka6IaOeJA' },
    { nome: 'Robô Varredora/Aspirador De Pó Automática 3 Em 1 Limpeza Doméstica Robótico Inteligente E Silencioso', imagem: 'Imagens/14.png', link: 'https://s.shopee.com.br/6Kp1v3rmwD' },
    { nome: 'Projetor Portátil Android 11 Smart 4K Wifi 6 Bluetooth 5.0 1080p', imagem: 'Imagens/15.png', link: 'https://s.shopee.com.br/BEOZxWqSS' },
    { nome: 'Extratora Higienizadora Portátil Borrifa Esfrega e Extrai Sujeira Colchão Sofá W3 1450W Wap', imagem: 'Imagens/16.png', link: 'https://s.shopee.com.br/10nW1AYogc' },
    { nome: 'Nível Laser Trena Profissional Level Pro3 Estágios Nivelador', imagem: 'Imagens/17.png', link: 'https://s.shopee.com.br/6AVcAyGGuw' },
    { nome: 'Kit Removedor de Pelos Mágico Reutilizável de Máquina de Lavar Bolas Lavanderia Ferramentas Limpeza', imagem: 'Imagens/18.png', link: ' https://s.shopee.com.br/10nW1ipsdk' },
    { nome: 'Aromatizador Automática Difusor de Essencia Aroma e Umidificador de Ar Multifuncional F2', imagem: 'Imagens/19.png', link: 'https://s.shopee.com.br/9KSdyDYfI0' },
    { nome: 'Papel de parede Adesivos para cozinha quarto Brilhante Lavável Mármore gelo 3M x60cm Resistente Agua', imagem: 'Imagens/20.png', link: 'https://s.shopee.com.br/3LBQpJWHCQ' },
    { nome: 'Luminária Anti- Mosquito Repelente Elétrico Lâmpada U.V Armadilha Para Insetos Direto Cabo USB', imagem: 'Imagens/21.png', link: 'https://s.shopee.com.br/qU5qpR0KG' },
    { nome: 'Kit 3 Mini Vasinhos com FLOR artificial Bob Robert para Decoração vaso de plástico tamanho mini 6 cm', imagem: 'Imagens/22.png', link: 'https://s.shopee.com.br/6fRsnqAj22' },
    { nome: 'Esponja Para Banho de Silicone Dispenser Massageador Escova Shampoo Sabonete Liquido Infantil Pet', imagem: 'Imagens/23.png', link: 'https://s.shopee.com.br/1Vjmey5qCn' },
    { nome: 'Varal Retrátil Parede Automático 5 Cordas 4,1 Metros Secalux', imagem: 'Imagens/24.png', link: 'https://s.shopee.com.br/7pdqCtM1Tu' },
    { nome: 'Passadeira A Vapor Passar Roupa Voltagem 110V / 220V 200ml Elimina Ácaros Odores De Roupas Estofados Cortinas Ferro a Vapor', imagem: 'Imagens/25.png', link: 'https://s.shopee.com.br/2AzTU83E5p' },
    { nome: 'Mini Máquina de Lavar Roupas Panos Toalhas no Balde Portátil Ultrassônica Lavanderia USB Lava Louças Branco com USB', imagem: 'Imagens/26.png', link: 'https://s.shopee.com.br/5fZLehgd5H' },
    { nome: 'Relógio Digital De Mesa Curvado LED Despertador com Temperatura', imagem: 'Imagens/27.png', link: 'https://s.shopee.com.br/30YiIQ727a' },
    { nome: 'Bomba Elétrica De Galão Universal Com Carregamento USB Para Galão Garrafão De Água Promoção', imagem: 'Imagens/28.png', link: 'https://s.shopee.com.br/5Kwd54tG8t' },
    { nome: '2024 T800 Ultra 3 MAX Mais Recente Smartwatch Relógio Inteligente Série IWO 10 2.19Polegadas Sem Fio', imagem: 'Imagens/29.png', link: 'https://s.shopee.com.br/1qMkv482hs' },
    { nome: 'Massageador Elétrico Alta Frequência Profissional Muscular Massagem', imagem: 'Imagens/30.png', link: 'https://s.shopee.com.br/5Kwd5jFSfn' },
    { nome: 'Tablet 12+512 GB HD 10,1 Polegadas Tela Grande PC Android Dual SIM Card WIFI Online 4G', imagem: 'Imagens/31.png', link: 'https://s.shopee.com.br/3As8Vx264p' },
    { nome: 'Kit 4 Câmera De Segurança À Prova Dágua Aplicação De Lâmpada Sem Fio Yousee Visão Noturna full HD', imagem: 'Imagens/32.png', link: 'https://s.shopee.com.br/7zxOI4Hkt4' },
    { nome: 'Escova de Dente Elétrica Philips Colgate SonicPro 30', imagem: 'Imagens/33.png', link: 'https://s.shopee.com.br/8zpvU9r7jb' },
    { nome: 'Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo SU', imagem: 'Imagens/34.png', link: 'https://s.shopee.com.br/qUDlOBkqp' },
    { nome: 'Panela de Pressão Elétrica Wap', imagem: 'Imagens/35.png', link: 'https://s.shopee.com.br/8KaEjQ0c0X' },
    { nome: 'Novo Sem Fio 4WD Off-Road Carro Brinquedo Elétrico Torcendo Controle Remoto Carro Brinquedo Para Crianças Pronta Entrega', imagem: 'Imagens/36.png', link: 'https://s.shopee.com.br/7pdy8o0Tg1' },
    { nome: 'Esfregão Elétrico 9 Em 1 Sem fio Escova De Limpeza Pesada Multiuso 360 Recarregável Giratória', imagem: 'Imagens/37.png', link: 'https://s.shopee.com.br/2LJ1bJZctP' },
    { nome: 'Luxo Oceano Forro Elétrico Aroma Umidificador De Ar Navio Cruzeiro Modelo Aromaterapia Difusor Para Casa Quarto Decorar', imagem: 'Imagens/38.png', link: 'https://s.shopee.com.br/6V8aZXkSdK' },
    { nome: 'Papa Bolinhas Eletrico Tira Pelos de Roupas Removedor Aparador Sem Fio Recarregável', imagem: 'Imagens/39.png', link: 'https://s.shopee.com.br/2LJ1cwPcpv' },
    { nome: '1-20m luz de tira conduzida 5050 usb 5v rgb mudança de cor luz de tira tv casa sala cozinha iluminação', imagem: 'Imagens/40.png', link: 'https://s.shopee.com.br/704rBrUAuD' },
    { nome: 'Fechadura Biométrica Eletrônica Touch Digital Primebras Athenas', imagem: 'Imagens/41.png', link: 'https://s.shopee.com.br/7fKY0O3iUh' },
    { nome: 'Repelente Eletrônico Mosca Pernilongos Baratas Morcegos Espanta Ratos Bivolt', imagem: 'Imagens/42.png', link: 'https://s.shopee.com.br/3q7pRWeGTb' },
    { nome: 'Pelúcia Stitch 22 cm com coração Eu te amo 10 cm', imagem: 'Imagens/43.png', link: 'https://s.shopee.com.br/3As8eUlzZj' },
    { nome: 'Tatuagem Temporária Realista de Leão e Crânio Masculina, Resistente à Água, Estilo Tribal', imagem: 'Imagens/44.png', link: 'https://s.shopee.com.br/3VUz3QuF8R' },
    { nome: 'Ar Condicionado Portátil Sem Duto', imagem: 'Imagens/45.png', link: 'https://s.shopee.com.br/4AkfqpLct9' },
    { nome: 'Kit 3 Garrafa Agua Squeeze Galão Com Adesivos Lembretes beber Agua', imagem: 'Imagens/46.png', link: 'https://s.shopee.com.br/BEiEFX7Rt' },
    { nome: 'Projetor De Luz Noturna Luminária Astronauta Projeto Galáxia Led Nebulosa Estrelado Com Controle', imagem: 'Imagens/47.png', link: 'https://s.shopee.com.br/7fKjA85J1Z' },
    { nome: 'Capa Para Colchão Impermeavel Matelado Com Elastico', imagem: 'Imagens/48.png', link: 'https://s.shopee.com.br/8fDGMCnsTh' },
    { nome: 'Lavadora de Alta Pressão Sem Fio Portátil Recarregável Carros e Jardins Pistola Lavajato Residêncial Bivolt', imagem: 'Imagens/49.png', link: 'https://s.shopee.com.br/8pWgYvShh5' },
    { nome: 'Espelho De Mesa Led Portátil Maquiagem Regulagem Camarim', imagem: 'Imagens/50.png', link: 'https://s.shopee.com.br/3q80bue8Hm' },
];

// Função para exibir os produtos
function exibirProdutos(produtosExibidos) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    produtosExibidos.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${index + 1}. ${produto.nome}</h3>
            <a href="${produto.link}" class="comprar">Comprar</a>
        `;
        container.appendChild(divProduto);
    });
}

// Função para pesquisar pelo número do produto
function pesquisarProduto() {
    const numeroProduto = document.getElementById('pesquisar-numero').value;
    const produtoFiltrado = produtos.filter(produto => produto.nome.includes(numeroProduto));

    if (produtoFiltrado.length > 0) {
        exibirProdutos(produtoFiltrado);
    } else {
        alert('Produto não encontrado!');
    }
}

// Inicializa a exibição dos produtos
exibirProdutos(produtos);