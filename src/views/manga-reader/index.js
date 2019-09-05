import React, { useState }  from 'react'
import testImg from '../../assets/manga/4.jpg'

const samplePage = {
    imgUrl: testImg,
    alt: 'page 4',
    bubbles: [
        {
        id: 123,
        dimensions: {
            x: 300,
            y: 225,
            width: 40,
            height: 90,
            fontSize: 0.8
        },
        captions: {
            en: 'Damned cat is back!',
            jp: 'Žô‚¢‚Ì”L‚â‚Á‚Ä—ˆ‚½',
            details: [
                'Žô‚¢ (‚Ì‚ë‚¢, noroi) - cursed, damned;',
                '‚Ì - relation particle;',
                '”L (‚Ë‚±, neko) - cat;',
                '‚ª (ga) - subject particle;'

            ]
        }
    }]
}

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
            <img src={samplePage.imgUrl} className='manga-page' alt={samplePage.alt}/>
            {samplePage.bubbles.map((b) => (<div key={b.id} onClick={() => setCaptions(b.captions)} className='bubble jp-text' style={getStyle(b.dimensions)}>{b.captions.jp}</div>))}
        </div>
        <div className='details-container'>
            <p>{captions.jp}</p>
            <p>{captions.en}</p>
            {captions.details.map((e, idx) => (<p key={idx}>{e}</p>))}
        </div>
    </div>
)}

export default MangaReader