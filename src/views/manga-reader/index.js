import React, { useState }  from 'react'
import testImg from '../../assets/manga/4.jpg'
import samplePage from '../../assets/manga/4.json'
import Bubble from '../../components/bubble'
import encoding from 'encoding-japanese'

const MangaReader = () => {
    const [captions, setCaptions] = useState({ en: '', jp: '', details: [] });

    const data = (samplePage)
    var detected = encoding.detect(data)
    console.log(detected)
    
    return (<div className='viewer'>
        <div className='image-container'>
            <img src={testImg} className='manga-page' alt={samplePage.alt}/>
            {data.bubbles.map(({ id, options, originalCaptions, translatedCaptions, detailedCaptions }, idx) => <Bubble 
                key={idx}
                id={id}
                originalCaptions={originalCaptions}
                options={options}
                translatedCaptions={translatedCaptions}
                detailedCaptions={detailedCaptions}
            />)}

        </div>
        <div className='details-container'>
            <p>{captions.jp}</p>
            <p>{captions.en}</p>
            {captions.details.map((e, idx) => (<p key={idx}>{e.toString()}</p>))}
        </div>
    </div>
)}

export default MangaReader