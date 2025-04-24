// blog.js
const connection = require('./db.js'); // Importa la conexión desde db.js

const obtenerTodosLosBlogs = (req, res) => {
    try {
        connection.query('SELECT id, titulo, resumen, urlImagen, orden FROM blog ORDER BY orden ASC', (err, results) => {
            if (err) {
                console.error("Error en la consulta SQL para obtener blogs:", err);
                return res.status(500).json({ error: err.message });
            }
            console.log("Consulta SQL exitosa para obtener blogs, resultados:", results);
            res.json(results);
            console.log("Respuesta de blogs enviada al cliente");
        });
    } catch (error) {
        console.error("Error en la ruta /api/blogs (obtenerTodosLosBlogs):", error);
        res.status(500).json({ error: "Error interno del servidor al obtener blogs" });
    }
};

const obtenerBlogPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await connection.promise().query('SELECT * FROM blog WHERE id = ?', [id]);
        const blog = rows[0];
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el blog por ID:', error);
        res.status(500).json({ message: 'Error al obtener el blog' });
    }
};

const actualizarBlog = async (req, res) => {
    const { id } = req.params;
    const { titulo, resumen, contenido, urlImagen, orden } = req.body; // Recibe el campo 'orden'
    try {
        const [result] = await connection.promise().query(
            'UPDATE blog SET titulo = ?, resumen = ?, contenido = ?, urlImagen = ?, orden = ?, fechaModificacion = CURRENT_TIMESTAMP WHERE id = ?',
            [titulo, resumen, contenido, urlImagen, orden, id] // Incluye 'orden' en la actualización
        );
        if (result.affectedRows > 0) {
            res.json({ message: 'Blog actualizado exitosamente' });
        } else {
            res.status(404).json({ message: 'Blog no encontrado o no se realizaron cambios' });
        }
    } catch (error) {
        console.error('Error al actualizar el blog:', error);
        res.status(500).json({ message: 'Error al actualizar el blog' });
    }
};

const eliminarBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await connection.promise().query('DELETE FROM blog WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Blog eliminado exitosamente' });
        } else {
            res.status(404).json({ message: 'Blog no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el blog:', error);
        res.status(500).json({ message: 'Error al eliminar el blog' });
    }
};

const agregarBlog = async (req, res) => {
    const { titulo, resumen, contenido, urlImagen } = req.body;
    try {
        const [result] = await connection.promise().query(
            'INSERT INTO blog (titulo, resumen, contenido, urlImagen) VALUES (?, ?, ?, ?)',
            [titulo, resumen, contenido, urlImagen]
        );
        res.status(201).json({ id: result.insertId, message: 'Blog creado exitosamente' });
    } catch (error) {
        console.error('Error al agregar el blog:', error);
        res.status(500).json({ message: 'Error al crear el blog' });
    }
};

const actualizarOrdenBlogs = async (req, res) => {
    const { orden: idsOrdenados } = req.body; // Recibe un array de IDs ordenados
    try {
        await Promise.all(
            idsOrdenados.map(async (id, index) => {
                await connection.promise().query(
                    'UPDATE blog SET orden = ? WHERE id = ?',
                    [index + 1, id] // Asigna el orden basado en la posición en el array (1-based index)
                );
            })
        );
        res.json({ message: 'Orden de blogs actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el orden de los blogs:', error);
        res.status(500).json({ message: 'Error al actualizar el orden de los blogs' });
    }
};

module.exports = {
    agregarBlog,
    obtenerBlogPorId,
    actualizarBlog,
    eliminarBlog,
    obtenerTodosLosBlogs,
    actualizarOrdenBlogs
};