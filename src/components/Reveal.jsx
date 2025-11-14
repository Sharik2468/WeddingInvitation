import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0.1,
  amount = 0.5,
  once = false,
  margin = '0px',
  exitOnLeave = true,
  className = '',
  style = {}
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount, once, margin })

  const [hasEntered, setHasEntered] = useState(false)
  useEffect(() => {
    if (inView) setHasEntered(true)
  }, [inView])

  const shouldShow = exitOnLeave ? inView : hasEntered

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={shouldShow ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
    >
      {children}
    </motion.div>
  )
}


