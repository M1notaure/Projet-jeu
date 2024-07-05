let map1 =
  [
    '            $$$                  ',
    'g gg   ggg       gggg  gg  g  gg ',
    'd   $       ggg   dd             ',
    '    ggg                         1',
    '               g$$      ggg   ggg',
    'gg        b   gggg  gg           ',
    '   $$$  gggg     d            ggg',
    '   ggg  b     d         gg       ',
    'gggdddggggggggd$$$ggggggggg  gggg',
    'dddddddddddddddgggddddddddd  $ddd',
    'ddddddddddddddddddddddddddd  dddd',
  ]

let map2 =
  [
    '                               ******',
    '                               *$$$$*',
    '****  *****iiiiiiiiii**********B$****',
    'BBBB   BBBBBBBBBBBBBBBBBBBBBBBBB$BBBB',
    'BBBBB          BBBBBBBBBBBBBBBBB$BBBB',
    'BBBB   iiiiiii BBBBBBBBBBBBBBBBB$BBBB',
    'BB   BBBBBBBBB BBBBBBBBBBBBBBBBB$BBBB',
    'BBBB BBBBBBBBB BBBBBBBBBBBBBB$$$$BBBB',
    'B      BBBBBBB BBBBBBBBBBBB$$$$BBBBBB',
    'B   BBBBBBBBBB$$$$$$$$$$$$$$$BBBBBBBB',
    'BBB    2BBBBBB$$$$$$$$$$$BBBBBBBBBBBB',
    'BBBiiiiiBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
  ]

let map3 =
  [
    'n nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR$$$$$$$$$$RRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR       $$$$$$$$$$RRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRRRRR     RRRRR$$$$$$$$$$           RRRRRRRRRRRRRR',
    'R RRRRRRRRRRRRRRRRRRRRRRRRR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRR                RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRR           RRRRRRRRRRRRRRRRR      3RRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R RRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R             RRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'R                                         RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'RRRRRRRRRRRRRffffffRRRRRRRRRRRRRRRRRRRRR    RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'RRRRRRRRRRRRR      RRRRRRRRRRRRRRRRRRRRRRR    RRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'RRRRRRRRRRRRR      RRRRRRRRRRRRRRRRRRRRRRRRR                       $RRRRRRR',
    'RRRRRRRRRRRRR      RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
    'RRRRRRRRRRRRR      RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
  ]


  let map4 = [
  'cccccccccccccccccccccccccccccccccccccccccccccccc',
  'cccccccccccccccccccccccccccccccccccccccccccccccc',    
  'cccccccccccccccccccccccccccccccccccccccccccccccc',    
  'cccccccccccccccccccccccccccccccccccccccccccccccc',    
  '  cc                                            ',    
  '  c                                             ',      
  '                                                ',    
  'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',    
  'cccccccccccccccccccccccccccccccccccccccccccccccc'    
  ]

  


function preload() {
  hitboxSheet = loadImage('Assets/Orc/Orc/Orc.png')
  enemySheet = loadImage('Assets/Orc/Orc/Orc.png')
  characterSheet = loadImage('Assets/Soldier/Soldier/Soldier.png');
  tilesSheet = loadImage('Assets/sprites/world_tileset.png')
  pixelOperator = loadFont('Assets/fonts/PixelOperator8-Bold.ttf')
  coinSheet = loadImage('Assets/sprites/coin.png')
  portailSheet = loadImage('Assets/portail.png')
}

function setup() {
  new Canvas(innerWidth / 4, innerHeight / 4, 'pixelated x4');

  // ground = new Sprite(canvas.w / 2, canvas.h - 50);
  // ground.width = canvas.w;
  // ground.height - 100;
  // ground.collider = 'static';
  // ground.color = 'brown';

  txt = createDiv('')
  txt.style('font-size', '75px')
  txt.position(20, 10)




  BlockOfTheEnd
  BlockOfTheEnd = new Group()
  BlockOfTheEnd.collider = 'none'
  BlockOfTheEnd.tile = '4'
  BlockOfTheEnd.spriteSheet = tilesSheet
  BlockOfTheEnd.width = 16
  BlockOfTheEnd.height = 16
  BlockOfTheEnd.addAni(
    { w: 16, h: 16, row: 2, col: 3 }
  )
  
  
  
  red_mushroom = new Group()
  red_mushroom.collider = 'none'
  red_mushroom.tile = '3'
  red_mushroom.spriteSheet = tilesSheet
  red_mushroom.width = 16
  red_mushroom.height = 16
  red_mushroom.addAni(
    { w: 16, h: 16, row: 5, col: 7 }
  )

  blue_potion = new Group()
  blue_potion.collider = 'none'
  blue_potion.tile = '2'
  blue_potion.spriteSheet = tilesSheet
  blue_potion.width = 10
  blue_potion.height = 16
  blue_potion.addAni(
    { w: 16, h: 16, row: 8, col: 0 }
  )


  pumpkin = new Group()
  pumpkin.collider = 'static'
  pumpkin.tile = '1'
  pumpkin.spriteSheet = tilesSheet
  pumpkin.width = 16
  pumpkin.height = 16
  pumpkin.addAni(
    { w: 16, h: 16, row: 8, col: 4 }
  )
  
  
  fragilized_netheracks = new Group()
  fragilized_netheracks.rotationlock = true
  fragilized_netheracks.collider = 'static'
  fragilized_netheracks.tile = 'f'
  fragilized_netheracks.spriteSheet = tilesSheet
  fragilized_netheracks.width = 16
  fragilized_netheracks.height = 16
  fragilized_netheracks.addAni(
    { w: 16, h: 16, row: 1, col: 5 }
  )




  netherack = new Group()
  netherack.collider = 'static'
  netherack.tile = 'n'
  netherack.spriteSheet = tilesSheet
  netherack.width = 16
  netherack.height = 16
  netherack.addAni(
    { w: 16, h: 16, row: 0, col: 4 }
  )

  red_rock = new Group()
  red_rock.collider = 'static'
  red_rock.tile = 'R'
  red_rock.spriteSheet = tilesSheet
  red_rock.width = 16
  red_rock.height = 16
  red_rock.addAni(
    { w: 16, h: 16, row: 1, col: 4 }
  )




  grass = new Group();
  grass.collider = 'static';
  grass.tile = 'g';
  grass.spriteSheet = tilesSheet;
  grass.width = 16
  grass.height = 16
  grass.addAni(
    { w: 16, h: 16, row: 0, col: 0 }
  )

  dirt = new Group();
  dirt.collider = 'static';
  dirt.tile = 'd';
  dirt.spriteSheet = tilesSheet;
  dirt.width = 16
  dirt.height = 16
  dirt.addAni(
    { w: 16, h: 16, row: 1, col: 0 }
  )

  rock = new Group();
  rock.collider = 'static';
  rock.tile = 'r';
  rock.spriteSheet = tilesSheet;
  rock.width = 16
  rock.height = 16
  rock.addAni(
    { w: 16, h: 16, row: 0, col: 2 }
  )

  underground_rock = new Group();
  underground_rock.collider = 'static';
  underground_rock.tile = 'c';
  underground_rock.spriteSheet = tilesSheet;
  underground_rock.width = 16
  underground_rock.height = 16
  underground_rock.addAni(
    { w: 16, h: 16, row: 1, col: 2 }
  )

  sign = new Group();
  sign.collider = 'none';
  sign.spriteSheet = tilesSheet;
  sign.tile = 's'
  sign.width = 16
  sign.height = 16
  sign.addAni(
    { w: 16, h: 16, row: 3, col: 8 }
  )
  sign.debug = true

  coins = new Group()
  coins.collider = 'none';
  coins.tile = '$';
  coins.spriteSheet = coinSheet;
  coins.width = 16
  coins.height = 16
  coins.addAni(
    { w: 16, h: 16, row: 0, frames: 12 }
  )


  iced_rock = new Group();
  iced_rock.collider = 'static';
  iced_rock.tile = '*';
  iced_rock.spriteSheet = tilesSheet;
  iced_rock.width = 16
  iced_rock.height = 16
  iced_rock.addAni(
    { w: 16, h: 16, row: 0, col: 6 }
  )

  ice = new Group();
  ice.collider = 'static';
  ice.tile = 'i';
  ice.spriteSheet = tilesSheet;
  ice.width = 16
  ice.height = 16
  ice.friction = 0.01
  ice.addAni(
    { w: 16, h: 16, row: 2, col: 6 }
  )

  black_rock = new Group();
  black_rock.collider = 'static';
  black_rock.tile = 'B';
  black_rock.spriteSheet = tilesSheet;
  black_rock.width = 16
  black_rock.height = 16
  black_rock.addAni(
    { w: 16, h: 16, row: 1, col: 6 }
  )

  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true

  goblin = new Sprite(151, 113)
  goblin.width = 10
  goblin.height = 12
  goblin.collider = 'dynamic'
  goblin.spriteSheet = enemySheet
  goblin.rotationLock = true
  goblin.addAnis({
    run: { w: 100, h: 100, row: 1, frames: 8, frameDelay: 40 },
    idle: { w: 100, h: 100, row: 0, frames: 6, frameDelay: 25 },
    attack01: { w: 100, h: 100, row: 2, frames: 6, frameDelay: 5 },
    attack02: { w: 100, h: 100, row: 3, frames: 6, frameDelay: 10 },
    hurt: { w: 100, h: 100, row: 4, frames: 4 },
    death: { w: 100, h: 100, row: 5, frames: 4, frameDelay: 25 }
  })

  goblin.changeAni('run')


  goblinHitbox = new Sprite()
  goblinHitbox.w = 20
  goblinHitbox.h = 10
  goblinHitbox.collider = 'none'
  goblinHitbox.spriteSheet = hitboxSheet
  goblinHitbox.addAni({
    texture: { w: 100, h: 100, row: 0, col: 6, frames: 1 }
  })





  player = new Sprite(3, 96);
  player.width = 10;
  player.height = 12;
  player.bounciness = 0
  player.spriteSheet = characterSheet;
  player.rotationLock = true;
  player.addAnis({
    run: { w: 100, h: 100, row: 1, frames: 8 },
    idle: { w: 100, h: 100, row: 0, frames: 6, frameDelay: 15 },
    attack01: { w: 100, h: 100, row: 2, frames: 6 },
    attack02: { w: 100, h: 100, row: 3, frames: 6 },
    attack03: { w: 100, h: 100, row: 4, frames: 9 },
    hurt: { w: 100, h: 100, row: 5, frames: 4, frameDelay: 5 },
    death: { w: 100, h: 100, row: 6, frames: 4, frameDelay: 30 }
  })
  player.anis.offset.y = 0.5


  player.changeAni('idle')

  bush = new Group();
  bush.collider = 'none';
  bush.tile = 'b';
  bush.spriteSheet = tilesSheet;
  bush.width = 16
  bush.height = 16
  bush.addAni(
    { w: 16, h: 16, row: 5, col: 1 }
  )





  // 3 = red_mushroom
  // 2 = blue_potion
  // 1 = pumpkin
  // n = netherack
  // R = red_rock
  // B = black_rock
  // i = ice
  // * = iced_rock
  // g = grass
  // d = dirt
  // r = rock
  // c = underground_rock
  // s = sign
  // b = bush
  // $ = coins
  tiles = new Tiles(map1,
    0, 0,
    16, 16
  )

  // allSprites.debug = true
}

let canJump = true;
let attack01InProgress = false;
let attack02InProgress = false;
let attack03InProgress = false;
let dir = 0.3
let waiting = false
let score = 0
let carte = 1



async function draw() {
  if (carte = 1){
    background(0, 198, 224)
  } else if(carte = 2) {
    background(0, 31, 184)
  } else if(carte = 3) {
    background(219, 0, 0)
  } else if (carte = 4){
    background(89, 89, 89)
  }


  if (player.dead) {
    gameOver()
    return
  }




  if (player.overlaps(pumpkin)) {
    player.x = 0
    player.y = 0
    carte = 2

    tiles.remove()

    tiles = new Tiles(map2,
      0, 0,
      16, 16
    )
  }

  if (player.overlaps(blue_potion)) {
    player.x = 16
    player.y = -10
    carte = 3

    tiles.remove()

    tiles = new Tiles(map3,
      0, 0,
      16, 16
    )
  }

  if (player.overlaps(red_mushroom)) {
    player.x = 0
    player.y = 0
    carte = 4

    tiles.remove()

    tiles = new Tiles(map4,
      0, 0,
      16, 16
    )
  }



  txt.html('Score: ' + score)

  for (let coin of coins) {
    if (coin.overlaps(player)) {
      coin.remove()
      score = score + 1
    }
  }

  if (kb.presses('w') && canJump == true) {
    player.velocity.y = - 3;
    canJump = false
  }

  if (keyIsDown(68)) {
    player.velocity.x = 1;
    player.mirror.x = false
    player.changeAni('run')
  } else {
    if (player.ani.name !== 'idle' &&
      player.ani.name !== 'attack01' &&
      player.ani.name !== 'attack02' &&
      player.ani.name !== 'attack03' &&
      player.ani.name !== 'hurt' &&
      player.ani.name !== 'dead'
    ) {
      player.changeAni('idle')
    }
  }

  for (let fragilized_netherack of fragilized_netheracks) {
    if (player.collides (fragilized_netherack)) {
      await delay(100)
      fragilized_netherack.collider = 'dynamic'
    }
  }


  if (keyIsDown(65)) {
    player.velocity.x = -1;
    player.mirror.x = true
    player.changeAni('run')
  }

  if (kb.released()) {
    player.changeAni('idle')
  }

  if (player.collides(tiles)) {
    canJump = true
  }
  if (kb.presses('e') && attack01InProgress == false) {
    attack01InProgress = true
    await player.changeAni('attack01')
    player.changeAni('idle')
    attack01InProgress = false
  }
  if (kb.presses('r') && attack02InProgress == false) {
    attack02InProgress = true
    await player.changeAni('attack02')
    player.changeAni('idle')
    attack02InProgress = false
  }
  if (kb.presses('t') && attack03InProgress == false) {
    attack03InProgress = true
    await player.changeAni('attack03')
    player.changeAni('idle')
    attack03InProgress = false
  }

  textFont(pixelOperator)
  textSize(8)
  text('X:' + player.x, 10, 20)
  text('Y:' + player.y, 10, 40)


  // if (player.overlapping(sign)){
  //   textFont(pixelOperator)
  //   textSize(8)  
  //   text('La glace glisse...', canvas.hw, canvas.hh - 16)
  //   console.log ('overlapping')
  //  }
  camera.x = player.x
  camera.y = player.y
  goblinHitbox.x = goblin.x
  goblinHitbox.y = goblin.y

  if (player.y > 2000) {
    player.dead = true
  }


  if (goblinHitbox.overlaps(bush) ||
    goblinHitbox.overlaps(dirt) ||
    goblinHitbox.overlaps(iced_rock)) {
    waiting = true
    await goblin.changeAni('idle')
    goblin.ani.frame = 0
    await goblin.changeAni('idle')
    goblin.ani.frame = 0
    await goblin.changeAni('idle')
    waiting = false
    goblin.changeAni('run')
    if (dir == 0.3) {
      dir = -0.3
      goblin.mirror.x = true
    } else {
      dir = 0.3
      goblin.mirror.x = false
    }
  } else {
    if (waiting == false) {
      goblin.vel.x = dir
    }
  }
}


async function gameOver() {
  background(20)

  goblin.remove()
  tiles.remove()


  textAlign(CENTER)
  fill(255)
  textFont(pixelOperator)
  textSize(8)
  text('GAME OVER', canvas.w / 2, canvas.h / 2)

}