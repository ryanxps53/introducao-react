
import './ListaProdutos.css'
import Card from '../../Components/card/Card'
import { useEffect, useState } from 'react'
import type { Produto } from '../../types/Produto'
import produtoService from '../../services/produtoService'

function ListaProdutos() {


  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);




  useEffect(() => {
    //Promise.call
    produtoService.listar()
      .then(Lista => { setProdutos(Lista), console.log(Lista) })
      .catch(() => setErro("Não foi possível carregar os produtos!"))
      .finally(() => setCarregando(false))
  }, [])


  return (
    <>

      <main>
        <section className="prod_banner" />
        <section className="container prod_container">
          <div className="box_h2">
            <h1>Nossos Bolos</h1>
            <span>Nos Gâteaux</span>
            <hr />
          </div>
          {carregando && <p>Carregando Produtos...</p>}
          {!carregando && !erro && produtos.length === 0 &&
            <p>Nenhum produto encontrado.</p>}
          <div className="prod_cards">


            {produtos.map(produto => {
              return < Card
                id={produto.id}
                key={produto.id}
                imgProduto={`http://localhost:3000${produto.imagem}`}
                nome={produto.nome}
                descricao={produto.descricaoCurta}
                valor={produto.precoporKg}
                quantidadeAvaliacoes={10}
                nota={9.5} />
            })}

          </div>
        </section>
      </main>

    </>
  )
}

export default ListaProdutos;