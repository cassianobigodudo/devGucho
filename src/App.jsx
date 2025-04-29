import { useEffect, useState } from 'react'
import './App.css'
import Inventario from './components/Inventario'
import Lojinho from './components/Lojinho'

function App() {

  const [vida, setVida] = useState(100)
  const [vivo, setVivo] = useState(true)
  const [dinheiro, setDinheiro] = useState(0)
  const [invIsOpen, setInvIsOpen] = useState(true)
  const [lojinhoIsOpen, setLojinhoIsOpen] = useState(false)

  useEffect(() => console.log(`inventário: ${invIsOpen}, lojinho: ${lojinhoIsOpen}`),[invIsOpen,lojinhoIsOpen])

  useEffect(() => {
    const intervalo = setInterval(() => {

      if(vida > 0){
        setVida((vidaAtual) => vidaAtual - 1)
      }else{
        setVivo(false)

      }
      
    }, 500);
    
    return () => clearInterval(intervalo) 
  },[vida])

  function curar(){
    if(vivo){
      if(vida <= 90){
  
        setVida(vida + 10)
  
      }else{
        setVida(100)
      }
      
    }
  }

  function codar(){
    if(vivo){
      setDinheiro(dinheiro + 1)
    }

  }
  function abrirInv(){
    setInvIsOpen(true)
    setLojinhoIsOpen(false)
  }
  
  function abrirLojinho(){
    setInvIsOpen(false)
    setLojinhoIsOpen(true)
  }

  return (
    <>
      <div className="app-container">
        <div className="tamagucho-container">

          <div className="titulo-container">
            <h1 className='h1'>devGucho</h1>

          </div>
          <div className="atributos">
            <label
            className='lbl-atributos'
            >Vida: {vida}</label><p></p>
            <label
            className='lbl-atributos'
            >Saúde: {vivo ? 'Vivo' : 'Morto'}</label><p></p>
            <label
            className='lbl-atributos'
            >Bufunfa: B$ {dinheiro}</label>
          </div>
          <div className="botoes-tamagucho-container">
            <button className='btn'
            onClick={curar}>
            Café</button>
            <button className='btn'
            onClick={codar}>
            Codar</button>

        </div>
          </div>

          <div className="menu-container">
            <div className="botoes-menu-container">
              <button className='btn-menu'
              onClick={abrirInv}
              >Inventário</button>

              <button className='btn-menu'
              onClick={abrirLojinho}>
              Lojinho
              </button>
            </div>
              {invIsOpen ? <Inventario/> : <Lojinho/>}
          </div>

      </div>
    </>
  )
}

export default App
