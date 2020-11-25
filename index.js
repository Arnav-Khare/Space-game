
async function loadImages(path)
    {
        return new Promise((resolve) => {
            const img = new Image() ;
            img.src = './assets/'+path
            img.onload = ()=> {
                resolve(img)
            }
            
        })
    }
function createEnemies (ctx,canvas,enemyImg) {
    const START_X = (canvas.width - (5 * 98)) / 2
    const STOP_X = START_X + ((5*98))
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 15; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
}

window.onload = async () => {
	 canvas = document.getElementById('mycanvas');
	 ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    // TODO draw black background
    const hero = await loadImages('player.png');
    const enemyImg = await loadImages('enemyShip.png')
    console.log(hero)
    // TODO draw hero
    ctx.drawImage(hero,canvas.width /2 - 45,canvas.height-(canvas.height/7-45))
	// TODO uncomment the next line when you add enemies to screen
	createEnemies(ctx, canvas, enemyImg);
};