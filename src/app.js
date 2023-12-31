const form = ["front","right","left","top"]
const main = document.querySelector('main')

for (let r = 0; r < 20; r++) {
    const row = document.createElement('div')
    row.classList.add('row')
    row.style.animationDelay = 0.2 * r + "s"
    row.classList.add('wave-rowX')
    main.append(row)
}

const rows = document.querySelectorAll('.row')
rows.forEach(row => {
    for (let index = 0; index < 20; index++) {
        const cube = document.createElement('div')
        cube.classList.add('cube')
        cube.style.animationDelay = 0.2 * index + "s"
        cube.classList.add('wave-cubeY')
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