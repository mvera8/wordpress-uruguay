import { Route, Routes } from "react-router-dom"
import { BlogPage, HomePage, SinglePage, NoMatchPage, AboutPage, ContactPage, PrivacidadPage, CategoryPage, CategoriesPage } from "../pages"
import { Footer, Navbar } from "../components"

export const SiteRouter = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<SinglePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="privacidad" element={<PrivacidadPage />} />
				<Route path="category" element={<CategoriesPage />} />
				<Route path="category/:id" element={<CategoryPage />} />
				<Route path="*" element={<NoMatchPage />} />
			</Routes>

			<Footer />
		</>
	)
}

