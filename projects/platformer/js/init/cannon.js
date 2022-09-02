(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * GOAL: Add at least 3 cannons to make your level challenging.
   *
   * Use the createCannon Function to create cannons for the level.
   *
   * createCannon() takes these arguments:
   *
   *      createCannon(type, position, delay);
   *
   *      type: "top", "bottom", "left", or "right"
   *      position: The position of the cannon along whichever side the cannon is placed on
   *          - the x coordinate for "top" and "bottom" cannons
   *          - the y coordinate for "left" and "right" cannons
   *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
   */
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCannon("left", 450,100);
    createCannon("left", 450,125);
    createCannon("left", 450,150);
    createCannon("left", 450,175);
    createCannon("left", 450,200);
    createCannon("left", 450,225);
    createCannon("left", 450,250);
    createCannon("left", 450,275);
    createCannon("left", 450,300);
    createCannon("left", 450,325);
    createCannon("left", 450,350);
    createCannon("left", 450,375);
    createCannon("left", 450,400);
    createCannon("left", 450,425);
    createCannon("left", 450,450);
    createCannon("left", 450,475);
    createCannon("left", 450,500);
    createCannon("left", 450,525);
    createCannon("left", 450,550);
    createCannon("left", 450,575);
    createCannon("left", 450,600);
    createCannon("left", 450,625);
    createCannon("left", 450,650);
    createCannon("left", 450,675);
    createCannon("left", 450,700);
    createCannon("left", 450,725);
    createCannon("left", 450,750);
    createCannon("left", 450,775);
    createCannon("left", 450,800);
    createCannon("left", 450,825);
    createCannon("left", 450,850);
    createCannon("left", 450,875);
    createCannon("left", 450,900);


    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  cannon.init = init;
})(window);
