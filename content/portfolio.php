<section id="portfolio" class="content-section parallax">
    <h2 class="outline-only">Portfolio</h2>
    <div class="dim"></div>
    <header class="font-roboto">
        <p>
            <small>Quality showcase</small>
            Portfolio
        </p>
    </header>
    <div class="container row">
        <div class="column xs-16 holder">
            <div class="browser">
                <div class="content">
                    <div class="addressbar">
                        <img class="dot" src="/images/other/portfolio-dot-red.png" alt="Red dot">
                        <img class="dot" src="/images/other/portfolio-dot-yellow.png" alt="Yellow dot">
                        <img class="dot" src="/images/other/portfolio-dot-green.png" alt="Green dot">
                        <?php $websites = ['go4sport.pl', 'jpietras.com']; ?>
                        <ul class="font-lato omnibox-fallback">
                            <?php foreach($websites as $link): ?>
                                <li>
                                    <a href="http://<?php echo $link; ?>" target="browser"><?php echo $link; ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        <select class="omnibox" hidden>
                            <?php foreach($websites as $link): ?>
                                <option value="<?php echo $link; ?>"><?php echo $link; ?></option>
                            <?php endforeach; ?>
                        </select>
                        <img class='reload' src='/images/other/portfolio-reload.png' alt='Reload' hidden>
                    </div>
                    <iframe name="browser" src="https://go4sport.pl" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</section>