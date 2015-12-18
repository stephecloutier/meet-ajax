<?php
/* Meet AJAX
 * hepl-mmi/meet-ajax
 *
 * by leny
 * started @ 18/12/2015
 */

$sDataFilePath = sys_get_temp_dir() . "/buddies.json";
$aBuddies = [];

// clean data
if( isset( $_GET[ "clean" ] ) ) {
    file_put_contents( $sDataFilePath, json_encode( $aBuddies ) );
}

// load json data
if( file_exists( $sDataFilePath ) ) {
    $sBuddiesFileContent = file_get_contents( $sDataFilePath );
    $aBuddies = json_decode( $sBuddiesFileContent );
}

// parse form
$bHasErrors = false;
if( count( $_POST ) > 0 ) {
    $sName = trim( $_POST[ "name" ] );
    $sDescription = trim( $_POST[ "description" ] );
    if( $sName && $sDescription ) {
        $oBuddy = new StdClass();
        $oBuddy->name = $sName;
        $oBuddy->description = $sDescription;
        $aBuddies[] = $oBuddy;
        file_put_contents( $sDataFilePath, json_encode( $aBuddies ) );
    } else {
        $bHasErrors = true;
    }
}

?>
<!doctype html>
<html lang="fr">
    <head>
        <title lang="en">Meet AJAX</title>

        <link rel="stylesheet" href="css/bootstrap.min.css" />
    </head>
    <body>
        <main class="container">
            <header class="row page-header">
                <h1 class="col-md-12">
                    <span lang="en">Meet AJAX</span>
                    <small>Votre nouveau super-coupaing</small>
                </h1>
            </header>
            <section class="content row">
                <h2 class="hidden">
                    Un exercice haut en couleurs…
                </h2>

                <div class="col-md-4">
                    <h3>
                        L'album des coupaings
                    </h3>

                    <div class="row">
                        <?php if( count( $aBuddies ) ): ?>
                            <?php foreach( $aBuddies as $oBuddy ): ?>
                                <div class="col-md-4">
                                    <div class="thumbnail" title="<?= $oBuddy->description; ?>">
                                        <img src="http://api.adorable.io/avatars/<?= $oBuddy->name; ?>.png" alt="Avatar de <?= $oBuddy->name; ?>" />
                                        <div class="caption">
                                            <strong><?= $oBuddy->name; ?></strong>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <div class="col-md-12">
                                <div class="well">
                                    Vous n'avez pas encore ajouté de coupaing !
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <div class="col-md-4">
                    <h3>Ajouter un coupaing</h3>
                    <form action="./" method="post">
                        <fieldset>
                            <div class="form-group">
                                <label for="name">Nom:</label>
                                <input type="text" class="form-control" name="name" placeholder="Nom du coupaing" required />
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea class="form-control" name="description" placeholder="Description du coupaing" required></textarea>
                                <p class="help-block">Faites court, on manque de place !</p>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-info">Ajouter un coupaing</button>
                            </div>
                        </fieldset>
                    </form>
                    <hr />
                    <h3>Supprimer les coupaings</h3>
                    <p>Ils seront perdus à jamais, mais vous pourrez toujours en créer d'autres…</p>
                    <div class="text-center">
                        <a href="./?clean" class="btn btn-danger">Supprimer les coupaings</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <h3>Qu'est-ce qui se passe ici ?</h3>
                    <p>Sur cette page, un script PHP affiche une série de <em>coupaings</em>, stockés dans un fichier json.</p>
                    <p>Un formulaire permet d'ajouter un nouveau coupaing et de la sauvegarder, toujours via PHP.</p>
                    <hr />
                    <h3>Qu'est-ce qu'on va faire ?</h3>
                    <p>
                        Chaque ajout de coupaing entraîne un rechargement de la page, c'est quand même pas très cool. Grâce à <strong>jQuery</strong>, nous allons faire cette opération en AJAX.<br />
                        Ça va nous demander de modifier <em>un peu</em> le code PHP.
                    </p>
                </div>
            </section>
            <hr />
            <footer class="row">
                <div class="col-md-6 col-md-offset-6 text-right">
                    <small>MMI 2015-2016 - <a href="https://github.com/hepl-mmi/meet-ajax">hepl-mmi/meet-ajax</a></small>
                </div>
            </footer>
        </main>
    </body>
</html>
