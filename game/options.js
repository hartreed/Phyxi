//Constants
GRV = {
    zero: 0,
    micro: 0.0001,
    low:0.0004,
    moon:0.0007,
    normal:0.0014,
    earth:0.0016,
    heavy:0.0018,
    lead:0.0024
}
colors = {
    white: '0xFFFFFF',
    black: '0x000000',

    red: '0xFE2506',
    orange: '0xFE9208',
    ltOrange: '0xFED59B',
    yellow: '0xFFC102',
    green: '0x009E2E',
    teal: '0xC8FDFE',
    blue: '0x268ECB',
    deepBlue: '0x114FFF',
    dkBlue: '0x14546f',
    indigo: '0x2F2F66',
    purple: '0x6B54A2'
};

//Setup
cursors = [];
brushes = [];
entities = [];
numPlanets = 124; // 160 is about max with decent performance
paused = false;

restrictedColors = ['deepBlue','orange','ltOrange','yellow'];
entityColors = [colors.ltOrange];// Rain [colors.blue,colors.dkBlue,colors.white];
entitySprite = null;
entitySize = {
    max: 28,
    min: 6
}

gravityStrength = GRV.zero;

PIXI.Texture.fromImage('/assets/planet.png');
PIXI.Texture.fromImage('/assets/sphereMd.png');
PIXI.Texture.fromImage('/assets/sphereDk.png');
PIXI.Texture.fromImage('/assets/wispLt.png');
PIXI.Texture.fromImage('/assets/bubbleLt.png');
PIXI.Texture.fromImage('/assets/bubbleMd.png');
PIXI.Texture.fromImage('/assets/bubbleDk.png');
PIXI.Texture.fromImage('/assets/wisp.png');