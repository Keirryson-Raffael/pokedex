alert("Bem vindo ao identificador pokémon, caso não saiba os nomes dos pokémons, pode-se usar a palavra ajuda")

let pokemons = prompt("Primeiro digite o nome do pokémon para a identificação:").toLowerCase()

if (pokemons === "ajuda") {
    alert(`==============LISTA DE POKÉMONS================
        Bulbasaur
        Ivysaur
        Venusaur
        Charmander
        Charmeleon
        Charizard
        Squirtle
        Wartortle
        Blastoise
        Caterpie
`)
}

if (pokemons === "bulbasaur" || pokemons == 1) { 
    alert(`O pokémon sapo, planta e venonoso. tipo: Planta e Venenoso, Pesa 6.9kg e mede 0.7 m

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de bulbasaur estiver baixo

Aparência: Bulbasaur é uma criatura reptiliana que de algum jeito lembra um sapo ou um dinossauro jovem manchas verde-azuladas escondidas. Tem três dedos brancos ou garras crescendo fora de suas quatro pernas. Seus olhos são de um vermelho brilhante, mas a característica mais notável deste Pokémon é o bulbo de cebola como sobre as suas costas. O bulbo também contém muitas sementes a partir do qual extrai os nutrientes.

Comportamento: Bulbasaur tendem a ter uma forte lealdade de seus amigos e trenadores. Bulbasaur eventualmente podem ser encontrados deitados ao sol durante o dia para fotossíntizar energia quando o alimento é escasso.

Como funciona a fotossíntese do Bulbassauro: absorvendo a luz solar através do bulbo em suas costas, que contém cloroplastos e clorofila, e usando essa energia para converter dióxido de carbono (CO₂) e água (H₂O) em glicose (para alimentação) e oxigênio (liberado na atmosfera). Essa capacidade de realizar fotossíntese permite que ele se alimente da energia solar, tornando-o independente de comer. 
`)
}
if (pokemons === "ivysaur" || pokemons == 2) {
    alert(`Evolução de Bulbassauro ao Atingir o level 16. Tipo: Planta e Venenoso, Pesa 13 kg e mede 1 m de altura. 

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de Ivyssauro estiver baixo

Aparência: Ivysaur, assim como sua pré-evolução, Bulbasaur, lembra um sapo quadrúpede. Depois de evoluir de Bulbasaur, Ivysaur cresce pequenas presas e tem entranhas de ouvido visíveis. A mais notável diferença na aparência do Ivysaur, no entanto, é que sua lâmpada se transformou em um botão de flor rosa com folhas estendendidas. Este botão de flor é pesado, deixando suas patas traseiras fortes e resistentes para apoiá-lo, fazendo com que seja incapaz de se levantar sobre as patas traseiras.

Comportamento: Quando sua flor está pronta para florescer, ela exala um aroma distinto e forte e adocicado e começa a inchar. Ivyssauro também começará a passar mais tempo na luz do sol em preparação para sua próxima evolução. A exposição à luz solar aumenta a força de Ivyssauro e sua planta. O habitat natural de Ivyssauro são as planícies.

Curiosidade sobre o broto de Ivysaur: Quando o bulbo de Ivysaur está pronto para florescer, ele emite um perfume doce, sinalizando que está prestes a se transformar em Venusaur. 
`)
}
if (pokemons == "venusaur" || pokemons == 3) {
    alert(`Evolução de Ivyssauro ao atingir o level 32. Tipo: Planta e Venenoso, Pesa 13 kg e mede 2 m de altura

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de Venussauro estiver baixo

Aparência: Venusaur é um Pokémon anfíbio quadrúpede atarracado com pele irregular e azul-esverdeada. Olhos vermelhos pequenos e circulares; focinho curto e rombudo; e boca larga com dois dentes pontiagudos no maxilar superior e quatro no maxilar inferior. No topo de sua cabeça há orelhas pequenas e pontiagudas. Tem três dedos com garras em cada pé. O botão em suas costas floresceu em uma grande flor rosa e com manchas brancas. A flor é sustentada por um tronco grosso e marrom cercado por folhas verdes. Uma Venussauro fêmea terá uma semente no centro de sua flor.

Comportamento: geralmente calmo, mas poderoso. Esses Pokémon são dóceis, mas defenderão seu território com força se necessário, e as fêmeas plantam sementes nas costas dos filhotes para que cresçam novas plantas. 

Curiosidades: em sua última forma sua fotossíntese é tão intensa que ao usar sua flor para captar os raios do sol para convertê-los em energia, faz com que a flor fique mais vibrante e permite ele a soltar ataques como raio solar.
`)
}
if (pokemons == "charmander" || pokemons == 4) {
    alert(`charmander, o pokémon salamandra de fogo, tipo: Fogo, Pesa 8.5 kg e mede 0.6 m de altura

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charmander está baixo.

Aparência: É um Pokémon pequeno, bípede e parecido com um dinossauro. A maior parte de seu corpo é de cor laranja, enquanto seu ventre é de uma cor amarelo-clara pálida. Tem quatro dedos pequenos em cada mão e três garras em cada pé. Possui uma chama que queima constantemente na ponta de sua cauda.

Comportamento: Apesar de demonstrar ser um Pokémon dócil, não se dá bem com pessoas impacientes. Não gosta de ser apressado e, na maioria das vezes, não permite que isso aconteça. Não gosta de aceitar favores, porque sente que deve algo em troca. É extremamente leal aos seus entes queridos e sabe quem é do bem assim que a vê.

Curiosidade de como Charmander produz sua chama: Charmander produz sua chama através de um mecanismo biológico interno que utiliza um líquido inflamável, e a chama em sua cauda é um indicador de sua força vital. Em vez de ser apenas um fogo superficial, o fogo é parte integrante do corpo do Pokémon, e ele pode projetar essa chama para fora pela boca ao respirar fogo. A potência e o estado da chama na cauda refletem sua saúde e emoções, sendo um sinal vital de sua vida. 
`)
}
if (pokemons == "charmeleon" || pokemons == 5) {
    alert(`Evolução de Charmander ao atingir o level 16. tipo: Fogo, pesa 19 kg e mede 1.1 m de altura

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charmeleon está baixo.

Aparência: Charmeleon é um Pokémon bípede semelhante a um dinossauro, de pele vermelha escura, com uma chama ardente na ponta da cauda, olhos verdes, focinho longo e uma saliência em forma de chifre na parte de trás da cabeça. Possui braços longos com garras afiadas e pernas curtas com três garras nos pés.

Comportamento: Comportamento. Charmeleon tem uma natureza perversa e constantemente procurando adversários. Adversários fortes excita este Pokémon, fazendo-a jorrar chamas azuis que tocham seus arredores. No entanto, uma vez que relaxar ganhou.

Como a cauda de Charmeleon fica azul: quando ele fica muito animado e agressivo durante uma luta, sua chama entra em estado de combustão completa, ou seja, esquenta tanto a ponto de ficar azul
`)
}
if (pokemons == "charizard" || pokemons == 6) {
    alert(`Evolução de Charmeleon ao atingir o level 32. Tipo: Fogo, mede 1.7 m de altura e pesa 90.5 kg

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charizard está baixo.

Aparência: Charizard é um Pokémon grande e dracônico que difere bastante de suas formas pré-evoluídas. A coloração vermelha da pele de Charmeleon não é mais aparente, pois Charizard parece ter revertido para a coloração laranja de Charmander. O único chifre que ficava na parte de trás de sua cabeça agora são dois, um de cada lado. A diferença mais notável entre Charizard e suas formas pré-evoluídas são as grandes asas que se desenvolveram em suas costas, que lhe dá a capacidade de voar.

Comportamento: Charizard são nobres e não vão virar todo o poder de sua chama em oponentes significativamente mais fracos do que eles. Charizards são conhecidos por serem muito ansiosos para lutar. Charizard procura inimigos mais fortes e só respira fogo durante batalhas com oponentes dignos. O hálito de fogo é tão quente que pode transformar qualquer material em escória. Eles são muito perigosos e agressivos se provocados. Mas como Charmander e Charmeleon, é amigável e afetuoso com seu Treinador. Charizard só ignora seu Treinador se sentir que seu Treinador não se importa com ele. Apenas um Charizard fraco mostra seu poder.

Curiosidade sobre o Charizard: assim como Charmeleon sua chama também fica azul ao ficar animado ou irritado porém por ser mais agressivo e gostar muito de batalhar, tem tendência a deixar seu fogo muito mais azulado que o normal.
`)
}
if (pokemons == "squirtle" || pokemons == 7) {
    alert(`Squirtle, o pokémon tartaruga, tipo: Água, mede 0.5 cm de altura e pesa 9 kg.

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo.

Aparência: Squirtle é um pequeno Pokémon azul-claro com aparência semelhante a uma tartaruga. Com seu formato aerodinâmico e superfície sulcada, o casco de Squirtle o ajuda a atravessar a água com muita rapidez. Também oferece proteção em batalha. Assim como as tartarugas, Squirtle possui um casco que cobre seu corpo com buracos que permitem que seus membros, cauda e cabeça fiquem expostos. Ao contrário de uma tartaruga, Squirtle é normalmente bípede.

Comportamento: Squirtle costuma ser bem comportado, mas tem uma veia rebelde subjacente. Gosta de se abrir com um número limitado de pessoas e não revela seus segredos. Prefere ficar em um grupo unido, mas ainda gosta de fazer novas amizades. Outros Pokémon podem considerá-lo difícil e difícil de se relacionar, mas apenas se já o tiverem incomodado.

curiosidade biológica sobre o squirtle: ele atira água porque um de seus orgãos é especial, que tem a função exata de reter e ejetar água, a casca de Squirtle, que é extremamente resistente, é usada para que ele se recolha e ainda sim consiga disparar os jatos de água. 
`)
}
if (pokemons == "wartortle" || pokemons == 8) {
    alert(`Evolução de Squirtle ao atingir o level 16. 

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo. Tipo: Água, mede até 1 m de altura, pesa 22.5 kg

Aparência: Wartortle é um Pokémon reptiliano índigo bípede semelhante a uma tartaruga . Tem olhos castanhos, uma faixa azul escura em cada bochecha e dois dentes afiados saindo de sua mandíbula superior. Tem três dedos com garras e dedos pontiagudos. Em cada lado de sua cabeça há orelhas em forma de penas cobertas de pelo azul claro.

Comportamento: Eles usam água para se camuflar antes de atacar suas presas e nadar rapidamente atrás delas, usando suas orelhas e caudas para se equilibrar. Os Wartortles se orgulham de suas carapaças arranhadas, pois demonstram resistência em batalha. Geralmente, acredita-se que quanto mais riscos um Wartortle ganha durante esta fase, mais forte ele ganha após a evolução.

curiosidade biológica do Wartortle: O ar pode ser armazenado em sua pele para mergulho subaquático prolongado. Ele se esconde na água ao caçar e emerge para surpreender sua presa. A cauda e as orelhas peludas são usadas para manter a estabilidade e o controle do corpo quando o Pokémon nada rapidamente em busca de presas.
`)
}
if (pokemons == "blastoise" || pokemons == 9) {
    alert(`Evolução de Wartortle ao atingir o level 32. Tipo: Água, mede 1.6 m de altura, pesa 85.5 kg

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo.

Aparência: Blastoise muda para um azul escuro, sua carapaça muda de tamanho igualmente e dois canhões de Água são inseridos em cada lado.


`)
}
if (pokemons == "caterpie") {
    alert(`Para proteção, Caterpie libera um fedor horrível da antena em sua cabeça para afastar os inimigos.
        
Sua habilidade é Shield Dust(Escudo de Poeira):
Uma poeira protetora que protege Caterpie de efeitos adicionais(veneno, queimaduras, etc)

Tipagem: Inseto
Mede 0.3 cm de altura
Pesa 2.9 kg

Aparência: se assemelha a uma pequena lagarta, coloração esverdeada com a parte de baixo, patas e cauda em um tom de amarelo e pequenos circulos amarelos no corpo, além de uma antena vermelha em sua testa.
`)
}
if (pokemons == "metapod") {
    alert(`Metapod aguarda o momento de evoluir. Nesse estágio, ele só pode endurecer, então permanece imóvel para evitar ataques.

Sua habilidade é Shed Skin(Pele Escamada):
Metapod cura suas próprias condições de status trocando de pele

Tipagem: Inseto
Mede 0.7 cm de altura
Pesa 9.9 kg

Aparência: ao evoluir, se torna um casulo bem enrigecido o qual protege Metapod.
`)
}