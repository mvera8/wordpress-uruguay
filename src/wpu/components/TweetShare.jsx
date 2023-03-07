// https://pattern.monster/
// https://codepen.io/sandradudley/full/KMgJNR

// https://twitter.com/intent/tweet?text=If%20you%20love%20creating%20SVG%20patterns%20and%20backgrounds%2C%20you%20should%20check%20this%20out.%20Generate%20fully%20customizable%20SVG%20patterns%20for%20free.%0A%0A200%2b%20patterns%20available%20at%20https%3A%2F%2Fpattern.monster%0A%0Avia%20%40Pattern_Monster%0A%0A%23svgpatterns%20%23patterns%20%23svgbackgrounds%20%23PatternMonster

// https://twitter.com/intent/tweet?text=Hello%20world&url=www.something.com
// https://twitter.com/intent/tweet?url=https%3A%2F%2Ftech.cymi.org%2Ftweet-intents&text=lala&hashtags=hola%2Cestas




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function textEntity( text, type ) {
    return {
        name: type,
        value: encodeURIComponent( text ),
    };
}

function hashtagsEntity(hashtags) {
    return {
        name: 'hashtags',
        value: hashtags.join(','),
    };
}

export const TweetShare = ({ text, url, hashtags }) => {

	const qsEntities = [];

	if (text) {
		qsEntities.push( textEntity( text, 'text' ) );
	}

	if (url) {
		qsEntities.push( textEntity( url, 'url') );
	}

	if (hashtags) {
			if (!Array.isArray(hashtags)) {
					throw new Error('hashtags must be a {Array}');
			}
			if (hashtags.length === 0) {
					throw new Error('hashtags list must not be empty');
			}
			qsEntities.push(hashtagsEntity(hashtags));
	}

	const query = qsEntities.length === 0 ? '' : '?';
  const qs = qsEntities.map( ( entity ) => `${entity.name}=${entity.value}`).join('&');

	const share = `https://twitter.com/intent/tweet${query}${qs}`;

	return (
		<>
			<a href={share} target="_blank">
				<FontAwesomeIcon icon={faTwitter} />
			</a>
		</>
	)
}
