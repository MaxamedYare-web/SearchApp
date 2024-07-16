let PositionSearch = document.getElementById("PositionSearch")
let title = document.getElementById("title")
let search = document.getElementById("search")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let search2 = document.getElementById("search2")
const localTitle = () => {
    let arrM;
    if (localStorage.getItem("storage") === null) {
        arrM = []
    } else {
        arrM = JSON.parse(localStorage.getItem("storage"))

    }
    arrM.forEach(ar => {
        title.innerHTML = `
       <h2 id="title">${ar}</h2>
       `
        if (search2.value === null) {
            let h3 = document.querySelector("h3")
            h3.style.display = "block"
            setTimeout(() => {
                h3.style.display = "none"
            }, 3000)
        } else {
            
            btn2.addEventListener("click", () => {
                let search2 = document.getElementById("search2").value
              if(search2.length < 0){
                let h3 = document.querySelector("h3")
                h3.style.display = "block"
                setTimeout(() => {
                    h3.style.display = "none"
                }, 3000)
                return
              }else{
                let indexH2 = title.textContent
                let trim1 = indexH2.trim()
            let index9 = trim1.search(`${search2}`)
            // let span = document.querySelector("span")
            // span.innerHTML = index9
            PositionSearch.innerHTML = `
            <p id="PositionSearch">The Searching Position of <span> ${search2} </span> is: <span>${index9}</span> </p>
            `
        
              }
             
                // console.log(`the index is ${index9}`)
            })
        }
    })

}


    document.addEventListener("DOMContentLoaded", localTitle)

    const addToLocalStorage = (item) => {

        let arrM;
        if (localStorage.getItem("storage") === null) {
            arrM = []
        } else {
            arrM = JSON.parse(localStorage.getItem("storage"))

        }
        arrM.push(item)
        localStorage.setItem("storage", JSON.stringify(arrM))

    }

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        if (search.value === "") {
            let h3 = document.querySelector("h3")
            h3.style.display = "block"
            setTimeout(() => {
                h3.style.display = "none"
            }, 3000)
        } else {
            title.innerHTML = search.value
            addToLocalStorage(search.value)
            search.value = ""

            // if (title.textContent === null) {
            //     let h3 = document.querySelector("h3")
            //     h3.style.display = "block"
            //     setTimeout(() => {
            //         h3.style.display = "none"
            //     }, 3000)
            // } else {
            //     let indexH2 = title.textContent
            //     let index = indexH2.search(`${search2}`)
            //     btn2.addEventListener("click", () => {
            //         console.log(`the index is ${index}`)
            //     })
            // }

        }

    })

