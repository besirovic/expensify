import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

test('should set text filter to passed value', () => {
    const action = setTextFilter('testing...');
    expect(action)
        .toEqual({
            type: 'SET_TEXT_FILTER',
            text: 'testing...'
        });
});

test('should set text to empty string if no value passed / clear text value', () => {
    const action = setTextFilter();
    expect(action)
        .toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        });
});

test('should set sort by amound value', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should set sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action)
        .toEqual({
            type: 'SET_START_DATE',
            date: moment(0)
        });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action)
        .toEqual({
            type: 'SET_END_DATE',
            date: moment(0)
        });
});