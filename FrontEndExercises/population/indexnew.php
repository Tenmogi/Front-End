<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Population Data</title>
</head>
<body>
    <header><h1>Toutes les pays du Monde</h1>
      
    </header>
    <nav>
<span>Par Continent</span>
<ul>
    <!-- <li><a href="#">MONDE</a></li> -->
    <li class="dropdown">
        <a href="#" class="dropbtn">MONDE</a>
        <div class="dropdown-content">
            <a href="#">AFRIQUE</a>
             <a href="#">AMERIQUE LATINE ET CARAIBES</a>
              <a href="#">AMERIQUE SEPTENTRIONALE</a>
               <a href="#">EUROPE</a>
                <a href="#">OCEANIE</a>
                 <a href="#">ASIE</a>
        </div>
    </li>
</ul>
    </nav>
<h2>MONDE - Estimations 2023</h2>
<main>
    <table>
        <thead>
        <tr>
            <th>Pays</th>
            <th>Population totale (en milliers)</th>
            <th>Taux de natalité</th>
            <th>Taux de mortalité</th>
            <th>Espérance de vie</th>
            <th>Taux de mortalité infantile</th>
            <th>Nombre d'enfants par femme</th>
            <th>Taux de croissance</th>
            <th>Population de 65 ans et plus(en milliers)</th>
        </tr>
        </thead>
        <tbody>
            <?php
            if (($handle= fopen("pays.csv", "r")) !== FALSE)
            {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
                {
                    echo "<tr>";
                        foreach ($data as $value)
                        {
                            echo "<td>" . htmlspecialchars($value) . "</td>";
                        }
                        echo "</tr>";
                }
                fclose($handle);
            }
            ?>
        </tbody>
    </table>
</main>
</body>
</html>