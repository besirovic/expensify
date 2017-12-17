import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensessSummary';

test('should render correct message for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correct message for multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});