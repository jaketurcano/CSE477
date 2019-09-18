<?php
require 'format.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>You Killed The Wumpus</title>
    <link rel="stylesheet" href="reset.css"/>
    <link rel="stylesheet" href="style.css"/>
</head>

<body>
<?php echo present_header("Stalking the Wumpus"); ?>
<div class="win">
    <figure><img src="dead-wumpus.jpg" height="400" width="600" alt="wumpus died"></figure>
    <h2>You killed the Wumpus</h2>
    <h2><a href="game-post.php?n">New Game</a></h2>
</div>
</body>
</html>