import authReducer from '../../reducers/auth';

test('should set user id after login', () => {
    const uid = 'someUID';
    const action = {
        TYPE: 'LOGIN',
        uid
    };

    const state = authReducer(action);
    expect(state.uid).toEqual(uid);
});

test('should return empty object after user logged out', () => {
    const action = {
        TYPE: 'LOGOUT'
    };

    const state = authReducer(action);
    expect(state).toEqual({});
});