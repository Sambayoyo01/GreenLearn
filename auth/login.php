<?php
include '../includes/db.php';

session_start(); // Iniciar sesión
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contraseña'];

    $result = $conexion->query("SELECT * FROM usuarios WHERE correo = '$correo'");
    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();
        if (password_verify($contrasena, $usuario['contrasena'])) {
            $_SESSION['usuario'] = $usuario; // Guardar la información del usuario en la sesión

            // Redirigir según el rol
            if ($usuario['rol'] == 'admin') {
                header('Location: panel_admin.php');
            } else {
                header('Location: panel_usuario.php');
            }
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Correo no registrado.";
    }
}
?>
