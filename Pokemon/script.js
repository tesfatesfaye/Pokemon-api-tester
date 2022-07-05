const base='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container=document.querySelector("#container")
container.classList.add('fle')

for(let i=1;i<152;i++){
const newfig=document.createElement('figure')
const newImg=document.createElement('img')
const newcap=document.createElement('figcaption')
newfig.append(newImg)
newImg.src=`${base}${i}.png`
newfig.append(newcap)
newcap.append(`#${i}`)
newcap.classList.add('centers')
container.append(newfig)
}


