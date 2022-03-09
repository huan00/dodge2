const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 300
canvas.height = innerHeight - 50

class Car {
  constructor() {
    this.position = {
      x: 300,
      y: 500
    }

    this.velocity = {
      x: 0,
      y: 0
    }
    const image = new Image()
    image.src = './image/redcar.png'

    this.image = image
    this.width = 150
    this.height = 150
  }

  draw() {
    // ctx.fillstyle = 'black'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.draw()
  }
}

const car = new Car()
car.draw()

const animate = () => {
  requestAnimationFrame(animate)
  car.draw()
  console.log('hello')
}

animate()
