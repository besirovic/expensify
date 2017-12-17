import { login, logout } from '../../actions/auth';

test('should call login action correctly', () => {
    const uid = 'someUID';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should call logout action correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});