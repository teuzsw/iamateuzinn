const nomes = ["Felipe Caruso", "Tamires", "Kaylla", "Mateus", "Thiago"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
