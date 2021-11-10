import User from '../models/User';
import bcryptjs from 'bcryptjs';

export const register = async function (req, res) {
  try {
    const { username, email, password } = req.body;

    // Revisar en la Base de Datos que no haya un usuario registrado con el mismo email.
    const emailExist = await User.findOne({ email: email }); // Retorna un objeto completo o vacio
    if (emailExist) return res.status(400).json({ message: 'User already exists' });

    // Hashear el password del Usuario
    const salt = await bcryptjs.genSalt(10);  // Genero un hash aleatorio. Repeticion del algoritmo: 10 
    const passwordHash = await bcryptjs.hash(password, salt);  // Hasheo el password del usuario.

    // Crear Usuario
    const newUser = new User({
      username: username,
      email: email,
      password: passwordHash,
    });

    // Guardar Usuario en la Base de datos
    await newUser.save();

    res.status(200).json({ message: 'Successful registration! 😀' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

