<?php
/*
plugin name: Carrousel
description: Affiche un carrousel à partir d'une galerie d'image
version: 1.0.0
author: Samuel Dorneval
*/

function enfile_css_js()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "/style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        "carrousel",
        plugin_dir_url(__FILE__) . "/style.css",
        array(),
        $version_css
    );
    wp_enqueue_script(
        "carrousel",
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}
add_action("wp_enqueue_scripts", "enfile_css_js");

function genere_carrousel()
{
    $chaine =
    '<button class="carrousel__bouton">Ouvrir</button>;
        <div class="carrousel">
            <button class="carrousel__x">X</button>
            <button class="carrousel__gauche">gauche</button>
            <button class="carrousel__droite">droite</button>
        <figure class="carrousel__figure"></figure>
        <form class="carrousel__form"></form>
    </div>';
    return $chaine;
}

add_shortcode("carrousel", "genere_carrousel");
