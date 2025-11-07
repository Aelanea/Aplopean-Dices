Hooks.once("diceSoNiceReady", (dice3d) => {

  const base = "modules/aplopean-dice/assets/dice";

  dice3d.addTexture("AplopeanTexture", {
    name: "Aplopean Texture",
    composite: "multiply",
    source: `${base}/texture.png`
  }).then(() => {

    // Register required colorset with the new texture and enforced colors
    dice3d.addColorset({
      name: "Aplopean",
      description: "Aplopean Theme",
      category: "Aplopea",
      foreground: "#FFFFFF",  // Label color
      background: "#FFFFFF",  // Dice body color
      outline: "#FFFFFF",
      edge: "#FFFFFF",
      texture: "AplopeanTexture"
    });

  });

  // Register the custom system to enforce the theme as preferred
  dice3d.addSystem({id: "apl", name: "Aplopean Dices"}, "preferred");

  // Helper for building label arrays
  const faces = (...nums) => nums.map(n => `${base}/${n}.png`);

  // d2 → 1,2
  dice3d.addDicePreset({
    type: "d2",
    labels: faces(1, 2),
    colorset: "Aplopean",
    system: "apl"
  });

  // d6 → 1–6
  dice3d.addDicePreset({
    type: "d6",
    labels: faces(1, 2, 3, 4, 5, 6),
    colorset: "Aplopean",
    system: "apl"
  });

  // d8 → 1–8
  dice3d.addDicePreset({
    type: "d8",
    labels: faces(1, 2, 3, 4, 5, 6, 7, 8),
    colorset: "Aplopean",
    system: "apl"
  });

  // d10 → 1–10
  dice3d.addDicePreset({
    type: "d10",
    labels: faces(1,2,3,4,5,6,7,8,9,10),
    colorset: "Aplopean",
    system: "apl"
  });

  // d12 → 1–12
  dice3d.addDicePreset({
    type: "d12",
    labels: faces(1,2,3,4,5,6,7,8,9,10,11,12),
    colorset: "Aplopean",
    system: "apl"
  });

  // d20 → 1–20
  dice3d.addDicePreset({
    type: "d20",
    labels: faces(
      1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20
    ),
    colorset: "Aplopean",
    system: "apl"
  });

  // d100 → percentile 10–100
  dice3d.addDicePreset({
    type: "d100",
    labels: faces(10,20,30,40,50,60,70,80,90,100),
    colorset: "Aplopean",
    system: "apl"
  });

  // df (Fudge/Fate die)
  dice3d.addDicePreset({
    type: "df",
    labels: faces('minus', 'blank', 'plus', 'minus', 'blank', 'plus'),
    colorset: "Aplopean",
    system: "apl"
  });

  // dc (Coin die) 
  dice3d.addDicePreset({
    type: "dc",
    labels: faces('1', '20'),
    colorset: "Aplopean",
    system: "apl"
  });

});