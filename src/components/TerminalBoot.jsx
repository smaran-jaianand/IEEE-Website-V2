import { useState, useEffect, useRef } from 'react';

const TerminalBoot = ({ onFinish }) => {
    // Phases: 'BIOS', 'BOOTING', 'COMPLETE'
    const [phase, setPhase] = useState('BIOS');
    const [selectedOption, setSelectedOption] = useState(0);
    const [logs, setLogs] = useState([]);
    const bottomRef = useRef(null);

    const options = [
        { label: 'BOOT SYSTEM', action: 'boot' },
        { label: 'SKIP BOOT', action: 'skip' },
        { label: 'EXIT TERMINAL', action: 'exit' },
        { label: 'CREDITS / SOCIALS', action: 'credits' }
    ];

    // Boot logs data with types and delays
    const bootSequence = [
        { text: "Initializing IEEE-SIT Core Systems...", delay: 200 },
        { text: "Loading kernel modules.................... [OK]", delay: 150 },
        { text: "Checking memory integrity................. [OK]", delay: 150 },
        { text: "Spinning up server hamsters............... [DONE]", delay: 300 },
        { text: "Dividing by zero.......................... [SKIPPED]", delay: 200 },
        { text: "Mounting file systems..................... [OK]", delay: 150 },
        { text: "Connecting to global secure server........ [PENDING]", delay: 600 },
        { text: "CRITICAL ERROR: Connection Refused (Code: 404_COFFEE)", type: "error", delay: 1200 },
        { text: "Initiating emergency caffeine protocol.... [WAIT]", delay: 800 },
        { text: "Rerouting power to capacitor banks........ [OK]", delay: 400 },
        { text: "Retrying connection (Attempt 2)........... [SUCCESS]", type: "success", delay: 500 },
        { text: "Downloading 'cool_animations.pkg'......... [OK]", delay: 200 },
        { text: "Optimizing 3D render engine............... [OK]", delay: 150 },
        { text: "Loading advanced shader cache............. [OK]", delay: 150 },
        { text: "Decompressing cat videos (hidden)......... [DONE]", delay: 200 },
        { text: "Calibrating viewport sensors.............. [OK]", delay: 150 },
        { text: "Establishing user session................. [OK]", delay: 150 },
        { text: "System ready. Welcome to IEEE SIT SB.", type: "highlight", delay: 1000 }
    ];

    // Handle Keyboard Navigation in BIOS phase
    useEffect(() => {
        if (phase !== 'BIOS') return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowUp') {
                setSelectedOption(prev => (prev - 1 + options.length) % options.length);
            } else if (e.key === 'ArrowDown') {
                setSelectedOption(prev => (prev + 1) % options.length);
            } else if (e.key === 'Enter') {
                handleSelection(options[selectedOption].action);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [phase, selectedOption]);

    // Handle Option Selection
    const handleSelection = (action) => {
        if (action === 'boot') {
            setPhase('BOOTING');
        } else if (action === 'skip') {
            onFinish();
        } else if (action === 'exit') {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                alert("Safe to close this tab.");
            }
        } else if (action === 'credits') {
            console.log("Credits selected");
        }
    };

    // Auto-scroll logs to bottom
    useEffect(() => {
        if (phase === 'BOOTING' && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [logs, phase]);

    // Run Boot Sequence with recursive timeouts for variable delays
    useEffect(() => {
        if (phase !== 'BOOTING') return;

        let currentIndex = 0;
        let isCancelled = false;

        const runSequence = () => {
            if (isCancelled) return;

            if (currentIndex >= bootSequence.length) {
                setTimeout(() => {
                    if (!isCancelled) {
                        setPhase('COMPLETE');
                        onFinish();
                    }
                }, 800);
                return;
            }

            const item = bootSequence[currentIndex];
            setLogs(prev => [...prev, item]); // Add full item object
            currentIndex++;

            // Wait for specified delay then run next
            setTimeout(runSequence, item.delay || 150);
        };

        // Start sequence
        runSequence();

        return () => { isCancelled = true; };
    }, [phase]);

    return (
        <div className="fixed inset-0 z-[100] bg-black text-[#00aaff] font-[VT323] text-xl p-8 overflow-y-auto flex flex-col items-start justify-start select-none cursor-default uppercase">
            {/* CRT overlay effect */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[110] bg-[length:100%_2px,3px_100%] opacity-20"></div>

            <div className="w-full h-full flex flex-col">
                {/* Header */}
                <div className="mb-8 border-b-2 border-[#00aaff] pb-2 w-full flex justify-between flex-shrink-0">
                    <span>IEEE-SIT BIOS v1.0.4</span>
                    <span>MEM: 64MB OK</span>
                </div>

                {/* BIOS Menu Phase */}
                {phase === 'BIOS' && (
                    <div className="flex flex-col gap-4 mt-12 mb-auto">
                        <div className="mb-6">Please select a boot option:</div>
                        {options.map((opt, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 cursor-pointer hover:opacity-100 transition-opacity ${selectedOption === index ? 'bg-[#00aaff] text-black px-2' : 'opacity-70 hover:bg-[#00aaff] hover:text-black hover:px-2'}`}
                                onClick={() => handleSelection(opt.action)}
                                onMouseEnter={() => setSelectedOption(index)}
                            >
                                <span className="w-4">{selectedOption === index ? '>' : ' '}</span>
                                <span>{opt.label}</span>
                            </div>
                        ))}

                        <div className="mt-12 text-sm opacity-50">
                            [UP/DOWN] to navigate • [ENTER] to select
                        </div>
                    </div>
                )}

                {/* Booting Phase */}
                {(phase === 'BOOTING' || phase === 'COMPLETE') && (
                    <div className="flex flex-col font-mono text-lg space-y-1 w-full pb-2 mt-auto">
                        {logs.map((log, i) => (
                            <div
                                key={i}
                                className={`break-words flex ${log.type === 'error' ? 'text-red-500 font-bold' :
                                    log.type === 'success' ? 'text-green-400' :
                                        log.type === 'highlight' ? 'text-white' : ''
                                    }`}
                            >
                                <span className="mr-2 flex-shrink-0">{'>'}</span>
                                <span>{log.text}</span>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TerminalBoot;
