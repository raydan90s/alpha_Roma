const express = require('express');
const cors = require('cors');
const blogController = require('./blog');
const usuarioController = require('./usuario'); // Importa el controlador de usuario

const app = express();
app.use(cors());
app.use(express.json());  // **IMPORTANTE: Colocado antes de las rutas**

// Middleware para loguear todas las solicitudes
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Llama al siguiente middleware o ruta
});

// BLOGS
app.get('/api/blogs', blogController.obtenerTodosLosBlogs);
app.get('/api/blogs/:id', blogController.obtenerBlogPorId);
app.put('/api/blogs/:id', blogController.actualizarBlog);
app.delete('/api/blogs/:id', blogController.eliminarBlog);
app.post('/api/blogs', blogController.agregarBlog);
app.put('/api/blogs/orden', blogController.actualizarOrdenBlogs);

// RUTA PARA CREAR UN NUEVO USUARIO
app.post('/api/usuarios', async (req, res) => {
    const { correo, password } = req.body;
    try {
        const userId = await usuarioController.crearNuevoUsuario(correo, password);
        res.status(201).json({ message: 'Usuario creado exitosamente', userId: userId });
    } catch (error) {
        console.error('Error al crear usuario en /api/usuarios:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'El correo electrónico ya está registrado' });
        }
        res.status(500).json({ message: 'Error interno del servidor al crear el usuario' });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
