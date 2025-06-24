import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/services/ServicesPage';
import PackagePage from './pages/Paquetes/PackagePage';
import AboutUsPage from './pages/about/aboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CamerasPage from './pages/securityCameras/camerasPage';
import LoginPage from './pages/login/loginPage';
import BlogPage from './pages/blog/blog';
import BlogPostDetail from './pages/blog/BlogPostDetail';
import EditorBlog from './pages/blog/editorBlog';
import EditBlogPost from './pages/blog/EditBlogPost';
import { AuthProvider } from './pages/login/AuthContext'; // Importa el AuthProvider
import ProtectedRoute from './components/ProtectedRoute'; // Importa el ProtectedRoute
import CreateUserPage from './pages/createUser/CreateUserPage'; // Importa el componente


function App() {
    return (
        <Router>
            <AuthProvider> {/* Envuelve tu aplicación con el AuthProvider */}
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicios" element={<ServicesPage />} />
                        <Route path="/paquetes" element={<PackagePage />} />
                        <Route path="/about" element={<AboutUsPage/>} />
                        <Route path="/camaras" element={<CamerasPage/>} />
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/create-user" element={<CreateUserPage />} /> {/* Añade esta ruta */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<BlogPostDetail />} />

                        {/* Rutas protegidas */}
                        <Route path="/editor" element={<ProtectedRoute />}>
                            <Route index element={<EditorBlog />} /> {/* El componente index se renderiza en la ruta padre */}
                            <Route path=":id" element={<EditBlogPost />} />
                        </Route>
                    </Routes>
                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;