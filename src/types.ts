export interface PlayerStats {
  season: string;
  leagueLabel?: string;
  gp: number;
  gs: number;
  mpg: number;
  ppg: number;
  rpg: number;
  apg: number;
  bpg: number;
  spg: number;
  fgPct: number;
  ftPct: number;
  threePct: number;
  twoFG?: string;
  threeFG?: string;
  ftFG?: string;
  pir?: number;
}

export interface GameLog {
  date: string;
  opponent: string;
  gs: boolean;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number;
  threePm: number;
  threePa: number;
  threePct: number;
  ftm: number;
  fta: number;
  ftPct: number;
  off: number;
  def: number;
  tot: number;
  pf: number;
  ast: number;
  to: number;
  blk: number;
  stl: number;
  pts: number;
}

export interface SynergyStat {
  category: string;
  poss: number;
  pctPoss: string;
  ppp: number;
  rank: string;
  rating: string;
  fgm: number;
  fga: number;
  fgPct: number;
}

export interface SkillMatrixSkill {
  name: string;
  score: number;
  weight: number;
  total: number;
  notes?: string;
}

export interface SkillMatrixCategory {
  name: string;
  total: number;
  skills: SkillMatrixSkill[];
}

export interface SkillMatrix {
  overallScore: number;
  categories: SkillMatrixCategory[];
  roleTagging: {
    name: string;
    color: string;
    value?: string;
  }[];
  redFlags: {
    risk: string;
    value: string;
    comment?: string;
  }[];
  conclusion: {
    section: string;
    notes: string;
  }[];
  decision: {
    status: string;
    mark: boolean;
  }[];
}

export interface Player {
  id: string;
  name: string;
  position: string;
  height: string;
  weight?: string;
  dob?: string;
  nationality: string;
  handedness?: "Right" | "Left" | "TBD";
  stars?: number;
  currentTeam: string;
  league: string;
  roleTag: string;
  scoutingLine: string;
  reportInfo: {
    by: string;
    for: string;
  };
  background: string[];
  stats: PlayerStats;
  gameLogs: GameLog[];
  synergyStats: SynergyStat[];
  physicalProfile: string[];
  offensiveProfile: string[];
  defensiveProfile: string[];
  gameFeel: string[];
  projection: {
    level: string;
    role: string;
    limitation: string;
  };
  status: "Under Review" | "Scout" | "Target" | "Decline";
  videoUrl?: string;
  sourceLinks: { label: string; url: string }[];
  skillMatrix?: SkillMatrix;
}
