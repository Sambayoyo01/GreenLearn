<?php
session_start();
header("Content-Type: application/json"); // Indicamos que la respuesta será JSON

include('db.php'); // Asegúrate que este archivo tenga la conexión $conexion

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre_i'] ?? '';
    $contraseña = $_POST['contraseña_i'] ?? '';

    // Validamos que se haya recibido algo
    if (empty($nombre) || empty($contraseña)) {
        echo json_encode(["status" => "error", "message" => "Faltan datos"]);
        exit();
    }

    // Consulta segura con prepare (evita SQL Injection)
    $stmt = $conexion->prepare("SELECT * FROM usuarios WHERE nombre = ?");
    $stmt->bind_param("s", $nombre);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();

        if (password_verify($contraseña, $usuario['contrasena'])) {
            $_SESSION['usuario'] = $usuario;

            echo json_encode(["status" => "ok", "rol" => $usuario['rol']]);
        } else {
            echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Usuario no registrado"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método inválido"]);
}
?>
