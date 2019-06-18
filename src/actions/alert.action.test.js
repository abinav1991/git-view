import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { alertActions } from './index';
import { alertConstants } from '../constants';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
	afterEach(() => {

	})

	it('creates SUCCESS when get a success message', () => {

		const expectedActions = [
			{ type: alertConstants.SUCCESS, message: {} }
		]
		const store = mockStore({ alert: {} })
		store.dispatch(alertActions.success({}));
		expect(store.getActions()).toEqual(expectedActions)
	});

	it('creates ERROR when get a error message', () => {

		const expectedActions = [
			{ type: alertConstants.ERROR, message: { message: 'hi', type: 'danger' } }
		]
		const store = mockStore({ alert: {} })
		store.dispatch(alertActions.error({ message: 'hi', type: 'danger' }));
		expect(store.getActions()).toEqual(expectedActions)
	});

	it('creates CLEAR when user close it', () => {

		const expectedActions = [
			{ type: alertConstants.CLEAR }
		]
		const store = mockStore({ alert: {} })
		store.dispatch(alertActions.clear());
		expect(store.getActions()).toEqual(expectedActions)
	})
})