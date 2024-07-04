let map1 =
[
  '            $$$                s ',
  'g gg   ggg       gggg  gg  g  gg ',
  'd   $       ggg   dd             ',
  '    ggg                         p',
  '               g$$      ggg   ggg',
  'gg        b   gggg  gg           ',
  '   $$$  gggg     d       s    ggg',
  '   ggd  b     d         gg       ',
  'gggdddggggggggd$$$ggggggggg  gggg',
  'dddddddddddddddgggddddddddd  $ddd',
  'ddddddddddddddddddddddddddd  dddd',
]



function preload() {
  hitboxSheet = loadImage('Assets/Orc/Orc/Orc.png')
  enemySheet = loadImage('Assets/Orc/Orc/Orc.png')
  characterSheet = loadImage('Assets/Soldier/Soldier/Soldier.png');
  tilesSheet = loadImage('Assets/sprites/world_tileset.png')
  fontText = loadFont('Assets/fonts/PixelOperator8.ttf')
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

  txt=createDiv('')
  txt.style('font-size', '75px')
  txt.position(20, 10)
  
  
  textFont(fontText)
  
  portail = new Group()
  portail.collider = 'static'
  portail.tile = 'p'
  portail.spriteSheet = portailSheet
  portail.width = 32
  portail.height = 32
  
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
  sign.tile = 's';
  sign.spriteSheet = tilesSheet;
  sign.width = 16
  sign.height = 16
  sign.addAni(
    { w: 16, h: 16, row: 4, col: 8 }
  )

  coins = new Group();
  coins.collider = 'none';
  coins.tile = '$';
  coins.spriteSheet = coinSheet;
  coins.width = 16
  coins.height = 16
  coins.addAni(
    { w: 16, h: 16, row: 0, frames: 12}
  )


  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true;

  goblin = new Sprite(151, 113)
  goblin.width = 10
  goblin.height = 12
  goblin.collider = 'dynamic'
  goblin.spriteSheet = enemySheet
  goblin.rotationLock = true
  goblin.addAnis({
    run: {w: 100, h:100, row:1, frames: 8, frameDelay: 40},
    idle: {w: 100, h: 100, row:0, frames:6, frameDelay: 25},
    attack01: { w: 100, h: 100, row: 2, frames: 6, frameDelay: 5 },
    attack02: { w: 100, h: 100, row: 3, frames: 6, frameDelay: 10 },
    hurt: { w: 100, h: 100, row: 4, frames: 4},
    death: { w: 100, h: 100, row: 5, frames: 4, frameDelay: 25}
  })

  goblin.changeAni('run')


  goblinHitbox = new Sprite()
  goblinHitbox.w = 20
  goblinHitbox.h = 10
  goblinHitbox.collider = 'none'
  goblinHitbox.spriteSheet = hitboxSheet
  goblinHitbox.addAni({
    texture: {w:100, h: 100, row: 0, col: 6, frames: 1}
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
  

  // t = black rock
  // i = ice
  // * = iced_rock
  // g = grass
  // d = dirt
  // r = rock
  // c = underground_rock
  // s = sign
  // b = bush
  // $ = coins
  new Tiles(
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
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



async function draw() {
  background(51);

 txt.html('Score: ' +score)
 
  for (let coin of coins) {
    if(coin.overlaps(player)) {
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
    if(player.ani.name !== 'idle' &&
       player.ani.name !== 'attack01'&&
       player.ani.name !== 'attack02'&&
       player.ani.name !== 'attack03'&&
       player.ani.name !== 'hurt'&&
       player.ani.name !== 'dead'
    )
    {
      player.changeAni('idle')
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

  if (player.collides(grass)) {
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

  // textFont(fontText)
  // //textSize(9)
  // text('X:' + player.x, 10, 20)
  // text('Y:' + player.y, 10, 40)

  camera.x = player.x
  camera.y = player.y
  goblinHitbox.x = goblin.x
  goblinHitbox.y = goblin.y


  if(goblinHitbox.overlaps(bush) || goblinHitbox.overlaps(dirt)){
    waiting = true
    await goblin.changeAni('idle')
    goblin.ani.frame = 0
    await goblin.changeAni('idle')
    goblin.ani.frame = 0
    await goblin.changeAni('idle')
    waiting = false
    goblin.changeAni('run')
    if(dir == 0.3){
      dir = -0.3
      goblin.mirror.x = true
    } else {
      dir = 0.3
      goblin.mirror.x = false
    }
  } else {
    if (waiting == false){
      goblin.vel.x = dir
  }
}
}