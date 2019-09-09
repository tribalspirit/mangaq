import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

const getStyle = ({ x, y, width, height, fontSize }) => ({
    position: 'relative',
    bottom: y,
    left: x,
    width,
    height,
    fontSize: `${fontSize}em`
})

const _renderLexem = (lexem, idx, details) => (<span key={idx} className='lexem' data-tip={details}>{lexem}</span>)

const Bubble = ({ originalCaptions, options, detailedCaptions, id }) => (
    <div
        key={`bubble-${id}`}
        className='bubble jp-text'
        style={getStyle(options)}>
        {originalCaptions.toString().split(' ').map((i, idx) => _renderLexem(i, idx, detailedCaptions[idx]))}
        <ReactTooltip key={`tooltip-${id}`} className='lexem-tooltip'/>
    </div>
)

Bubble.propTypes = {
    id: PropTypes.number,
    originalCaptions: PropTypes.string,
    translatedCaptions: PropTypes.string,
    options: PropTypes.object,
    detailedCaptions: PropTypes.array
}

export default Bubble