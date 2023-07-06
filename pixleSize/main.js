const rh = document.querySelector('.horizontal')
const rv = document.querySelector('.vertical')

let x = 150

let some = `
<div class="h">
    <p>--</p>
</div>
<div class="h">
    <p>-----</p>
    <p class="p">50</p>
</div>
`
let other = `

`

for (let i = 0; i < 30; i++) {
    const d = document.createElement('div')
    d.classList.add('h')
    const dp = document.createElement('p')
    dp.innerHTML = "I"
    d.appendChild(dp)
    rh.appendChild(d)
    const a = document.createElement('div')
    a.classList.add('h')
    a.innerHTML = `
    <p>|<br>|</p>
    <p class="p">${x}</p>
    `
    rh.appendChild(a)

    const k = document.createElement('div')
    k.classList.add('h')
    const kp = document.createElement('p')
    kp.innerHTML = "--"
    k.appendChild(kp)
    rv.appendChild(k)
    const w = document.createElement('div')
    w.classList.add('h')
    w.innerHTML = `
    <p>-----</p>
    <p class="p">${x}</p>
    `
    rv.appendChild(w)

    
    x += 50
}