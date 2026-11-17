export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoporKg: number;
    ativo: boolean;
    imagem: string;
    categoriaIDs:number;
}