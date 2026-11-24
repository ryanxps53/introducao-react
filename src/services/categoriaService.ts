import type { Categoria } from "../types/Categoria"
import { api } from "./api"

const categoriasService = {
    async listar(){
        const resposta = await api.get<Categoria[]>('categorias');
        return resposta.data;
    }
}

export default categoriasService;