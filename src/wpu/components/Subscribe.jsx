import MailchimpSubscribe from "react-mailchimp-subscribe"
import { CustomForm } from "./CustomForm";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";


export const Subscribe = () => {
	return (
		<section>
			<div className="container">
				<div className="p-5 bg-light-primary mb-5">
					<MailchimpSubscribe
						url={url}
						render={({ subscribe, status, message }) => (
							<div>
								<CustomForm onSubmitted={formData => subscribe(formData)} />
								{status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
								{status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
								{status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
							</div>
						)}
					/>
				</div>
			</div>
		</section>
	)
}
