import React from 'react'

const LANG_LIST = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Chinese',
        value: 'cn'
    },
    {
        label: 'Japanese',
        value: 'jp'
    }
]


class LangSwitcher extends React.Component {
    state = { selected: LANG_LIST[0] }

    _onClick = val => this.setState({ selected: val })

    _renderOptions = options => options.map(i => (<li className={i.value} key={i.value} onClick={() => this._onClick(i)}>{i.label}</li>))

    render() {
        return (
            <li className={this.state.selected.value}><a href='#'>{this.state.selected.label}</a>
                <ul>
                    {this._renderOptions(LANG_LIST)}
                </ul>        
            </li>
        )
    }
}

export default LangSwitcher