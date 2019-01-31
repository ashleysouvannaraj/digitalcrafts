// you vs dragon
// beginning of the game, you equip a weapon
// weapons are magical & can be ice, fire, or lightening

// beginning of game, random dragon will show up
// & dragon will have a type.. ice, fire, or lightening

// hero & dragon will take turns attacking each other
// attack damage depends on type of weapon & type of dragon

// hero & dragon have HP 100 & 120 respectively

// BONUS: implement critical hits

var types = ['fire', 'ice', 'lightening'];

var state = {
    player: {
        hp: 100,
        weaponType: null
    },
    dragon: {
        hp: 120,
        dragonType: types[ Math.floor(Math.random() * 3 ) ]
    },
    playerNeedsToPickWeapon: true,
    isGameOver: false
}

function renderGame() {
    var gameHTML = `
        <h1>this is a game</h1>
    `

    if (state.playerNeedsToPickWeapon) {
        gameHTML = renderPickWeaponsScreen();
    } else if (!state.isGameOver) {
        gameHTML = renderAttackScreen();
    } else {
        gameHTML = renderGameOverScreen();
    }

    document.getElementById('game').innerHTML = gameHTML;
}

renderGame();


function pickWeapon(type) {
    console.log('picking a weapon')

    state.player.weaponType = type;
    state.playerNeedsToPickWeapon = false;

    renderGame();
}

function renderPickWeaponsScreen() {
    var weaponScreenHTML = `
        <p>Choose your weapon</p>
        <button onclick="pickWeapon('ice')">Ice</button>
        <button onclick="pickWeapon('fire')">fire</button>
        <button onclick="pickWeapon('lightening')">lightening</button>
    `;

    return weaponScreenHTML;
}

function attack() {


    if (state.player.weaponType == "fire") {
        if (state.dragon.dragonType == "fire") {
            state.player.hp -= 20;
            state.dragon.hp -= 20;
        } else if (state.dragon.dragonType == "ice") {
            state.player.hp -= 10;
            state.dragon.hp -= 30;
        } else if (state.dragon.dragonType == "lightening") {
            state.player.hp -= 30;
            state.dragon.hp -= 10;
        }
    } else if (state.player.weaponType == "ice") {
        if (state.dragon.dragonType == "fire") {
            state.player.hp -= 30;
            state.dragon.hp -= 10;
        } else if (state.dragon.dragonType == "ice") {
            state.player.hp -= 20;
            state.dragon.hp -= 20;
        } else if (state.dragon.dragonType == "lightening") {
            state.player.hp -= 10;
            state.dragon.hp -= 30;
        }
    } else if (state.player.weaponType == "lightening") {
        if (state.dragon.dragonType == "fire") {
            state.player.hp -= 10;
            state.dragon.hp -= 30;
        } else if (state.dragon.dragonType == "ice") {
            state.player.hp -= 30;
            state.dragon.hp -= 10;
        } else if (state.dragon.dragonType == "lightening") {
            state.player.hp -= 20;
            state.dragon.hp -= 20;
        }
    }

    if (Math.random() >= 0.9) {
        state.dragon.hp -= 10;
    }

    if (state.player.hp <= 0 || state.dragon.hp <= 0) {
        state.isGameOver = true;
    }
    renderGame();
}

function renderAttackScreen() {
    var attackScreenHTML = `
        <h1> PLAYER </h1>
        <p> Weapon Type: ${state.player.weaponType}</p>
        <p> Health: ${state.player.hp}</p>
        <h1> DRAGON </h1>
        <p> Type: ${state.dragon.dragonType}<p>
        <p>Health: ${state.dragon.hp}</p>
        <button onclick= "attack()"> ATTACK </button>
    `
    return attackScreenHTML;

}

function renderGameOverScreen() {

    if (state.dragon.hp <= 0) {
        gameOverScreenHTML = '<p>Game over, you win!!!</p>'
    } else if (state.player.hp <= 0) {
        gameOverScreenHTML = '<p>Game over, you lost :( </p>'
    }

    return gameOverScreenHTML;
}