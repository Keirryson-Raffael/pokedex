alert("Bem vindo ao identificador pokémon, caso não saiba os nomes dos pokémons, pode-se usar a palavra ajuda")

let pokemons = prompt("Primeiro digite o nome do pokémon para a identificação:").toLowerCase()

if (pokemons == "ajuda") {
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

if (pokemons == "bulbasaur") { 
    alert(`O pokémon planta e venonoso. Por algum tempo após o nascimento, Bulbassauro usa os nutrientes contidos na semente em suas costas para crescer.

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de bulbasaur estiver baixo

Tipagem: Planta e Venenoso
Mede 0,70 cm de altura
Pesa 6.9 kg

Aparência: se assemelha a um sapo, coloração esverdeada e tem um bulbo nas costas do qual usa para se nutrir
`)
}
if (pokemons == "ivysaur") {
    alert(`Evolução de Bulbassauro ao Atingir o level 16. Quanto mais luz do sol Ivyssauro recebe, mais força brota dentro dele, permitindo que o broto em suas costas cresça mais.

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de Ivyssauro estiver baixo

Tipagem: Planta e Venenoso
Mede 1 m de altura
Pesa 13 kg

Aparência: seus dentes aumentam de tamanho e o bulbo em suas costas desabroxa se transformando em um broto
`)
}
if (pokemons == "venusaur") {
    alert(`Evolução de Ivyssauro ao atingir o level 32. Enquanto Venussauro se aquece ao sol, ele consegue converter a luz em energia, o que o torna mais potente no verão.

Sua habilidade é Overgrow(Crescimento excessivo):
aumenta os ataques de tipo planta quando o hp de Venussauro estiver baixo

Tipagem: Planta e Venenoso
Mede 2 m de altura
Pesa até 100 kg

Aparência: ganha escamas e o broto em suas costas se transforma em uma árvore
`)
}
if (pokemons == "charmander") {
    alert(`A chama na cauda de charmander demonstra a força de sua força vital. Se Charmander estiver fraco, a chama também queimará fracamente.

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charmander está baixo.

Tipagem: Fogo
Mede 0.6 cm de altura
Pesa até 8.5 kg

Aparência: se assemelha a uma salamandra, coloração alaranjada, e tem fogo em sua cauda
`)
}
if (pokemons == "charmeleon") {
    alert(`Evolução de Charmander ao atingir o level 16. Quando ele balança sua cauda em chamas, a temperatura ao redor dele sobe cada vez mais, atormentando seus oponentes.

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charmeleon está baixo.

Tipagem: Fogo
Mede 1.1 m de altura
Pesa 19 kg

Aparência: ao evoluir, charmeleon fica um pouco avermelhado e a chama em sua cauda aumenta de tamanho.
`)
}
if (pokemons == "charizard") {
    alert(`Evolução de Charmeleon ao atingir o level 32. Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.

Sua habilidade é Blaze(chamas):
Aumenta o poder dos ataques de tipo fogo quando o hp de charizard está baixo.

Tipagem: Fogo
Mede 1.7 m de altura
Pesa 90.5 kg

Aparência: ao evoluir, fica muito semelhante a um dragão, ganha asas azuis e retoma seu tom alaranjado, a chama em sua cauda cresce muito
`)
}
if (pokemons == "squirtle") {
    alert(`Após o nascimento, as costas de Squirtle incham e endurecem, formando uma concha. Ele exala uma espuma potente pela boca.

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo.

Tipagem: Água
Mede 0.5 cm de altura
Pesa 9 kg

Aparência: É uma tartaruga, sua coloração é azul e sua concha marrom, que ele usa pra se defender.
`)
}
if (pokemons == "wartortle") {
    alert(`Evolução de Squirtle ao atingir o level 16. A cauda longa e peluda de Wartortle é um símbolo de longevidade, por isso esse Pokémon é bastante popular entre pessoas mais velhas.

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo.

Tipagem: Água
Mede até 1 m de altura
Pesa 22.5 kg

Aparência: o azul de seu corpo escurece, ganha orelhas e uma cauda peluda, se assemelhando a uma nuvem, sua concha também aumenta de tamanho.
`)
}
if (pokemons == "blastoise") {
    alert(`Evolução de Wartortle ao atingir o level 32. Ele aumenta deliberadamente o peso do seu corpo para poder suportar o recuo dos jatos de água que dispara.

Sua habilidade é Torrent(Torrente):
Aumenta o poder de ataques do tipo Água quando o hp de Squirtle está baixo.

Tipagem: Água
Mede 1.6 m de altura
Pesa 85.5 kg

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