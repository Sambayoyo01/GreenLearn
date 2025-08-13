<?php
session_start(); // Importante para usar variables de sesión

if (isset($_POST['rol'])) {
    $_SESSION['rol'] = $_POST['rol']; // Guardamos el rol en la sesión
}
?>