function add(a: number, b: number): number {
  return a + b
}

function sole(item: string): string {
  return item.trim().toLowerCase().length.toString()
}

// ===============

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWidthDef extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWidthDef
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number): MyPosition | MyPositionWidthDef {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }

  return { x: a, y: b }
}
