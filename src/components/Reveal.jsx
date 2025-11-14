import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0.1,
  amount = 0.5,
  once = false,
  className = '',
  style = {}
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount, once })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
    >
      {children}
    </motion.div>
  )
}


