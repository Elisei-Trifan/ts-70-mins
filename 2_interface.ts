interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rectangle1: Rect = {
  id: '123',
  size: {
    width: 20,
    height: 30,
  },
}
const rectangle2: Rect = {
  id: '123',
  size: {
    width: 20,
    height: 30,
  },
  color: 'red',
}

rectangle1.color = 'green'
