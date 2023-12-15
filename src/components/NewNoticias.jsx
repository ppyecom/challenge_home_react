import React from 'react'

const NewNoticias = ({imagen,refer,nro,title,frase}) => {
  return (
    <>
        <div className='flex space-x-8 py-7'>
            <div>
                <img src={imagen} alt={refer} className='w-30 h-40'/>
            </div>
            <div>
                <h1 className='text-GrayishBlue text-[50px] font-sans'>{nro}</h1>
                <h2 className='text-VeryDarkBlue font-bold text-[24px] cursor-pointer hover:text-SoftOrange'>{title}</h2>
                <p>{frase}</p>
            </div>
        </div>
    </>
  )
}

export default NewNoticias