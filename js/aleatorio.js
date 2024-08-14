const nomes = ["Caruzinho", "Tami linda", "Kaylla linda", "Mateus gostosão", "Thiago pirokudo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
