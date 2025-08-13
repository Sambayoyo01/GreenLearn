<?php
session_start();

include '../includes/db.php';

// Recibimos los datos del formulario
$rol = $_POST['rol']; 
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$contrasena = password_hash($_POST["contraseña"], PASSWORD_DEFAULT);


// Preparamos la consulta segura
$stmt = $conexion->prepare("INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $correo, $contrasena, $rol);

// Ejecutamos y redirigimos
if ($stmt->execute()) {
    unset($_SESSION['rol']); // Limpiar rol de sesión
    header("Location: ../public/inicio.html");
    exit();
} else {
    echo "Error al insertar datos: " . $stmt->error;
}
?>
