import React from 'react'
import { Categories, Hero, Latest, Left, Links, Right, Spinner, Subscribe } from '../components';

export const HomePage = () => {
	return (
		<>
			<Hero />
			<Right
				classname="bg-before-light-primary"
				svg={true}
				title="Descubre lo mejor de WordPress."
				text="text"
			/>
			<Latest />
			<Categories />
			<Left />
			<Right
				classname="bg-white"
				svg={false}
				title="Colabora con developers uruguayos donde sea, cuando sea."
				text="text"
			/>
			<Links />
			<Subscribe />
		</>
	)
}
