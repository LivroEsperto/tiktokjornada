import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music, play}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooter__icon' />
          <div className='videoFooterMusic__textBox'>
          { play ?
            <p className='videoFooterMusic__text animated'>{music}</p>
          :
          <p className='videoFooterMusic__text'>{music}</p>
        }
          </div>
        </div>
      </div>
      { play ?
        <img
          className='videoFooter__record animated'
          alt="Imagem de um vinil parado"
          src='./img/vinil.png'
        />
      :
        <img
          className='videoFooter__record'
          alt="Imagem de um vinil rodando"
          src='./img/vinil.png'
        />
      }
    </div>
  )
}

export default VideoFooter