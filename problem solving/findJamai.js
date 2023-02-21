const polapain = [
  { Name: "Abul", job: "sorkari", salary: 17000 },
  { Name: "Babul", job: "besorkari", salary: 25000 },
  { Name: "Kabul", job: "sorkari", salary: 21000 },
  { Name: "Habul", job: "besorkari", salary: 47000 },
  { Name: "Jabul", job: "sorkari", salary: 23000 },
  { Name: "Mabul", job: "besorkari", salary: 55000 },
];


const jamais = polapain.filter(pola => (pola.job === 'sorkari' && pola.salary >=20000) || (pola.job === 'besorkari' && pola.salary >=40000))

console.log(jamais)