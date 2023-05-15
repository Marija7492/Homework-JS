// Landscape Or Portrait

function LandscapeOrPortrait(width, height) {
  if (width > height) {
    return 'The dimensions are for a Landscape.';
  } else {
    return 'The dimensions are for a Portrait.';
  }
};

console.log(LandscapeOrPortrait(400, 320));