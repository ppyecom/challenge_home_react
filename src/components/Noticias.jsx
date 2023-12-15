import React from 'react'
import NewNoticias from './NewNoticias'
import retroPc from '../assets/images/image-retro-pcs.jpg'
import laptops from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

const Noticias = () => {
  return (
    <section className='sm:flex pt-12 place-content-around pb-9'>
        <NewNoticias imagen={retroPc} nro="01" refer="PC RETRO" title="Reviving Retro PCs" frase='What happens when old PCs are given modern upgrades?'/>
        <NewNoticias imagen={laptops} nro="02" refer="LAPTOPS TOP" title="Top 10 Laptops of 2022" frase='Our best picks for various needs and budgets.'/>
        <NewNoticias imagen={gaming} nro="03" refer="GAMING" title="The Growth of Gaming" frase='How the pandemic has sparked fresh opportunities.'/>
    </section>
  )
}

export default Noticias