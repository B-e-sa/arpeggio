import logo from '/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div
                key='loader'
                id='loader'
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
            >
                <h1>Arpeggio</h1>
                <img src={logo} alt='loader icon' />
            </motion.div>
        </AnimatePresence>
    )
}

export default Loader