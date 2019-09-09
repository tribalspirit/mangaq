import React, { useState }  from 'react'
import testImg from '../../assets/manga/4.jpg'
import samplePage from '../../assets/manga/4.json'

const getStyle = ({ x, y, width, height, fontSize }) => ({
    position: 'relative',
    bottom: y,
    left: x,
    width,
    height,
    fontSize: `${fontSize}em`
})


const MangaReader = () => {
    const [captions, setCaptions] = useState({ en: '', jp: '', details: [] });

    return (<div className='viewer'>
        <div className='image-container'>
            <img src={testImg} className='manga-page' alt={samplePage.alt}/>
            {samplePage.bubbles.map((b) => (<div key={b.id} onClick={() => setCaptions(b.captions)} className='bubble jp-text' style={getStyle(b.dimensions)}>{b.captions.jp.toString()}</div>))}
        </div>
        <div className='details-container'>
            <p>{captions.jp}</p>
            <p>{captions.en}</p>
            0{captions.details.map((e, idx) => (<p key={idx}>{e.toString()}</p>))}
        </div>
    </div>
)}

export default MangaReader