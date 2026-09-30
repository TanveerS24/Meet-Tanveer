import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { executeTerminalCommand, COMMAND_LIST } from '../../content/terminalCommands';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

interface HistoryItem {
  id: string;
  command: string;
  output: string;
}

export const MiniTerminal: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'help',
      output: executeTerminalCommand('help', 'dark').output,
    },
  ]);
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState<number>(-1);
  const [userCmdList, setUserCmdList] = useState<string[]>([]);

  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollTop = outputEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const runCommand = (cmdToRun: string) => {
    if (!cmdToRun.trim()) return;

    trackEvent('terminal_command_run', { command: cmdToRun });

    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const result = executeTerminalCommand(cmdToRun, currentTheme);

    // Record in history for Up/Down arrows
    setUserCmdList((prev) => [...prev, cmdToRun]);
    setCmdHistoryIndex(-1);

    if (result.action === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (result.action === 'theme') {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    if (result.action === 'hire-me') {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF6B57', '#79F3EA', '#FFC93C', '#5B9BFF'],
        });
      } catch (e) {}
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdToRun,
        output: result.output,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (userCmdList.length === 0) return;
      const nextIdx = cmdHistoryIndex < userCmdList.length - 1 ? cmdHistoryIndex + 1 : cmdHistoryIndex;
      setCmdHistoryIndex(nextIdx);
      setInputVal(userCmdList[userCmdList.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIndex > 0) {
        const nextIdx = cmdHistoryIndex - 1;
        setCmdHistoryIndex(nextIdx);
        setInputVal(userCmdList[userCmdList.length - 1 - nextIdx] || '');
      } else {
        setCmdHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMMAND_LIST.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <section className="w-full max-w-[1120px] mx-auto px-margin-mobile md:px-margin py-space-xl">
      <div className="mb-space-md flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
        <div>
          <div className="inline-flex items-center gap-space-xs font-code text-xs text-primary-container uppercase tracking-wider font-bold mb-1">
            <span>07 // Developer CLI Shell</span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-extrabold tracking-tight">
            Prefer the command line?
          </h2>
        </div>
        <span className="font-code text-xs text-on-surface-variant">
          Tap chips below or use Tab / Arrow keys
        </span>
      </div>

      {/* Terminal Container */}
      <div className="w-full rounded-card bg-[#121829] border border-[#2C3760] shadow-2xl overflow-hidden font-code text-xs text-gray-200">
        {/* Title Bar */}
        <div className="h-10 bg-[#1B2340] border-b border-[#2C3760] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-xs text-gray-400 font-medium">visitor@tanveer-portfolio:~ (bash)</span>
          <div className="w-12" />
        </div>

        {/* Scrollable Output Window */}
        <div
          ref={outputEndRef}
          aria-live="polite"
          className="p-space-md md:p-space-lg space-y-3 min-h-[260px] max-h-[380px] overflow-y-auto"
        >
          <p className="text-gray-400 leading-relaxed">
            Welcome to Tanveer's interactive CLI v2.4. Type{' '}
            <span className="text-[#FFC93C] font-semibold">'help'</span> to view commands or tap the
            chips below.
          </p>

          {history.map((item) => (
            <div key={item.id} className="pt-1 space-y-1">
              <div className="flex items-center gap-2 text-secondary-container">
                <span>visitor@tanveer:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <pre className="mt-1 text-gray-300 pl-4 border-l-2 border-[#2C3760] whitespace-pre-wrap font-code leading-relaxed">
                {item.output}
              </pre>
            </div>
          ))}

          {/* Active Input Prompt Line */}
          <div className="flex items-center gap-2 pt-2 text-secondary-container">
            <span className="shrink-0">visitor@tanveer:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. projects, stats, help)..."
              className="w-full bg-transparent text-white font-code outline-none border-none focus:ring-0 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Mobile Tappable Command Chips */}
        <div className="p-3 bg-[#1B2340]/60 border-t border-[#2C3760] flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400 font-semibold px-1">Run:</span>
          {COMMAND_LIST.slice(0, 6).map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => runCommand(cmd)}
              className="px-3 py-1 rounded-lg bg-[#25304A] hover:bg-[#2C3760] text-[#79F3EA] text-xs font-code transition-colors border border-[#2C3760]"
            >
              {cmd}
            </button>
          ))}
          <button
            type="button"
            onClick={() => runCommand('sudo hire-me')}
            className="px-3 py-1 rounded-lg bg-primary-container/20 hover:bg-primary-container text-primary-container hover:text-white text-xs font-code font-bold transition-colors border border-primary-container/40"
          >
            sudo hire-me 🚀
          </button>
          <button
            type="button"
            onClick={() => runCommand('clear')}
            className="px-3 py-1 rounded-lg bg-transparent hover:bg-[#25304A] text-gray-400 text-xs font-code transition-colors ml-auto"
          >
            clear
          </button>
        </div>
      </div>
    </section>
  );
};
