import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Activity, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  FileText,
  User,
  MapPin,
  Calendar,
  Trophy,
  Download,
  ArrowLeft,
  Search,
  Filter,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Smartphone,
  Play
} from "lucide-react";
import { cn } from "./lib/utils";
import { Player } from "./types";
import { players } from "./data";

// --- COMPONENTS ---

const getPositionColor = (pos: string) => {
  const p = pos.toUpperCase();
  if (p.includes("GUARD")) return "#1E293B"; // Slate
  if (p.includes("FORWARD")) return "#44403C"; // Stone
  if (p.includes("CENTER")) return "#141414"; // Neutral
  return "#141414";
};

const getFlagUrl = (nationality: string) => {
  const mapping: Record<string, string> = {
    "USA": "us",
    "Argentina": "ar",
    "Colombia": "co",
    "Puerto Rico": "pr",
    "Dominican Republic": "do",
    "Mexico": "mx",
    "Brazil": "br",
    "Canada": "ca",
    "Panama": "pa",
    "Hungary": "hu",
    "Nigeria": "ng",
    "Russia": "ru"
  };
  const code = mapping[nationality];
  return code ? `https://flagcdn.com/w40/${code}.png` : null;
};

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-2">
    <div className="p-2 bg-[var(--accent-color)]/5 rounded-lg">
      <Icon className="w-4 h-4 text-[var(--accent-color)]" />
    </div>
    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[var(--accent-color)]">{title}</h3>
  </div>
);

const StatBox = ({ label, value, subValue }: { label: string; value: string | number; subValue?: string }) => (
  <div className="flex flex-col border-r border-black/5 last:border-r-0 px-6 py-4">
    <span className="font-sans text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{label}</span>
    <span className="font-mono text-2xl font-bold tracking-tighter leading-none">{value}</span>
    {subValue && <span className="font-mono text-[10px] opacity-30 mt-2">{subValue}</span>}
  </div>
);

const SkillMatrixView = ({ matrix, mobileOptimized }: { matrix: any, mobileOptimized: boolean }) => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        {matrix.categories.map((cat: any, i: number) => (
          <div key={i} className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
            <div className="bg-[var(--accent-color)] text-[#E4E3E0] px-6 py-4 flex justify-between items-center">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest">{cat.name}</h4>
              <span className="font-mono text-lg font-bold">{cat.total.toFixed(1)}</span>
            </div>
            <div className="p-6">
              {mobileOptimized ? (
                <div className="space-y-4 no-print">
                  {cat.skills.map((skill: any, si: number) => (
                    <div key={si} className="flex justify-between items-center p-3 rounded-xl border border-black/5 bg-black/[0.02]">
                      <div className="space-y-1">
                        <p className="font-sans text-[10px] font-black uppercase">{skill.name}</p>
                        <p className="font-mono text-[8px] opacity-40 uppercase">Weight: {skill.weight.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs font-bold">Score: {skill.score}</p>
                        <p className="font-mono text-xs font-black text-[#141414]">Total: {skill.total.toFixed(1)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className={cn(
                "overflow-x-auto",
                mobileOptimized ? "hidden print:block" : "block"
              )}>
                <table className="w-full font-mono text-[10px] uppercase tracking-tighter min-w-[400px]">
                  <thead>
                    <tr className="text-left opacity-40 border-b border-black/5">
                      <th className="pb-2">Skill</th>
                      <th className="pb-2 text-center">Score</th>
                      <th className="pb-2 text-center">Weight</th>
                      <th className="pb-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {cat.skills.map((skill: any, si: number) => (
                      <tr key={si}>
                        <td className="py-3 font-bold">{skill.name}</td>
                        <td className="py-3 text-center">{skill.score}</td>
                        <td className="py-3 text-center">{skill.weight.toFixed(2)}</td>
                        <td className="py-3 text-right font-black">{skill.total.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {/* TOTAL SCORE */}
        <div className="bg-[var(--accent-color)] text-[#E4E3E0] p-8 rounded-[2rem] shadow-xl text-center">
          <span className="block font-sans text-[10px] font-bold uppercase opacity-40 mb-4 tracking-[0.3em]">Overall Scouting Score</span>
          <span className="block font-sans text-8xl font-black tracking-tighter mb-4">{matrix.overallScore}</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {matrix.categories.map((cat: any, i: number) => (
              <div key={i} className="text-center">
                <span className="block font-sans text-[8px] font-bold uppercase opacity-40 mb-1">{cat.name.split(' ')[0]}</span>
                <span className="block font-mono text-sm font-bold">{cat.total.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROLE TAGGING */}
        <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
          <SectionHeader title="Role Tagging" icon={Target} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {matrix.roleTagging.map((tag: any, i: number) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-black/5">
                <div className="flex items-center gap-3">
                  <div className={cn("w-3 h-3 rounded-full", tag.color)} />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider">{tag.name}</span>
                </div>
                {tag.value && <span className="font-mono text-[10px] font-bold opacity-40">{tag.value}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* RISK */}
        <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
          <SectionHeader title="Risk" icon={AlertCircle} />
          <div className="space-y-3">
            {matrix.redFlags
              .filter((flag: any) => flag.value === "Yes" || flag.value === "so-so")
              .map((flag: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-red-50/50 border border-red-100">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-red-900">{flag.risk}</span>
                  <span className={cn(
                    "font-mono text-[10px] font-bold px-2 py-0.5 rounded-full",
                    flag.value === "Yes" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"
                  )}>{flag.value}</span>
                </div>
              ))}
            {matrix.redFlags.filter((flag: any) => flag.value === "Yes" || flag.value === "so-so").length === 0 && (
              <p className="text-[10px] opacity-40 italic text-center py-4">No significant risks identified</p>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* CONCLUSION & DECISION */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
        <SectionHeader title="Final Scouting Conclusion" icon={FileText} />
        <div className="grid grid-cols-1 gap-4">
          {matrix.conclusion.map((item: any, i: number) => (
            <div key={i} className="flex justify-between items-center border-b border-black/5 pb-2 last:border-0">
              <span className="font-sans text-[10px] font-bold uppercase opacity-40">{item.section}</span>
              <span className="font-mono text-xs font-bold uppercase">{item.notes}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#141414] text-[#E4E3E0] p-8 rounded-[2rem] shadow-xl">
        <SectionHeader title="Decision" icon={Zap} />
        <div className="space-y-4">
          {matrix.decision.map((d: any, i: number) => (
            <div key={i} className={cn(
              "flex items-center justify-between p-4 rounded-2xl border transition-all",
              d.mark ? (
                d.status.includes("TARGET") || d.status.includes("SCOUT") ? "bg-green-500/20 border-green-500/40 text-green-400" :
                d.status.includes("REVIEW") ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-400" :
                d.status.includes("PASS") || d.status.includes("DECLINE") ? "bg-red-500/20 border-red-500/40 text-red-400" :
                "bg-white/10 border-white/20"
              ) : "opacity-30 border-white/5"
            )}>
              <span className="font-sans text-xs font-black uppercase tracking-widest">{d.status}</span>
              {d.mark ? (
                <CheckCircle2 className={cn(
                  "w-5 h-5",
                  d.status.includes("TARGET") || d.status.includes("SCOUT") ? "text-green-400" :
                  d.status.includes("REVIEW") ? "text-yellow-400" :
                  d.status.includes("PASS") || d.status.includes("DECLINE") ? "text-red-400" :
                  "text-white"
                )} />
              ) : <XCircle className="w-5 h-5 opacity-20" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- PLAYER LIST VIEW ---

const PlayerList = ({ onSelect }: { onSelect: (p: Player) => void }) => {
  const [search, setSearch] = useState("");
  const [posFilter, setPosFilter] = useState("All");

  const filteredPlayers = useMemo(() => {
    const filtered = players.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = posFilter === "All" || p.position === posFilter || p.status === posFilter;
      return matchesSearch && matchesFilter;
    });

    return [...filtered].sort((a, b) => {
      const getYear = (dob: string) => {
        const match = dob.match(/\d{4}/);
        return match ? parseInt(match[0]) : 9999;
      };
      return getYear(a.dob) - getYear(b.dob);
    });
  }, [search, posFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#141414]/10 pb-8 gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tight leading-none uppercase">
            Scout System
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-sans text-xs font-bold opacity-40 uppercase tracking-[0.2em]">
              For Cayla Petree
            </p>
            <a 
              href="https://docs.google.com/spreadsheets/d/17vVYbQcpZ01MMKgejuF3wNihs553P4D8/edit?gid=594819097#gid=594819097"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-2 border-[#141414] rounded-full hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-300"
            >
              <ExternalLink className="w-3 h-3" /> scouting_tracker
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30 group-focus-within:opacity-100 transition-opacity" />
            <input 
              type="text"
              placeholder="Search Player..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white/50 backdrop-blur-md border border-[#141414]/10 rounded-2xl font-sans text-xs font-bold uppercase w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#141414]/20 transition-all"
            />
          </div>
          <div className="relative group">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30 group-focus-within:opacity-100 transition-opacity" />
            <select 
              value={posFilter}
              onChange={(e) => setPosFilter(e.target.value)}
              className="pl-12 pr-10 py-3 bg-white/50 backdrop-blur-md border border-[#141414]/10 rounded-2xl font-sans text-xs font-bold uppercase appearance-none focus:outline-none focus:ring-2 focus:ring-[#141414]/20 transition-all cursor-pointer"
            >
              <option value="All">All Categories</option>
              <optgroup label="Positions">
                <option value="Guard">Guard</option>
                <option value="Forward">Forward</option>
                <option value="Center">Center</option>
              </optgroup>
              <optgroup label="Status">
                <option value="Under Review">Under Review</option>
                <option value="Scout">Scout</option>
                <option value="Decline">Decline</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlayers.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p)}
            className="group relative bg-white rounded-3xl p-8 text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-black/5"
          >
            <div className="flex justify-between items-start mb-8">
              <span className={cn(
                "px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border whitespace-nowrap",
                p.status === "Under Review" ? "bg-yellow-50 border-yellow-200 text-yellow-700" : 
                p.status === "Scout" ? "bg-green-50 border-green-200 text-green-700" : 
                p.status === "Decline" ? "bg-red-50 border-red-200 text-red-700" :
                "bg-gray-50 border-gray-200 text-gray-700"
              )}>
                {p.status}
              </span>
              <div className="flex flex-col items-end gap-1">
                <span className="font-sans text-[10px] font-bold opacity-30 uppercase tracking-widest">
                  {p.nationality}
                </span>
                {getFlagUrl(p.nationality) && (
                  <img 
                    src={getFlagUrl(p.nationality)!} 
                    alt={p.nationality} 
                    className="w-16 h-auto border border-black/5 rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>
            <h3 className="text-3xl font-sans font-black tracking-tight uppercase mb-4 group-hover:text-[#141414] transition-colors">
              {p.name}
            </h3>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/5">
              <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase opacity-50"><User className="w-3 h-3" /> {p.position}</div>
              <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase opacity-50"><Activity className="w-3 h-3" /> {p.height}</div>
              <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase opacity-50 col-span-2"><Calendar className="w-3 h-3" /> {p.dob}</div>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center text-white">
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [layer, setLayer] = useState<1 | 2 | 3 | 4>(1);
  const [mobileOptimized, setMobileOptimized] = useState(false);

  const handleSelectPlayer = (p: Player) => {
    setSelectedPlayer(p);
    setView("detail");
    setLayer(1);
  };

  const handleBack = () => {
    setView("list");
    setSelectedPlayer(null);
  };

  const handleDownload = () => {
    window.print();
  };

  if (view === "list") {
    return (
      <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <PlayerList onSelect={handleSelectPlayer} />
        </div>
      </div>
    );
  }

  const player = selectedPlayer!;
  const accentColor = getPositionColor(player.position);

  return (
    <div 
      className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans p-4 md:p-8 selection:bg-[#141414] selection:text-[#E4E3E0] print:p-0 print:bg-white"
      style={{ "--accent-color": accentColor } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto print-container">
        
        {/* HEADER / NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#141414]/10 pb-8 gap-6 no-print">
          <div className="flex items-center gap-6">
            <button 
              onClick={handleBack}
              className="w-12 h-12 rounded-2xl border border-[#141414]/10 bg-white flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-[#E4E3E0] transition-all duration-300 shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight leading-none uppercase">
                Scouting Report
              </h1>
              <p className="font-sans text-[10px] font-bold opacity-40 mt-2 uppercase tracking-[0.2em]">
                By {player.reportInfo.by} for {player.reportInfo.for}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button 
              onClick={() => setMobileOptimized(!mobileOptimized)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-2xl font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm border no-print",
                mobileOptimized 
                  ? "bg-[var(--accent-color)] text-[#E4E3E0] border-[var(--accent-color)]" 
                  : "bg-white text-[#141414] border-[#141414]/10 hover:bg-black/5"
              )}
            >
              <Smartphone className="w-4 h-4" /> {mobileOptimized ? "Desktop View" : "Mobile View"}
            </button>
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white border border-[#141414]/10 px-6 py-3 rounded-2xl font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--accent-color)] hover:text-[#E4E3E0] transition-all duration-300 shadow-sm no-print"
            >
              <Download className="w-4 h-4" /> PDF
            </button>
            {player.videoUrl && (
              <a 
                href={player.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white border border-[#141414]/10 px-6 py-3 rounded-2xl font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--accent-color)] hover:text-[#E4E3E0] transition-all duration-300 shadow-sm no-print"
              >
                <Play className="w-4 h-4" /> Video
              </a>
            )}
            <div className="flex bg-white/50 backdrop-blur-md p-1 rounded-2xl border border-[#141414]/5 no-print">
              {[1, 2, 3, 4].map((l) => (
                <button
                  key={l}
                  onClick={() => setLayer(l as any)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl font-mono text-xs font-bold transition-all duration-300",
                    layer === l ? "bg-[var(--accent-color)] text-[#E4E3E0] shadow-lg" : "hover:bg-black/5"
                  )}
                >
                  0{l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRINT ONLY HEADER */}
        <div className="hidden print:block mb-8 border-b-2 border-[#141414] pb-4">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-serif italic tracking-tighter leading-none uppercase">
                Scouting Report: {player.name}
              </h1>
              <p className="font-mono text-[10px] opacity-50 mt-2 uppercase tracking-widest">
                Report by {player.reportInfo.by} for {player.reportInfo.for}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-widest">Scout System: Cayla Petree</p>
              <p className="font-mono text-[10px] uppercase tracking-widest">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* LAYER 1: QUICK VIEW */}
        <motion.div 
          layout
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-black/5 print:shadow-none print:border-none print:rounded-none"
        >
          <div className="p-6 md:p-8 scouting-report-page">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={cn(
                    "px-2 py-0.5 text-[10px] font-mono uppercase border",
                    player.status === "Under Review" ? "bg-yellow-50 border-yellow-200 text-yellow-700" : 
                    player.status === "Scout" ? "bg-green-50 border-green-200 text-green-700" : 
                    player.status === "Decline" ? "bg-red-50 border-red-200 text-red-700" :
                    "bg-gray-50 border-gray-200 text-gray-700"
                  )}>
                    {player.status}
                  </span>
                  <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                    ID: {player.id}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  <h2 className="text-3xl md:text-5xl font-serif italic tracking-tighter uppercase">
                    {player.name}
                  </h2>
                  {player.skillMatrix && (
                    <button 
                      onClick={() => setLayer(4)}
                      className="no-print flex items-center gap-2 px-4 py-2 bg-[#141414] text-[#E4E3E0] rounded-full font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-opacity-80 transition-all shadow-lg"
                    >
                      <LayoutGrid className="w-3 h-3" /> Skill Matrix
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs opacity-60 uppercase tracking-tight mb-4">
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> {player.position}</div>
                  <div className="flex items-center gap-1"><Activity className="w-3 h-3" /> {player.height}</div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> 
                    {player.nationality}
                    {getFlagUrl(player.nationality) && (
                      <img 
                        src={getFlagUrl(player.nationality)!} 
                        alt={player.nationality} 
                        className="w-12 h-auto border border-black/5 rounded-sm ml-1"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {player.dob}</div>
                </div>
                <div className="bg-[#141414] text-[#E4E3E0] px-3 py-1 inline-block text-[10px] font-mono uppercase tracking-widest mb-6">
                  {player.roleTag}
                </div>
                <p className="text-lg md:text-xl font-serif italic leading-snug border-l-4 border-[#141414] pl-4 max-w-2xl">
                  "{player.scoutingLine}"
                </p>
              </div>
              
              <div className="md:w-64 flex flex-col justify-between border-l border-black/5 md:pl-8 no-print">
                <div className="space-y-4">
                  <div>
                    <span className="block font-serif italic text-[11px] opacity-40 uppercase tracking-widest mb-1">Current Club</span>
                    <span className="block font-mono text-sm uppercase leading-tight">{player.currentTeam}</span>
                  </div>
                  <div>
                    <span className="block font-serif italic text-[11px] opacity-40 uppercase tracking-widest mb-1">League</span>
                    <span className="block font-mono text-sm uppercase leading-tight">{player.league}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setLayer(layer === 1 ? 2 : 1)}
                  className="mt-8 flex items-center justify-between w-full border border-[#141414] px-4 py-2 font-mono text-xs uppercase hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors"
                >
                  {layer === 1 ? "Expand Profile" : "Collapse"}
                  {layer === 1 ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>
              </div>

              {/* PRINT ONLY CLUB INFO */}
              <div className="hidden print:block text-right">
                <p className="font-mono text-xs uppercase">{player.currentTeam}</p>
                <p className="font-mono text-[10px] opacity-60 uppercase">{player.league}</p>
              </div>
            </div>

            {/* MAIN PROFILE CONTENT (Always visible in print) */}
            <div className={cn(
              "mt-8 grid grid-cols-1 md:grid-cols-2 gap-8",
              layer === 1 ? "block" : "hidden print:grid"
            )}>
              <div className="space-y-8">
                <div>
                  <SectionHeader title="Background & System" icon={FileText} />
                  <ul className="space-y-2">
                    {player.background.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-mono text-[10px] leading-relaxed">
                        <span className="w-1 h-1 bg-[#141414] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionHeader title="Season Snapshot" icon={BarChart3} />
                  <div className="grid grid-cols-2 md:grid-cols-5 rounded-3xl border border-black/5 bg-white/50 overflow-hidden shadow-sm">
                    <StatBox label="PPG" value={player.stats.ppg} />
                    <StatBox label="RPG" value={player.stats.rpg} />
                    <StatBox label="APG" value={player.stats.apg} />
                    <StatBox label="BPG" value={player.stats.bpg} />
                    <StatBox label="3PT%" value={`${player.stats.threePct}%`} />
                  </div>
                </div>
                <div className="bg-[#141414] text-[#E4E3E0] p-8 rounded-[2rem] shadow-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white">Projection</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <span className="block font-sans text-[12px] font-black uppercase text-white mb-2 tracking-widest">Level</span>
                      <span className="block font-sans text-2xl font-black uppercase text-white">{player.projection.level}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[12px] font-black uppercase text-white mb-2 tracking-widest">Role</span>
                      <span className="block font-sans text-xs font-bold uppercase opacity-80 text-white">{player.projection.role}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <SectionHeader title="Physical Profile" icon={Activity} />
                  <ul className="space-y-1">
                    {player.physicalProfile.map((p, i) => (
                      <li key={i} className="font-mono text-[10px] opacity-70">— {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionHeader title="Offensive Profile" icon={Target} />
                  <ul className="space-y-1">
                    {player.offensiveProfile.map((p, i) => (
                      <li key={i} className="font-mono text-[10px] opacity-70">— {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionHeader title="Defense / Rebounding" icon={Shield} />
                  <ul className="space-y-1">
                    {player.defensiveProfile.map((p, i) => (
                      <li key={i} className="font-mono text-[10px] opacity-70">— {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 2 & 3: ANALYTICS & LOGS */}
          <AnimatePresence>
            {(layer >= 2 || true) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className={cn(
                  "border-t border-[#141414] bg-[#F9F9F7] print:bg-white print:border-none",
                  layer === 1 ? "hidden print:block" : "block"
                )}
              >
                <div className="p-6 md:p-8 space-y-12">
                  {/* SYNERGY */}
                  <div className={cn(
                    "scouting-report-page page-break",
                    layer === 2 ? "block" : "hidden print:block"
                  )}>
                    <SectionHeader title="Synergy Analytics" icon={Zap} />
                    {mobileOptimized ? (
                      <div className="space-y-4 no-print">
                        {player.synergyStats.map((stat, i) => (
                          <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-4">
                            <div className="flex justify-between items-start border-b border-black/5 pb-3">
                              <h4 className="font-sans font-black text-sm uppercase">{stat.category}</h4>
                              <span className={cn(
                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                                stat.rating === "Very Good" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                              )}>
                                {stat.rating}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-[10px] opacity-40 uppercase font-bold">Poss / %</p>
                                <p className="font-mono text-xs font-bold">{stat.poss} ({stat.pctPoss})</p>
                              </div>
                              <div>
                                <p className="text-[10px] opacity-40 uppercase font-bold">PPP / Rank</p>
                                <p className="font-mono text-xs font-bold">{stat.ppp.toFixed(3)} / {stat.rank}</p>
                              </div>
                              <div>
                                <p className="text-[10px] opacity-40 uppercase font-bold">FGM/A</p>
                                <p className="font-mono text-xs font-bold">{stat.fgm}/{stat.fga}</p>
                              </div>
                              <div>
                                <p className="text-[10px] opacity-40 uppercase font-bold">FG%</p>
                                <p className="font-mono text-sm font-black text-[var(--accent-color)]">{stat.fgPct}%</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <div className={cn(
                      "overflow-x-auto rounded-3xl border border-black/5 bg-white shadow-sm",
                      mobileOptimized ? "hidden print:block" : "block"
                    )}>
                      <table className="w-full font-mono text-[10px] uppercase tracking-tighter min-w-[600px]">
                        <thead>
                          <tr className="bg-[var(--accent-color)]/5 text-left opacity-40">
                            <th className="py-4 px-4">Category</th>
                            <th className="py-4 px-4">Poss</th>
                            <th className="py-4 px-4">%Poss</th>
                            <th className="py-4 px-4">PPP</th>
                            <th className="py-4 px-4">Rank</th>
                            <th className="py-4 px-4">Rating</th>
                            <th className="py-4 px-4">FGM/A</th>
                            <th className="py-4 px-4">FG%</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                          {player.synergyStats.length > 0 ? player.synergyStats.map((stat, i) => (
                            <tr key={i} className="hover:bg-black/5 transition-colors">
                              <td className="py-4 px-4 font-bold">{stat.category}</td>
                              <td className="py-4 px-4">{stat.poss}</td>
                              <td className="py-4 px-4">{stat.pctPoss}</td>
                              <td className="py-4 px-4">{stat.ppp.toFixed(3)}</td>
                              <td className="py-4 px-4">{stat.rank}</td>
                              <td className="py-4 px-4">
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-[8px] font-bold",
                                  stat.rating === "Very Good" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                                )}>
                                  {stat.rating}
                                </span>
                              </td>
                              <td className="py-4 px-4">{stat.fgm}/{stat.fga}</td>
                              <td className="py-4 px-4 font-bold">{stat.fgPct}%</td>
                            </tr>
                          )) : (
                            <tr><td colSpan={8} className="py-8 text-center opacity-40 italic">No Synergy Data Available</td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* GAME LOGS */}
                  <div className={cn(
                    "scouting-report-page page-break",
                    layer === 3 ? "block" : "hidden print:block"
                  )}>
                    <SectionHeader title="Game Logs (Detailed)" icon={Trophy} />
                    {mobileOptimized ? (
                      <div className="space-y-4 no-print">
                        {player.gameLogs.slice(0, 10).map((log, i) => (
                          <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-4">
                            <div className="flex justify-between items-center border-b border-black/5 pb-3">
                              <span className="font-mono text-[10px] opacity-40">{log.date}</span>
                              <span className="font-sans font-black text-xs uppercase truncate max-w-[150px]">{log.opponent}</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-center">
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">PTS</p>
                                <p className="font-mono text-sm font-black">{log.pts}</p>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">REB</p>
                                <p className="font-mono text-sm font-bold">{log.tot}</p>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">AST</p>
                                <p className="font-mono text-sm font-bold">{log.ast}</p>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">BLK</p>
                                <p className="font-mono text-sm font-bold">{log.blk}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/5 text-center">
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">MIN</p>
                                <p className="font-mono text-[10px]">{log.min}</p>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">FG</p>
                                <p className="font-mono text-[10px]">{log.fgm}/{log.fga}</p>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-40 uppercase font-bold">FT</p>
                                <p className="font-mono text-[10px]">{log.ftm}/{log.fta}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                        <p className="text-[10px] opacity-40 italic text-center py-4">Switch to Desktop View for full table</p>
                      </div>
                    ) : null}
                    <div className={cn(
                      "overflow-x-auto rounded-3xl border border-black/5 bg-white shadow-sm",
                      mobileOptimized ? "hidden print:block" : "block"
                    )}>
                      <table className="w-full font-mono text-[9px] uppercase tracking-tighter min-w-[700px]">
                        <thead>
                          <tr className="bg-[var(--accent-color)]/5 text-left opacity-40">
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Opp</th>
                            <th className="py-3 px-4">Min</th>
                            <th className="py-3 px-4">FG</th>
                            <th className="py-3 px-4">FT</th>
                            <th className="py-3 px-4">REB</th>
                            <th className="py-3 px-4">AST</th>
                            <th className="py-3 px-4">BLK</th>
                            <th className="py-3 px-4">PTS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                          {player.gameLogs.length > 0 ? player.gameLogs.map((log, i) => (
                            <tr key={i} className={cn(
                              "hover:bg-black/5 transition-colors",
                              i >= 20 ? "hidden print:table-row" : "table-row"
                            )}>
                              <td className="py-3 px-4">{log.date}</td>
                              <td className="py-3 px-4 truncate max-w-[100px] font-bold">{log.opponent}</td>
                              <td className="py-3 px-4">{log.min}</td>
                              <td className="py-3 px-4">{log.fgm}/{log.fga}</td>
                              <td className="py-3 px-4">{log.ftm}/{log.fta}</td>
                              <td className="py-3 px-4">{log.tot}</td>
                              <td className="py-3 px-4">{log.ast}</td>
                              <td className="py-3 px-4">{log.blk}</td>
                              <td className="py-3 px-4 font-black">{log.pts}</td>
                            </tr>
                          )) : (
                            <tr><td colSpan={9} className="py-8 text-center opacity-40 italic">No Game Logs Available</td></tr>
                          )}
                        </tbody>
                      </table>
                      {player.gameLogs.length > 20 && (
                        <p className="py-4 text-[9px] opacity-40 italic text-center bg-[var(--accent-color)]/5 no-print">Showing first 20 games. Download PDF for full log.</p>
                      )}
                    </div>
                  </div>

                  {/* SKILL MATRIX */}
                  <div className={cn(
                    "scouting-report-page page-break",
                    layer === 4 ? "block" : "hidden print:block"
                  )}>
                    <SectionHeader title="Skill Matrix" icon={LayoutGrid} />
                    {player.skillMatrix && <SkillMatrixView matrix={player.skillMatrix} mobileOptimized={mobileOptimized} />}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER / SOURCES */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 no-print">
          <div className="flex gap-4">
            {player.sourceLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest hover:underline"
              >
                {link.label} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] opacity-30 uppercase tracking-widest">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

      </div>
    </div>
  );
}
