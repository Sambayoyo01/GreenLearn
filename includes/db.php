<?php
$conexion = new mysqli('localhost', 'root', '', 'usuarios_db');
if($conexion->connect_error) {
    die("conexion fallida: " . $conexion -> connect_error);
}
?>