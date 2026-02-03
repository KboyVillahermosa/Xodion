import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MousePointer2, Accessibility } from 'lucide-react';

const avatars = [
    { name: 'Cyra', color: '#8B5CF6', x: '15%', y: '20%', delay: 0, showOnMobile: false },
    { name: 'Jeverlyn', color: '#3B82F6', x: '25%', y: '10%', delay: 1.2, showOnMobile: false },
    { name: 'Chaiter', color: '#F97316', x: '10%', y: '60%', delay: 0.5, showOnMobile: false },
    { name: 'Cyrhil', color: '#D946EF', x: '15%', y: '85%', delay: 2, showOnMobile: false },
    { name: 'Aljin', color: '#10B981', x: '25%', y: '85%', delay: 1.5, showOnMobile: false },
    { name: 'Albert', color: '#EF4444', x: '80%', y: '25%', delay: 0.8, showOnMobile: false },
    { name: 'Roy', color: '#22C55E', x: '90%', y: '35%', delay: 2.5, showOnMobile: false },
    { name: 'Kboy', color: '#EC4899', x: '80%', y: '80%', delay: 1.8, showOnMobile: false },
    { name: 'Vince', color: '#8B5CF6', x: '90%', y: '90%', delay: 0.3, showOnMobile: false },
    { name: 'You', color: '#0EA5E9', x: '52%', y: '55%', delay: 0, showOnMobile: true }
];

// Specialized Avatar that follows a motion value (Tether) OR just floats if no parent
const AdaptableAvatar = ({
    data,
    parentX,
    parentY,
    offsetY = 0,
    offsetX = 0
}: {
    data: typeof avatars[0],
    parentX?: any,
    parentY?: any,
    offsetY?: number,
    offsetX?: number
}) => {
    // Spring physics for tether
    const springConfig = { stiffness: 50, damping: 15, mass: 1 };

    // Tether logic + manual offsets (like for 'You' button alignment)
    const x = parentX ? useSpring(useTransform(parentX, (v: number) => v + offsetX), springConfig) : 0;
    const y = parentY ? useSpring(useTransform(parentY, (v: number) => v + offsetY), springConfig) : 0;

    return (
        <motion.div
            // Use Tailwind class to handle visibility: "You" is flex on all, others hidden until LG
            className={`absolute z-30 pointer-events-none flex-col drops-shadow ${data.showOnMobile ? 'flex' : 'hidden lg:flex'}`}
            style={{ left: data.x, top: data.y, x, y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{ delay: 0.2 }}
        >
            <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: data.delay
                }}
            >
                <MousePointer2
                    className="drop-shadow-md"
                    fill={data.color}
                    color={data.color}
                    size={24}
                />
                <span
                    className="mt-1 ml-3 px-2 py-1 rounded-xl text-white text-xs font-semibold shadow-sm whitespace-nowrap block w-max"
                    style={{ backgroundColor: data.color }}
                >
                    {data.name}
                </span>
            </motion.div>
        </motion.div>
    );
};

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    // Motion values to track card positions
    const leftX = useMotionValue(0);
    const leftY = useMotionValue(0);

    const centerX = useMotionValue(0);
    const centerY = useMotionValue(0);

    const rightX = useMotionValue(0);
    const rightY = useMotionValue(0);

    // Refs for direct DOM manipulation (Performance critical)
    const pathLeftRef = useRef<SVGPathElement>(null);
    const pathRightRef = useRef<SVGPathElement>(null);

    // Function to calculate and update connector paths directly
    const updatePaths = useCallback(() => {
        if (!containerRef.current || !centerRef.current || !leftRef.current || !rightRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const centerRect = centerRef.current.getBoundingClientRect();
        const leftRect = leftRef.current.getBoundingClientRect();
        const rightRect = rightRef.current.getBoundingClientRect();

        // Calculate relative coordinates
        const getRelative = (rect: DOMRect, x: 'left' | 'right') => ({
            x: (x === 'left' ? rect.left : rect.right) - containerRect.left,
            y: (rect.top + rect.height / 2) - containerRect.top
        });

        // --- Center to Left Path ---
        const startLeft = getRelative(centerRect, 'left');
        const endLeft = getRelative(leftRect, 'right');
        const curvature = 100;

        const dLeft = `M ${startLeft.x} ${startLeft.y} C ${startLeft.x - curvature} ${startLeft.y}, ${endLeft.x + curvature} ${endLeft.y}, ${endLeft.x} ${endLeft.y}`;

        if (pathLeftRef.current) {
            pathLeftRef.current.setAttribute('d', dLeft);
        }

        // --- Center to Right Path ---
        const startRight = getRelative(centerRect, 'right');
        const endRight = getRelative(rightRect, 'left');

        const dRight = `M ${startRight.x} ${startRight.y} C ${startRight.x + curvature} ${startRight.y}, ${endRight.x - curvature} ${endRight.y}, ${endRight.x} ${endRight.y}`;

        if (pathRightRef.current) {
            pathRightRef.current.setAttribute('d', dRight);
        }
    }, []);

    // Initial setup
    useEffect(() => {
        updatePaths();
        window.addEventListener('resize', updatePaths);
        const resizeObserver = new ResizeObserver(updatePaths);
        if (containerRef.current) resizeObserver.observe(containerRef.current);
        const timer = setTimeout(updatePaths, 100);
        return () => {
            window.removeEventListener('resize', updatePaths);
            resizeObserver.disconnect();
            clearTimeout(timer);
        };
    }, [updatePaths]);

    // Determines which card triggers which avatar
    const getParentMotion = (name: string) => {
        // Left Card Group
        if (['Cyra', 'Jeverlyn'].includes(name)) return { x: leftX, y: leftY, offsetX: 0, offsetY: 0 };
        if (['Albert', 'Roy'].includes(name)) return { x: rightX, y: rightY, offsetX: 0, offsetY: 0 };
        if (['You'].includes(name)) return { x: centerX, y: centerY, offsetX: 20, offsetY: 250 };

        return { x: undefined, y: undefined, offsetX: 0, offsetY: 0 };
    };

    return (
        <section className="relative min-h-[600px] lg:min-h-screen pt-20 flex items-start lg:items-center justify-center overflow-hidden bg-dot-pattern">
            <div ref={containerRef} className="relative w-full max-w-[1400px] h-full flex items-start lg:items-center justify-center pt-10 pb-20 lg:py-0">

                {/* Connecting Lines SVG - Hidden on mobile/tablet since side cards are hidden */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#64748B" />
                        </marker>
                        <marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4">
                            <circle cx="4" cy="4" r="3" fill="white" stroke="#64748B" strokeWidth="2" />
                        </marker>
                    </defs>

                    <path ref={pathLeftRef} stroke="#64748B" strokeWidth="2" fill="none" markerStart="url(#circle)" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                    <path ref={pathRightRef} stroke="#64748B" strokeWidth="2" fill="none" markerStart="url(#circle)" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                </svg>

                {/* --- Avatars with Hybrid Placement/Tethering --- */}
                {avatars.map((av) => {
                    const { x, y, offsetX, offsetY } = getParentMotion(av.name);
                    return (
                        <AdaptableAvatar
                            key={av.name}
                            data={av}
                            parentX={x}
                            parentY={y}
                            offsetX={offsetX}
                            offsetY={offsetY}
                        />
                    );
                })}


                {/* --- Left Card: Experts --- */}
                <div className="absolute left-[5%] top-[25%] hidden lg:block z-10 w-72">
                    <motion.div
                        ref={leftRef}
                        drag
                        dragConstraints={containerRef}
                        onDrag={updatePaths}
                        onAnimationComplete={updatePaths}
                        style={{ x: leftX, y: leftY }} // Bind motion values
                        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 cursor-grab active:cursor-grabbing"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Experts and Specialists</h4>
                        <div className="flex flex-col gap-8">
                            {/* PHP */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP" className="h-10 w-auto" />
                                </div>
                                <span className="text-xl font-bold text-[#777BB3]">PHP Libraries</span>
                            </div>

                            {/* React */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="h-10 w-auto" />
                                </div>
                                <span className="text-xl font-bold text-[#61DAFB]">ReactJS</span>
                            </div>

                            {/* Web Accessibility */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                                    <Accessibility className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-xl font-bold text-[#1e3a8a]">Web Accessibility</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- MAIN CENTER CARD --- */}
                <div className="relative z-20 max-w-3xl mx-4">
                    <motion.div
                        ref={centerRef}
                        drag
                        dragConstraints={containerRef}
                        onDrag={updatePaths}
                        onAnimationComplete={updatePaths}
                        style={{ x: centerX, y: centerY }}
                        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                        className="bg-blue-50/50 backdrop-blur-sm p-6 md:p-16 text-center mt-8 rounded-[2rem] border border-sky-100 shadow-[0_0_0_1px_rgba(255,255,255,0.5)] shadow-2xl cursor-grab active:cursor-grabbing"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-8">
                            {/* Avatars row */}
                            {[
                                '/ceoprofile.png',
                                '/ctoprofile.png',
                                '/cmo.png',
                                '/head-developer.png',
                                '/philip.png'
                            ].map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt="Team Member"
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white -ml-3 first:ml-0 object-cover bg-gray-100"
                                />
                            ))}
                        </div>

                        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-gray-900 leading-tight">
                            Human focused <br />
                            <span className="text-indigo-600">websites for</span> <br />
                            forward thinking <br />
                            organisations
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 mb-10">
                            Accessible digital experiences built to grow <br className="hidden md:block" />
                            and deliver results to your business
                        </p>

                        <button className="bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
                            Talk to an expert today
                        </button>
                    </motion.div>
                </div>

                {/* --- Right Card: Performance --- */}
                <div className="absolute right-[5%] top-[40%] hidden lg:block z-10 w-72">
                    <motion.div
                        ref={rightRef}
                        drag
                        dragConstraints={containerRef}
                        onDrag={updatePaths}
                        onAnimationComplete={updatePaths}
                        style={{ x: rightX, y: rightY }} // Bind motion values
                        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 cursor-grab active:cursor-grabbing"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Speed and Performance</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {['Performance', 'Accessibility', 'Best Practices', 'SEO'].map((stat) => (
                                <div key={stat} className="text-center">
                                    <div className="w-12 h-12 rounded-full border-[3px] border-green-500 text-green-500 flex items-center justify-center font-bold mx-auto mb-2">
                                        100
                                    </div>
                                    <span className="text-xs font-semibold text-gray-900">{stat}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
