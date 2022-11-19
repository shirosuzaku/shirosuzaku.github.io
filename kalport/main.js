const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click',e=>{

    let arr = document.querySelectorAll('.proj')

    for (let i = 0; i < arr.length; i++) {
        const prj = arr[i];
        
        if(prj.classList.contains('active')){
        
            prj.classList.add('off')
            prj.classList.remove('active')
        
            if(i == arr.length -1 ){
                console.log(arr[0])
                arr[0].classList.add('active')
                arr[0].classList.remove('off')
            }else{
                arr[i + 1].classList.add('active')
                arr[i + 1].classList.remove('off')
            }
            // e.path[0].previousElementSibling.innerText = ` ${i + 1} / ${arr.length} `
            
            break
        }
    }

})

prev.addEventListener('click',e=>{

    let arr = document.querySelectorAll('.proj')

    for (let i = 0; i < arr.length; i++) {
        const prj = arr[i];
        
        if(prj.classList.contains('active')){
        
            prj.classList.add('off')
            prj.classList.remove('active')
        
            console.log("-+-+-+", i)

            if(i == 0 ){
                // console.log(arr[0])
                let y = arr.length - 1
                arr[y].classList.add('active')
                arr[y].classList.remove('off')
            }else{
                arr[i - 1].classList.add('active')
                arr[i - 1].classList.remove('off')
            }
        
            // e.path[0].previousElementSibling.innerText = ` ${i + 1} / ${arr.length} `

            break
        }
    }

})