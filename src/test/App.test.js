import React from 'react';
import './setupTest'
import App from '../GameOfLife';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { fooPattern1, fooPattern2 } from '../utils/examplePatterns'
import { createEmptyGameBoard, updateGrid } from '../utils/index'

describe('<App />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('Creates snapshots of the snake app', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Reset button will reset the board', () => {
        const newInstance = wrapper.instance()
        const answer = updateGrid(createEmptyGameBoard(30), [...fooPattern1, ...fooPattern2])
        newInstance.resetBoard()
        expect(wrapper.state().grid).toEqual(answer)
    })
    it('handleClick changes the game state', () => {
        const newInstance = wrapper.instance()
        newInstance.handleClick()
        expect(wrapper.state().game).toBeFalsy()
        newInstance.handleClick()
        expect(wrapper.state().game).toBeTruthy()
    })
    it('Game button changes text', () => {
        wrapper.setState({ game: false })
        expect(wrapper.find('#Start').text()).toBe('Stop')
        wrapper.setState({ game: true })
        expect(wrapper.find('#Start').text()).toBe('Start')
    })
})