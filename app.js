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

oruRekomendacija = (temperatura, arLyja, vejoGreitis) => (
    temperatura >= 20 && !arLyja
        ? console.log(`Šiuo metu oro temperatūra: ${temperatura}°C. Nelyja. Puikus oras pasivaikščiojimui!`) :
        arLyja || vejoGreitis > 20
            ? console.log(`Šiuo metu oro temperatūra: ${temperatura}°C. ${arLyja ? 'Lyja' : 'Nelyja'}. Vėjo greitis ${vejoGreitis}.`) :
            console.log(`Apsirenk pagal orą ir viskas bus gerai! Šiuo metu oro temperatūra: ${temperatura}°C. Vėjo greitis: ${vejoGreitis} km/h. ${arLyja ? 'Lyja' : 'Nelyja'}`)
)


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



function kiekNuvaziuos(bakoTalpa, masinosGreitis) {
    let nuvaziuotasAtstumas = 0;
    let sunaudojimas100Km = 7;
    let sunaudojimasPagalGreiti = (sunaudojimas100Km * masinosGreitis) / 100;

    for (let i = 1; ; i++) {
        if (bakoTalpa < sunaudojimas100Km) {
            console.log(`Kuro nepakanka. Kelionė baigta.`);
            break;
        }
        nuvaziuotasAtstumas += masinosGreitis;
        bakoTalpa -= sunaudojimasPagalGreiti;
        console.log(`Po ${i} val.: nuvažiuota ${nuvaziuotasAtstumas} km. Liko: ${bakoTalpa.toFixed(2)} l kuro.`);

        if (bakoTalpa < 7) {
            console.log(`Iš viso važiuota valandų: ${i}, iš viso nuvažiuota: ${nuvaziuotasAtstumas} km. Liko: ${bakoTalpa.toFixed(2)} l kuro. Mašinos greitis buvo ${masinosGreitis} km/h. Kelionė baigta!`);
            break;
        }
    }
}


kiekNuvaziuos(70, 110);


/* 4 Uždavinys
Sukurk masyvą su 5 istoriniais ginklais (pvz.: „kardas“, „kalavijas“ ir t.t.). Parašyk funkciją, kuri atsitiktinai parenka vieną ginklą (naudodamas Math.random()) ir išveda pranešimą, pvz., „Tau
paskirtas [ginklas] kovai!“
*/

console.log('');
console.log('__________4 Uždavinys__________');


randomWeapon = () => {
    let istoriniaiGinklai = ['Katana', 'Gladius', 'Morning Star', 'Halleberd', 'Tomahawk', 'Crossbow'];
    let ginkloIndeksas = Math.floor(Math.random() * istoriniaiGinklai.length);

    return console.log(`Hello, gladiator! You are fighting with ${istoriniaiGinklai[ginkloIndeksas]}`);

};

randomWeapon();



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
    raid() {
        const grobis = Math.ceil(Math.random() * (50 - 10 + 1) + 10);
        this.lobisMonetomis += grobis;
        return `    
🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵
..................................
Taramtam tam taramtam, taramtam tam taramtam,
Taramtam tam taramtam, tam taram tam tam, tam tam!
🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵
...........................................
Tave apiplėšė ${this.vardas} ir gavo ${grobis} monetų (monetas). Nuplaukė išdidžiai su savo laivu ${this.laivas}. Jo LOBIS: ${this.lobisMonetomis}!
`;
    }
}

console.log(piratas.raid());
console.log(piratas.raid());
console.log(piratas.raid());


/* 6 Uždavinys
Parašyk funkciją, kuri priima slaptažodį (string) ir grąžina objektą su: ilgis (length), ar yra skaičių (true/false), ar yra didžiųjų
raidžių (true/false) ir stiprumo įvertinimą („Silpnas“, „Vidutinis“, „Stiprus“ pagal kriterijus: ilgis > 8, skaičiai, didžiosios raidės). */

console.log('');
console.log('__________6 Uždavinys__________');

const slaptazodis = (string) => {

        let slaptazodzioIlgis = string.length;
        let arYraSkaicius = /\d/.test(string);
        let arYraDideliuRaidziu = /[A-Z]/.test(string); // pasitikrinimas dėl didelių raidžių


        let stiprumasTaskai = (slaptazodzioIlgis > 8 ? 1 : 0) + (arYraSkaicius ? 1 : 0) + (arYraDideliuRaidziu ? 1 : 0);
        let stiprumas

        if (stiprumasTaskai === 3) {
            stiprumas = 'Stiprus';
        } else if (stiprumasTaskai === 2) {
            stiprumas = 'Vidutinis';
        } else {
            stiprumas = 'Silpnas';
        }


        return {
            slaptazodzioIlgis,
            arYraSkaicius,
            arYraDideliuRaidziu,
            stiprumas
        }
}


console.log(slaptazodis('katuveAeiki44444564564654'));
console.log(slaptazodis('ka88888inas'));
console.log(slaptazodis('daadssdaiojio'))



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


const pakeistiStatusa = (darboPavadinimas, darbuSarasas) => {
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


let pradinesKalorijos = [550, 700, 770];


const atnaujinimasKaloriju = (kalorijos, keitimoFunkcija) => {

    return kalorijos.map(kalorija => parseFloat(keitimoFunkcija(kalorija).toFixed(2)));
}

let prideti10proc = (cal) => cal * 1.10;
let sumazintiDvigubai = (cal) => cal / 2;

const plius = atnaujinimasKaloriju(pradinesKalorijos, prideti10proc);
const maziau = atnaujinimasKaloriju(pradinesKalorijos, sumazintiDvigubai);

console.log(plius);
console.log(maziau);



/* 9 Uždavinys
Parašyk funkciją, kuri priima masyvą su pirkinių kainomis ir nuolaidą (su numatyta reikšme 0%), o grąžina bendrą sumą po nuolaidos. */
console.log('');
console.log('__________9 Uždavinys__________');


const pirkiniai = [50, 100, 200];

const skaiciuotiSuNuolaida = (pradiniaiDuomenys, nuolaida = 0) => {
    let suma = pradiniaiDuomenys.reduce((skaicius1, skaicius2) => skaicius1 + skaicius2, 0);
    let koeficientas = 1 - nuolaida / 100
    return (suma * koeficientas).toFixed(2);

};

console.log(skaiciuotiSuNuolaida(pirkiniai));
console.log(skaiciuotiSuNuolaida(pirkiniai, 10));
console.log(skaiciuotiSuNuolaida(pirkiniai, 30));


/* 10 Uždavinys. CLOSURES
Moko funkcijų, kurios „prisimena“ ankstesnius duomenis. Užduotis: Sukurk funkciją, kuri priima pradinį treniruočių dienų masyvą (pvz., ["Pirmadienis"]) ir grąžina kitą funkciją. 
Ta nauja funkcija leidžia pridėti vieną treniruočių dieną ir išveda visas esamas dienas kaip eilutę.*/
console.log('');
console.log('__________10 Uždavinys__________');

const sukurtiSkaitikli = () => {
    let skaicius = 0
    return () => ++skaicius;
}

const skaitiklis = sukurtiSkaitikli();
console.log(skaitiklis());
console.log(skaitiklis());
console.log(skaitiklis());


// --------------------------------------------------------

const sukurtiPirkiniuSkaicuokli = () => {
    let kiekis = 0;

    return (pridetiKieki) => {
        kiekis += pridetiKieki;
        return `bendras kiekis: ${kiekis}`
    }
}

const pirkiniuSkaicius = sukurtiPirkiniuSkaicuokli();
console.log(pirkiniuSkaicius(3));
console.log(pirkiniuSkaicius(2));
console.log(pirkiniuSkaicius(8));


// --------------------------------------------------------

const treniruociuDienos = (pradinisPlanas) => {
    let treniruociuDienos = [...pradinisPlanas];

    return (naujaDiena) => {
        treniruociuDienos.push(naujaDiena);
        return `Šiuo metu treniruočių dienos: ${treniruociuDienos.join(', ')}`;
    }
}

const myPlan = treniruociuDienos(['Antradienis']);

console.log(myPlan(' Antradienis'));
console.log(myPlan(' Ketvirtadienis'));
console.log(myPlan(' Penktadienis'));
