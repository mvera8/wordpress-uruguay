import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom"
import { useAxiosContent } from '../../hooks/useAxiosContent';
import { HeaderSingle, Latest, TweetShare, Spinner } from '../components';

const blogdomain = import.meta.env.VITE_BLOG_DOMAIN;

export const SinglePage = () => {

	const { id } = useParams();
	const { title, content, excerpt, categories, tags, isLoading } = useAxiosContent( id );
	const [url, seturl] = useState( window.location.href );
	
	console.log( tags );

	const hashtags = ['hola', 'chau'];

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={excerpt} />
				<meta name="keywords" content="example, keywords, for, the, page" />
				<link rel="canonical" href={url} />
				<meta name="robots" content="index, follow" />

				<meta name="twitter:url" content={window.location.href} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={excerpt} />
				<meta name="twitter:image" content="https://giguom.com/pattern.monster/images//TwitterBG2.png" />
				<meta name="twitter:image:src" content="https://giguom.com/pattern.monster/images//TwitterBG2.png" />
				<meta name="twitter:image:alt" content={title} />
			</Helmet>

			<HeaderSingle
				title={title}
			/>

			<div className='py-5'>
				<div className='container'>
					<div className="row justify-content-center">
						<div
							className="col-12 col-md-7"
							dangerouslySetInnerHTML={{__html: content}}
						/>

						<div className="col-12 col-md-3">
							<TweetShare
								text={title}
								url={url}
								hashtags={hashtags}
							/>
						</div>

						<div className="p-5 bg-light-primary mb-5 d-none">
							<div className="row">
								<div className="col-8">
									<h5>Lalala</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
								<div className="col-4">
									<a href="#" className="btn btn-dark text-white">Compare</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<Latest />
		</>
	)
}
