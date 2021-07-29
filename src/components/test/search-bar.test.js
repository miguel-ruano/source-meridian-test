import { render, screen } from '@testing-library/react';
import SearchBar from '../search-bar';


test('SearchBar-> testing', () => {
    const props = {
        buttonTitle: "any-title", barTitle: "bar-title"
    }
    var is_event_emit = false
    const goToSearch = (e) => {
        expect(e == "1").toBe(true)
        is_event_emit = true
    }
    render(<SearchBar search="1" goToSearch={e => goToSearch(e)} buttonTitle={props.buttonTitle} barTitle={props.barTitle} />);
    // label props
    for (const prop in props) {
        const value = props[prop];
        const element = screen.getByText(new RegExp(`${value}`, 'i'));
        expect(element).toBeInTheDocument();
    }
    // input props
    const inputSearch = screen.getByDisplayValue(new RegExp(`${1}`, 'i'))
    expect(inputSearch).toBeInTheDocument();
    // make event
    const button = screen.getByText(new RegExp(`${props.buttonTitle}`, 'i'))
    button.click()
    expect(is_event_emit).toBe(true)
});
