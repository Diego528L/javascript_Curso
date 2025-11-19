let playlist = ["Dua lipa - Dance The Nigth","The Weeknd - Blinding Lights"];
playlist.push("Vai - Ana Carolina", "Tailandia - Luiza Martins")
console.log(playlist);
let removido =playlist.pop();
console.log(remmovido);
console.log(playlist);
playlist.forEach((playlist,index) =>{
    console.log(`${index + 1}. ${playlist} `);
});