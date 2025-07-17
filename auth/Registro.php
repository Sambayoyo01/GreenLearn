<?php
include '../includes/db.php';

// Recibimos los datos del formulario
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$contrasena = password_hash($_POST["contraseña"], PASSWORD_DEFAULT);

// Preparamos la consulta segura
$stmt = $conexion->prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $correo, $contrasena);

// Ejecutamos y redirigimos
if ($stmt->execute()) {
    header("Location: ../public/inicio.html");
    exit();
} else {
    echo "Error al insertar datos: " . $stmt->error;
}
?>
