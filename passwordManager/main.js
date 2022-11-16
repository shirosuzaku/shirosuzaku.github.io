const accountlist = document.querySelector(".listbox")
const copy = document.querySelectorAll('.copy')
const dispAcc = document.getElementById('acc')
const dispName = document.getElementById('name')
const dispPass = document.getElementById('pss')

const addbtn = document.getElementById('incert')

let data = []
console.log(window.localStorage.pass02)
if (window.localStorage.getItem('pass02') != null){
    data = JSON.parse(window.localStorage.getItem('pass02'))
    console.log(data)
    data.forEach((element,index) => {
        createData(element.account,element.userName,element.password,element.badge,index)
    });
}

accountlist.childNodes.forEach( account => {
    account.addEventListener('mouseenter',e=>{
        setDetails(e.target.id)
    })

    account.addEventListener('click',e=>{
        // console.log(e)
        // Delete
        if(confirm("delete currunt accoutn") == true){
            console.log(e.path[1].id)
            data.splice(e.path[1].id,1)
            window.localStorage.setItem('pass02',JSON.stringify(data))
            location.reload()
        }
    })
});



addbtn.addEventListener('click',(e)=>{
    console.table(e.path[1].children[0].value)
    incertData(
        e.path[1].children[0].value,
        e.path[1].children[1].value,
        e.path[1].children[2].value,
        e.path[1].children[3].value,
        )
    location.reload()
})

function setDetails(code) {
    let detaildata = data[code]
    dispAcc.innerHTML = detaildata.account
    dispName.innerHTML = detaildata.userName
    dispPass.innerHTML = detaildata.password

}

function incertData(acc,names,password,clr) {
    let temp = document.createElement('div')
    temp.classList.add('accounts')
    temp.id = data.length
    temp.innerHTML = `
    <p>${clr}</p>
    <p>${acc}</p>
    <button id="delete">✖️</button>
    `

    data.push({
        account: acc,
        userName: names,
        password: password,
        badge: clr
    })
    accountlist.appendChild(temp)

    window.localStorage.setItem('pass02',JSON.stringify(data))
    console.log(data)
}

function createData(acc,names,password,clr,i) {
    let temp = document.createElement('div')
    temp.classList.add('accounts')
    temp.id = i
    temp.innerHTML = `
    <p>${clr}</p>
    <p>${acc}</p>
    <button id="delete">✖️</button>
    `
    accountlist.appendChild(temp)
}