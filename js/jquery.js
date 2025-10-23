<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atatürk Anadolu Lisesi</title>

    <!-- CSS Dosyaları -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/mycss.css">

</head>
<body>

<!-- Header / Navbar -->
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="img/logo-placeholder.png" alt="Logo" style="height:50px;"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Ana Sayfa</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Haberler</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Öğretmenler</a></li>
                <li class="nav-item"><a class="nav-link" href="#">İletişim</a></li>
            </ul>
        </div>
    </nav>
</header>

<!-- Slider -->
<div class="slider">
    <img src="img/slider1-placeholder.png" alt="Slider 1">
    <img src="img/slider2-placeholder.png" alt="Slider 2">
</div>

<!-- Haberler -->
<div class="haberler">
    <div class="haber">
        <img src="img/haber1-placeholder.png" alt="Haber 1">
        <p>Haber Başlığı 1</p>
    </div>
    <div class="haber">
        <img src="img/haber2-placeholder.png" alt="Haber 2">
        <p>Haber Başlığı 2</p>
    </div>
</div>

<!-- Footer -->
<footer>
    <p>&copy; 2025 Atatürk Anadolu Lisesi, Kayseri</p>
</footer>

<!-- JS Dosyaları -->
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/script.js"></script>

<script>
$(document).ready(function(){
    console.log("Sayfa yüklendi, jQuery çalışıyor!");
});
</script>

</body>
</html>

