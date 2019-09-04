import React from 'react'
import testImg from '../../assets/manga/4.jpg'

const samplePage = {
    imgUrl: testImg,
    alt: 'page 4',
    bubbles: [
        {
            dimensions: {
            x: 300,
            y: 225,
            width: 40,
            height: 90,
            fontSize: 0.8
        },
        captions: {
            en: 'Damned cat',
            jp: '呪いの猫がやって来た',
            details: '呪い (のろい, noroi) - cursed, damned; の - relation particle; 猫 (ねこ, neko) - cat; が (ga) - subject particle'
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

const MangaReader = () => (
    <div className='viewer'>
        <div className='image-container'>
            <img src={samplePage.imgUrl} className='manga-page' alt={samplePage.alt}/>
            {samplePage.bubbles.map(b => (<div className='bubble jp-text' style={getStyle(b.dimensions)}>{b.captions.jp}</div>))}
        </div>
        <div className='details-container'>
            <p>Quisque nibh mauris, finibus vel vulputate vel, condimentum sit amet libero. Nulla gravida nisl erat, sed malesuada neque auctor at. Sed mauris metus, faucibus ut pretium eu, congue ut leo. Praesent in porta lacus. Vestibulum volutpat, ipsum dapibus tincidunt vulputate, nibh lacus iaculis odio, in tempus tellus nibh a lorem. Pellentesque tristique non enim sed scelerisque. Pellentesque ac eros ac orci efficitur molestie. Donec eget est lobortis arcu tempor suscipit. Vestibulum vitae sem ac ante sagittis laoreet rhoncus sed ex. Nam eget porta leo. Maecenas dui eros, imperdiet eget nibh ac, facilisis placerat odio.</p>
        </div>
    </div>
)

export default MangaReader