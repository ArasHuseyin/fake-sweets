import { useEffect } from 'react'

// Fügt allen .reveal-Elementen beim Scrollen die Klasse .is-visible hinzu
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 80}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}
