import { useState } from 'react'
import CardProjeto from '../CardProjeto/CardProjeto.jsx'
import FiltroTecnologias from '../FiltroTecnologias/FiltroTecnologias.jsx'
import { tecnologias } from '../../data/tecnologias.js'

function ListaProjetos({ projetos }) {
  const [tecnologia, setTecnologia] = useState('Todas')

  const filtrados = projetos.filter((projeto) => {
    return tecnologia === 'Todas' || projeto.tecnologias.includes(tecnologia)
  })

  return (
    <>
      <div className="cartao painel-filtros">
        <FiltroTecnologias
          tecnologias={tecnologias}
          selecionada={tecnologia}
          onSelecionar={setTecnologia}
        />
      </div>

      <p className="resumo-lista">
        <span>
          <strong>{filtrados.length}</strong> de {projetos.length} projetos
        </span>
      </p>

      <div className="grade-cartoes">
        {filtrados.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            tecnologias={projeto.tecnologias}
          />
        ))}
      </div>
    </>
  )
}

export default ListaProjetos