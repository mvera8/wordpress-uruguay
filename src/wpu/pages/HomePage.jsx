import { home } from '../data/home.json';
import { Categories, Hero, Latest, Left, Links, Right, Subscribe } from '../components';

const PageContent = {
	subtitle: home[0].subtitle,
	hero_button: home[0].hero_button,
	first_right_title: home[0].first_right_title,
	first_right_text: home[0].first_right_text,
	left_title: home[0].left_title,
	left_text: home[0].left_text,
	second_right_title: home[0].second_right_title,
	second_right_text: home[0].second_right_text
};

export const HomePage = () => {
	return (
		<>
			<Hero
				subtitle={PageContent.subtitle}
				button={PageContent.hero_button}
			/>
			<Right
				classname="bg-before-light-primary"
				svg={true}
				title={PageContent.first_right_title}
				text={PageContent.first_right_text}
			/>
			<Latest
				more={true}
			/>
			<Categories />
			<Left
				title={PageContent.left_title}
				text={PageContent.left_text}
			/>
			<Right
				classname="bg-white"
				svg={false}
				title={PageContent.second_right_title}
				text={PageContent.second_right_text}
			/>
			<Links />
			<Subscribe />
		</>
	)
}
