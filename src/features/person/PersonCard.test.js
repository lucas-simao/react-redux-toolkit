import React from 'react';
import {render, screen} from '@testing-library/react'
import { PersonCard } from './PersonCard';
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { update as updatePerson } from './personSlice'

describe('PersonCard.js', () => {
	it("not show component <PersonCard/> if all parameters person on redux is null", () => {
		render(
			<Provider store={store}>
				<PersonCard></PersonCard>
			</Provider>
		);
		expect(screen.queryByRole('h3')).toBeNull()
	});
	it("show component <PersonCard/> if all parameters person on redux is not null", () => {

		store.dispatch(
			updatePerson({
				name: 'Lucas',
				age: 29,
				cpf: '000.000.000-08',
			})
		)

		render(
			<Provider store={store}>
				<PersonCard></PersonCard>
			</Provider>
		);

		expect(screen.getByText('Cartão de apresentação')).toBeTruthy()
	});

})