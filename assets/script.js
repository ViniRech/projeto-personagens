const { createApp, ref } = Vue

   createApp({
      setup() {
             
         const produtos = [
            {id: 1, nome: 'Boneco do Bob Esponja e Gary', preco: 99.99, imgs: ['./assets/img/boneco_bob_esponja_e_gary_1.webp', './assets/img/boneco_bob_esponja_e_gary_2.webp', './assets/img/boneco_bob_esponja_e_gary_3.webp']},
            {id: 2, nome: 'Caneca Bob Esponja, Patrick e Gary', preco: 15, imgs: ['./assets/img/caneca_1.webp', './assets/img/caneca_2.webp', './assets/img/caneca_3.webp']},
            {id: 3, nome: 'Garrafa térmica do Patrick', preco: 30, imgs: ['./assets/img/garrafinha_1.webp', './assets/img/garrafinha_2.webp']},
            {id: 4, nome: 'Penal do Bob e da Srta. Puff', preco: 25, imgs: ['./assets/img/penal-bob-puff.jpg', './assets/img/penal-bob-puff-2.jpg', './assets/img/penal-bob-puff-3.jpg']},
            {id: 5, nome: 'Boneca da Sandy', preco: 99.99, imgs: ['./assets/img/boneca-sandy-2.webp', './assets/img/boneca-sandy.webp']},
            {id: 6, nome: 'Boneco do Plankton', preco: 119.99, imgs: ['./assets/img/boneco-plankton-2.webp', './assets/img/boneco-plankton.webp']},
            {id: 7, nome: 'Boneco do Seu Sirigueijo', preco: 79.99, imgs: ['./assets/img/boneco-siriguejo.webp', './assets/img/boneco-siriguejo-2.webp']},
            {id: 8, nome: 'Decoração casa do Bob', preco: 49.99, imgs: ['./assets/img/casa-do-bob.webp', './assets/img/casa-do-bob-2.webp']},
            {id: 9, nome: 'Funko Pop Homem Sereia', preco: 39.99, imgs: ['./assets/img/mermaid-man-2.webp', './assets/img/mermaid-man.webp']},
            {id: 10, nome: 'Pelúcia do Lula Molusco', preco: 59.99, imgs: ['./assets/img/pelucia-lula-molusco.webp', './assets/img/pelucia-lula-molusco-2.webp']},
            {id: 11, nome: 'Pelúcia do Seu Sirigueijo', preco: 59.99, imgs: ['./assets/img/pelucia-sr-siriguejo.webp', './assets/img/pelucia-sr-siriguejo-2.webp', './assets/img/pelucia-sr-siriguejo-3.webp']},
            {id: 12, nome: 'Funko Pop Mexilhãozinho', preco: 39.99, imgs: ['./assets/img/barnacle-boy.jpg']},
            {id: 13, nome: 'Carteira do Plankton', preco: 47.73, imgs: ['./assets/img/carteira-plankton.jpg', './assets/img/carteira-plankton-2.jpg', './assets/img/carteira-plankton-3.jpg']},
            {id: 14, nome: 'Mochila do Gary', preco: 78.95, imgs: ['./assets/img/mochila-gary.jpg', './assets/img/mochila-gary-2.jpg', './assets/img/mochila-gary-3.jpg', './assets/img/mochila-gary-4.jpg']},
            {id: 15, nome: 'Chaveiro do Patrick', preco: 9.99, imgs: ['./assets/img/chaveiro-patrick.jpg']},
        ];

        const dado = ref();

        const mostrarProduto = (product) => {
            dado.value = product
         };

         const carrinho = ref(0)

         const addCarrinho = () => {
            carrinho.value++
         }

         const posicaoImagem = ref(0);

         const mudarImagem = (i) => {
            posicaoImagem.value = i
         }

         return {
            produtos,
            dado, 
            mostrarProduto,
            carrinho,
            addCarrinho,
            mudarImagem,
            posicaoImagem,
         }
      }
   }).mount('#app')