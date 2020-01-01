# Notes PHP

## 1) Démarrage

- Alors que le html peut s'ouvrir directement sur un navigateur web, on ne peut exécuter le code php que sur un serveur web, avec une url de type : http://localhost/tests
Localhost signifie que Apache est en train de lire le code php et le traduire en html, seul code lisible sur le navigateur.

- On peut mettre le code php n'importe où sur la page html : dans l'en-tête, le corps et même au milieu d'une balise html.

- Le point virgule marque la fin de l'instruction :
<?php echo "Ceci est du texte"; ?>
- On peut mettre des balises html dans les balise du code php :
<?php echo "Ceci est du <strong>texte</strong>"; ?>
- Pour afficher du texte entre guillemets sans indiquer que la chaine de caractères s'arrête : antislash
<?php echo "Cette ligne a été écrite \"uniquement\" en PHP."; ?>
- /* Commentaires
encore des commentaires */

## 2) Variables
$age = 51
%


## 3) Conditions
    <?php
    $age = 51;

    if ($age > 40)
    {echo 'tu es vieux';
    }

    elseif ($age ==  50)
    {echo 'tu navigues entre deux âges';
    }
    else 
    {echo 'salut gamin';
        }
    ?>

- Pour tester une égalité : if $age == 50 (sinon ça assigne une valeur à la variable)
- Syntaxe allégée pour le booléen :
$adulte = true;
if($adulte)
{echo 'tu es adulte'}
else
{'tu es un enfant'}

- Si on veut inverser le test : if(!$adulte)

- Combiner des conditions : AND ou &&, OR ou ||
$adulte = true;
$nom = 'Bernard';
if ($adulte AND $nom == 'Bernard')
{echo "texte"}

- On peut couper du code php et mettre du html et recommencer du php un peu plus loin, en fermant la balise php sans fermer l'accolade (on évite ainsi des instructions echo):
<?php 
$adulte = true;
if($adulte)
{
?>
<p>Tu es adulte</p>
<?php
}
?>

- Condition switch case break : tester une même variable, sans réécrire plusieurs elseif
<?php
$age = 4;
switch($age)
{
    case 4:
    echo 'tu as 4 ans';
    break;
    
    case 5:
    echo 'tu as 5 ans';
    break;  
}
?>

## 4) Boucles

### - La boucle while : TANT QUE

<?php
$repetition = 0;
while ($repetition < 10)
{
    echo '<p>je ne dois pas copier sur mon voisin. ' . $repetition . 'fois.</p>';
    $repetition++;
    /*L'incrémentation $repetition++ équivaut à : $repetition = $repetition +1;*/

}
?>

### - La boucle for 
Syntaxe : initialisation, condition, incrémentation.
Résultat identique au while : si vous hésitez entre les deux, il suffit simplement de vous poser la question suivante : « Est-ce que je sais d'avance combien de fois je veux que mes instructions soient répétées ? ». Si la réponse est oui, alors la boucleforest tout indiquée. Sinon, alors il vaut mieux utiliser la bouclewhile.

<?php
for ($nombre_de_lignes = 1; $nombre_de_lignes <= 100; $nombre_de_lignes++)
{
    echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
}
?>

## 5) Les tableaux

### - Tableaux numérotés (valeur zéro du premier élément)
<?php
// La fonction array permet de créer un array
$prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');
?>

Pour afficher le contenu d'une case :
<?php
echo $prenoms[1];
?>

### - Tableaux associatifs
#### Pour construire, on met l'étiquette devant suivi d'une flèche :

<?php
// On crée notre array $coordonnees
$coordonnees = array (
    'prenom' => 'François',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');
?>

#### Pour afficher, la fonction foreach parcourt chaque ligne :

<?php
$coordonnees = array (
    'prenom' => 'François',
    'nom' => 'Dupont',
    'adresse' => '3 Rue du Paradis',
    'ville' => 'Marseille');

foreach($coordonnees as $element)
{
    echo $element . '<br />';
}
?>
#### Pour afficher aussi la clé :
foreach($coordonnees as $cle => $element)
{
    echo '[' . $cle . '] vaut ' . $element . '<br />';
}

#### Vérifier si une valeur existe dans l'array et renvoyer la clé correspondante :

<?php
$fruits = array ('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');

$position = array_search('Fraise', $fruits);
echo '"Fraise" se trouve en position ' . $position . '<br />';

$position = array_search('Banane', $fruits);
echo '"Banane" se trouve en position ' . $position;
?>
