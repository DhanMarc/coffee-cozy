// Mobile menu
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menuBtn.setAttribute('aria-expanded', open)
})
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')))

// Fade sections in as you scroll
const targets = document.querySelectorAll('.section-head, .split > *, .menu-card, .timeline li, .budget, .partner-card, .faq details')
targets.forEach((el) => el.classList.add('reveal'))
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)
targets.forEach((el) => observer.observe(el))

// Grow the budget bars when they come into view
const bars = document.querySelector('.bars')
if (bars) {
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      bars.classList.add('show')
      obs.disconnect()
    }
  }, { threshold: 0.3 }).observe(bars)
}

// Demo form: show a thank-you message instead of sending
const form = document.getElementById('interest-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  document.getElementById('form-note').hidden = false
  form.reset()
})
