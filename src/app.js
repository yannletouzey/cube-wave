const form = ["front","right","left","top"]
const main = document.querySelector('main')
const nbrCube = 15

for (let r = 0; r < nbrCube; r++) {
    const row = document.createElement('div')
    row.classList.add('row')
    row.style.animationDelay = 0.2 * r + "s"
    row.classList.add('wave')
    main.append(row)
}

const rows = document.querySelectorAll('.row')
rows.forEach(row => {
    for (let index = 0; index < nbrCube; index++) {
        const cube = document.createElement('div')
        cube.classList.add('cube')
        cube.style.animationDelay = 0.2 * index + "s"
        cube.classList.add('wave')
        row.append(cube)
    }
})

const cubes = document.querySelectorAll('.cube')
cubes.forEach(elt => {
    for (let i = 0; i < form.length; i++) {
        const face = document.createElement('div')
        face.classList.add(`face`)
        face.classList.add(`face__${form[i]}`)
        elt.append(face)
    }
});