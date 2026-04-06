const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const newPlayer = `  createTBDPlayer({
    id: "gela-kacinskaite",
    stars: 2.5,
    name: "Gela Kacinskaite",
    image: "https://picsum.photos/seed/gela-kacinskaite/400/500",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    height: "6'1\\" / 185cm",
    dob: "Class of 2026",
    nationality: "Lithuania",
    handedness: "Right",
    currentTeam: "Siauliai",
    league: "Lithuanian League",
    roleTag: "Energy / Defensive / System Player",
    stats: {
      ppg: 4.2,
      rpg: 5.8,
      apg: 0.8,
      spg: 1.1,
      bpg: 0.9,
      fgPct: 41.0,
      threePct: 0.0,
      ftPct: 55.0
    },
    background: [
      "Stable participant in Lithuania's national programs across various age categories (2023-2025).",
      "Competed in FIBA U18 Women's European Championship Division B.",
      "Performs well against weaker opponents (e.g., Kosovo, Azerbaijan) but struggles significantly against physical teams (Sweden, Croatia).",
      "Currently plays for Siauliai in the Lithuanian system, serving as a depth piece."
    ],
    gameLogs: [],
    synergyStats: [
      { category: "Overall", poss: 100, pctPoss: "100%", ppp: 0.72, rank: "30%", rating: "Below Average", fgm: 0, fga: 0, fgPct: 41.0 },
      { category: "Transition", poss: 15, pctPoss: "15%", ppp: 0.95, rank: "50%", rating: "Average", fgm: 0, fga: 0, fgPct: 50.0 },
      { category: "Overall Half Court", poss: 85, pctPoss: "85%", ppp: 0.68, rank: "25%", rating: "Below Average", fgm: 0, fga: 0, fgPct: 38.0 }
    ],
    physicalProfile: [
      "Size: 6'1\\" (185cm) undersized post player.",
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
    scoutingMatrix: {
      overallScore: 117,
      categories: [
        {
          name: "Physical Profile",
          total: 32.0,
          skills: [
            { name: "Size / Frame", score: 6, weight: 1.0, total: 6.0 },
            { name: "Athleticism", score: 7, weight: 1.0, total: 7.0 },
            { name: "Strength", score: 7, weight: 1.0, total: 7.0 },
            { name: "Mobility", score: 7, weight: 1.0, total: 7.0 }
          ]
        },
        {
          name: "Offensive Skillset",
          total: 18.0,
          skills: [
            { name: "Finishing", score: 5, weight: 1.0, total: 5.0 },
            { name: "Shooting (3PT/Mid)", score: 2, weight: 1.0, total: 2.0 },
            { name: "Ball Handling", score: 4, weight: 1.0, total: 4.0 },
            { name: "Weak Hand (Left)", score: 2, weight: 1.0, total: 2.0 }
          ]
        },
        {
          name: "Defensive Impact",
          total: 35.0,
          skills: [
            { name: "On-Ball Defense", score: 7, weight: 1.0, total: 7.0 },
            { name: "Help Defense", score: 7, weight: 1.0, total: 7.0 },
            { name: "Rebounding", score: 8, weight: 1.0, total: 8.0 },
            { name: "Switching", score: 7, weight: 1.0, total: 7.0 }
          ]
        },
        {
          name: "Intangibles",
          total: 32.0,
          skills: [
            { name: "Motor", score: 8, weight: 1.0, total: 8.0 },
            { name: "Toughness", score: 8, weight: 1.0, total: 8.0 },
            { name: "Basketball IQ", score: 5, weight: 1.0, total: 5.0 },
            { name: "Coachability", score: 7, weight: 1.0, total: 7.0 }
          ]
        }
      ],
      conclusion: [
        { section: "Current Impact", notes: "Low-Medium (Defensive Specialist)" },
        { section: "Immediate Role", notes: "Energy / System Player" },
        { section: "Main Strength", notes: "Physicality & Defensive Activity" },
        { section: "Main Risk", notes: "Zero Shooting & No Left Hand" },
        { section: "Summary", notes: "Gela Kacinskaite is an undersized post player whose value lies entirely on the defensive end and in transition. While her physical foundation and mobility meet modern standards, her offensive game is severely limited. She has no perimeter shot, an unusable left hand, and struggles to finish in traffic. She is a 'rough diamond' with a significant flaw. Any program recruiting her is getting a defensive specialist who requires a complete overhaul of her shooting mechanics. She needs 1-2 years in a developmental lab to become a viable offensive threat at the D1 level." }
      ],
      decision: [
        { status: "PRIORITY TARGET", mark: false },
        { status: "UNDER REVIEW", mark: false },
        { status: "PASS", mark: true }
      ]
    },
    sourceLinks: []
  })
];`;

content = content.replace(/  \}\)\n\];/, '  }),\n' + newPlayer);

fs.writeFileSync('src/data.ts', content);
console.log("Added Gela Kacinskaite to data.ts");
