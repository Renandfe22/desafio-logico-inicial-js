let heroi = "o heroi está atualmente "
let xp = 1000

const NivelBronze = "Nivel bronze"
const NivelPrata = "Nivel Prata"

for(x = 995; x <= xp; x++){

    if(x <= 1000){
        heroi = "o heroi está atualmente" + NivelBronze
    }
      if(x > 1000){
        heroi = "o heroi está atualmente" + NivelPrata
    }
}

console.log (heroi)