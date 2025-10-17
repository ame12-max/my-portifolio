import { useState, useEffect } from 'react'

export function useTypewriter({ words, loop = true, delay = 100, deleteSpeed = 50 }) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(delay)

  useEffect(() => {
    const currentWord = words[currentIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setSpeed(delay)
        
        if (currentText === currentWord) {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // Deleting
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setSpeed(deleteSpeed)
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, words, delay, deleteSpeed, speed])

  return [currentText]
}
