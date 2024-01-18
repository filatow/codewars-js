function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    const coords = {x: 0, y: 0}
    const moving = {
        s: () => coords.y -= 1,
        n: () => coords.y += 1,
        w: () => coords.x -= 1,
        e: () => coords.x += 1,
    }
    walk.forEach((step) => moving[step]())
    return coords.x === 0 && coords.y === 0
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))