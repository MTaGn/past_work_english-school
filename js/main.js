/* ----------
  mask
------------ */ 
const humbergerElem  = document.querySelector(".header-container__humberger")
const navContainerElem = document.querySelector(".header-container__nav-container")
const maskElem = document.querySelector(".mask")
const closeBtnElem = document.querySelector(".close")

humbergerElem.addEventListener("click", () => {
  navContainerElem.classList.add("show")
  maskElem.classList.add("show")
})

navContainerElem.addEventListener("click", () => {
  navContainerElem.classList.remove("show")
  maskElem.classList.remove ("show")
})

/* ----------
  reason fadeIn
------------ */
// 選ばれる理由 fadeIn
// 監視対象
let targets = document.querySelectorAll(".reason")

// Intersection Observer API で使用するoptions
const reasonOptions = {
  rootMargin: '0px 0px',
  threshold: 1.0,
}

let reasonObserver = new IntersectionObserver(addSlideClass, reasonOptions)

// .reasonの数分監視
targets.forEach(target => {
  reasonObserver.observe(target)
})

// viewportに入った際の処理
function addSlideClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let targetClassName = entry.target.className
      // クラス付与
      if (targetClassName.indexOf("first-reason") !== -1) {
        entry.target.classList.add("slide-left")
      } else if (targetClassName.indexOf("second-reason") !== -1) {
        entry.target.classList.add("slide-right")
      }
    }
  })
}

/* ----------
  opinion ballon
------------ */
// 監視対象
const opinionCtTargets = document.querySelectorAll(".opinion-container_lr") 

// Intersection Observer API で使用するoptions
const opinionOptions = {
  rootMargin: '0px 0px',
  threshold: 1.0,
}

let opinionObserver = new IntersectionObserver(addBallonClass, opinionOptions)

// opinion-container_lrの数分監視
opinionCtTargets.forEach(opinionCtTarget => {
  opinionObserver.observe(opinionCtTarget)
})

// viewportに入った際の処理
function addBallonClass(entries) {
  console.log("test1")
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("test2")
      // let targetClassName = entry.target.className
      // クラス付与
      // if (targetClassName.indexOf("first-reason") !== -1) {
        entry.target.classList.add("ballon")
      // } else if (targetClassName.indexOf("second-reason") !== -1) {
        // entry.target.classList.add("slide-right")
      // }
    }
  })
}