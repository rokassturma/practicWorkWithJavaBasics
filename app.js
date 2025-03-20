/* 1 Uždavinys. 
Sukurti programą, kuri imituoja pirkinių čekio generavimą. Priima tris kintamuosius: prekės pavadinimą (pvz., "Pienas"), kiekį (pvz., 2) ir vieneto kainą.
Naudodamas šablonines eilutes, išvesk čekį, pvz., "Prekė: Pienas, kiekis: 2vnt., vieneto kaina: 1.5Eur, viso: 3Eur. Taip pat, pridėk 21% ir išvesk galutinę sumą su mokesčiais." */

console.log('__________1 Uždavinys__________');

function cekis(preke, kiekis, kaina) {
    let bendraSuma = kaina * kiekis;
    let kainaBePvm = bendraSuma * 0.79;
    console.log(`Prekė: ${preke}, Kiekis: ${kiekis} vnt., Kaina be PVM: ${kainaBePvm} Eur`);
    console.log(`PVM: 21%. Suma su PVM: ${bendraSuma} Eur`);
    console.log('');
};

cekis('Jogurtas', 2, 5);
cekis('Miltai', 2, 3);


/* 2 Uždavinys.
Parašyti funkciją, kuri imituoja orų programėlės rekomendaciją. Ji priima tris parametrus: temperatūrą (pvz., 15laipsnių), ar lyja (true/false), ir vėjo greitį (pvz., 20km/h).
Funkcija grąžina patarimą: 
✓ Jei temperatūra > 20°C ir nelyja – „Puikus oras pasivaikščiojimui!“
✓ Jei lyja arba vėjo greitis > 30 km/h – „Geriau likti namuose.“
✓ Kitais atvejais – „Apsirenk pagal orą ir viskas bus gerai!“
*/

console.log('__________2 Uždavinys__________');

function oruRekomendacija(temperatura, arLyja, vejoGreitis) {
    if (temperatura >= 20 && arLyja === false && vejoGreitis <= 10) {
        console.log(`Šiuo metu oro temperatūra: ${temperatura}°C. Nelyja. Vėjo greitis: ${vejoGreitis} km/h. Puikus oras pasivaikščiojimui!`);
    } else if (arLyja === true && vejoGreitis > 30) {
        console.log(`Šiuo metu oro temperatūra: ${temperatura}°C. Tačiau - lyja ir vėjo greitis ${vejoGreitis} km/h. Geriau likti namuose.`);
    } else {
        console.log(`Apsirenk pagal orą ir viskas bus gerai! Šiuo metu oro temperatūra: ${temperatura}°C. Vėjo greitis: ${vejoGreitis} km/h.`);
    }
}

oruRekomendacija(15, false, 5);
oruRekomendacija(20, true, 5);
oruRekomendacija(21, false, 10);


/* 3 Uždavinys
Ciklai ir skaičiavimai: Sukurk programą, kuri imituoja automobilio kelionę ir apskaičiuoja, kiek kilometrų jis nuvažiuos per tam tikrą laiką. Naudok
šiuos duomenis (duomenis galima keisti pagal pageidavimus):
• Pradinė kuro talpa (pvz., 50 litrų) įvedama kaip kintamasis. 
• Mašina naudoja 7 litrus kuro 100 kilometrų
• Mašina važiuoja pastoviu 90 km/h greičiu. 
• Naudodamas ciklą, apskaičiuok ir kiekvieną valandą išvesk:
✓ Kiek kilometrų nuvažiuota iš viso.
✓ Kiek kuro liko bake.
• Ciklas sustoja, kai kuro lieka mažiau nei 7 litrai (neužtenka kitam 100
km). */

console.log('');
console.log('__________3 Uždavinys__________');


let masinosGreitis = 90;
let sunaudojimas = 7;
let nuvaziuotasAtstumas = 0;


function kiekNuvaziuos(bakoTalpa) {
    for (i = 1; i < bakoTalpa; i++) {
        nuvaziuotasAtstumas += masinosGreitis;
        console.log(`Po ${i} val.: nuvažiuota ${nuvaziuotasAtstumas} km. Liko: ${bakoTalpa - sunaudojimas} kuro.`)
        bakoTalpa -= 7;
        if (bakoTalpa < 7) {
            console.log(`Važiuota valandų: ${i}, iš viso nuvažiuota: ${nuvaziuotasAtstumas} km. Liko: ${bakoTalpa} l kuro. Kelionė baigta!`);
            break;
        }
    }
}

kiekNuvaziuos(50);


/* 4 Uždavinys
Sukurk masyvą su 5 istoriniais ginklais (pvz.: „kardas“, „kalavijas“ ir t.t.). Parašyk funkciją, kuri atsitiktinai parenka vieną ginklą (naudodamas Math.random()) ir išveda pranešimą, pvz., „Tau
paskirtas [ginklas] kovai!“
*/

console.log('');
console.log('__________4 Uždavinys__________');

let istoriniaiGinklai = ['Katana', 'Gladius', 'Morning Star', 'Halleberd', 'Tomahawk', 'Crossbow'];

let ginkloIndeksas = Math.floor(Math.random() * istoriniaiGinklai.length);

console.log(`Hello, gladiator! You are fighting with ${istoriniaiGinklai[ginkloIndeksas]}`);



/* 5 Uždavinys 
Sukurk objektą, aprašantį piratą (vardas, laivas, lobio kiekis aukso monetomis). Pridėk metodą raid, kuris padidina lobio kiekį atsitiktiniu skaičiumi (pvz., nuo 10 iki 50 monetų) ir grąžina
pranešimą, pvz., „[Vardas] apiplėšė ir gavo [kiekis] monetų!“*/

console.log('');
console.log('__________5 Uždavinys__________');

//generavimas nuo 10 iki 50

let piratas = {
    vardas: 'Jack Sparrow',
    laivas: 'The Back Pearl',
    lobisMonetomis: 5000,
    grobis: Math.ceil(Math.random() * (50 - 10 + 1) + 10), // generuojamas atsitiktinis skaičius nuo 10 - 50.
    raid() {
        this.lobisMonetomis += this.grobis
        console.log(`    
🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵
..................................
Taramtam tam taramtam, taramtam tam taramtam,
Taramtam tam taramtam, tam taram tam tam, tam tam!
🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵
...........................................
Tave apiplėšė ${this.vardas} ir gavo ${this.grobis} monetų (monetas). Nuplaukė išdidžiai su savo laivu ${this.laivas}!
`);
    }
}

piratas.raid();
console.log(piratas.lobisMonetomis);



/* 6 Uždavinys
Parašyk funkciją, kuri priima slaptažodį (string) ir grąžina objektą su: ilgis (length), ar yra skaičių (true/false), ar yra didžiųjų
raidžių (true/false) ir stiprumo įvertinimą („Silpnas“, „Vidutinis“, „Stiprus“ pagal kriterijus: ilgis > 8, skaičiai, didžiosios raidės). */

console.log('');
console.log('__________6 Uždavinys__________');

function slaptazodis(string) {
    let slaptazodzioObjektas = {
        slaptazodzioIlgis: string.length,
        arYraSkaicius: string.split('').find(Number) ? true : false,
        arYraDideliuRaidziu: /[A-Z]/.test(string), // pasitikrinimas dėl didelių raidžių
        arPatikimas: '',

        //susikuriu patikimumo tikrinimą
        patikimumas() {
            if (this.slaptazodzioIlgis > 14 && this.arYraSkaicius === true && this.arYraDideliuRaidziu === true) {
                this.arPatikimas = 'Stiprus';
            } else if (this.slaptazodzioIlgis > 7 && this.arYraSkaicius === true && this.arYraDideliuRaidziu === true) {
                this.arPatikimas = 'Vidutinis';
            } else {
                this.arPatikimas = 'Silpnas';
            }
        }
    };


    //paleidziu Objektui priskirtos funkciją dėl slaptažodžio patikrinimo ir grąžiniu objektą
    slaptazodzioObjektas.patikimumas();
    return slaptazodzioObjektas;
}


console.log(slaptazodis('katuveAeiki44444564564654'));
console.log(slaptazodis('katinas'));



/* 7 Uždavinys
Sukurk funkciją, kuri priima masyvą su darbų objektais (kiekvienas turi task – darbo pavadinimą ir done – būseną kaip true/false) ir kitą funkciją, apibrėžiančią, kaip keisti būseną (pvz.,
pažymėti kaip atliktą). Grąžink naują masyvą su atnaujintais darbais.*/

console.log('');
console.log('__________7 Uždavinys__________');


let darbuSarasas = [{ task: 'Atsikėlus palįsti po lediniu dušu', done: false },
{ task: 'Išeiti rytinio pasivakščiojimo', done: false },
{ task: 'Pavalgyti pusryčius', done: false },
{ task: 'Prisijungti laiku į paskaitas', done: false },
{ task: 'Pavalgyti pietus', done: false },
{ task: 'Alikti įvairius darbus su programavimu', done: false },
{ task: 'Išsivalyti dantis', done: false },
{ task: 'Eiti laiku miegoti', done: false }];


function pakeistiStatusa (darboPavadinimas, darbuSarasas) {
    if (darbuSarasas.includes(darboPavadinimas.task)) {
        return { ...darboPavadinimas, done: true };
    }
    return darboPavadinimas;
}

let pazymetiSiuosDarbus = ['Išeiti rytinio pasivakščiojimo', 'Pavalgyti pietus'];
let atnaujintasSarasas = darbuSarasas.map(task => pakeistiStatusa(task, pazymetiSiuosDarbus));

console.log(atnaujintasSarasas);


/* 8 Uždavinys
 Sukurk funkciją, kuri priima masyvą su maisto kalorijomis (skaičiais) ir kitą funkciją, apibrėžiančią, kaip keisti kalorijas (pvz., pridėti 10%). Grąžink naują masyvą su atnaujintomis
kalorijomis.
*/
console.log('');
console.log('__________8 Uždavinys__________');

let perskaiciuotos = [];

function pradinesKalorijos() {
    let pradines = [550, 700, 770];

    for (i = 0; i < pradines.length; i++) {
        let perskaiciuota = pradines[i] * 1.1;
        perskaiciuotos.push(parseFloat(perskaiciuota.toFixed()));
    }
}

pradinesKalorijos();
console.log(perskaiciuotos);



/* 9 Uždavinys
Parašyk funkciją, kuri priima masyvą su pirkinių kainomis ir nuolaidą (su numatyta reikšme 0%), o grąžina bendrą sumą po nuolaidos. */
console.log('');
console.log('__________9 Uždavinys__________');


function pradinesKainos() {
    let kainos = [];
    kainos.push(Math.ceil(3000 * Math.random()));
    kainos.push(Math.ceil(5000 * Math.random()));
    kainos.push(Math.ceil(1000 * Math.random()));
    let nuolaida = 0.2;
    let naujasMasyvas = [];

    console.log(`Nuolaida: ${nuolaida}`);

    for (k = 0; k < kainos.length; k++) {
        let nuolaidosPaskaiciavimas = kainos[k] * nuolaida;
        let kainaPoNuolaidos = kainos[k] - nuolaidosPaskaiciavimas;
        naujasMasyvas.push(parseFloat(kainaPoNuolaidos.toFixed(2)));

    }
    return naujasMasyvas;
}

let kainosPoNuolaidos = pradinesKainos();
let bendraSuma = kainosPoNuolaidos.reduce((a, b) => a + b, 0).toFixed(2);


console.log(kainosPoNuolaidos);
console.log(`Visų pirkinių bendra suma yra: ${bendraSuma} Eur.`);



/* 10 Uždavinys. CLOSURES
Moko funkcijų, kurios „prisimena“ ankstesnius duomenis. Užduotis: Sukurk funkciją, kuri priima pradinį treniruočių dienų masyvą (pvz., ["Pirmadienis"]) ir grąžina kitą funkciją. 
Ta nauja funkcija leidžia pridėti vieną treniruočių dieną ir išveda visas esamas dienas kaip eilutę.*/
console.log('');
console.log('__________10 Uždavinys__________');

function treniruociuDienos () {
    dienuMasyvas = ['Pirmadienis'];

    return function kitosDienos (naujaDiena) {
        dienuMasyvas.push(naujaDiena)
    }
} 

let prideti = treniruociuDienos();

prideti('Antradienis');
prideti('Ketvirtadienis');
prideti('Penktadienis');

console.log(dienuMasyvas.join(', '))