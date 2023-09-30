document.addEventListener('DOMContentLoaded', function () {
  const getNode = (node) => document.querySelector(node)

  const nav_one = getNode('#nav_one')
  const nav_two = getNode('#nav_two')
  const nav_three = getNode('#nav_three')
  const nav_four = getNode('#nav_four')
  const nav_brand = getNode('#nav_brand')
  const modal = getNode('.modal')
  const modalStyle = window.getComputedStyle(modal)
  const closeModalBtn = getNode('.close-modal')

  const slider = getNode('.slider')
  const prevBtn = getNode('#prevBtn')
  const nextBtn = getNode('#nextBtn')

  const navigator = getNode('.nav_holder')
  const navs = getNode('.navs')
  const navsStyle = window.getComputedStyle(navs)

  let currentIndex = 0
  let hideImage = window.innerWidth > 768 ? true : false

  function showSlide(index) {
    const screenSize = window.innerWidth
    if (screenSize < 768) {
      slider.style.transform = `translateX(-${index * 100}%)`
    }
  }

  function autoScroll() {
    currentIndex = (currentIndex + 1) % 4
    showSlide(currentIndex)
  }

  setTimeout(() => {
    nav_brand.textContent = 'Coding . . .'
  }, 10000)
  setInterval(autoScroll, 3000)

  nav_brand.addEventListener('click', () => {
    if (navsStyle.display === 'block') navs.style.display = 'none'
    modal.style.display = 'block'
  })
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0)
    showSlide(currentIndex)
  })

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, 3)
    showSlide(currentIndex)
  })

  navigator.addEventListener('click', () => {
    if (navsStyle.display === 'none') {
      if (modalStyle.display === 'block') {
        modal.style.display = 'none'
      }
      navs.style.display = 'block'
      return
    }
    navs.style.display = 'none'
    return
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      clearInterval(autoScroll)
      slider.style.transform = `translateX(0)`
      navs.removeAttribute('style')
      return
    }
  })

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const navItems = [nav_one, nav_two, nav_three, nav_four]

    navItems.forEach((navItem) => navItem.classList.remove('active_nav'))

    if (scrollPosition < 300) {
      // navigator.style.display = 'none'
    } else if (scrollPosition < 800) {
      navItems[0].classList.add('active_nav')
    } else if (scrollPosition < 1700) {
      navItems[1].classList.add('active_nav')
    } else if (scrollPosition < 2400) {
      navItems[2].classList.add('active_nav')
    } else {
      navItems[3].classList.add('active_nav')
    }
  })
})
