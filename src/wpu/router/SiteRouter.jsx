import { Route, Routes } from "react-router-dom"
import { BlogPage, HomePage, SinglePage, NoMatchPage, AboutPage, ContactPage, PrivacidadPage } from "../pages"
import { Footer, Navbar } from "../components"

export const SiteRouter = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog/:id" element={<SinglePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="privacidad" element={<PrivacidadPage />} />
				<Route path="*" element={<NoMatchPage />} />
			</Routes>

			<Footer />
		</>
	)
}

