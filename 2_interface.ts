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

const rectangle3 = {} as Rect // Пока массив пустой, но позже он должен соответсвовать типу Rect

// ==================
interface RectWithArea extends Rect {
  getArea: () => number
}

const rectangle4: RectWithArea = {
  id: '125',
  size: {
    width: 20,
    height: 30,
  },
  getArea() {
    return this.size.width * this.size.height
  },
}

//  ===============

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// ==============

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid red',
  marginTop: '20px',
}
