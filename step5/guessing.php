<?php
require 'lib/guessing.inc.php';
$view = new Guessing\GuessingView($guessing);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Guessing Game</title>
    <link href="style.css" type="text/css " rel="stylesheet"/>
</head>

<body>
<?php echo $view->present(); ?>

</body>
</html>