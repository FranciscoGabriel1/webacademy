import { Profs, Technologies } from "./helpersTypes";

export function listProfs(profs: Profs[]){
    const list = profs.map(p => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join(" ")}</ul>`
}

export function listTechnologies(tech: Technologies[]){
    const list = tech.map(p => p.poweredByNodejs ? `<li>${p.name}-${p.type}</li>`:'');
    return `<ul>${list.join(" ")}</ul>`
}