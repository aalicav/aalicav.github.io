import EventCards from '@/components/EventsCard'
import config from '@/config/config'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Events() {
    return (
        <>
            {/* Event Section */}
            <section id="event" className="min-h-screen relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-20"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-dourado font-sans-modern font-medium mb-2"
                        >
                            Nossa Celebração de Amor
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-serif-elegant text-marrom-claro leading-tight"
                        >
                            Programação Especial
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-marrom-claro font-sans-classic max-w-md mx-auto"
                        >
                            Seria uma honra ter você presente neste momento tão significativo de nossas vidas
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-4 mt-6"
                        >
                            <div className="h-[1px] w-12 bg-dourado" />
                            <div className="text-dourado">
                                <Heart className="w-4 h-4" fill="currentColor" />
                            </div>
                            <div className="h-[1px] w-12 bg-dourado" />
                        </motion.div>
                    </motion.div>

                    {/* Events Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <EventCards events={config.data.agenda} />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}