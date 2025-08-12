import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './pages/projects'
import Services from './pages/services'
import Contact from './pages/contact'
import Blogs from './pages/blogs'
import BlogItem from './pages/blog-item'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Projects />} />
				<Route path='/services' element={<Services />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/blogs/:slug' element={<BlogItem />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
