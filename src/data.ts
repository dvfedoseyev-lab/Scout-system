import { Player } from "./types";

const createTBDPlayer = (data: Partial<Player>): Player => ({
  id: data.id || Math.random().toString(36).substr(2, 9),
  name: data.name || "TBD",
  position: data.position || "TBD",
  height: data.height || "TBD",
  dob: data.dob || "TBD",
  nationality: data.nationality || "TBD",
  handedness: data.handedness || "TBD",
  stars: data.stars || 3,
  currentTeam: data.currentTeam || "TBD",
  league: data.league || "TBD",
  roleTag: data.roleTag || "TBD",
  scoutingLine: data.scoutingLine || "TBD",
  reportInfo: {
    by: "Fedoseev Dmitry",
    for: "Cayla Petree"
  },
  background: ["TBD"],
  stats: {
    season: "TBD",
    gp: 0,
    gs: 0,
    mpg: 0,
    ppg: 0,
    rpg: 0,
    apg: 0,
    bpg: 0,
    spg: 0,
    fgPct: 0,
    ftPct: 0,
    threePct: 0,
    ...data.stats
  },
  gameLogs: [],
  synergyStats: [],
  physicalProfile: ["TBD"],
  offensiveProfile: ["TBD"],
  defensiveProfile: ["TBD"],
  gameFeel: ["TBD"],
  projection: {
    level: "TBD",
    role: "TBD",
    limitation: "TBD"
  },
  status: data.status || "Under Review",
  sourceLinks: [],
  ...data
});

export const players: Player[] = [
  {
    id: "layke-fields-10154",
    name: "LAYKE FIELDS",
    position: "Forward",
    height: "6'1\" / 185cm",
    dob: "Freshman (2025-26)",
    nationality: "USA",
    handedness: "Right",
    stars: 3,
    currentTeam: "Robert Morris University",
    league: "Horizon League (NCAA D1)",
    roleTag: "Defensive Anchor / Rebounding Big",
    scoutingLine: "High-motor freshman forward with elite interior presence; defensive anchor potential with shot-blocking instincts and efficient finishing (48.7% FG).",
    videoUrl: "https://drive.google.com/drive/u/0/folders/1C4qqpn_u0fRrxdFLzgmCGAxEjxlEyFaP",
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
      level: "NCAA D1 (Mid-Major+)",
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
  },
  createTBDPlayer({
    id: "nerea-lagowski",
    stars: 4,
    name: "NEREA LAGOWSKI",
    position: "Center",
    height: "6'5\" / 195cm",
    dob: "2006",
    nationality: "Argentina",
    currentTeam: "FIBA U19 Women's Basketball World Cup",
    league: "International",
    roleTag: "Stretch / Rebound",
    scoutingLine: "Big with stretch potential and strong rebounding presence.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup.",
      "Key interior player for Argentina's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 27.7, ppg: 8.3, rpg: 8.0, apg: 0.8, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 195cm (6'5\")",
      "Significant size for the center position",
      "Strong frame for interior battles"
    ],
    offensiveProfile: [
      "Stretch potential from the perimeter",
      "Reliable interior scorer (8.3 PPG)",
      "Active offensive rebounder"
    ],
    defensiveProfile: [
      "Strong rebounding presence (8.0 RPG)",
      "Interior anchor for the defense"
    ],
    projection: {
      level: "NCAA D1 / Pro Prospect",
      role: "Stretch Big / Rebounder",
      limitation: "Mobility against smaller lineups"
    },
    synergyStats: [
      { category: "Overall", poss: 65, pctPoss: "100.0%", ppp: 0.738, rank: "56%", rating: "Good", fgm: 21, fga: 47, fgPct: 44.7 },
      { category: "Transition", poss: 10, pctPoss: "15.4%", ppp: 1.400, rank: "95%", rating: "Excellent", fgm: 6, fga: 7, fgPct: 85.7 },
      { category: "Overall Half Court", poss: 55, pctPoss: "84.6%", ppp: 0.618, rank: "42%", rating: "Average", fgm: 15, fga: 40, fgPct: 37.5 },
      { category: "Post Up", poss: 3, pctPoss: "5.5%", ppp: 1.333, rank: "-", rating: "-", fgm: 2, fga: 3, fgPct: 66.7 },
      { category: "Spot Up", poss: 4, pctPoss: "7.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "P&R Ball Handler", poss: 5, pctPoss: "9.1%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 4, fgPct: 0.0 },
      { category: "Cut", poss: 5, pctPoss: "9.1%", ppp: 0.800, rank: "-", rating: "-", fgm: 2, fga: 5, fgPct: 40.0 },
      { category: "Against Man", poss: 55, pctPoss: "100.0%", ppp: 0.618, rank: "43%", rating: "Average", fgm: 15, fga: 40, fgPct: 37.5 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 8, pctPoss: "12.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 2, fga: 6, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 8, pctPoss: "100.0%", ppp: 0.500, rank: "-", rating: "-", fgm: 2, fga: 6, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/argentina/302892-nerea-lagowski" }
    ]
  }),
  createTBDPlayer({
    id: "milagros-morell",
    stars: 4,
    name: "MILAGROS MORELL",
    position: "Center",
    height: "6'3\" / 191cm",
    dob: "2007",
    nationality: "Argentina",
    currentTeam: "FIBA U17 Women's Basketball World Cup 2024",
    league: "International",
    roleTag: "Motor / Physical",
    scoutingLine: "Physical center with a high motor and consistent rebounding.",
    background: [
      "Participated in FIBA U17 Women's Basketball World Cup 2024.",
      "Known for physical play and high energy on the court."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 23.9, ppg: 6.3, rpg: 6.6, apg: 0.7, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 191cm (6'3\")",
      "Physical and strong interior presence",
      "High motor and active movement"
    ],
    offensiveProfile: [
      "Interior finisher",
      "Productive in second-chance opportunities",
      "Physicality creates space in the paint"
    ],
    defensiveProfile: [
      "Consistent rebounder (6.6 RPG)",
      "Physical defender in the post"
    ],
    projection: {
      level: "NCAA D1 / Pro Prospect",
      role: "Physical Center / Energy Big",
      limitation: "Offensive range"
    },
    synergyStats: [
      { category: "Overall", poss: 110, pctPoss: "100.0%", ppp: 0.700, rank: "50%", rating: "Average", fgm: 32, fga: 83, fgPct: 38.6 },
      { category: "Transition", poss: 17, pctPoss: "15.5%", ppp: 1.000, rank: "65%", rating: "Good", fgm: 6, fga: 13, fgPct: 46.2 },
      { category: "Overall Half Court", poss: 93, pctPoss: "84.5%", ppp: 0.645, rank: "46%", rating: "Average", fgm: 26, fga: 70, fgPct: 37.1 },
      { category: "Post Up", poss: 13, pctPoss: "14.0%", ppp: 0.692, rank: "-", rating: "-", fgm: 4, fga: 11, fgPct: 36.4 },
      { category: "Spot Up", poss: 10, pctPoss: "10.8%", ppp: 0.300, rank: "-", rating: "-", fgm: 1, fga: 9, fgPct: 11.1 },
      { category: "P&R Ball Handler", poss: 12, pctPoss: "12.9%", ppp: 0.500, rank: "-", rating: "-", fgm: 3, fga: 11, fgPct: 27.3 },
      { category: "Cut", poss: 10, pctPoss: "10.8%", ppp: 0.900, rank: "-", rating: "-", fgm: 4, fga: 9, fgPct: 44.4 },
      { category: "Against Man", poss: 93, pctPoss: "100.0%", ppp: 0.645, rank: "47%", rating: "Average", fgm: 26, fga: 70, fgPct: 37.1 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 14, pctPoss: "12.7%", ppp: 0.714, rank: "-", rating: "-", fgm: 4, fga: 11, fgPct: 36.4 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 14, pctPoss: "100.0%", ppp: 0.714, rank: "-", rating: "-", fgm: 4, fga: 11, fgPct: 36.4 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/328245-milagros-morell" }
    ]
  }),
  createTBDPlayer({
    id: "meredith-venner",
    stars: 4,
    name: "MEREDITH VENNER",
    position: "Forward/Center",
    height: "6'2\" / 187cm",
    dob: "2006",
    nationality: "Colombia",
    currentTeam: "FIBA U18 Women's Americas Championship",
    league: "International",
    roleTag: "Athletic / Raw",
    scoutingLine: "Athletic forward/center with double-double potential; still raw but highly productive.",
    background: [
      "Participated in FIBA U18 Women's Americas Championship.",
      "One of Colombia's most promising young athletic bigs."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 0, ppg: 11.5, rpg: 10.0, apg: 0.8, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 187cm (6'2\")",
      "High-level athleticism and mobility",
      "Raw physical tools with high ceiling"
    ],
    offensiveProfile: [
      "Double-double threat (11.5 PPG, 10.0 RPG)",
      "Athletic finisher in transition and around the rim",
      "Developing offensive skill set"
    ],
    defensiveProfile: [
      "Elite rebounding potential",
      "Versatile defender due to mobility"
    ],
    projection: {
      level: "NCAA D1 (High-Major)",
      role: "Athletic Forward / Rebounder",
      limitation: "Technical refinement and experience"
    },
    synergyStats: [
      { category: "Overall", poss: 53, pctPoss: "100.0%", ppp: 0.623, rank: "40%", rating: "Average", fgm: 14, fga: 36, fgPct: 38.9 },
      { category: "Transition", poss: 10, pctPoss: "18.9%", ppp: 0.800, rank: "41%", rating: "Average", fgm: 4, fga: 9, fgPct: 44.4 },
      { category: "Overall Half Court", poss: 43, pctPoss: "81.1%", ppp: 0.581, rank: "39%", rating: "Average", fgm: 10, fga: 27, fgPct: 37.0 },
      { category: "Post Up", poss: 5, pctPoss: "11.6%", ppp: 0.800, rank: "-", rating: "-", fgm: 2, fga: 4, fgPct: 50.0 },
      { category: "Spot Up", poss: 3, pctPoss: "7.0%", ppp: 0.333, rank: "-", rating: "-", fgm: 1, fga: 3, fgPct: 33.3 },
      { category: "P&R Ball Handler", poss: 4, pctPoss: "9.3%", ppp: 0.250, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "Cut", poss: 4, pctPoss: "9.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Against Man", poss: 43, pctPoss: "100.0%", ppp: 0.581, rank: "40%", rating: "Average", fgm: 10, fga: 27, fgPct: 37.0 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 6, pctPoss: "11.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 6, pctPoss: "100.0%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/354606-meredith-venner" }
    ]
  }),
  createTBDPlayer({
    id: "diann-jackson",
    stars: 3,
    name: "DIANN JACKSON",
    position: "Forward",
    height: "6'2\" / 188cm",
    dob: "2007",
    nationality: "Puerto Rico",
    currentTeam: "Buffalo Bulls",
    league: "International",
    roleTag: "Active / Rebound",
    scoutingLine: "Active forward with a focus on rebounding and interior presence.",
    background: [
      "Participated in FIBA U17 Women's Basketball World Cup 2024.",
      "Active contributor for Puerto Rico's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 22.9, ppg: 7.9, rpg: 6.0, apg: 0.7, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 188cm (6'2\")",
      "Active and mobile forward",
      "Solid size for the position"
    ],
    offensiveProfile: [
      "Interior presence and finisher",
      "Active offensive rebounder",
      "Developing face-up game"
    ],
    defensiveProfile: [
      "Strong rebounding instincts (6.0 RPG)",
      "Versatile defensive coverage"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Active Forward / Rebounder",
      limitation: "Shooting consistency"
    },
    status: "Decline",
    skillMatrix: {
      overallScore: 0,
      categories: [],
      roleTagging: [],
      redFlags: [],
      conclusion: [
        { section: "Decision", notes: "DECLINE" }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "UNDER REVIEW", mark: false },
        { status: "DECLINE", mark: true }
      ]
    },
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/368943-diann-jackson" }
    ]
  }),
  createTBDPlayer({
    id: "loanna-tolentino",
    stars: 3,
    name: "LOANNA TOLENTINO",
    position: "Center",
    height: "6'4\" / 192cm",
    dob: "2006",
    nationality: "Dominican Republic",
    currentTeam: "FIBA U18 Women's Americas Championship 2024",
    league: "International",
    roleTag: "Size / Rebound",
    scoutingLine: "Sizable center providing rebounding and interior defense.",
    background: [
      "Participated in FIBA U18 Women's Americas Championship 2024.",
      "Interior presence for Dominican Republic."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 0, ppg: 1.7, rpg: 7.3, apg: 1.0, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 192cm (6'4\")",
      "Sizable interior frame",
      "Strong presence in the paint"
    ],
    offensiveProfile: [
      "Interior finisher",
      "Offensive rebounding threat",
      "Developing post moves"
    ],
    defensiveProfile: [
      "Strong rebounder (7.3 RPG)",
      "Interior defensive anchor"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Interior Big / Rebounder",
      limitation: "Mobility and range"
    },
    synergyStats: [
      { category: "Overall", poss: 41, pctPoss: "100.0%", ppp: 0.463, rank: "21%", rating: "Below Average", fgm: 8, fga: 28, fgPct: 28.6 },
      { category: "Transition", poss: 6, pctPoss: "14.6%", ppp: 0.667, rank: "27%", rating: "Below Average", fgm: 2, fga: 5, fgPct: 40.0 },
      { category: "Overall Half Court", poss: 35, pctPoss: "85.4%", ppp: 0.429, rank: "19%", rating: "Below Average", fgm: 6, fga: 23, fgPct: 26.1 },
      { category: "Post Up", poss: 4, pctPoss: "11.4%", ppp: 0.750, rank: "-", rating: "-", fgm: 1, fga: 3, fgPct: 33.3 },
      { category: "Spot Up", poss: 3, pctPoss: "8.6%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "P&R Ball Handler", poss: 3, pctPoss: "8.6%", ppp: 0.333, rank: "-", rating: "-", fgm: 0, fga: 2, fgPct: 0.0 },
      { category: "Cut", poss: 3, pctPoss: "8.6%", ppp: 0.667, rank: "-", rating: "-", fgm: 1, fga: 3, fgPct: 33.3 },
      { category: "Against Man", poss: 35, pctPoss: "100.0%", ppp: 0.429, rank: "20%", rating: "Below Average", fgm: 6, fga: 23, fgPct: 26.1 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 5, pctPoss: "12.2%", ppp: 0.400, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 5, pctPoss: "100.0%", ppp: 0.400, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/319244-loanna-tolentino" }
    ]
  }),
  createTBDPlayer({
    id: "anny-de-jesus",
    stars: 3,
    name: "ANNY DE JESUS",
    position: "Center",
    height: "TBD",
    dob: "2006",
    nationality: "Dominican Republic",
    currentTeam: "FIBA U18 Women's Americas Championship 2024",
    league: "International",
    roleTag: "Elite Rebounder",
    scoutingLine: "Exceptional rebounder with significant interior presence.",
    background: [
      "Participated in FIBA U18 Women's Americas Championship 2024.",
      "Elite rebounding specialist for Dominican Republic."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 0, ppg: 3.7, rpg: 12.3, apg: 0.8, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Sizable interior frame",
      "Strong and physical presence",
      "Exceptional rebounding motor"
    ],
    offensiveProfile: [
      "Elite offensive rebounder (12.3 RPG total)",
      "Interior finisher on second chances",
      "Developing post game"
    ],
    defensiveProfile: [
      "Dominant defensive rebounder",
      "Interior anchor and paint protector"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Elite Rebounder / Interior Big",
      limitation: "Offensive range and versatility"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/346666-anny-de-jesus" }
    ]
  }),
  createTBDPlayer({
    id: "valeria-mora",
    stars: 3,
    name: "VALERIA MORA",
    position: "Forward/Center",
    height: "6'2\" / 187cm",
    dob: "2006",
    nationality: "Mexico",
    currentTeam: "FIBA U18 Women's Americas Championship 2024",
    league: "International",
    roleTag: "Skilled Big",
    scoutingLine: "Skilled forward/center with scoring ability and rebounding presence.",
    background: [
      "Participated in FIBA U18 Women's Americas Championship 2024.",
      "Key scoring threat for Mexico's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 0, ppg: 10.3, rpg: 5.3, apg: 0.3, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 187cm (6'2\")",
      "Mobile and skilled frame",
      "Solid size for the position"
    ],
    offensiveProfile: [
      "Reliable interior scorer (10.3 PPG)",
      "Developing face-up game",
      "Active on the offensive glass"
    ],
    defensiveProfile: [
      "Solid rebounder (5.3 RPG)",
      "Versatile interior defender"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Skilled Forward / Center",
      limitation: "Defensive consistency"
    },
    synergyStats: [
      { category: "Overall", poss: 63, pctPoss: "100.0%", ppp: 0.556, rank: "31%", rating: "Below Average", fgm: 13, fga: 44, fgPct: 29.5 },
      { category: "Transition", poss: 12, pctPoss: "19.0%", ppp: 0.833, rank: "44%", rating: "Average", fgm: 5, fga: 11, fgPct: 45.5 },
      { category: "Overall Half Court", poss: 51, pctPoss: "81.0%", ppp: 0.490, rank: "25%", rating: "Below Average", fgm: 8, fga: 33, fgPct: 24.2 },
      { category: "Post Up", poss: 6, pctPoss: "11.8%", ppp: 0.667, rank: "-", rating: "-", fgm: 2, fga: 5, fgPct: 40.0 },
      { category: "Spot Up", poss: 5, pctPoss: "9.8%", ppp: 0.400, rank: "-", rating: "-", fgm: 1, fga: 5, fgPct: 20.0 },
      { category: "P&R Ball Handler", poss: 5, pctPoss: "9.8%", ppp: 0.200, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "Cut", poss: 4, pctPoss: "7.8%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Against Man", poss: 51, pctPoss: "100.0%", ppp: 0.490, rank: "26%", rating: "Below Average", fgm: 8, fga: 33, fgPct: 24.2 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 7, pctPoss: "11.1%", ppp: 0.429, rank: "-", rating: "-", fgm: 1, fga: 5, fgPct: 20.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 7, pctPoss: "100.0%", ppp: 0.429, rank: "-", rating: "-", fgm: 1, fga: 5, fgPct: 20.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/302964-valeria-mora" }
    ]
  }),
  createTBDPlayer({
    id: "ana-zesati",
    stars: 3,
    name: "ANA ZESATI",
    position: "Forward",
    height: "6'0\" / 184cm",
    dob: "2006",
    nationality: "Mexico",
    currentTeam: "FIBA U18 Women's Americas Championship 2024",
    league: "International",
    roleTag: "Rebound / Versatile",
    scoutingLine: "Versatile forward with strong rebounding presence and interior mobility.",
    background: [
      "Participated in FIBA U18 Women's Americas Championship 2024.",
      "Key interior contributor for Mexico's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 0, ppg: 10.5, rpg: 7.3, apg: 2.2, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 184cm (6'0\")",
      "Versatile and mobile forward frame",
      "Solid interior presence"
    ],
    offensiveProfile: [
      "Productive interior scorer (10.5 PPG)",
      "Strong rebounding presence (7.3 RPG)",
      "Developing playmaking skills (2.2 APG)"
    ],
    defensiveProfile: [
      "Active rebounder",
      "Versatile defensive coverage"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Versatile Forward / Rebounder",
      limitation: "Shooting range"
    },
    synergyStats: [
      { category: "Overall", poss: 104, pctPoss: "100.0%", ppp: 0.760, rank: "59%", rating: "Good", fgm: 31, fga: 79, fgPct: 39.2 },
      { category: "Transition", poss: 15, pctPoss: "14.4%", ppp: 1.200, rank: "82%", rating: "Very Good", fgm: 8, fga: 13, fgPct: 61.5 },
      { category: "Overall Half Court", poss: 89, pctPoss: "85.6%", ppp: 0.685, rank: "52%", rating: "Average", fgm: 23, fga: 66, fgPct: 34.8 },
      { category: "Post Up", poss: 12, pctPoss: "13.5%", ppp: 0.833, rank: "-", rating: "-", fgm: 4, fga: 10, fgPct: 40.0 },
      { category: "Spot Up", poss: 10, pctPoss: "11.2%", ppp: 0.500, rank: "-", rating: "-", fgm: 2, fga: 9, fgPct: 22.2 },
      { category: "P&R Ball Handler", poss: 11, pctPoss: "12.4%", ppp: 0.455, rank: "-", rating: "-", fgm: 2, fga: 10, fgPct: 20.0 },
      { category: "Cut", poss: 9, pctPoss: "10.1%", ppp: 1.000, rank: "-", rating: "-", fgm: 4, fga: 8, fgPct: 50.0 },
      { category: "Against Man", poss: 89, pctPoss: "100.0%", ppp: 0.685, rank: "53%", rating: "Average", fgm: 23, fga: 66, fgPct: 34.8 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 13, pctPoss: "12.5%", ppp: 0.769, rank: "-", rating: "-", fgm: 4, fga: 11, fgPct: 36.4 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 13, pctPoss: "100.0%", ppp: 0.769, rank: "-", rating: "-", fgm: 4, fga: 11, fgPct: 36.4 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/302968-ana-zesati" }
    ]
  }),
  createTBDPlayer({
    id: "ayla-mcdowell",
    stars: 5,
    name: "AYLA MCDOWELL",
    position: "Forward",
    height: "6'1\" / 186cm",
    dob: "2007",
    nationality: "Brazil",
    currentTeam: "University of South Carolina (USA)",
    league: "NCAA",
    roleTag: "Scoring Forward",
    scoutingLine: "High-volume scoring forward with elite interior presence and rebounding.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Committed to University of South Carolina (NCAA).",
      "Elite scoring threat for Brazil's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 36.6, ppg: 16.8, rpg: 4.5, apg: 1.5, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 186cm (6'1\")",
      "Strong and athletic forward frame",
      "High-level mobility and speed"
    ],
    offensiveProfile: [
      "Elite scoring output (16.8 PPG)",
      "Aggressive driver and finisher",
      "High-volume shooter and playmaker"
    ],
    defensiveProfile: [
      "Active perimeter defender",
      "Solid rebounding presence"
    ],
    projection: {
      level: "NCAA D1 (High-Major) / WNBA",
      role: "Scoring Forward / Wing",
      limitation: "Defensive consistency at elite level"
    },
    status: "Decline",
    skillMatrix: {
      overallScore: 0,
      categories: [],
      roleTagging: [],
      redFlags: [],
      conclusion: [
        { section: "Decision", notes: "DECLINE" }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "UNDER REVIEW", mark: false },
        { status: "DECLINE", mark: true }
      ]
    },
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/brazil/368432-ayla-mcdowell" }
    ]
  }),
  createTBDPlayer({
    id: "grace-pongang",
    stars: 4,
    name: "GRACE PONGANG",
    position: "Forward",
    height: "6'2\" / 187cm",
    dob: "2009",
    nationality: "Canada",
    currentTeam: "Louis Riel",
    league: "International",
    roleTag: "Top Rebound / Physical",
    scoutingLine: "Physical forward with elite rebounding numbers and strong interior presence.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Top rebounder for Canada's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 16.5, ppg: 3.3, rpg: 10.0, apg: 1.3, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 187cm (6'2\")",
      "Strong and physical interior frame",
      "High-energy player"
    ],
    offensiveProfile: [
      "Elite offensive rebounder (10.0 RPG total)",
      "Interior finisher",
      "Developing scoring range"
    ],
    defensiveProfile: [
      "Dominant rebounding presence",
      "Physical post defender"
    ],
    projection: {
      level: "NCAA D1 (High-Major)",
      role: "Physical Forward / Rebounder",
      limitation: "Offensive volume"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/canada/392596-grace-pongang" }
    ]
  }),
  createTBDPlayer({
    id: "isabella-roldan",
    stars: 4,
    name: "ISABELLA ROLDAN",
    position: "Center",
    height: "6'1\" / 185cm",
    dob: "2009",
    nationality: "Argentina",
    currentTeam: "9 de julio Bahia Blanca",
    league: "International",
    roleTag: "True 5 / Rebound",
    scoutingLine: "Traditional center with strong rebounding skills and interior presence.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Traditional interior anchor for Argentina's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 25.2, ppg: 7.5, rpg: 7.7, apg: 1.5, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 185cm (6'1\")",
      "Strong interior frame",
      "Traditional center profile"
    ],
    offensiveProfile: [
      "Interior scorer (7.5 PPG)",
      "Active offensive rebounder",
      "Developing post moves"
    ],
    defensiveProfile: [
      "Strong rebounder (7.7 RPG)",
      "Interior defensive presence"
    ],
    projection: {
      level: "NCAA D1 / Pro Prospect",
      role: "Traditional Center / Rebounder",
      limitation: "Lateral mobility"
    },
    synergyStats: [
      { category: "Overall", poss: 63, pctPoss: "100.0%", ppp: 0.603, rank: "35%", rating: "Average", fgm: 16, fga: 48, fgPct: 33.3 },
      { category: "Transition", poss: 8, pctPoss: "12.7%", ppp: 0.875, rank: "48%", rating: "Average", fgm: 3, fga: 7, fgPct: 42.9 },
      { category: "Overall Half Court", poss: 55, pctPoss: "87.3%", ppp: 0.564, rank: "34%", rating: "Average", fgm: 13, fga: 41, fgPct: 31.7 },
      { category: "Post Up", poss: 16, pctPoss: "29.1%", ppp: 0.438, rank: "-", rating: "-", fgm: 3, fga: 13, fgPct: 23.1 },
      { category: "Spot Up", poss: 10, pctPoss: "18.2%", ppp: 0.400, rank: "-", rating: "-", fgm: 1, fga: 9, fgPct: 11.1 },
      { category: "P&R Ball Handler", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Cut", poss: 13, pctPoss: "23.6%", ppp: 0.846, rank: "-", rating: "-", fgm: 5, fga: 11, fgPct: 45.5 },
      { category: "Against Man", poss: 55, pctPoss: "100.0%", ppp: 0.564, rank: "34%", rating: "Average", fgm: 13, fga: 41, fgPct: 31.7 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "17.5%", ppp: 0.545, rank: "-", rating: "-", fgm: 3, fga: 10, fgPct: 30.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.545, rank: "-", rating: "-", fgm: 3, fga: 10, fgPct: 30.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/argentina/342300-isabella-roldan" }
    ]
  }),
  createTBDPlayer({
    id: "maily-saavedra",
    stars: 3,
    name: "MAILY SAAVEDRA",
    position: "Forward",
    height: "6'0\" / 184cm",
    dob: "2009",
    nationality: "Colombia",
    currentTeam: "Leopardos",
    league: "International",
    roleTag: "Elite Rebound / Low Offense",
    scoutingLine: "Elite rebounding forward with a high motor and defensive focus.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Rebounding specialist for Colombia's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 29.0, ppg: 2.2, rpg: 9.7, apg: 0.7, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 184cm (6'0\")",
      "High motor and active energy",
      "Solid frame for the position"
    ],
    offensiveProfile: [
      "Elite offensive rebounder (9.7 RPG total)",
      "Low-volume scorer",
      "Developing offensive skills"
    ],
    defensiveProfile: [
      "Dominant defensive rebounder",
      "High-activity perimeter and interior defender"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Energy Forward / Rebounder",
      limitation: "Scoring output"
    },
    synergyStats: [
      { category: "Overall", poss: 41, pctPoss: "100.0%", ppp: 0.317, rank: "5%", rating: "Poor", fgm: 6, fga: 32, fgPct: 18.8 },
      { category: "Transition", poss: 6, pctPoss: "14.6%", ppp: 0.333, rank: "3%", rating: "Poor", fgm: 1, fga: 6, fgPct: 16.7 },
      { category: "Overall Half Court", poss: 35, pctPoss: "85.4%", ppp: 0.314, rank: "7%", rating: "Poor", fgm: 5, fga: 26, fgPct: 19.2 },
      { category: "Post Up", poss: 12, pctPoss: "34.3%", ppp: 0.167, rank: "-", rating: "-", fgm: 1, fga: 10, fgPct: 10.0 },
      { category: "Spot Up", poss: 2, pctPoss: "5.7%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 2, fgPct: 0.0 },
      { category: "P&R Ball Handler", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Cut", poss: 11, pctPoss: "31.4%", ppp: 0.545, rank: "-", rating: "-", fgm: 3, fga: 10, fgPct: 30.0 },
      { category: "Against Man", poss: 35, pctPoss: "100.0%", ppp: 0.314, rank: "7%", rating: "Poor", fgm: 5, fga: 26, fgPct: 19.2 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 4, pctPoss: "9.8%", ppp: 0.250, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 4, pctPoss: "100.0%", ppp: 0.250, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/colombia/381631-maily-saavedra" }
    ]
  }),
  createTBDPlayer({
    id: "lucianna-parrotta",
    stars: 3,
    name: "LUCIANNA PARROTTA",
    position: "Small Forward",
    height: "6'0\" / 183cm",
    dob: "2009",
    nationality: "Puerto Rico",
    currentTeam: "Free Agent",
    league: "International",
    roleTag: "Rebound / Motor / Wing",
    scoutingLine: "High-motor wing with strong rebounding and scoring versatility.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Versatile contributor for Puerto Rico's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 29.8, ppg: 10.0, rpg: 8.3, apg: 1.5, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 183cm (6'0\")",
      "High motor and active movement",
      "Versatile wing frame"
    ],
    offensiveProfile: [
      "Scoring threat (10.0 PPG)",
      "Strong offensive rebounder (8.3 RPG total)",
      "Developing playmaking skills"
    ],
    defensiveProfile: [
      "Active perimeter defender",
      "Consistent rebounder on the defensive end"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Energy Wing / Rebounder",
      limitation: "Shooting range"
    },
    synergyStats: [
      { category: "Overall", poss: 84, pctPoss: "100.0%", ppp: 0.714, rank: "53%", rating: "Average", fgm: 23, fga: 66, fgPct: 34.8 },
      { category: "Transition", poss: 16, pctPoss: "19.0%", ppp: 1.000, rank: "62%", rating: "Good", fgm: 7, fga: 14, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 68, pctPoss: "81.0%", ppp: 0.647, rank: "46%", rating: "Average", fgm: 16, fga: 52, fgPct: 30.8 },
      { category: "Post Up", poss: 14, pctPoss: "20.6%", ppp: 0.643, rank: "-", rating: "-", fgm: 4, fga: 12, fgPct: 33.3 },
      { category: "Spot Up", poss: 12, pctPoss: "17.6%", ppp: 0.417, rank: "-", rating: "-", fgm: 1, fga: 11, fgPct: 9.1 },
      { category: "P&R Ball Handler", poss: 8, pctPoss: "11.8%", ppp: 0.250, rank: "-", rating: "-", fgm: 1, fga: 6, fgPct: 16.7 },
      { category: "Cut", poss: 12, pctPoss: "17.6%", ppp: 1.083, rank: "-", rating: "-", fgm: 6, fga: 11, fgPct: 54.5 },
      { category: "Against Man", poss: 68, pctPoss: "100.0%", ppp: 0.647, rank: "47%", rating: "Average", fgm: 16, fga: 52, fgPct: 30.8 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "13.1%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/puerto-rico/371631-lucianna-parrotta" }
    ]
  }),
  createTBDPlayer({
    id: "vivian-grenald",
    stars: 3,
    name: "VIVIAN GRENALD",
    position: "Forward",
    height: "6'0\" / 183cm",
    dob: "2009",
    nationality: "Panama",
    currentTeam: "Correcaminos de Colon",
    league: "International",
    roleTag: "Strong / Rebound / Scoring",
    scoutingLine: "Strong forward with high scoring and rebounding production.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Primary scoring and rebounding option for Panama's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 22.7, ppg: 13.5, rpg: 8.0, apg: 1.3, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 183cm (6'0\")",
      "Strong and physical frame",
      "Interior presence"
    ],
    offensiveProfile: [
      "High-volume scorer (13.5 PPG)",
      "Aggressive rebounder (8.0 RPG)",
      "Developing interior scoring moves"
    ],
    defensiveProfile: [
      "Physical post defender",
      "Strong rebounding presence"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Physical Forward / Scorer",
      limitation: "Perimeter mobility"
    },
    synergyStats: [
      { category: "Overall", poss: 90, pctPoss: "100.0%", ppp: 0.700, rank: "51%", rating: "Average", fgm: 29, fga: 74, fgPct: 39.2 },
      { category: "Transition", poss: 12, pctPoss: "13.3%", ppp: 0.917, rank: "53%", rating: "Average", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 78, pctPoss: "86.7%", ppp: 0.667, rank: "49%", rating: "Average", fgm: 24, fga: 64, fgPct: 37.5 },
      { category: "Post Up", poss: 32, pctPoss: "41.0%", ppp: 0.625, rank: "-", rating: "-", fgm: 10, fga: 26, fgPct: 38.5 },
      { category: "Spot Up", poss: 12, pctPoss: "15.4%", ppp: 0.500, rank: "-", rating: "-", fgm: 3, fga: 11, fgPct: 27.3 },
      { category: "P&R Ball Handler", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Cut", poss: 14, pctPoss: "17.9%", ppp: 0.857, rank: "-", rating: "-", fgm: 6, fga: 12, fgPct: 50.0 },
      { category: "Against Man", poss: 78, pctPoss: "100.0%", ppp: 0.667, rank: "50%", rating: "Average", fgm: 24, fga: 64, fgPct: 37.5 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "12.2%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/panama/295536-vivian-grenald" }
    ]
  }),
  createTBDPlayer({
    id: "francisca-canello",
    stars: 4,
    name: "FRANCISCA CANELLO",
    position: "Center",
    height: "6'0\" / 182cm",
    dob: "2009",
    nationality: "Argentina",
    currentTeam: "Obras Sanitarias",
    league: "International",
    roleTag: "Mobile 5 / Rebound / Pass",
    scoutingLine: "Mobile center with strong rebounding and playmaking potential.",
    background: [
      "Participated in FIBA U16 Women's AmeriCup 2025.",
      "Mobile interior player for Argentina's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 29.3, ppg: 8.8, rpg: 8.7, apg: 2.3, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 182cm (6'0\")",
      "Mobile and agile for a center",
      "Solid interior frame"
    ],
    offensiveProfile: [
      "Versatile scorer (8.8 PPG)",
      "Strong rebounder (8.7 RPG)",
      "Developing playmaking ability (2.3 APG)"
    ],
    defensiveProfile: [
      "Active interior defender",
      "Consistent rebounder"
    ],
    projection: {
      level: "NCAA D1 / Pro Prospect",
      role: "Mobile Center / Playmaker",
      limitation: "Size against elite centers"
    },
    synergyStats: [
      { category: "Overall", poss: 76, pctPoss: "100.0%", ppp: 0.697, rank: "51%", rating: "Average", fgm: 23, fga: 60, fgPct: 38.3 },
      { category: "Transition", poss: 12, pctPoss: "15.8%", ppp: 0.917, rank: "53%", rating: "Average", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 64, pctPoss: "84.2%", ppp: 0.656, rank: "48%", rating: "Average", fgm: 18, fga: 50, fgPct: 36.0 },
      { category: "Post Up", poss: 13, pctPoss: "20.3%", ppp: 0.385, rank: "-", rating: "-", fgm: 2, fga: 10, fgPct: 20.0 },
      { category: "Spot Up", poss: 9, pctPoss: "14.1%", ppp: 0.667, rank: "-", rating: "-", fgm: 2, fga: 8, fgPct: 25.0 },
      { category: "P&R Ball Handler", poss: 4, pctPoss: "6.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Cut", poss: 12, pctPoss: "18.8%", ppp: 1.083, rank: "-", rating: "-", fgm: 6, fga: 11, fgPct: 54.5 },
      { category: "Against Man", poss: 64, pctPoss: "100.0%", ppp: 0.656, rank: "48%", rating: "Average", fgm: 18, fga: 50, fgPct: 36.0 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "14.5%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u16-womens-americup-2025/teams/argentina/369987-francisca-canello" }
    ]
  }),
  createTBDPlayer({
    id: "kinga-josepovits",
    stars: 4,
    name: "KINGA JOSEPOVITS",
    position: "Center",
    height: "6'5\" / 196cm",
    dob: "2008",
    nationality: "Hungary",
    currentTeam: "NKA Universitas Pecs",
    league: "International",
    roleTag: "Size / Interior / Rebound",
    scoutingLine: "Sizable center with strong interior presence and rebounding instincts.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Interior anchor for Hungary's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 22.2, ppg: 9.1, rpg: 6.4, apg: 1.0, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 196cm (6'5\")",
      "Exceptional size for the center position",
      "Strong interior frame"
    ],
    offensiveProfile: [
      "Interior scorer (9.1 PPG)",
      "Active offensive rebounder",
      "Developing post game"
    ],
    defensiveProfile: [
      "Strong rebounding presence (6.4 RPG)",
      "Interior defensive anchor"
    ],
    projection: {
      level: "NCAA D1 / Pro Prospect",
      role: "Interior Big / Rebounder",
      limitation: "Lateral speed"
    },
    synergyStats: [
      { category: "Overall", poss: 83, pctPoss: "100.0%", ppp: 0.771, rank: "61%", rating: "Good", fgm: 29, fga: 63, fgPct: 46.0 },
      { category: "Transition", poss: 14, pctPoss: "16.9%", ppp: 1.000, rank: "62%", rating: "Good", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 69, pctPoss: "83.1%", ppp: 0.725, rank: "58%", rating: "Good", fgm: 24, fga: 53, fgPct: 45.3 },
      { category: "Post Up", poss: 21, pctPoss: "30.4%", ppp: 0.571, rank: "-", rating: "-", fgm: 6, fga: 16, fgPct: 37.5 },
      { category: "Spot Up", poss: 5, pctPoss: "7.2%", ppp: 0.400, rank: "-", rating: "-", fgm: 1, fga: 5, fgPct: 20.0 },
      { category: "P&R Ball Handler", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Cut", poss: 19, pctPoss: "27.5%", ppp: 1.053, rank: "-", rating: "-", fgm: 10, fga: 16, fgPct: 62.5 },
      { category: "Against Man", poss: 69, pctPoss: "100.0%", ppp: 0.725, rank: "59%", rating: "Good", fgm: 24, fga: 53, fgPct: 45.3 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "13.3%", ppp: 0.727, rank: "-", rating: "-", fgm: 4, fga: 10, fgPct: 40.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.727, rank: "-", rating: "-", fgm: 4, fga: 10, fgPct: 40.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/hungary/322804-kinga-josepovits" }
    ]
  }),
  createTBDPlayer({
    id: "abigail-isaac",
    stars: 3,
    name: "ABIGAIL ISAAC",
    position: "Power Forward",
    height: "6'1\" / 186cm",
    dob: "2007",
    nationality: "Nigeria",
    currentTeam: "Mountain of Fire and Miracle",
    league: "International",
    roleTag: "Physical / Energy",
    scoutingLine: "Physical power forward with high energy and rebounding focus.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Energy contributor for Nigeria's youth team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 20.8, ppg: 5.4, rpg: 5.7, apg: 0.4, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 186cm (6'1\")",
      "Strong and physical frame",
      "High-energy motor"
    ],
    offensiveProfile: [
      "Interior presence and finisher",
      "Active on the offensive glass",
      "Developing scoring range"
    ],
    defensiveProfile: [
      "Physical post defender",
      "Strong rebounding presence"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Energy Forward / Rebounder",
      limitation: "Offensive polish"
    },
    synergyStats: [
      { category: "Overall", poss: 55, pctPoss: "100.0%", ppp: 0.582, rank: "34%", rating: "Average", fgm: 14, fga: 39, fgPct: 35.9 },
      { category: "Transition", poss: 8, pctPoss: "14.5%", ppp: 0.875, rank: "48%", rating: "Average", fgm: 2, fga: 7, fgPct: 28.6 },
      { category: "Overall Half Court", poss: 47, pctPoss: "85.5%", ppp: 0.532, rank: "30%", rating: "Below Average", fgm: 11, fga: 32, fgPct: 34.4 },
      { category: "Post Up", poss: 6, pctPoss: "12.8%", ppp: 0.667, rank: "-", rating: "-", fgm: 2, fga: 5, fgPct: 40.0 },
      { category: "Spot Up", poss: 4, pctPoss: "8.5%", ppp: 0.250, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "P&R Ball Handler", poss: 4, pctPoss: "8.5%", ppp: 0.250, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "Cut", poss: 4, pctPoss: "8.5%", ppp: 0.750, rank: "-", rating: "-", fgm: 2, fga: 4, fgPct: 50.0 },
      { category: "Against Man", poss: 47, pctPoss: "100.0%", ppp: 0.532, rank: "31%", rating: "Below Average", fgm: 11, fga: 32, fgPct: 34.4 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 7, pctPoss: "12.7%", ppp: 0.571, rank: "-", rating: "-", fgm: 2, fga: 5, fgPct: 40.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 7, pctPoss: "100.0%", ppp: 0.571, rank: "-", rating: "-", fgm: 2, fga: 5, fgPct: 40.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/nigeria/344156-abigail-isaac" }
    ]
  }),
  createTBDPlayer({
    id: "haminatu-ayodeji",
    stars: 3,
    name: "HAMINATU AYODEJI",
    position: "Small Forward",
    height: "6'0\" / 184cm",
    dob: "2007",
    nationality: "Nigeria",
    currentTeam: "Mountain of Fire and Miracle",
    league: "International",
    roleTag: "Motor / Rebound Wing",
    scoutingLine: "High-motor wing with strong rebounding and defensive activity.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Versatile wing for Nigeria's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 16.7, ppg: 5.4, rpg: 6.3, apg: 0.6, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 184cm (6'0\")",
      "High motor and active movement",
      "Versatile wing frame"
    ],
    offensiveProfile: [
      "Energy contributor and finisher",
      "Active offensive rebounder",
      "Developing scoring versatility"
    ],
    defensiveProfile: [
      "Strong rebounder for a wing (6.3 RPG)",
      "Active perimeter defender"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Energy Wing / Rebounder",
      limitation: "Shooting range"
    },
    synergyStats: [
      { category: "Overall", poss: 53, pctPoss: "100.0%", ppp: 0.717, rank: "53%", rating: "Average", fgm: 16, fga: 44, fgPct: 36.4 },
      { category: "Transition", poss: 11, pctPoss: "20.8%", ppp: 0.909, rank: "52%", rating: "Average", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 42, pctPoss: "79.2%", ppp: 0.667, rank: "49%", rating: "Average", fgm: 11, fga: 34, fgPct: 32.4 },
      { category: "Post Up", poss: 4, pctPoss: "9.5%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Spot Up", poss: 11, pctPoss: "26.2%", ppp: 0.273, rank: "-", rating: "-", fgm: 1, fga: 9, fgPct: 11.1 },
      { category: "P&R Ball Handler", poss: 4, pctPoss: "9.5%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 3, fgPct: 33.3 },
      { category: "Cut", poss: 6, pctPoss: "14.3%", ppp: 1.333, rank: "-", rating: "-", fgm: 4, fga: 6, fgPct: 66.7 },
      { category: "Against Man", poss: 42, pctPoss: "100.0%", ppp: 0.667, rank: "50%", rating: "Average", fgm: 11, fga: 34, fgPct: 32.4 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 4, pctPoss: "7.5%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 4, pctPoss: "100.0%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/nigeria/372308-haminatu-ayodeji" }
    ]
  }),
  createTBDPlayer({
    id: "manu-alves",
    stars: 4,
    name: "MANU ALVES",
    position: "Center",
    height: "6'3\" / 190cm",
    dob: "2006",
    nationality: "Brazil",
    currentTeam: "Illinois State University",
    league: "NCAA",
    roleTag: "Strong 5 / Scoring / Rebound",
    scoutingLine: "Strong center with high scoring production and rebounding dominance.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Committed to Illinois State University (NCAA).",
      "Primary interior threat for Brazil's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 30.8, ppg: 14.8, rpg: 7.7, apg: 2.5, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 190cm (6'3\")",
      "Strong and physical interior frame",
      "Solid mobility for her size"
    ],
    offensiveProfile: [
      "High-volume interior scorer (14.8 PPG)",
      "Strong offensive rebounder (7.7 RPG)",
      "Developing playmaking skills (2.5 APG)"
    ],
    defensiveProfile: [
      "Physical post defender",
      "Strong rebounding presence"
    ],
    projection: {
      level: "NCAA D1 (High-Major) / Pro",
      role: "Strong Center / Scorer",
      limitation: "Perimeter range"
    },
    status: "Decline",
    skillMatrix: {
      overallScore: 0,
      categories: [],
      roleTagging: [],
      redFlags: [],
      conclusion: [
        { section: "Decision", notes: "DECLINE" }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "UNDER REVIEW", mark: false },
        { status: "DECLINE", mark: true }
      ]
    },
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/brazil/259742-manu-alves" }
    ]
  }),
  createTBDPlayer({
    id: "sther-ubaka",
    stars: 3,
    name: "STHER UBAKA",
    position: "Power Forward",
    height: "5'11\" / 181cm",
    dob: "2007",
    nationality: "Brazil",
    currentTeam: "DME Academy",
    league: "International",
    roleTag: "Undersize 4 / Motor / Rebound",
    scoutingLine: "Undersized but high-motor power forward with strong rebounding and energy.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Energy leader for Brazil's youth national team."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 23.9, ppg: 7.2, rpg: 6.8, apg: 0.8, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 181cm (5'11\")",
      "High motor and relentless energy",
      "Mobile and active for her position"
    ],
    offensiveProfile: [
      "Interior presence and finisher",
      "Active on the offensive glass",
      "Developing face-up game"
    ],
    defensiveProfile: [
      "Strong rebounder (6.8 RPG)",
      "High-activity defender"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Energy Forward / Rebounder",
      limitation: "Size in the post"
    },
    synergyStats: [
      { category: "Overall", poss: 74, pctPoss: "100.0%", ppp: 0.689, rank: "48%", rating: "Average", fgm: 23, fga: 57, fgPct: 40.4 },
      { category: "Transition", poss: 12, pctPoss: "16.2%", ppp: 0.917, rank: "53%", rating: "Average", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 62, pctPoss: "83.8%", ppp: 0.645, rank: "45%", rating: "Average", fgm: 18, fga: 47, fgPct: 38.3 },
      { category: "Post Up", poss: 13, pctPoss: "21.0%", ppp: 0.385, rank: "-", rating: "-", fgm: 2, fga: 10, fgPct: 20.0 },
      { category: "Spot Up", poss: 9, pctPoss: "14.5%", ppp: 0.667, rank: "-", rating: "-", fgm: 2, fga: 8, fgPct: 25.0 },
      { category: "P&R Ball Handler", poss: 4, pctPoss: "6.5%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Cut", poss: 12, pctPoss: "19.4%", ppp: 1.083, rank: "-", rating: "-", fgm: 6, fga: 11, fgPct: 54.5 },
      { category: "Against Man", poss: 62, pctPoss: "100.0%", ppp: 0.645, rank: "46%", rating: "Average", fgm: 18, fga: 47, fgPct: 38.3 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 11, pctPoss: "14.9%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 11, pctPoss: "100.0%", ppp: 0.636, rank: "-", rating: "-", fgm: 3, fga: 9, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/brazil/330542-sther-ubaka" }
    ]
  }),
  createTBDPlayer({
    id: "julia-preis",
    stars: 4,
    name: "JULIA PREIS",
    position: "Center",
    height: "6'3\" / 191cm",
    dob: "2009",
    nationality: "Brazil",
    currentTeam: "Pontz Sao Jose",
    league: "International",
    roleTag: "Young Big / Size / Potential",
    scoutingLine: "Young center with significant size and high developmental potential.",
    background: [
      "Participated in FIBA U19 Women's Basketball World Cup 2025.",
      "Young interior prospect for Brazil."
    ],
    stats: { season: "2025-26", gp: 0, gs: 0, mpg: 18.9, ppg: 4.7, rpg: 5.3, apg: 0.5, bpg: 0, spg: 0, fgPct: 0, ftPct: 0, threePct: 0 },
    physicalProfile: [
      "Height: 191cm (6'3\")",
      "Significant size for her age",
      "Strong interior frame"
    ],
    offensiveProfile: [
      "Interior finisher",
      "Active offensive rebounder",
      "Developing post skills"
    ],
    defensiveProfile: [
      "Strong rebounding presence (5.3 RPG)",
      "Interior defensive potential"
    ],
    projection: {
      level: "NCAA D1 (High-Major)",
      role: "Interior Big / Development Project",
      limitation: "Experience and mobility"
    },
    synergyStats: [
      { category: "Overall", poss: 48, pctPoss: "100.0%", ppp: 0.646, rank: "45%", rating: "Average", fgm: 14, fga: 36, fgPct: 38.9 },
      { category: "Transition", poss: 8, pctPoss: "16.7%", ppp: 0.875, rank: "48%", rating: "Average", fgm: 3, fga: 7, fgPct: 42.9 },
      { category: "Overall Half Court", poss: 40, pctPoss: "83.3%", ppp: 0.600, rank: "39%", rating: "Average", fgm: 11, fga: 29, fgPct: 37.9 },
      { category: "Post Up", poss: 12, pctPoss: "30.0%", ppp: 0.333, rank: "-", rating: "-", fgm: 2, fga: 9, fgPct: 22.2 },
      { category: "Spot Up", poss: 4, pctPoss: "10.0%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "P&R Ball Handler", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Cut", poss: 11, pctPoss: "27.5%", ppp: 0.909, rank: "-", rating: "-", fgm: 5, fga: 10, fgPct: 50.0 },
      { category: "Against Man", poss: 40, pctPoss: "100.0%", ppp: 0.600, rank: "40%", rating: "Average", fgm: 11, fga: 29, fgPct: 37.9 },
      { category: "Against Zone", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "After Time Outs", poss: 7, pctPoss: "14.6%", ppp: 0.571, rank: "-", rating: "-", fgm: 2, fga: 6, fgPct: 33.3 },
      { category: "Out of Bounds", poss: 0, pctPoss: "0.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 0, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 7, pctPoss: "100.0%", ppp: 0.571, rank: "-", rating: "-", fgm: 2, fga: 6, fgPct: 33.3 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/events/fiba-u19-womens-basketball-world-cup-2025/teams/brazil/381484-julia-preis" }
    ]
  }),
  createTBDPlayer({
    id: "daria-bezshaposhnikova",
    stars: 3,
    name: "DARIA BESHAPOSHNIKOVA",
    position: "Guard",
    height: "5'6\" / 167cm",
    dob: "2007",
    nationality: "Russia",
    currentTeam: "MBA-MGUSiT-2",
    league: "Russian League",
    roleTag: "Historical Leader / Youth Star",
    scoutingLine: "Transitioning from youth to adult professional basketball, historical leader in appearances for MBA-MGUSiT-2.",
    background: [
      "Contract extended in 2024 with MBA, recognized as a key youth player.",
      "Reached 300 appearances for MBA-MGUSiT-2, a historical milestone for the club.",
      "Regularly featured in RFB reports as a leader in efficiency and assists in DUBL."
    ],
    physicalProfile: [
      "Height: 176cm",
      "Weight: 65kg",
      "Athletic build with good lateral quickness"
    ],
    offensiveProfile: [
      "High-IQ playmaker",
      "Reliable mid-range shooter",
      "Leader in assists for youth team"
    ],
    defensiveProfile: [
      "Active perimeter defender",
      "Good at reading passing lanes"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Starting Point Guard / Playmaker",
      limitation: "Size against elite physical guards"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/56108?" }
    ]
  }),
  createTBDPlayer({
    id: "maria-grishchuk",
    stars: 4,
    name: "MARIA GRISHCHUK",
    position: "Heavy Forward / Shooting Guard",
    height: "6'1\" / 185cm",
    dob: "14.02.2007",
    nationality: "Russia",
    currentTeam: "Dynamo-Farm (Kursk)",
    league: "Superleague",
    roleTag: "Bright Young Star / Sniper",
    scoutingLine: "One of the brightest young stars in Russian basketball, transitioned from MBA to Dynamo Kursk with impressive progress.",
    background: [
      "Recognized as one of the brightest young stars of the 2025/26 season.",
      "Led Dynamo-Farm to the Superleague semifinals in March 2026.",
      "Named MVP in December 2025 after a 15-point, 6-rebound performance against MBA-MGUSiT-2.",
      "Significant statistical jump: averaging 11.8 PPG compared to 3.7 PPG in the previous season."
    ],
    stats: { season: "2025-26", gp: 27, gs: 27, mpg: 27.9, ppg: 11.8, rpg: 3.1, apg: 0, bpg: 0, spg: 0, fgPct: 44.4, ftPct: 59.1, threePct: 44.0 },
    physicalProfile: [
      "Height: 185cm",
      "Weight: 80kg",
      "Versatile frame for Forward/Guard positions"
    ],
    offensiveProfile: [
      "Elite 3PT shooter (44%)",
      "Capable of scoring in bunches",
      "MVP-level offensive impact"
    ],
    defensiveProfile: [
      "Strong rebounder for a wing",
      "Solid post-up defense"
    ],
    projection: {
      level: "NCAA D1 (High-Major)",
      role: "Stretch Wing / Sniper",
      limitation: "Creating own shot against elite defenders"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/56111?" }
    ]
  }),
  createTBDPlayer({
    id: "alina-zmeevskaya",
    stars: 3,
    name: "ALINA ZMEEVSKAYA",
    position: "Point Guard / Shooting Guard",
    height: "5'11\" / 180cm",
    dob: "18.03.2007",
    nationality: "Russia",
    currentTeam: "Dynamo-Farm (Kursk)",
    league: "FONBET Superleague",
    roleTag: "Promising PG / Defensive Specialist",
    scoutingLine: "Promising point guard from Nizhnevartovsk, key rotation player for Dynamo-Farm with stability on the perimeter.",
    background: [
      "Key rotation player for Dynamo-Farm's 2026 Superleague semifinal run.",
      "Pride of the Khanty-Mansiysk region, transitioned successfully from youth to adult level.",
      "Noted by analysts as a defensive 'conductor' capable of neutralizing opponent leaders.",
      "Bronze medalist of DUBL 2025."
    ],
    stats: { season: "2025-26", gp: 29, gs: 28, mpg: 20.8, ppg: 6.6, rpg: 3.1, apg: 1.5, bpg: 0.2, spg: 1.3, fgPct: 50.5, ftPct: 78.7, threePct: 21.2 },
    physicalProfile: [
      "Height: 180cm",
      "Solid backcourt size"
    ],
    offensiveProfile: [
      "Floor general",
      "Efficient free throw shooter (78.7%)",
      "Controlled pace of play"
    ],
    defensiveProfile: [
      "Defensive 'conductor'",
      "High-level perimeter lockdown ability"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Defensive Playmaker / Perimeter Lockdown",
      limitation: "Scoring volume"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/56113?" }
    ]
  }),
  createTBDPlayer({
    id: "maria-ilyina",
    stars: 3,
    name: "MARIA ILYINA",
    position: "Point Guard / Shooting Guard",
    height: "5'8.5\" / 174cm",
    dob: "07.04.2007",
    nationality: "Russia",
    currentTeam: "Sparta & K-2 (Vidnoe)",
    league: "Superleague / DUBL",
    roleTag: "Motor / Three-time Champion",
    scoutingLine: "Three-time winner of the Russian Championship for her age, characterized as the \"motor\" of the team.",
    background: [
      "Three-time winner of the Russian Youth Championship (2021-2024).",
      "Champion of the Students' Spartakiad (2022).",
      "One of the most productive players in the DUBL 'Final Eight' in April 2025.",
      "Characterized by club press as the 'motor' of the team."
    ],
    stats: { season: "2025-26", gp: 12, gs: 0, mpg: 8.1, ppg: 2.1, rpg: 1.2, apg: 0.4, bpg: 0.3, spg: 0.7, fgPct: 29.2, ftPct: 62.5, threePct: 14.3 },
    physicalProfile: [
      "Height: 170cm",
      "Quick and agile guard"
    ],
    offensiveProfile: [
      "High-motor 'engine' of the team",
      "Aggressive driver",
      "Playmaking focus"
    ],
    defensiveProfile: [
      "Pesky on-ball defender",
      "High energy and pressure"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Energy Guard / Spark Plug",
      limitation: "Size in the paint"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/56114?" }
    ]
  }),
  createTBDPlayer({
    id: "olesya-galenko",
    stars: 3,
    name: "OLESYA GALENKO",
    position: "Shooting Guard / Forward",
    height: "5'10\" / 178cm",
    dob: "04.05.2007",
    nationality: "Russia",
    currentTeam: "MBA-MGUSiT-2",
    league: "FONBET Superleague",
    roleTag: "Main Sniper / Youth Champion",
    scoutingLine: "Main sniper of the youth squad, winner of the DUBL Championship, established rotation player in Superleague.",
    background: [
      "Known as the 'main sniper' of the MBA youth system.",
      "Scored 21 points with 5 three-pointers against Stavropolchanka in 2025/26.",
      "Winner of the DUBL Championship in Spring 2025.",
      "Candidate for the Russian U19 National Team."
    ],
    stats: { season: "2025-26", gp: 22, gs: 2, mpg: 12.8, ppg: 3.2, rpg: 2.0, apg: 0.8, bpg: 0.2, spg: 1.0, fgPct: 28.8, ftPct: 57.1, threePct: 20.4 },
    physicalProfile: [
      "Height: 180cm",
      "Classic wing profile"
    ],
    offensiveProfile: [
      "Elite sniper",
      "Consistent outside threat",
      "High shooting volume"
    ],
    defensiveProfile: [
      "Positionally sound",
      "Active in team defensive schemes"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "3-and-D Wing / Sniper",
      limitation: "Ball handling under pressure"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/43510?" }
    ]
  }),
  createTBDPlayer({
    id: "sofia-golubeva",
    stars: 4,
    name: "SOFIA GOLUBEVA",
    position: "Heavy Forward",
    height: "6'2\" / 187cm",
    dob: "27.11.2006",
    nationality: "Russia",
    currentTeam: "UGMK-Junior (Ekaterinburg)",
    league: "FONBET Superleague",
    roleTag: "Dominant Forward / Symbolic Five",
    scoutingLine: "Key player for UGMK system, member of the Superleague Symbolic Five, debuted for the main UGMK team.",
    background: [
      "Named to the Symbolic Five of the FONBET Superleague regular season in March 2026.",
      "Debuted for the main UGMK team in the Russian Cup in December 2025.",
      "Named to the Symbolic Five of the DUBL 'Final Eight' in May 2024.",
      "Known for clutch shooting, including a game-winning three-pointer in January 2026."
    ],
    stats: { season: "2025-26", gp: 29, gs: 29, mpg: 33.9, ppg: 19.7, rpg: 8.5, apg: 2.3, bpg: 0.4, spg: 1.1, fgPct: 47, ftPct: 89, threePct: 29 },
    physicalProfile: [
      "Height: 186cm",
      "Strong and mobile forward"
    ],
    offensiveProfile: [
      "Dominant interior scorer",
      "Double-double threat",
      "Superleague Symbolic Five member"
    ],
    defensiveProfile: [
      "Reliable rebounder",
      "Interior presence"
    ],
    projection: {
      level: "NCAA D1 (High-Major)",
      role: "Starting Power Forward / Interior Force",
      limitation: "Perimeter defense against smaller wings"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/43513?" }
    ]
  }),
  createTBDPlayer({
    id: "ekaterina-lyashenko",
    stars: 3,
    name: "EKATERINA LYASHENKO",
    position: "Heavy Forward",
    height: "6'2\" / 189cm",
    dob: "20.02.2006",
    nationality: "Russia",
    currentTeam: "Sparta & K-2 (Vidnoe)",
    league: "FONBET Superleague",
    roleTag: "Athletic Forward / Scoring Leader",
    scoutingLine: "Athletic forward with strong rebounding skills, previously in MBA system, now a key player for Sparta & K-2.",
    background: [
      "Transitioned from MBA to Sparta & K system for the 2025/26 season.",
      "Awarded Top Scorer for Russia U18 at the Khalipsky Cup international tournament.",
      "Recognized as an athletic forward with exceptional rebounding presence.",
      "Established starter for Sparta & K-2 in the Superleague."
    ],
    stats: { season: "2025-26", gp: 29, gs: 29, mpg: 30.3, ppg: 11.8, rpg: 6.4, apg: 2.4, bpg: 0.8, spg: 1.1, fgPct: 51, ftPct: 81, threePct: 34 },
    physicalProfile: [
      "Height: 188cm",
      "Athletic and long frame"
    ],
    offensiveProfile: [
      "Transition threat",
      "Finishing around the rim",
      "High-upside offensive tools"
    ],
    defensiveProfile: [
      "Versatile defender",
      "Shot-blocking potential"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major+)",
      role: "Athletic Forward / Transition Threat",
      limitation: "Half-court creation"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/43514?" }
    ]
  }),
  createTBDPlayer({
    id: "ekaterina-tikhonova",
    stars: 5,
    name: "EKATERINA TIKHONOVA",
    position: "Center",
    height: "6'5\" / 195cm",
    dob: "08.07.2008",
    nationality: "Russia",
    currentTeam: "Samara-2 / Samara-DUBL",
    league: "FONBET Superleague",
    roleTag: "High Upside / Size",
    scoutingLine: "Classic \"post\" with soft touch and great defensive reading, key asset for Samara system.",
    background: [
      "Included in the Russian U18 National Team training camp in May 2025.",
      "Stated ambition to perform dunks in official matches, highlighting her unique athleticism.",
      "Consistently among the leaders in rebounds and blocks in youth leagues (DUBL).",
      "Regularly included in the Samara-2 roster for Superleague matches at age 17."
    ],
    stats: { season: "2025-26", gp: 29, gs: 29, mpg: 30.3, ppg: 11.8, rpg: 6.4, apg: 2.4, bpg: 0.8, spg: 1.1, fgPct: 51, ftPct: 81, threePct: 34 },
    physicalProfile: [
      "Height: 195cm",
      "Exceptional size and length"
    ],
    offensiveProfile: [
      "Interior anchor",
      "Developing post game",
      "High-percentage finisher"
    ],
    defensiveProfile: [
      "Elite rim protection potential",
      "Rebounding dominance"
    ],
    projection: {
      level: "NCAA D1 (High-Major) / WNBA",
      role: "Defensive Anchor / Classic Post",
      limitation: "Speed in transition"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/56117?" }
    ]
  }),
  createTBDPlayer({
    id: "victoria-prozorova",
    stars: 3,
    name: "VICTORIA PROZOROVA",
    position: "Point Guard / Shooting Guard",
    height: "5'9\" / 175cm",
    dob: "04.01.2006",
    nationality: "Russia",
    currentTeam: "MBA-MGUSiT-2",
    league: "Russian Superleague",
    roleTag: "Aggressive PG / Youth Champion",
    scoutingLine: "Key point guard for MBA system, known for aggressive drives and accurate passing, U19 national team candidate.",
    background: [
      "Established rotation player for MBA-MGUSiT-2 in the Superleague.",
      "Champion of the Russian Youth Championship (DUBL) in 2024.",
      "Regularly called up to the Russian U19 National Team in 2025.",
      "Noted for high speed of decision-making and strong individual defense."
    ],
    stats: { season: "2025-26", gp: 24, gs: 0, mpg: 12.1, ppg: 3.9, rpg: 0.9, apg: 1.3, bpg: 0.6, spg: 0.3, fgPct: 38, ftPct: 69, threePct: 32 },
    physicalProfile: [
      "Height: 173cm",
      "Compact and strong guard"
    ],
    offensiveProfile: [
      "Aggressive playmaker",
      "Youth champion experience",
      "Creative finisher"
    ],
    defensiveProfile: [
      "Tough on-ball defender",
      "Competitive spirit"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Backup PG / Aggressive Playmaker",
      limitation: "Size against elite physical guards"
    },
    status: "Scout",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/players/43515?" }
    ]
  }),
  createTBDPlayer({
    id: "karina-komarova",
    stars: 3,
    name: "KARINA KOMAROVA",
    position: "Heavy Forward / Center",
    height: "6'2\" / 187cm",
    dob: "12.04.2004",
    nationality: "Russia",
    currentTeam: "Sparta & K (Vidnoe)",
    league: "FONBET Premier League",
    roleTag: "Developing Pro / Homegrown Talent",
    scoutingLine: "Homegrown talent from Vidnoie, transitioning successfully to the elite Premier League level.",
    background: [
      "Important rotation player for Sparta & K in the elite Premier League.",
      "Showed significant progress during the 2025/26 season, gaining confidence in top-tier matches.",
      "Homegrown player who progressed through the entire Vidnoie youth system.",
      "Former undisputed leader of youth squads, with multiple high-scoring performances."
    ],
    stats: { season: "2025-26", gp: 29, gs: 29, mpg: 33.9, ppg: 19.7, rpg: 8.5, apg: 2.3, bpg: 0.4, spg: 1.1, fgPct: 47, ftPct: 89, threePct: 29 },
    physicalProfile: [
      "Height: 186cm",
      "Strong interior frame"
    ],
    offensiveProfile: [
      "Post-up threat",
      "Reliable interior scoring",
      "Physical finisher"
    ],
    defensiveProfile: [
      "Strong post defender",
      "Rebounding focus"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Interior Big / Post-up Specialist",
      limitation: "Range and perimeter mobility"
    },
    synergyStats: [
      { category: "Overall", poss: 51, pctPoss: "100.0%", ppp: 0.529, rank: "29%", rating: "Below Average", fgm: 12, fga: 32, fgPct: 37.5 },
      { category: "Transition", poss: 2, pctPoss: "3.9%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 2, fgPct: 0.0 },
      { category: "Overall Half Court", poss: 49, pctPoss: "96.1%", ppp: 0.551, rank: "38%", rating: "Average", fgm: 12, fga: 30, fgPct: 40.0 },
      { category: "Post Up", poss: 5, pctPoss: "10.2%", ppp: 1.200, rank: "-", rating: "-", fgm: 3, fga: 4, fgPct: 75.0 },
      { category: "Spot Up", poss: 2, pctPoss: "4.1%", ppp: 1.000, rank: "-", rating: "-", fgm: 1, fga: 2, fgPct: 50.0 },
      { category: "P&R Ball Handler", poss: 5, pctPoss: "10.2%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 3, fgPct: 0.0 },
      { category: "Cut", poss: 4, pctPoss: "8.2%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 4, fgPct: 25.0 },
      { category: "Against Man", poss: 47, pctPoss: "95.9%", ppp: 0.532, rank: "35%", rating: "Average", fgm: 11, fga: 29, fgPct: 37.9 },
      { category: "Against Zone", poss: 2, pctPoss: "4.1%", ppp: 1.000, rank: "-", rating: "-", fgm: 1, fga: 1, fgPct: 100.0 },
      { category: "After Time Outs", poss: 5, pctPoss: "9.8%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 2, fgPct: 0.0 },
      { category: "Out of Bounds", poss: 1, pctPoss: "20.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 1, fgPct: 0.0 },
      { category: "Last 4 Sec. of Shot Clock", poss: 4, pctPoss: "80.0%", ppp: 0.000, rank: "-", rating: "-", fgm: 0, fga: 1, fgPct: 0.0 }
    ],
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/player/80596?league=wpremier&season=2026&teamId=651" }
    ]
  }),
  createTBDPlayer({
    id: "sofia-stepanova",
    stars: 3,
    name: "SOFIA STEPANOVA",
    position: "Center",
    height: "6'1\" / 185cm",
    dob: "18.03.2004",
    nationality: "Russia",
    currentTeam: "Sparta & K-2 (Vidnoe)",
    league: "FONBET Superleague",
    roleTag: "Double-Double Threat / KMS",
    scoutingLine: "Bronze medalist of Superleague, known for double-double performances and high free throw accuracy.",
    background: [
      "Regularly records double-doubles in the Superleague, including a 12-point, 10-rebound game against Kazanochka.",
      "Bronze medalist of the Superleague (2024).",
      "Winner of the Russian Youth Championship (2021) and Students' Spartakiad.",
      "Candidate for Master of Sports (KMS) title."
    ],
    stats: { season: "2025-26", gp: 14, gs: 0, mpg: 23.0, ppg: 8.9, rpg: 7.1, apg: 1.7, bpg: 0.4, spg: 1.4, fgPct: 52, ftPct: 73, threePct: 0 },
    physicalProfile: [
      "Height: 188cm",
      "Mobile and sizable forward"
    ],
    offensiveProfile: [
      "Double-double potential",
      "Active on the glass",
      "Developing face-up game"
    ],
    defensiveProfile: [
      "Consistent rebounder",
      "Versatile interior defender"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major)",
      role: "Rebounding Forward / Double-Double Threat",
      limitation: "Shooting range"
    },
    status: "Under Review",
    sourceLinks: [
      { label: "Russian League Profile", url: "https://russiabasket.ru/player/81180?league=women5x5" }
    ]
  }),
  createTBDPlayer({
    id: "melina-karra",
    status: "Scout",
    name: "MELINA KARRA",
    position: "F",
    height: "5'10\" / 178cm",
    dob: "2007",
    nationality: "Greece",
    handedness: "Left",
    stars: 3,
    currentTeam: "Antaeus",
    league: "A2 Greece",
    roleTag: "Low Usage / Role Player / Size",
    scoutingLine: "U20 Scouting Europe Wing / Forward; strong physical tools, quick first step, but struggling with shooting consistency (17% 3PT).",
    videoUrl: "https://drive.google.com/drive/folders/1Ar9-TkZ6ku3WYwKTD5HHv0nNaCt9UDDZ?usp=share_link",
    background: [
      "Participated in FIBA U18 Women's EuroBasket 2025.",
      "Rotation forward for Greece's youth national team.",
      "Currently playing in Greek A2 League for Antaeus.",
      "Competed in the Greek A2 youth league championship (2025-26)."
    ],
    stats: {
      season: "2025-26",
      leagueLabel: "A2 Greece",
      gp: 8,
      gs: 0,
      mpg: 23.5,
      ppg: 7.5,
      rpg: 5.1,
      apg: 0.8,
      bpg: 0.5,
      spg: 1.0,
      fgPct: 43.0,
      ftPct: 53.0,
      threePct: 17.0,
      twoFG: "2.6/6.1 (43%)",
      threeFG: "0.4/2.3 (17%)",
      ftFG: "1.1/2.1 (53%)",
      pir: 5.4
    },
    gameLogs: [
      { date: "Game 1", opponent: "A2 League", gs: false, min: 22.6, fgm: 3, fga: 9, fgPct: 33.3, threePm: 0, threePa: 3, threePct: 0, ftm: 0, fta: 1, ftPct: 0, off: 0, def: 4, tot: 4, pf: 0, ast: 0, to: 1, blk: 0, stl: 0, pts: 6 },
      { date: "Game 2", opponent: "A2 League", gs: false, min: 18.0, fgm: 5, fga: 7, fgPct: 71.4, threePm: 1, threePa: 3, threePct: 33.3, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 3, tot: 3, pf: 0, ast: 0, to: 2, blk: 0, stl: 1, pts: 11 },
      { date: "Game 3", opponent: "A2 League", gs: false, min: 24.8, fgm: 2, fga: 10, fgPct: 20.0, threePm: 0, threePa: 4, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 6, tot: 6, pf: 0, ast: 2, to: 1, blk: 1, stl: 3, pts: 4 },
      { date: "Game 4", opponent: "A2 League", gs: false, min: 16.1, fgm: 3, fga: 9, fgPct: 33.3, threePm: 2, threePa: 3, threePct: 66.7, ftm: 0, fta: 2, ftPct: 0, off: 0, def: 7, tot: 7, pf: 0, ast: 0, to: 3, blk: 1, stl: 1, pts: 8 },
      { date: "Game 5", opponent: "A2 League", gs: false, min: 29.6, fgm: 2, fga: 12, fgPct: 16.7, threePm: 0, threePa: 3, threePct: 0, ftm: 8, fta: 11, ftPct: 72.7, off: 0, def: 6, tot: 6, pf: 0, ast: 3, to: 2, blk: 1, stl: 2, pts: 12 },
      { date: "Game 6", opponent: "A2 League", gs: false, min: 24.1, fgm: 3, fga: 9, fgPct: 33.3, threePm: 0, threePa: 0, threePct: 0, ftm: 1, fta: 2, ftPct: 50.0, off: 0, def: 6, tot: 6, pf: 0, ast: 1, to: 1, blk: 1, stl: 0, pts: 7 },
      { date: "Game 7", opponent: "A2 League", gs: false, min: 19.8, fgm: 3, fga: 5, fgPct: 60.0, threePm: 0, threePa: 0, threePct: 0, ftm: 0, fta: 0, ftPct: 0, off: 0, def: 4, tot: 4, pf: 0, ast: 0, to: 2, blk: 0, stl: 1, pts: 6 },
      { date: "Game 8", opponent: "A2 League", gs: false, min: 25.5, fgm: 3, fga: 6, fgPct: 50.0, threePm: 0, threePa: 2, threePct: 0, ftm: 0, fta: 1, ftPct: 0, off: 0, def: 5, tot: 5, pf: 0, ast: 0, to: 4, blk: 0, stl: 0, pts: 6 }
    ],
    physicalProfile: [
      "Height: 178cm (5'10\")",
      "Strong frame, good athleticism",
      "Moves well, can apply pressure on the ball defensively",
      "Quick first step, can beat defender off the dribble"
    ],
    offensiveProfile: [
      "Lefty, very strong dominant hand (rarely goes right)",
      "Main issue is shooting (18% 3PT), lacks confidence in shot",
      "Good job stopping in the paint, sees extra pass",
      "Capable of finishing through contact (inconsistent)"
    ],
    defensiveProfile: [
      "Active rotation defender",
      "Good physical tools for perimeter defense",
      "Contributes on the glass (5.1 RPG)"
    ],
    projection: {
      level: "NCAA D1 (Mid-Major) / International",
      role: "Rotation Wing / Role Player",
      limitation: "Shooting consistency and dominant hand reliance"
    },
    skillMatrix: {
      overallScore: 153,
      categories: [
        {
          name: "Physical Profile & Athleticism",
          total: 30.5,
          skills: [
            { name: "Length (Wingspan impact)", score: 6, weight: 1.0, total: 6.0 },
            { name: "Lateral Quickness", score: 7, weight: 1.1, total: 7.7 },
            { name: "Explosiveness (1st step)", score: 7, weight: 1.2, total: 8.4 },
            { name: "Deceleration / Body Control", score: 7, weight: 1.2, total: 8.4 }
          ]
        },
        {
          name: "Offensive Impact",
          total: 35.6,
          skills: [
            { name: "Catch & Shoot (3PT)", score: 4, weight: 1.3, total: 5.2 },
            { name: "Attacking Closeouts", score: 6, weight: 1.1, total: 6.6 },
            { name: "Off-ball Movement", score: 7, weight: 1.1, total: 7.7 },
            { name: "Transition Play", score: 7, weight: 1.2, total: 8.4 },
            { name: "Secondary Creation", score: 7, weight: 1.1, total: 7.7 }
          ]
        },
        {
          name: "Basketball IQ & Decision Making",
          total: 22.0,
          skills: [
            { name: "Extra Pass / Ball Flow", score: 7, weight: 1.1, total: 7.7 },
            { name: "Closeout Reading", score: 7, weight: 1.1, total: 7.7 },
            { name: "Shot Selection", score: 6, weight: 1.1, total: 6.6 }
          ]
        },
        {
          name: "Defensive Impact",
          total: 34.7,
          skills: [
            { name: "Point-of-Attack Defense", score: 7, weight: 1.2, total: 8.4 },
            { name: "Off-ball Awareness", score: 8, weight: 1.1, total: 8.8 },
            { name: "Switching Versatility", score: 7, weight: 1.3, total: 9.1 },
            { name: "Deflections / Activity", score: 7, weight: 1.2, total: 8.4 }
          ]
        },
        {
          name: "Intangibles",
          total: 30.2,
          skills: [
            { name: "Motor", score: 7, weight: 1.1, total: 7.7 },
            { name: "Toughness", score: 8, weight: 1.1, total: 8.8 },
            { name: "Coachability", score: 6, weight: 1.0, total: 6.0 },
            { name: "Team Defense Communication", score: 7, weight: 1.1, total: 7.7 }
          ]
        }
      ],
      roleTagging: [
        { name: "Secondary Creator", color: "bg-blue-100 text-blue-800", value: "Y" },
        { name: "Two-Way Wing", color: "bg-green-100 text-green-800", value: "N" },
        { name: "Corner Spacer", color: "bg-purple-100 text-purple-800", value: "Y" },
        { name: "Slasher / Cutter", color: "bg-orange-100 text-orange-800", value: "TBD" }
      ],
      redFlags: [
        { risk: "No shooting (3PT)", value: "Yes" },
        { risk: "Strong Left", value: "Yes" }
      ],
      conclusion: [
        { section: "Current Impact", notes: "Medium" },
        { section: "Immediate Role", notes: "Rotation" },
        { section: "Main Strength", notes: "Physical Profile & Athleticism" },
        { section: "Main Risk", notes: "3PT Shooting" },
        { section: "Summary", notes: "Overall, I liked her more than I didn’t. She has very good physical tools — strong frame, good athleticism, moves well, and can apply pressure on the ball defensively. She has a quick first step and can beat her defender off the dribble, especially with a crossover. She does a good job stopping in the paint, sees the extra pass both inside and on kick-outs, and is capable of finishing through contact, although not consistently. The main issue is her shooting — she basically doesn’t have a reliable shot. She’s a lefty, and a very strong one. She rarely goes right — usually no more than one or two dribbles — which limits her quite a bit. At this point, I see her more as a solid rotation player or role player, but probably not more than that." }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "SCOUT", mark: true },
        { status: "PASS", mark: false }
      ]
    },
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/345738-melina-karra" }
    ]
  }),
  createTBDPlayer({
    id: "gela-kacinskaite",
    status: "Scout",
    stars: 2.5,
    name: "Gela Kacinskaite",
    image: "https://picsum.photos/seed/gela-kacinskaite/400/500",
    videoUrl: "https://drive.google.com/drive/folders/1ULo8hmagyxrt-KQ_d4sjPH1oYGDLbkPM?usp=share_link",
    height: "5'8\" / 173cm",
    dob: "Apr 1, 2008",
    nationality: "Lithuania",
    handedness: "Right",
    currentTeam: "Krepšinio akademija 'Saulė'",
    league: "Lithuanian League",
    roleTag: "Energy / Defensive / System Player",
    stats: {
      ppg: 3.0,
      rpg: 2.6,
      apg: 0.4,
      spg: 0.6,
      bpg: 0.1,
      fgPct: 40.0,
      threePct: 100.0,
      ftPct: 37.5
    },
    background: [
      "Stable participant in Lithuania's national programs across various age categories (2023-2025).",
      "Competed in FIBA U18 Women's European Championship Division B.",
      "Performs well against weaker opponents (e.g., Kosovo, Azerbaijan) but struggles significantly against physical teams (Sweden, Croatia).",
      "Currently plays for Siauliai in the Lithuanian system, serving as a depth piece."
    ],
    gameLogs: [
      { date: "04/07/2025", opponent: "Iceland", gs: false, min: 15, fgm: 1, fga: 1, fgPct: 100.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 2, ftPct: 0.0, off: 0, def: 4, tot: 4, pf: 2, ast: 1, to: 1, blk: 0, stl: 1, pts: 2 },
      { date: "05/07/2025", opponent: "Kosovo", gs: false, min: 16, fgm: 2, fga: 5, fgPct: 40.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 2, fta: 2, ftPct: 100.0, off: 1, def: 1, tot: 2, pf: 2, ast: 1, to: 1, blk: 0, stl: 1, pts: 6 },
      { date: "06/07/2025", opponent: "Azerbaijan", gs: false, min: 19, fgm: 1, fga: 2, fgPct: 50.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 2, ftPct: 0.0, off: 3, def: 2, tot: 5, pf: 1, ast: 0, to: 0, blk: 0, stl: 0, pts: 2 },
      { date: "08/07/2025", opponent: "Ukraine", gs: false, min: 21, fgm: 4, fga: 4, fgPct: 100.0, threePm: 1, threePa: 1, threePct: 100.0, ftm: 1, fta: 2, ftPct: 50.0, off: 1, def: 2, tot: 3, pf: 3, ast: 0, to: 2, blk: 0, stl: 2, pts: 10 },
      { date: "09/07/2025", opponent: "Bosnia and Herzegovina", gs: false, min: 22, fgm: 2, fga: 9, fgPct: 22.2, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 0, ftPct: 0.0, off: 1, def: 2, tot: 3, pf: 0, ast: 1, to: 0, blk: 1, stl: 1, pts: 4 },
      { date: "11/07/2025", opponent: "Great Britain", gs: false, min: 8, fgm: 0, fga: 1, fgPct: 0.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 0, ftPct: 0.0, off: 0, def: 0, tot: 0, pf: 1, ast: 0, to: 1, blk: 0, stl: 0, pts: 0 },
      { date: "12/07/2025", opponent: "Sweden", gs: false, min: 9, fgm: 0, fga: 3, fgPct: 0.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 0, ftPct: 0.0, off: 0, def: 1, tot: 1, pf: 1, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 },
      { date: "13/07/2025", opponent: "Croatia", gs: false, min: 5, fgm: 0, fga: 0, fgPct: 0.0, threePm: 0, threePa: 0, threePct: 0.0, ftm: 0, fta: 0, ftPct: 0.0, off: 0, def: 3, tot: 3, pf: 1, ast: 0, to: 0, blk: 0, stl: 0, pts: 0 }
    ],
    synergyStats: [
      { category: "Overall", poss: 37, pctPoss: "100%", ppp: 0.649, rank: "41%", rating: "Average", fgm: 10, fga: 26, fgPct: 38.5 },
      { category: "Overall Half Court", poss: 30, pctPoss: "81.1%", ppp: 0.533, rank: "29%", rating: "Below Average", fgm: 6, fga: 20, fgPct: 30.0 },
      { category: "Transition", poss: 7, pctPoss: "18.9%", ppp: 1.143, rank: "-", rating: "-", fgm: 4, fga: 6, fgPct: 66.7 },
      { category: "Post-Up", poss: 10, pctPoss: "33.3%", ppp: 0.500, rank: "29%", rating: "Below Average", fgm: 2, fga: 9, fgPct: 22.2 },
      { category: "P&R Roll Man", poss: 5, pctPoss: "13.5%", ppp: 1.200, rank: "-", rating: "-", fgm: 2, fga: 3, fgPct: 66.7 },
      { category: "Putbacks", poss: 4, pctPoss: "13.3%", ppp: 0.500, rank: "-", rating: "-", fgm: 1, fga: 3, fgPct: 33.3 },
      { category: "Cuts", poss: 20, pctPoss: "66.7%", ppp: 0.550, rank: "33%", rating: "Average", fgm: 4, fga: 11, fgPct: 36.4 }
    ],
    physicalProfile: [
      "Size: 6'1\" (185cm) undersized post player.",
      "Strength: Good physical foundation, capable of handling contact.",
      "Mobility: Solid mobility and footwork for her size, runs the floor well in transition."
    ],
    offensiveProfile: [
      "Finishing: Inconsistent under pressure; struggles in traffic.",
      "Role: Low-post big only. Very limited offensive versatility.",
      "Shooting: NONE. No perimeter threat whatsoever.",
      "Weak Hand: Major weakness. Left hand is almost unusable."
    ],
    defensiveProfile: [
      "Positioning: Active defender, capable of guarding multiple positions.",
      "Motor: High energy, strong rebounding effort.",
      "Impact: Defensive specialist who provides value through effort and switching potential."
    ],
    gameFeel: [
      "Decision-making: Dependent on system and pace. Prone to unjustified decisions in half-court offense.",
      "Awareness: Understands defensive rotations but lacks offensive feel."
    ],
    projection: {
      level: "NCAA DII / Low-Major D1",
      role: "Energy / Defensive / System Player"
    },
    skillMatrix: {
      overallScore: 117.1,
      categories: [
        {
          name: "Physical Profile & Athleticism",
          total: 24.7,
          skills: [
            { name: "Size & Length", score: 6, weight: 1.0, total: 6.0 },
            { name: "Mobility (lateral)", score: 6, weight: 1.1, total: 6.6 },
            { name: "Explosiveness (1st / 2nd jump)", score: 5, weight: 1.1, total: 5.5 },
            { name: "Strength / Contact", score: 6, weight: 1.1, total: 6.6 }
          ]
        },
        {
          name: "Offensive Impact",
          total: 24.9,
          skills: [
            { name: "P&R (screen + roll)", score: 6, weight: 1.0, total: 6.0 },
            { name: "Finishing (paint / lob / touch)", score: 5, weight: 1.3, total: 6.5 },
            { name: "Shooting (mid / 3PT)", score: 0, weight: 1.1, total: 0.0 },
            { name: "Post Game (footwork)", score: 6, weight: 1.2, total: 7.2 },
            { name: "Offensive Rebounding", score: 4, weight: 1.3, total: 5.2 }
          ]
        },
        {
          name: "Basketball IQ & Decision Making",
          total: 17.0,
          skills: [
            { name: "Short-roll decisions", score: 5, weight: 1.0, total: 5.0 },
            { name: "Passing (vision)", score: 6, weight: 1.0, total: 6.0 },
            { name: "Spacing awareness", score: 6, weight: 1.0, total: 6.0 }
          ]
        },
        {
          name: "Defensive Impact",
          total: 26.5,
          skills: [
            { name: "Rim Protection", score: 6, weight: 1.0, total: 6.0 },
            { name: "Pick & Roll Defense", score: 5, weight: 1.1, total: 5.5 },
            { name: "Switching ability", score: 6, weight: 1.2, total: 7.2 },
            { name: "Defensive Rebounding", score: 6, weight: 1.3, total: 7.8 }
          ]
        },
        {
          name: "Intangibles",
          total: 24.0,
          skills: [
            { name: "Motor", score: 6, weight: 1.0, total: 6.0 },
            { name: "Toughness", score: 6, weight: 1.0, total: 6.0 },
            { name: "Coachability", score: 6, weight: 1.0, total: 6.0 },
            { name: "Communication", score: 6, weight: 1.0, total: 6.0 }
          ]
        }
      ],
      roleTagging: [
        { name: "Rim Runner", color: "bg-yellow-100 text-yellow-800", value: "Y" },
        { name: "Rebounder / Energy Big", color: "bg-red-100 text-red-800", value: "Y" },
        { name: "Stretch Big", color: "bg-red-100 text-red-800", value: "Y" },
        { name: "Defensive Anchor", color: "bg-yellow-100 text-yellow-800", value: "Y" },
        { name: "Development Project", color: "bg-red-100 text-red-800", value: "Y" },
        { name: "Undersized Big", color: "bg-gray-100 text-gray-800", value: "Yes" }
      ],
      redFlags: [
        { risk: "Undersized for position", value: "Yes" },
        { risk: "High risk of no shooting", value: "Yes" }
      ],
      conclusion: [
        { section: "Current Impact", notes: "Low" },
        { section: "Immediate Role", notes: "Rotation" },
        { section: "Main Risk", notes: "size/no shots" },
        { section: "1–2 Year Projection", notes: "mid-major(bottom)/JUCO" }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "SCOUT", mark: true },
        { status: "PASS", mark: false }
      ]
    },
    sourceLinks: [
      { label: "FIBA Profile", url: "https://www.fiba.basketball/en/players/346100-gela-kacinskaite" },
      { label: "FIBA U18 Euro 2025", url: "https://www.fiba.basketball/en/events/fiba-u18-womens-eurobasket-2025-division-b/teams/lithuania/346100-gela-kacinskaite" }
    ]
  })
];
