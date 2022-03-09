const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 300
canvas.height = innerHeight - 50

class Car {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0
    }
    const image = new Image()
    image.src = './image/redcar.png'
    image.onload = () => {
      this.image = image
      this.width = image.width * 0.05
      this.height = image.height * 0.05
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - 100
      }
    }
  }

  draw() {
    // ctx.fillstyle = 'black'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    if (this.image) {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    }
  }
}

class Pothole {
  constructor() {
    this.velocity = {
      x: 0,
      y: 1
    }

    const image = new Image()
    image.src = './image/pothole.png'
    image.onload = () => {
      this.image = image
      this.width = image.width * 0.15
      this.height = image.height * 0.15
      this.position = {
        x: Math.floor(Math.random() * canvas.width) - 50,
        y: -50
      }
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
  update() {
    if (this.image) {
      this.draw()

      this.position.y += this.velocity.y
    }
  }
}

const car = new Car()
const pothole = new Pothole()

const animate = () => {
  requestAnimationFrame(animate)

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  car.update()
  pothole.update()
}

animate()

addEventListener('keydown', (e) => {
  console.log(e.key)
  switch (e.code) {
    case 'ArrowUp':
      console.log('up')
      if (car.position.y >= 0) {
        car.velocity.y = -10
      }
      break
    case 'ArrowDown':
      if (car.position.y >= canvas.height - 100) return
      console.log('down')
      car.velocity.y = 10
      break
    case 'ArrowLeft':
      console.log('Left')
      if (car.position.x <= 0) return
      car.velocity.x = -10
      break
    case 'ArrowRight':
      console.log('Right')
      if (car.position.x >= canvas.width) return
      car.velocity.x = 10
      break
  }
})

addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      console.log('up')
      if (car.position.y >= canvas.height) return
      car.velocity.y = 0
      break
    case 'ArrowDown':
      console.log('down')
      car.velocity.y = 0
      break
    case 'ArrowLeft':
      console.log('Left')
      car.velocity.x = 0
      break
    case 'ArrowRight':
      console.log('Right')
      car.velocity.x = 0
      break
  }
})
