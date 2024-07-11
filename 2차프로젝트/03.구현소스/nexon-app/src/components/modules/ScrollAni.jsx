import React from 'react';
import {motion} from "framer-motion";
import Tab from './Tab';

function ScrollAni(props) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                y: { duration: 1 },
            }}>
            <Tab/>
        </motion.div>
    );
}

export default ScrollAni;