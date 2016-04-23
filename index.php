<?php define('ROOT', $_SERVER['DOCUMENT_ROOT']); ?>
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="James Pietras is a freelance, professional front-end web developer. Providing quality user experience through responsive design and performant front-end developement.">
        <meta name="keywords" content="front-end developer, front-end developement, web developer, portfolio, james pietras">
        <title>Portfolio | James Pietras - Front-End Web Developer</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1 class="outline-only">Portfolio | James Pietras - Front-End Web Developer</h1>
        <header>
            <section>
                <h2 class="outline-only">Header</h2>
                <?php require_once(ROOT.'/content/nav.php'); ?>
            </section>
        </header>
        <main>
            <section>
                <h2 class="outline-only">Content</h2>
                <?php require_once(ROOT.'/content/home.php'); ?>
                <?php require_once(ROOT.'/content/about.php'); ?>
                <?php require_once(ROOT.'/content/skills.php'); ?>
            </section>
        </main>
        <?php require_once(ROOT.'/content/footer.php'); ?>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>