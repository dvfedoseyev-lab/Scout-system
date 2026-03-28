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
  AlertCircle
} from "lucide-react";
import { cn } from "./lib/utils";
import { Player } from "./types";

// --- PLAYERS DATA ---
const players: Player[] = [
  {
    id: "layke-fields-10154",
    name: "LAYKE FIELDS",
    position: "Forward",
    height: "6'1\" / 185cm",
    dob: "Freshman (2025-26)",
    nationality: "USA",
    currentTeam: "Robert Morris University",
    league: "Horizon League (NCAA D1)",
    roleTag: "Defensive Anchor / Rebounding Big",
    scoutingLine: "High-motor freshman forward with elite interior presence; defensive anchor potential with shot-blocking instincts and efficient finishing (48.7% FG).",
    reportInfo: {
      by: "Fedoseev Dmitry",
      for: "Cayla Petree"
    },
    background: [
      "Development pathway: RMU Freshman (2025-26)",
      "Verified system: NCAA Division I",
      "Horizon League Freshman of the Week (12/8)"
    ],
    stats: {
      season: "2025-26",
      gp: 27,
      gs: 0,
      mpg: 10.3,
      ppg: 3.1,
      rpg: 2.7,
      apg: 0.3,
      bpg: 0.48,
      spg: 0.15,
      fgPct: 48.7,
      ftPct: 64.7,
      threePct: 0.0
    },
    gameLogs: [
      { date: "11/03/25", opponent: "at UIC", gs: false, min: 6, fgm: 1, fga: 2, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 2, tot: 2, pf: 0, ast: 0, to: 0, blk: 1, stl: 0, pts: 2 },
      { date: "11/07/25", opponent: "Akron", gs: false, min: 3, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 0, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "11/13/25", opponent: "at Saint Francis", gs: false, min: 15, fgm: 3, fga: 6, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 4, def: 3, tot: 7, pf: 4, ast: 2, to: 1, blk: 0, stl: 1, pts: 6 },
      { date: "11/18/25", opponent: "Duquesne", gs: false, min: 8, fgm: 0, fga: 2, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 2, fta: 2, ftPct: 100.0, off: 0, def: 2, tot: 2, pf: 0, ast: 1, to: 0, blk: 0, stl: 0, pts: 2 },
      { date: "11/22/25", opponent: "at Pittsburgh", gs: false, min: 8, fgm: 1, fga: 1, fgPct: 100.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 1, def: 3, tot: 4, pf: 0, ast: 0, to: 1, blk: 0, stl: 0, pts: 2 },
      { date: "11/26/25", opponent: "at Eastern Mich.", gs: false, min: 2, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 1, fta: 2, ftPct: 50.0, off: 0, def: 1, tot: 1, pf: 0, ast: 0, to: 0, blk: 0, stl: 0, pts: 1 },
      { date: "12/03/25", opponent: "at Mercyhurst", gs: false, min: 22, fgm: 11, fga: 17, fgPct: 64.7, threePm: 0, threePa: 0, threePct: 0, ftm: 2, fta: 3, ftPct: 66.7, off: 5, def: 1, tot: 6, pf: 1, ast: 0, to: 0, blk: 1, stl: 0, pts: 24 },
      { date: "12/07/25", opponent: "at Northern Ky.", gs: false, min: 16, fgm: 1, fga: 3, fgPct: 33.3, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 1, def: 3, tot: 4, pf: 2, ast: 0, to: 0, blk: 1, stl: 1, pts: 2 },
      { date: "12/13/25", opponent: "California (PA)", gs: false, min: 20, fgm: 5, fga: 8, fgPct: 62.5, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 5, tot: 5, pf: 2, ast: 2, to: 0, blk: 2, stl: 0, pts: 10 },
      { date: "12/16/25", opponent: "Detroit Mercy", gs: false, min: 16, fgm: 2, fga: 4, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 2, def: 4, tot: 6, pf: 2, ast: 1, to: 2, blk: 1, stl: 0, pts: 4 },
      { date: "12/19/25", opponent: "Point Park", gs: false, min: 25, fgm: 7, fga: 10, fgPct: 70.0, threePm: 0, threePa: 0, threePct: 0, ftm: 2, fta: 3, ftPct: 66.7, off: 6, def: 4, tot: 10, pf: 2, ast: 3, to: 1, blk: 3, stl: 0, pts: 16 },
      { date: "12/29/25", opponent: "Oakland", gs: false, min: 5, fgm: 0, fga: 1, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 0, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "01/02/26", opponent: "at Milwaukee", gs: false, min: 11, fgm: 2, fga: 5, fgPct: 40.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 2, tot: 2, pf: 1, ast: 0, to: 1, blk: 1, stl: 1, pts: 4 },
      { date: "01/04/26", opponent: "at Green Bay", gs: false, min: 19, fgm: 1, fga: 2, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 1, ftPct: 0, off: 1, def: 2, tot: 3, pf: 2, ast: 0, to: 1, blk: 1, stl: 1, pts: 2 },
      { date: "01/18/26", opponent: "at Cleveland St.", gs: false, min: 10, fgm: 0, fga: 4, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 4, fta: 4, ftPct: 100.0, off: 1, def: 1, tot: 2, pf: 3, ast: 0, to: 2, blk: 0, stl: 0, pts: 4 },
      { date: "01/21/26", opponent: "Youngstown St.", gs: false, min: 5, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 1, def: 0, tot: 1, pf: 0, ast: 0, to: 2, blk: 0, stl: 0, pts: 0 },
      { date: "01/24/26", opponent: "at Wright St.", gs: false, min: 14, fgm: 1, fga: 3, fgPct: 33.3, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 6, tot: 6, pf: 2, ast: 0, to: 1, blk: 0, stl: 0, pts: 2 },
      { date: "01/27/26", opponent: "at Purdue Fort Wayne", gs: false, min: 4, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 0, ast: 0, to: 1, blk: 1, stl: 0, pts: 0 },
      { date: "02/01/26", opponent: "at IU Indy", gs: false, min: 4, fgm: 0, fga: 1, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 0, ast: 0, to: 0, blk: 1, stl: 0, pts: 0 },
      { date: "02/05/26", opponent: "Green Bay", gs: false, min: 5, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 1, tot: 1, pf: 0, ast: 0, to: 1, blk: 0, stl: 0, pts: 0 },
      { date: "02/07/26", opponent: "Milwaukee", gs: false, min: 11, fgm: 1, fga: 2, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 2, ast: 0, to: 3, blk: 0, stl: 0, pts: 2 },
      { date: "02/11/26", opponent: "at Youngstown St.", gs: false, min: 13, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 1, tot: 1, pf: 2, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "02/14/26", opponent: "Cleveland St.", gs: false, min: 5, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 1, tot: 1, pf: 3, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "02/19/26", opponent: "at Detroit Mercy", gs: false, min: 18, fgm: 1, fga: 4, fgPct: 25.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 1, def: 6, tot: 7, pf: 1, ast: 0, to: 1, blk: 0, stl: 0, pts: 2 },
      { date: "02/21/26", opponent: "at Oakland", gs: false, min: 6, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 2, ftPct: 0, off: 1, def: 1, tot: 2, pf: 2, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "02/28/26", opponent: "Wright St.", gs: false, min: 2, fgm: 0, fga: 0, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 1, ast: 0, to: 1, blk: 0, stl: 0, pts: 0 },
      { date: "03/04/26", opponent: "at Purdue Fort Wayne", gs: false, min: 6, fgm: 0, fga: 1, fgPct: 0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 0, tot: 0, pf: 0, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 }
    ],
    synergyStats: [
      { category: "Overall", poss: 84, pctPoss: "100.0%", ppp: 0.840, rank: "69%", rating: "Very Good", fgm: 37, fga: 76, fgPct: 48.7 },
      { category: "Transition", poss: 7, pctPoss: "7.0%", ppp: 1.429, rank: "-", rating: "-", fgm: 4, fga: 5, fgPct: 80.0 },
      { category: "Overall Half Court", poss: 74, pctPoss: "93.0%", ppp: 0.796, rank: "64%", rating: "Good", fgm: 33, fga: 71, fgPct: 46.5 },
      { category: "Out of Bounds (End)", poss: 7, pctPoss: "7.5%", ppp: 0.571, rank: "-", rating: "-", fgm: 2, fga: 6, fgPct: 33.3 },
      { category: "Out of Bounds (Side)", poss: 4, pctPoss: "4.3%", ppp: 0.750, rank: "-", rating: "-", fgm: 0, fga: 2, fgPct: 0.0 },
      { category: "After Time Outs", poss: 12, pctPoss: "12.9%", ppp: 0.833, rank: "29%", rating: "Very Good", fgm: 4, fga: 8, fgPct: 50.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 5, pctPoss: "5.4%", ppp: 1.400, rank: "-", rating: "-", fgm: 3, fga: 3, fgPct: 100.0 },
      { category: "Against Man", poss: 60, pctPoss: "64.5%", ppp: 0.750, rank: "55%", rating: "Good", fgm: 20, fga: 46, fgPct: 43.5 },
      { category: "Against Zone", poss: 33, pctPoss: "35.5%", ppp: 0.879, rank: "62%", rating: "Good", fgm: 13, fga: 25, fgPct: 52.0 },
      { category: "Press", poss: 9, pctPoss: "9.0%", ppp: 1.556, rank: "-", rating: "-", fgm: 6, fga: 7, fgPct: 85.7 }
    ],
    physicalProfile: [
      "Size: 6'1\" frame with strong interior presence",
      "Strength: Capable of holding position in the paint",
      "Mobility: Fluid mover for her size, active in transition"
    ],
    offensiveProfile: [
      "Finishing: Efficient around the rim (48.7% FG)",
      "Role: Interior finisher and offensive rebounder",
      "Shooting: Primarily paint-based; 0/0 from 3PT"
    ],
    defensiveProfile: [
      "Positioning: Strong awareness in help defense",
      "Motor: High-energy defender, active shot-blocker (13 BLK)",
      "Impact: Immediate defensive presence in limited minutes"
    ],
    gameFeel: [
      "Decision-making: Solid understanding of role",
      "Awareness: Good positioning on both ends of the floor"
    ],
    projection: {
      level: "Mid-Major Plus",
      role: "Defensive Anchor / Rotation Big",
      limitation: "Perimeter shooting and range expansion"
    },
    status: "Scout",
    sourceLinks: [
      { label: "Official Team Page", url: "https://rmucolonials.com/sports/womens-basketball/roster/layke-fields/10154" }
    ],
    skillMatrix: {
      overallScore: 135.1,
      categories: [
        {
          name: "Physical Profile & Athleticism",
          total: 30.2,
          skills: [
            { name: "Size & Length", score: 6, weight: 1.00, total: 6 },
            { name: "Mobility (lateral)", score: 7, weight: 1.10, total: 7.7 },
            { name: "Explosiveness (1st / 2nd jump)", score: 7, weight: 1.10, total: 7.7 },
            { name: "Strength / Contact", score: 8, weight: 1.10, total: 8.8 }
          ]
        },
        {
          name: "Offensive Impact",
          total: 28.7,
          skills: [
            { name: "P&R (screen + roll)", score: 6, weight: 1.00, total: 6 },
            { name: "Finishing (paint / lob / touch)", score: 6, weight: 1.30, total: 7.8 },
            { name: "Shooting (mid / 3PT)", score: 0, weight: 1.10, total: 0 },
            { name: "Post Game (footwork)", score: 7, weight: 1.20, total: 8.4 },
            { name: "Offensive Rebounding", score: 5, weight: 1.30, total: 6.5 }
          ]
        },
        {
          name: "Basketball IQ & Decision Making",
          total: 18,
          skills: [
            { name: "Short-roll decisions", score: 5, weight: 1.00, total: 5 },
            { name: "Passing (vision)", score: 6, weight: 1.00, total: 6 },
            { name: "Spacing awareness", score: 7, weight: 1.00, total: 7 }
          ]
        },
        {
          name: "Defensive Impact",
          total: 33.2,
          skills: [
            { name: "Rim Protection", score: 8, weight: 1.00, total: 8 },
            { name: "Pick & Roll Defense", score: 7, weight: 1.10, total: 7.7 },
            { name: "Switching ability", score: 7, weight: 1.20, total: 8.4 },
            { name: "Defensive Rebounding", score: 7, weight: 1.30, total: 9.1 }
          ]
        },
        {
          name: "Intangibles",
          total: 25,
          skills: [
            { name: "Motor", score: 7, weight: 1.00, total: 7 },
            { name: "Toughness", score: 8, weight: 1.00, total: 8 },
            { name: "Coachability", score: 5, weight: 1.00, total: 5 },
            { name: "Communication", score: 5, weight: 1.00, total: 5 }
          ]
        }
      ],
      roleTagging: [
        { name: "Rim Runner", color: "bg-green-500" },
        { name: "Rebounder / Energy Big", color: "bg-yellow-500" },
        { name: "Stretch Big", color: "bg-red-500" },
        { name: "Defensive Anchor", color: "bg-yellow-500" },
        { name: "Development Project", color: "bg-yellow-500" },
        { name: "Undersized Big", color: "bg-gray-500", value: "Yes" }
      ],
      redFlags: [
        { risk: "defend P&R", value: "Yes" },
        { risk: "mobility (switch liability)", value: "Yes" },
        { risk: "finishing through contact", value: "No" },
        { risk: "Low motor", value: "No" },
        { risk: "rebounding instincts", value: "so-so" }
      ],
      conclusion: [
        { section: "Current Impact", notes: "Low" },
        { section: "Immediate Role", notes: "Rotation" },
        { section: "Main Risk", notes: "size" },
        { section: "1–2 Year Projection", notes: "mid-major" }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "UNDER REVIEW", mark: true },
        { status: "PASS", mark: false }
      ]
    }
  }
];

// --- COMPONENTS ---

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-2">
    <div className="p-2 bg-[#141414]/5 rounded-lg">
      <Icon className="w-4 h-4 opacity-70" />
    </div>
    <h3 className="font-sans font-bold text-sm uppercase tracking-wider opacity-80">{title}</h3>
  </div>
);

const StatBox = ({ label, value, subValue }: { label: string; value: string | number; subValue?: string }) => (
  <div className="flex flex-col border-r border-black/5 last:border-r-0 px-6 py-4">
    <span className="font-sans text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{label}</span>
    <span className="font-mono text-2xl font-bold tracking-tighter leading-none">{value}</span>
    {subValue && <span className="font-mono text-[10px] opacity-30 mt-2">{subValue}</span>}
  </div>
);

const SkillMatrixView = ({ matrix }: { matrix: any }) => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        {matrix.categories.map((cat: any, i: number) => (
          <div key={i} className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
            <div className="bg-[#141414] text-[#E4E3E0] px-6 py-4 flex justify-between items-center">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest">{cat.name}</h4>
              <span className="font-mono text-lg font-bold">{cat.total.toFixed(1)}</span>
            </div>
            <div className="p-6">
              <table className="w-full font-mono text-[10px] uppercase tracking-tighter">
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
        ))}
      </div>

      <div className="space-y-8">
        {/* TOTAL SCORE */}
        <div className="bg-[#141414] text-[#E4E3E0] p-8 rounded-[2rem] shadow-xl text-center">
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
              d.mark ? "bg-white/10 border-white/20" : "opacity-30 border-white/5"
            )}>
              <span className="font-sans text-xs font-black uppercase tracking-widest">{d.status}</span>
              {d.mark ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 opacity-20" />}
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
    return players.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPos = posFilter === "All" || p.position === posFilter;
      return matchesSearch && matchesPos;
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
              <option value="All">All Positions</option>
              <option value="Guard">Guard</option>
              <option value="Forward">Forward</option>
              <option value="Center">Center</option>
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
                "px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border",
                p.status === "Scout" ? "bg-yellow-50 border-yellow-200 text-yellow-700" : p.status === "Target" ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-50 border-gray-200 text-gray-700"
              )}>
                {p.status}
              </span>
              <span className="font-sans text-[10px] font-bold opacity-30 uppercase tracking-widest">
                {p.nationality}
              </span>
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

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans p-4 md:p-8 selection:bg-[#141414] selection:text-[#E4E3E0] print:p-0 print:bg-white">
      <div className="max-w-6xl mx-auto print-container">
        
        {/* HEADER / NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#141414]/10 pb-8 gap-6 no-print">
          <div className="flex items-center gap-6">
            <button 
              onClick={handleBack}
              className="w-12 h-12 rounded-2xl border border-[#141414]/10 bg-white flex items-center justify-center hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-300 shadow-sm"
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
          <div className="flex gap-4">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white border border-[#141414]/10 px-6 py-3 rounded-2xl font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-[#141414] hover:text-[#E4E3E0] transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4" /> PDF
            </button>
            <div className="flex bg-white/50 backdrop-blur-md p-1 rounded-2xl border border-[#141414]/5">
              {[1, 2, 3, 4].map((l) => (
                <button
                  key={l}
                  onClick={() => setLayer(l as any)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl font-mono text-xs font-bold transition-all duration-300",
                    layer === l ? "bg-[#141414] text-[#E4E3E0] shadow-lg" : "hover:bg-black/5"
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
                    "px-2 py-0.5 text-[10px] font-mono uppercase border border-[#141414]",
                    player.status === "Scout" ? "bg-yellow-100" : "bg-green-100"
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
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {player.nationality}</div>
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
                  <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl border border-black/5 bg-white/50 overflow-hidden shadow-sm">
                    <StatBox label="PPG" value={player.stats.ppg} />
                    <StatBox label="RPG" value={player.stats.rpg} />
                    <StatBox label="APG" value={player.stats.apg} />
                    <StatBox label="BPG" value={player.stats.bpg} />
                  </div>
                </div>
                <div className="bg-[#141414] text-[#E4E3E0] p-8 rounded-[2rem] shadow-xl">
                  <SectionHeader title="Projection" icon={Zap} />
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase opacity-40 mb-2 tracking-widest">Level</span>
                      <span className="block font-sans text-2xl font-black uppercase">{player.projection.level}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[8px] font-bold uppercase opacity-40 mb-2 tracking-widest">Role</span>
                      <span className="block font-sans text-xs font-bold uppercase opacity-80">{player.projection.role}</span>
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
                <div className="p-6 md:p-8 scouting-report-page page-break">
                  <div className="grid grid-cols-1 gap-12">
                    {/* SYNERGY */}
                    <div className={cn(
                      layer === 2 ? "block" : "hidden print:block"
                    )}>
                      <SectionHeader title="Synergy Analytics" icon={Zap} />
                      <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                        <table className="w-full font-mono text-[10px] uppercase tracking-tighter">
                          <thead>
                            <tr className="bg-[#141414]/5 text-left opacity-40">
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
                      layer === 3 ? "block" : "hidden print:block",
                      "mt-8"
                    )}>
                      <SectionHeader title="Game Logs (Detailed)" icon={Trophy} />
                      <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                        <table className="w-full font-mono text-[9px] uppercase tracking-tighter">
                          <thead>
                            <tr className="bg-[#141414]/5 text-left opacity-40">
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
                            {player.gameLogs.length > 0 ? player.gameLogs.slice(0, 20).map((log, i) => (
                              <tr key={i} className="hover:bg-black/5 transition-colors">
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
                          <p className="py-4 text-[9px] opacity-40 italic text-center bg-[#141414]/5 no-print">Showing first 20 games. Download PDF for full log.</p>
                        )}
                      </div>
                    </div>

                    {/* SKILL MATRIX */}
                    <div className={cn(
                      layer === 4 ? "block" : "hidden print:block",
                      "mt-8"
                    )}>
                      <SectionHeader title="Skill Matrix" icon={LayoutGrid} />
                      {player.skillMatrix && <SkillMatrixView matrix={player.skillMatrix} />}
                    </div>
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
