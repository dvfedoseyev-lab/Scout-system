const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const updates = [
  { id: "layke-fields-10154", stars: 3 },
  { id: "nerea-lagowski", stars: 4 },
  { id: "milagros-morell", stars: 4 },
  { id: "meredith-venner", stars: 4 },
  { id: "diann-jackson", stars: 3 },
  { id: "loanna-tolentino", stars: 3 },
  { id: "anny-de-jesus", stars: 3 },
  { id: "valeria-mora", stars: 3 },
  { id: "ana-zesati", stars: 3 },
  { id: "ayla-mcdowell", stars: 5 },
  { id: "grace-pongang", stars: 4 },
  { id: "isabella-roldan", stars: 4 },
  { id: "maily-saavedra", stars: 3 },
  { id: "lucianna-parrotta", stars: 3 },
  { id: "vivian-grenald", stars: 3 },
  { id: "francisca-canello", stars: 4 },
  { id: "kinga-josepovits", stars: 4 },
  { id: "abigail-isaac", stars: 3 },
  { id: "haminatu-ayodeji", stars: 3 },
  { id: "manu-alves", stars: 4 },
  { id: "sther-ubaka", stars: 3 },
  { id: "julia-preis", stars: 4 },
  { id: "daria-bezshaposhnikova", stars: 3 },
  { id: "maria-grishchuk", stars: 4 },
  { id: "alina-zmeevskaya", stars: 3 },
  { id: "maria-ilyina", stars: 3 },
  { id: "olesya-galenko", stars: 3 },
  { id: "sofia-golubeva", stars: 4 },
  { id: "ekaterina-lyashenko", stars: 3 },
  { id: "ekaterina-tikhonova", stars: 5 },
  { id: "victoria-prozorova", stars: 3 },
  { id: "karina-komarova", stars: 3 },
  { id: "sofia-stepanova", stars: 3 },
  { id: "melina-karra", stars: 3 }
];

updates.forEach(update => {
  const idRegex = new RegExp(`id:\\s*"${update.id}",([\\s\\S]*?)currentTeam:`, 'g');
  content = content.replace(idRegex, (match, p1) => {
    if (p1.includes('stars:')) {
      return match.replace(/stars:\s*[\d.]+/, `stars: ${update.stars}`);
    } else {
      return `id: "${update.id}",\n    stars: ${update.stars},${p1}currentTeam:`;
    }
  });
});

fs.writeFileSync('src/data.ts', content);
console.log("Updated stars in data.ts");
