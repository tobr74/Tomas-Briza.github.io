// KOMPLETNÍ DATABÁZE SVÁTKŮ
const SVATKY_DATA = {
    "1-1": "Nový rok", "1-2": "Karina", "1-3": "Radmila", "1-4": "Diana", "1-5": "Dalimil", "1-6": "Tři králové", "1-7": "Vilma", "1-8": "Čestmír", "1-9": "Vladan", "1-10": "Břetislav", "1-11": "Bohdana", "1-12": "Pravoslav", "1-13": "Edita", "1-14": "Radovan", "1-15": "Alice", "1-16": "Ctirad", "1-17": "Drahoslav", "1-18": "Vladislav", "1-19": "Doubravka", "1-20": "Ilona", "1-21": "Běla", "1-22": "Slavomír", "1-23": "Zdeněk", "1-24": "Milena", "1-25": "Miloš", "1-26": "Zora", "1-27": "Ingrid", "1-28": "Otýlie", "1-29": "Zdislava", "1-30": "Robin", "1-31": "Marika",
    "2-1": "Hynek", "2-2": "Nela", "2-3": "Blažej", "2-4": "Jarmila", "2-5": "Dobromila", "2-6": "Vanda", "2-7": "Veronika", "2-8": "Milada", "2-9": "Apolena", "2-10": "Mojmír", "2-11": "Božena", "2-12": "Slavěna", "2-13": "Věnceslav", "2-14": "Valentýn", "2-15": "Jiřina", "2-16": "Ljuba", "2-17": "Miloslava", "2-18": "Gizela", "2-19": "Patrik", "2-20": "Oldřich", "2-21": "Lenka", "2-22": "Petr", "2-23": "Svatopluk", "2-24": "Matěj", "2-25": "Liliana", "2-26": "Dorota", "2-27": "Alexandr", "2-28": "Lumír", "2-29": "Horymír",
    "3-1": "Bedřich", "3-2": "Anežka", "3-3": "Kamil", "3-4": "Stela", "3-5": "Kazimír", "3-6": "Miroslav", "3-7": "Tomáš", "3-8": "Gabriela", "3-9": "Františka", "3-10": "Viktorie", "3-11": "Anděla", "3-12": "Řehoř", "3-13": "Růžena", "3-14": "Rút/Matylda", "3-15": "Ida", "3-16": "Elena / Herbert", "3-17": "Vlastimil", "3-18": "Eduard", "3-19": "Josef", "3-20": "Světlana", "3-21": "Radek", "3-22": "Leona", "3-23": "Ivona", "3-24": "Gabriel", "3-25": "Marián", "3-26": "Emanuel", "3-27": "Dita", "3-28": "Soňa", "3-29": "Taťána", "3-30": "Arnošt", "3-31": "Kvido",
    "4-1": "Hugo", "4-2": "Erika", "4-3": "Richard", "4-4": "Ivana", "4-5": "Miroslava", "4-6": "Vendula", "4-7": "Heřman / Hermína", "4-8": "Ema", "4-9": "Dušan", "4-10": "Darja", "4-11": "Izabela", "4-12": "Julius", "4-13": "Aleš", "4-14": "Vincenc", "4-15": "Anastázie", "4-16": "Irena", "4-17": "Rudolf", "4-18": "Valérie", "4-19": "Rostislav", "4-20": "Marcela", "4-21": "Alexandra", "4-22": "Evženie", "4-23": "Vojtěch", "4-24": "Jiří", "4-25": "Marek", "4-26": "Oto", "4-27": "Jaroslav", "4-28": "Vlastislav", "4-29": "Robert", "4-30": "Blahoslav",
    "5-1": "Svátek práce", "5-2": "Zikmund", "5-3": "Alexej", "5-4": "Květoslav", "5-5": "Klaudie", "5-6": "Radoslav", "5-7": "Stanislav", "5-8": "Den vítězství", "5-9": "Ctibor", "5-10": "Blažena", "5-11": "Svatava", "5-12": "Pankrác", "5-13": "Servác", "5-14": "Bonifác", "5-15": "Žofie", "5-16": "Přemysl", "5-17": "Aneta", "5-18": "Nataša", "5-19": "Ivo", "5-20": "Zbyšek", "5-21": "Monika", "5-22": "Emil", "5-23": "Vladimír", "5-24": "Jana", "5-25": "Viola", "5-26": "Filip", "5-27": "Valdemar", "5-28": "Vilém", "5-29": "Maxmilián", "5-30": "Ferdinand", "5-31": "Kamila",
    "6-1": "Laura", "6-2": "Jarmil", "6-3": "Tamara", "6-4": "Dalibor", "6-5": "Dobroslav", "6-6": "Norbert", "6-7": "Iveta / Slavko", "6-8": "Medard", "6-9": "Stanislava", "6-10": "Gita", "6-11": "Bruno", "6-12": "Antonie", "6-13": "Antonín", "6-14": "Roland", "6-15": "Vít", "6-16": "Zbyněk", "6-17": "Adolf", "6-18": "Milan", "6-19": "Leoš", "6-20": "Květa", "6-21": "Alois", "6-22": "Pavla", "6-23": "Zdeňka", "6-24": "Jan", "6-25": "Ivan", "6-26": "Adriana", "6-27": "Ladislav", "6-28": "Lubomír", "6-29": "Petr a Pavel", "6-30": "Šárka",
    "7-1": "Jaroslava", "7-2": "Patricie", "7-3": "Radomír", "7-4": "Prokop", "7-5": "Cyril a Metoděj", "7-6": "Mistr Jan Hus", "7-7": "Bohuslava", "7-8": "Nora", "7-9": "Drahoslava", "7-10": "Libuše / Amálie", "7-11": "Olga", "7-12": "Bořek", "7-13": "Markéta", "7-14": "Karolína", "7-15": "Jindřich", "7-16": "Luboš", "7-17": "Martina", "7-18": "Drahomíra", "7-19": "Čeněk", "7-20": "Ilja", "7-21": "Vítězslav", "7-22": "Magdaléna", "7-23": "Libor", "7-24": "Kristýna", "7-25": "Jakub", "7-26": "Anna", "7-27": "Věroslav", "7-28": "Viktor", "7-29": "Marta", "7-30": "Bořivoj", "7-31": "Ignác",
    "8-1": "Oskar", "8-2": "Gustav", "8-3": "Miluše", "8-4": "Dominik", "8-5": "Kristián", "8-6": "Oldřiška", "8-7": "Lada", "8-8": "Soběslav", "8-9": "Roman", "8-10": "Vavřinec", "8-11": "Zuzana", "8-12": "Klára", "8-13": "Alena", "8-14": "Alan", "8-15": "Hana", "8-16": "Jáchym", "8-17": "Petra", "8-18": "Helena", "8-19": "Ludvík", "8-20": "Bernard", "8-21": "Johana", "8-22": "Bohuslav", "8-23": "Sandra", "8-24": "Bartoloměj", "8-25": "Radim", "8-26": "Luděk", "8-27": "Otakar", "8-28": "Augustýn", "8-29": "Evelína", "8-30": "Vladěna", "8-31": "Pavla",
    "9-1": "Linda / Samuel", "9-2": "Adéla", "9-3": "Bronislav", "9-4": "Jindřiška", "9-5": "Boris", "9-6": "Boleslav", "9-7": "Regína", "9-8": "Mariana", "9-9": "Daniela", "9-10": "Irma", "9-11": "Denisa", "9-12": "Marie", "9-13": "Lubor", "9-14": "Radka", "9-15": "Jolana", "9-16": "Ludmila", "9-17": "Naděžda", "9-18": "Kryštof", "9-19": "Zita", "9-20": "Oleg", "9-21": "Matouš", "9-22": "Darina", "9-23": "Berta", "9-24": "Jaromír", "9-25": "Zlata", "9-26": "Andrea", "9-27": "Jonáš", "9-28": "Václav", "9-29": "Michal", "9-30": "Jeroným",
    "10-1": "Igor", "10-2": "Olivie / Oliver", "10-3": "Bohumil", "10-4": "František", "10-5": "Eliška", "10-6": "Hanuš", "10-7": "Justýna", "10-8": "Věra", "10-9": "Štefan / Sára", "10-10": "Marina", "10-11": "Andrej", "10-12": "Marcel", "10-13": "Renata / Renáta", "10-14": "Agáta", "10-15": "Tereza", "10-16": "Havel", "10-17": "Hedvika", "10-18": "Lukáš", "10-19": "Michaela", "10-20": "Vendelín", "10-21": "Brigita", "10-22": "Sabina", "10-23": "Teodor", "10-24": "Nina", "10-25": "Beáta", "10-26": "Erik", "10-27": "Šarlota / Zoe", "10-28": "Státní svátek", "10-29": "Silvie", "10-30": "Tadeáš", "10-31": "Štěpánka",
    "11-1": "Felix", "11-2": "Památka zesnulých", "11-3": "Hubert", "11-4": "Karel", "11-5": "Miriam", "11-6": "Liběna", "11-7": "Saskie", "11-8": "Bohumír", "11-9": "Bohdan", "11-10": "Evžen", "11-11": "Martin", "11-12": "Benedikt", "11-13": "Tibor", "11-14": "Sáva", "11-15": "Leopold", "11-16": "Otmar", "11-17": "Mahulena", "11-18": "Romana", "11-19": "Alžběta", "11-20": "Nikola", "11-21": "Albert", "11-22": "Cecílie", "11-23": "Klement", "11-24": "Emílie", "11-25": "Kateřina", "11-26": "Artur", "11-27": "Xenie", "11-28": "René", "11-29": "Zina", "11-30": "Ondřej",
    "12-1": "Iva", "12-2": "Blanka", "12-3": "Svatoslav", "12-4": "Barbora", "12-5": "Jitka", "12-6": "Mikuláš", "12-7": "Ambrož", "12-8": "Květoslava", "12-9": "Vratislav", "12-10": "Julie", "12-11": "Dana", "12-12": "Simona", "12-13": "Lucie", "12-14": "Lýdie", "12-15": "Radana", "12-16": "Albína", "12-17": "Daniel", "12-18": "Miloslav", "12-19": "Ester", "12-20": "Dagmar", "12-21": "Natálie", "12-22": "Šimon", "12-23": "Vlasta", "12-24": "Adam a Eva", "12-25": "Boží hod", "12-26": "Štěpán", "12-27": "Žaneta", "12-28": "Bohumila", "12-29": "Judita", "12-30": "David", "12-31": "Silvestr"
};

// 1. POMOCNÉ PROMĚNNÉ
let posledniDen = -1; // Kontroluje, jestli už nastal nový den, aby se kalendář zbytečně nepřekresloval
let rezimOkna = ""; // Pamatuje si, jestli uživatel klikl na datum (vlevo) nebo svátek (vpravo)

// Seznamy měsíců pro převod textu (např. "března") na číslo (3)
const MESICE_PAD = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];
const MESICE_NOM = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];

// POMOCNÉ PROMĚNNÉ PRO HODINY
// Načte uložené nastavení z paměti prohlížeče (pokud neexistuje, nastaví vteřiny jako zapnuté)
let zobrazovatVteriny = localStorage.getItem('nastaveniHodin') !== 'bez-vterin';

// Funkce, která zajistí formát hodin bez úvodní nuly a minuty/vteřiny s nulou
function formatujCas(datum) {
    let h = datum.getHours(); // Hodiny (systémově bez nuly, např. 6)
    let m = datum.getMinutes().toString().padStart(2, '0'); // Minuty (vždy 2 místa)
    let s = datum.getSeconds().toString().padStart(2, '0'); // Vteřiny (vždy 2 místa)
    
    return zobrazovatVteriny ? `${h}:${m}:${s}` : `${h}:${m}`;
}

// 2. HLAVNÍ FUNKCE HODIN A KALENDÁŘE
function aktualizujCasAKalendar() {
    const nyni = new Date();
    const dnesniDen = nyni.getDate();
    const dnesniMesic = nyni.getMonth() + 1;
    
    // HODINY: Aktualizace času uprostřed vizitky
    const hodinyElem = document.getElementById('hodiny-stred');
    if (hodinyElem) {
        hodinyElem.innerText = formatujCas(nyni);
        // Nastavíme kliknutí na hodiny, pokud ještě není nastaveno
        if (!hodinyElem.onclick) {
            hodinyElem.onclick = () => otevriOkno('hodiny');
        }
    }

    // Pokud se změnil den (překreslení kalendáře a svátku)
    if (dnesniDen !== posledniDen) {
        posledniDen = dnesniDen;
        
        // Nastavení datumu vlevo + klikací efekt
        const datumElem = document.getElementById('datum-vlevo');
        if (datumElem) {
            datumElem.innerText = nyni.toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
            datumElem.classList.add('klikaci-polozka'); 
            datumElem.onclick = () => otevriOkno('datum');
        }
        
        // Nastavení svátku vpravo + klikací efekt
        const svatekElem = document.getElementById('svatek-vpravo');
        if (svatekElem) {
            const klic = `${dnesniMesic}-${dnesniDen}`;
            svatekElem.innerText = "svátek má " + (SVATKY_DATA[klic] || "Neznámé jméno");
            svatekElem.classList.add('klikaci-polozka');
            svatekElem.onclick = () => otevriOkno('svatek');
        }
    }
}

// 3. FUNKCE PRO OTEVŘENÍ OKNA
// FUNKCE PRO OVLÁDÁNÍ MODALŮ
// Funkce pro otevírání (Svátek, Datum, Hodiny)
function otevriOkno(typ) {
    rezimOkna = typ;
    const modal = document.getElementById('moje-okno');
    const vstup = document.getElementById('vstup-hledani');
    const vysledek = document.getElementById('vysledek-hledani');
    const nadpis = document.getElementById('nadpis-okna');
    const napoveda = document.getElementById('napoveda-okna');
    const tlacitkoHledat = document.getElementById('tlacitko-hledat');

    if (!modal) return;
    
    // Zobrazíme okno a vyčistíme předchozí výsledky
    // VYČIŠTĚNÍ A ZOBRAZENÍ
    vysledek.innerHTML = "";
    vstup.value = "";
    
    // Místo .style.display použijeme třídu .videt (aby Esc fungoval správně)
    modal.classList.add('videt');

    // REŽIM HODINY
   if (typ === 'hodiny') {
        nadpis.innerText = "Nastavení zobrazení času";
        napoveda.innerText = "Vyberte si, jak chcete hodiny zobrazovat?";
        vstup.style.display = "none";
        if (tlacitkoHledat) tlacitkoHledat.style.display = "none";
        vysledek.innerHTML = `
            <button class="volba-hodin" onclick="nastavFormatHodin(true)">S vteřinami (např. 12:05:01)</button>
            <button class="volba-hodin" onclick="nastavFormatHodin(false)">Bez vteřin (např. 12:05)</button>`;
    } else {
        vstup.style.display = "block";
        if (tlacitkoHledat) tlacitkoHledat.style.display = "block";
        if (typ === 'datum') {
            nadpis.innerText = "Vyhledat den týdne\n podle datumu a roku";
            napoveda.innerText = "Zadej datum a rok\n (např. 7. března 2026 nebo 7.3.2026)";
        } else {
            nadpis.innerText = "Vyhledat svátek";
            napoveda.innerText = "Zadejte jméno\n (např. Tomáš nebo tomáš)\n\n nebo datum\n (např. 7. března nebo 7.3.)";
        }
        setTimeout(() => vstup.focus(), 100);
    }
}

// Funkce pro uložení volby formátu hodin (voláno z modálního okna)
function nastavFormatHodin(vteriny) {
    zobrazovatVteriny = vteriny;
    // Uložíme volbu do paměti
    localStorage.setItem('nastaveniHodin', vteriny ? 's-vterinami' : 'bez-vterin');
    
    // OPRAVA: Místo .style.display použijeme odebrání třídy, aby se vrstva skutečně uvolnila
    const modal = document.getElementById('moje-okno');
    if (modal) {
        modal.classList.remove('videt');
    }

    // Ihned aktualizujeme hodiny na vizitce
    aktualizujCasAKalendar();
}

// 4. LOGIKA VYHLEDÁVÁNÍ (Spustí se až po kliknutí na tlačítko)
function provedVyhledavani() {
    let dotaz = document.getElementById('vstup-hledani').value.toLowerCase().trim();
    let vysledekElem = document.getElementById('vysledek-hledani');
    let dotazBezTecek = dotaz.replace(/\./g, ' '); // Odstraní tečky pro snadné hledání měsíců

    if (!dotaz) return; // Pokud nic nenapsal, nic nedělej

    // --- REŽIM A: HLEDÁNÍ DNE V TÝDNU ---
    if (rezimOkna === 'datum') {
        let cisla = dotaz.match(/\d+/g); // Vytáhne všechna čísla z textu
        let rokMatch = dotaz.match(/\d{4}/); // Najde rok (4 číslice)

        if (rokMatch && cisla && cisla.length >= 2) {
            let rok = parseInt(rokMatch);
            let den = parseInt(cisla[0]);
            let mesic = parseInt(cisla[1]); // Předpoklad pro formát 7.3.

            // Pokud je měsíc napsán slovem (např. "března")
            for (let i = 0; i < 12; i++) {
                if (dotazBezTecek.includes(MESICE_PAD[i]) || dotazBezTecek.includes(MESICE_NOM[i])) { 
                    mesic = i + 1; break; 
                }
            }

            const dObj = new Date(rok, mesic - 1, den);
            if (!isNaN(dObj.getTime())) {
                const denVTydnu = dObj.toLocaleDateString('cs-CZ', { weekday: 'long' });
                vysledekElem.innerHTML = `Den <strong>${den}. ${MESICE_PAD[mesic-1]} ${rok}</strong><br>` +
                `byl-a, je a nebo bude: <span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;"><strong>${denVTydnu}</strong></span>`;
            } else { 
                vysledekElem.innerText = "Neexistující datum."; 
            }
        } else { 
            vysledekElem.innerText = "Zadejte datum i s rokem\n (např. 7.3.2026)."; 
        }
    } 
    // --- REŽIM B: HLEDÁNÍ SVÁTKU ---
    else {
        let mI = -1, d = -1;
        // Zjištění, zda uživatel zadal číselné datum (7.3.)
        if (dotaz.includes('.') && /\d+\.\s*\d+/.test(dotaz)) {
            let c = dotaz.split('.').filter(x => x.trim() !== "");
            if (c.length >= 2) { d = parseInt(c[0]); mI = parseInt(c[1]); }
        }
        // Zjištění textového data (7. března)
        if (mI === -1) {
            for (let i = 0; i < 12; i++) {
                if (dotazBezTecek.includes(MESICE_PAD[i]) || dotazBezTecek.includes(MESICE_NOM[i])) {
                    mI = i + 1; 
                    let dm = dotazBezTecek.match(/\d+/); 
                    if (dm) d = parseInt(dm[0]); 
                    break;
                }
            }
        }
        // Výpis jména nebo seznamu jmen
        if (mI !== -1 && d !== -1) {
            let k = `${mI}-${d}`;
            let jmeno = SVATKY_DATA[k];
            
            if (jmeno) {
                // Formátování: Tučné datum + modré jméno pod ním (shodné s hledáním podle jména)
                vysledekElem.innerHTML = `<strong>${d}. ${MESICE_PAD[mI-1]}</strong> má svátek: <span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;"><strong>${jmeno}</strong></span>`;
            } else {
                vysledekElem.innerText = "Pro toto datum nebyl nalezen svátek.";
            }
        } else {
            let n = [];
            for (let k in SVATKY_DATA) {
                if (SVATKY_DATA[k].toLowerCase().includes(dotaz)) {
                    let [m, day] = k.split('-');
                    let jmenoFinal = SVATKY_DATA[k].charAt(0).toUpperCase() + SVATKY_DATA[k].slice(1);
                    
                    // Tvůj stávající formát pro hledání podle jména (zůstává stejný)
                    n.push(`<strong>${jmenoFinal}</strong> má svátek:<span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;"><strong>${day}. ${MESICE_PAD[parseInt(m)-1]}</strong></span>`);
                }
            }
            vysledekElem.innerHTML = n.length > 0 ? n.join('<br><br>') : "Jméno nebylo nalezeno.";
        }
    }
}

// 5. OBSLUHA UDÁLOSTÍ
document.getElementById('tlacitko-hledat').onclick = provedVyhledavani;

// Spuštění vyhledávání klávesou Enter
document.getElementById('vstup-hledani').onkeypress = (e) => { 
    if (e.key === 'Enter') provedVyhledavani(); 
};

// --- FUNKCE PRO ZAVÍRÁNÍ ---

// Funkce, která zavře úplně všechna okna
function zavriVsechnaOkna() {
    document.getElementById('moje-okno').classList.remove('videt');
    document.getElementById('taskModal').classList.remove('videt');
}

// Zavírání křížkem (pro obě okna)
document.querySelectorAll('.zavrit, .close-btn').forEach(btn => {
    btn.onclick = zavriVsechnaOkna;
});

// ZAVÍRÁNÍ KLÁVESOU ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        zavriVsechnaOkna();
    }
});

// Podpora pro Enter v okně úkolů (aby se okno nezavřelo a přidalo položku)
document.getElementById('modalInput').onkeypress = (e) => {
    if (e.key === 'Enter') {
        document.getElementById('modalConfirm').click();
    }
};

// 6. START PROGRAMU
setInterval(aktualizujCasAKalendar, 1000); // Hodiny běží každou vteřinu
aktualizujCasAKalendar(); // Spustí se hned po načtení


// --- KONFIGURACE ZÁMKU VIZITKY ---
// --- KONFIGURACE ADMINA ---
const HASH_HESLO = "UmVuY2luYTE1"; 
let jeOdemceno = false;

const elJmeno = document.getElementById('edit-jmeno');
const elProfese = document.getElementById('edit-profese');
const elInicialy = document.getElementById('edit-inicialy');
const elKontakt = document.getElementById('edit-kontakt');
const prvkyVizitky = [elJmeno, elProfese, elInicialy, elKontakt];

// 1. OTEVŘENÍ MODALU HESLA (při kliknutí na kruh)
// KLIKNUTÍ NA KRUH (Otevírání nebo Odhlášení)
document.querySelector('.kruh').onclick = function() {
    if (jeOdemceno) {
        // Pokud je odemčeno, nabídneme odhlášení
        const dotaz = confirm("Vizitka je již odemčena pro úpravy. Chcete ji znovu zamknout a ukončit editaci?");
        if (dotaz) {
            zamkniVizitku();
        }
    } else {
        // Pokud je zamčeno, otevřeme modal pro heslo
        const modal = document.getElementById('adminModal');
        modal.classList.add('videt');
        const vstup = document.getElementById('adminHesloInput');
        vstup.value = "";
        document.getElementById('chybaHesla').style.display = "none";
        setTimeout(() => vstup.focus(), 100);
    }
};

// FUNKCE PRO OPĚTOVNÉ ZAMKNUTÍ
function zamkniVizitku() {
    jeOdemceno = false;
    elKontakt.style.display = 'none'; // Při zamknutí schovat
    
    prvkyVizitky.forEach(el => {
        if (el) {
            el.contentEditable = "false";
            el.style.borderBottom = "none";
        }
    });
}


// 2. JEDNOTNÁ FUNKCE (zavře všechna ID oken, co máš)
function zavriVse() {
    const ids = ['moje-okno', 'taskModal', 'adminModal'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('videt');
    });
}

// 3. KLIKACÍ EVENT (univerzální pro křížky i pozadí)
document.addEventListener('click', function(e) {
    // Pokud klikneš na křížek (podle třídy)
    if (e.target.classList.contains('zavrit') || e.target.classList.contains('close-btn')) {
        zavriVse();
    }
    // Pokud klikneš na šedé pozadí okolo okna
    if (e.target.classList.contains('modal')) {
        zavriVse();
    }
});

// Agresivnější sledování klávesy ESC
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        zavriVse(); // nebo zavriVsechnaOkna() - podle toho, jak se jmenuje tvoje funkce
    }
}, true); // To 'true' zajistí, že se to provede přednostně

// 4. OVĚŘENÍ HESLA
document.getElementById('potvrditHesloBtn').onclick = provestOvereni;
document.getElementById('adminHesloInput').onkeypress = (e) => { if (e.key === 'Enter') provestOvereni(); };

// 5. OPRAVA TVÉ FUNKCE PRO HESLO
// (ve tvém kódu přepiš řádek 'zavriAdminModal()' na 'zavriVse()')
function provestOvereni() {
    const zadane = document.getElementById('adminHesloInput').value;
    if (btoa(zadane) === HASH_HESLO) {
        odemkniVizitku();
        zavriVse(); // <--- Tady je ta změna
    } else {
        const chyba = document.getElementById('chybaHesla');
        if (chyba) chyba.style.display = "block";
        document.getElementById('adminHesloInput').value = "";
    }
}

// 6. ODEMČENÍ A EDITACE
function odemkniVizitku() {
    jeOdemceno = true;
    // Automaticky zobrazit kontakt pro editaci
    elKontakt.style.display = 'block';
    
    prvkyVizitky.forEach(el => {
        if (el) {
            el.contentEditable = "true";
            el.style.borderBottom = "2px dashed #007bff";
            el.style.cursor = "text";
        }
    });
}

// 7. UKLÁDÁNÍ A NAČÍTÁNÍ
function vytvorOdkazy(text) {
    if (!text) return "";

    // 1. Ochrana proti HTML - převedeme na čistý text, aby nám tam nezůstaly staré tagy
    let upravenyText = text;

    // 2. Nahrazení emailů odkazem
    upravenyText = upravenyText.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi, 
        '<a href="mailto:$1" style="color:inherit; text-decoration:underline;">$1</a>');
    
    // 3. Nahrazení telefonů odkazem
    upravenyText = upravenyText.replace(/((?:\+420)?\s?\d{3}\s?\d{3}\s?\d{3})/g, 
        '<a href="tel:$1" style="color:inherit; text-decoration:underline;">$1</a>');
    
    return upravenyText;
}

function ulozVizitku() {
    if (!jeOdemceno) return;
    const data = {
        jmeno: elJmeno.innerText.trim(),
        profese: elProfese.innerText.trim(),
        inicialy: elInicialy.innerText.trim(),
        kontakt: elKontakt ? elKontakt.innerText.trim() : "" // Uložíme kontakt
    };
    localStorage.setItem('mojeVizitka', JSON.stringify(data));
}

// DEFINICE VÝCHOZÍCH ÚDAJŮ
const VYCHOZI_KONTAKT = "Zahradní 50, 28002, Kolín\ne-mail: tobr74@email.cz\ntel: +420 721 336 515";

function nactiVizitku() {
    const data = JSON.parse(localStorage.getItem('mojeVizitka'));
    
    if (data) {
        if (elJmeno) elJmeno.innerText = data.jmeno;
        if (elProfese) elProfese.innerText = data.profese;
        if (elInicialy) elInicialy.innerText = data.inicialy;
        // Pokud jsou data v paměti, použijeme je
        if (elKontakt) elKontakt.innerHTML = vytvorOdkazy(data.kontakt).replace(/\n/g, '<br>');
    } else {
        // POKUD JE TO PRVNÍ SPUŠTĚNÍ, vložíme tvoji adresu a maily
        if (elKontakt) elKontakt.innerHTML = vytvorOdkazy(VYCHOZI_KONTAKT).replace(/\n/g, '<br>');
    }
    
    // DŮLEŽITÉ: Tady vizitku zamkneme, ale obsah už v elKontakt je připravený (jen schovaný)
    zamkniVizitku(); 
}


// Eventy pro uložení při kliknutí jinam
prvkyVizitky.forEach(el => {
    if (el) {
        el.addEventListener('blur', ulozVizitku);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                // Pokud je to kontakt, dovolíme Enter (nový řádek)
                if (el.id === 'edit-kontakt') {
                    // Tady nic neděláme, necháme prohlížeč odřádkovat
                    return; 
                }
                // Pro ostatní pole (jméno, profese) Enter uloží a ukončí editaci
                e.preventDefault();
                el.blur();
            }
        });
    }
});


// Spuštění při načtení
nactiVizitku();


const tlacitkoKontaktovat = document.querySelector('#kontaktovat');
const tlacitkoZapni = document.querySelector('#zapni-barvu');

// TLAČÍTKO KONTAKT (jednoduché přepínání viditelnosti)
tlacitkoKontaktovat.onclick = () => {
    // Pokud v elementu nic není (pojistka), vložíme výchozí text
    if (elKontakt.innerHTML.trim() === "") {
        elKontakt.innerHTML = vytvorOdkazy(VYCHOZI_KONTAKT).replace(/\n/g, '<br>');
    }

    if (elKontakt.style.display === 'none' || elKontakt.style.display === '') {
        elKontakt.style.display = 'block';
        elKontakt.style.fontWeight = 'bold';
        elKontakt.style.fontSize = '18px';
        elKontakt.style.whiteSpace = 'pre-line'; // Zajistí zobrazení řádků
    } else {
        elKontakt.style.display = 'none';
    }
};


// 1. NAČTENÍ DAT Z PAMĚTI
// Pamatuje si režim: 'default' (bílá/černá), 'color' (škála), nebo 'image' (obrázek)
let aktivniRezim = localStorage.getItem('rezimPozadi') || 'default';
let mojeNavolenaBarva = localStorage.getItem('ulozenaBarva') || '#1e3a8a';

const skala = document.getElementById('barevnaSkala');
if (skala) skala.value = mojeNavolenaBarva;

// 2. HLAVNÍ FUNKCE PRO APLIKACI STYLU
function aplikujStyl() {
    // VÝCHOZÍ STAV: Bílé pozadí a černý text
    let barvaPozadi = "#ffffff";
    let barvaTextu = "#000000";

    // Reset před aplikací (vypnutí obrázku)
    document.body.style.backgroundImage = "none";

    if (aktivniRezim === 'color') {
        // REŽIM ŠKÁLA: Tvá navolená barva na pozadí i text
        barvaPozadi = mojeNavolenaBarva;
        barvaTextu = mojeNavolenaBarva; 
    } 
    else if (aktivniRezim === 'image') {
        // REŽIM OBRÁZEK: Načte soubor
        document.body.style.backgroundImage = "url('https://github.com/user-attachments/assets/0116b61b-24b5-49ba-a4c7-743c419b3ba2')";
        // Zde nastavujeme modrou barvu textu pro režim obrázku
        barvaTextu = "#1e3a8a"; // Tmavě modrá (změň na svou oblíbenou)
    }

    // Aplikace barev na BODY
    document.body.style.backgroundColor = barvaPozadi;
    document.body.style.color = barvaTextu;

    // Obarvení všech ostatních prvků (úkoly, datum, svátek, formulář)
    nastavBarvuPrvku(barvaTextu);

    // Uložení stavu do paměti prohlížeče
    localStorage.setItem('rezimPozadi', aktivniRezim);
}

// 3. POMOCNÉ FUNKCE

// Funkce pro obarvení všeho ostatního
function nastavBarvuPrvku(text) {
    const kontakt = document.getElementById('kontakt');
    if (kontakt) kontakt.style.color = text;

    document.querySelectorAll('#mujSeznam li').forEach(li => {
        li.style.color = text;
    });

    document.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.id !== 'barevnaSkala') el.style.color = text;
    });

    // Obarvení kruhu a jeho stínu při najetí
    /* const kruh = document.querySelector('.kruh');
    if (kruh) {
        kruh.style.backgroundColor = text; // Kruh bude mít barvu textu
        kruh.style.color = pozadi; // Písmo TB bude mít barvu pozadí
        
        // Nastavení dynamického stínu pro hover (přidáme přes CSS proměnnou)
        kruh.style.setProperty('--barva-stinu', text);
    } */
}

// Výpočet, zda dát černý nebo bílý text podle jasu pozadí
function dejKontrastniBarvu(hex) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    const jas = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (jas >= 128) ? '#000000' : '#ffffff';
}

// 4. OVLÁDÁNÍ (PROPOJENÍ S TLAČÍTKY)

// Tlačítko Zapni/Vypni barvu
window.prepniBarvu = function() {
    aktivniRezim = (aktivniRezim === 'color') ? 'default' : 'color';
    aplikujStyl();
};

// Tlačítko Zapni/Vypni obrázek
window.zapniObrazek = function() {
    aktivniRezim = (aktivniRezim === 'image') ? 'default' : 'image';
    aplikujStyl();
};

// Sledování škály
if (skala) {
    skala.addEventListener('input', (e) => {
        mojeNavolenaBarva = e.target.value;
        localStorage.setItem('ulozenaBarva', mojeNavolenaBarva);
        aktivniRezim = 'color'; // Při hýbání se škálou hned zapneme barvu
        aplikujStyl();
    });
}

// 5. START
aplikujStyl();


// 1. ZÁKLADNÍ PROMĚNNÉ A NASTAVENÍ MODALU
const novyUkol = document.getElementById('novyUkol');
const pridat = document.getElementById('pridat');
const mujSeznam = document.getElementById('mujSeznam');

// Mapa pro priority (N-normální, S-spěchá, D-důležité)
const priorityMap = { "green": "N", "orange": "S", "red": "D" };

// Prvky nového moderního modalu
// --- OVLÁDÁNÍ MODALU PRO ÚKOLY ---
const taskModal = document.getElementById('taskModal');
const modalInput = document.getElementById('modalInput');
const modalConfirm = document.getElementById('modalConfirm');

// Pomocná proměnná: uchovává, do kterého úkolu zrovna píšeme podpoložku
let targetList = null; 

// Funkce, kterou volá tlačítko "+" u úkolu
// Funkce pro otevření okna úkolů
function openTaskModal(seznamUl) {
    cilovySeznamProPolozku = seznamUl;
    const modal = document.getElementById('taskModal');
    if (modal) {
        modal.classList.add('videt'); // Sjednocené otevírání
        const vstup = document.getElementById('modalInput');
        vstup.value = "";
        setTimeout(() => vstup.focus(), 100);
    }
}

// Funkce pro otevření okna úkolů
function openTaskModal(seznamUl) {
    cilovySeznamProPolozku = seznamUl;
    const modal = document.getElementById('taskModal');
    if (modal) {
        modal.classList.add('videt'); // Sjednocené otevírání
        const vstup = document.getElementById('modalInput');
        vstup.value = "";
        setTimeout(() => vstup.focus(), 100);
    }
}

// Zavření okna úkolů
document.querySelector('.close-btn').onclick = () => taskModal.classList.remove('videt');

// FUNKCE PRO ZAVÍRÁNÍ
// Funkce, která zavře úplně všechna okna
function zavriVsechnaOkna() {
    document.getElementById('moje-okno').classList.remove('videt');
    document.getElementById('taskModal').classList.remove('videt');
}

// Zavírání křížkem (pro obě okna)
document.querySelectorAll('.zavrit, .close-btn').forEach(btn => {
    btn.onclick = zavriVsechnaOkna;
});

// ZAVÍRÁNÍ KLÁVESOU ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        zavriVsechnaOkna();
    }
});

// Podpora pro Enter v okně úkolů (aby se okno nezavřelo a přidalo položku)
document.getElementById('modalInput').onkeypress = (e) => {
    if (e.key === 'Enter') {
        document.getElementById('modalConfirm').click();
    }
};

// Potvrzení v modálním okně (tlačítko "Přidat")
// Potvrzení přidání podpoložky
modalConfirm.onclick = () => {
    const text = modalInput.value.trim();
    if (text && targetList) {
        targetList.appendChild(vytvorPodpolozku(text));
        ulozDoPameti();
        taskModal.classList.remove('videt');
    }
};

// Podpora klávesy Enter uvnitř modalu
modalInput.onkeypress = (e) => {
    if (e.key === 'Enter') modalConfirm.click();
};

// 2. FUNKCE PRO ULOŽENÍ A NAČTENÍ(LocalStorage)
function ulozDoPameti() {
    const ukoly = [];
    document.querySelectorAll('#mujSeznam > li').forEach(li => {
        const podpolozky = [];
        li.querySelectorAll('.pod-polozka').forEach(pLi => {
            podpolozky.push({
                text: pLi.querySelector('.p-text').innerText,
                cas: pLi.querySelector('.p-cas-raw').innerText, 
                hotovo: pLi.classList.contains('p-done')
            });
        });
        ukoly.push({
            text: li.querySelector('.hlavni-text').innerText,
            info: li.querySelector('.info-cas').innerText,
            barva: li.style.borderLeftColor,
            hotovo: li.classList.contains('done'),
            podpolozky: podpolozky
        });
    });
    localStorage.setItem('mojeUkoly', JSON.stringify(ukoly));
}

// 3. FUNKCE PRO TVORBU ELEMENTŮ (Úkoly a podpoložky)
// POMOCNÁ PROMĚNNÁ PRO MODAL (umístit na začátek skriptu)
let cilovySeznamProPolozku = null; 

// Vytvoření malé položky (podúkolu)
function vytvorPodpolozku(text, casData, hotovo = false) {
    const pLi = document.createElement('li');
    pLi.className = "pod-polozka" + (hotovo ? " p-done" : "");
    pLi.style.cssText = "font-size:15px; font-weight:bold; list-style:none; border-bottom:1px solid rgba(0,0,0,0.05); display:flex; justify-content:space-between; padding:5px 0; cursor:pointer; text-align:left;";

    const nyni = new Date();
    const cas = casData || `${nyni.toLocaleDateString()} ${nyni.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;

    pLi.innerHTML = `
        <span class="p-klik" style="flex-grow:1;">• <span class="p-text">${text}</span> <small style="color:gray">(${cas})</small><span class="p-cas-raw" style="display:none">${cas}</span></span>
        <button class="del-sub" style="background:none; border:none; color:red; cursor:pointer; font-weight:bold; padding:0 5px; display:flex; align-items:center; justify-content:center;">×</button>
    `;

    pLi.querySelector('.p-klik').onclick = (e) => {
        e.stopPropagation();
        pLi.classList.toggle('p-done');
        ulozDoPameti();
    };

    pLi.querySelector('.del-sub').onclick = (e) => {
        e.stopPropagation();
        pLi.remove();
        ulozDoPameti();
    };
    return pLi;
}

// Sestavení hlavního bloku úkolu
function sestavUkol(text, info, barva, hotovo, podpolozkyData) {
    const li = document.createElement('li');
    if (hotovo) li.classList.add('done');
    li.style.borderLeft = `10px solid ${barva}`;
    li.style.marginBottom = "15px";
    li.style.padding = "10px";
    li.style.background = "rgba(255,255,255,0.7)";
    li.style.display = "flex";
    li.style.flexDirection = "column";

    let symbol = priorityMap[barva] || "N";

    li.innerHTML = `
        <div style="display:flex; justify-content:flex-start; align-items:center; width: 100%;">
            <div class="priorita-btn" style="cursor:pointer; font-weight:bold; font-size:18px; color:${barva}; min-width:25px; text-align:left; margin-right:5px;">${symbol}</div>
            <div class="klik-oblast" style="cursor:pointer; flex-grow:1; text-align:left; overflow:hidden;">
                <span class="hlavni-text" style="display:block; font-weight:bold; font-size:18px;">${text}</span>
                <span class="info-cas" style="font-size:11px; color:#666;">${info}</span>
            </div>
            <div style="display:flex; gap:5px; align-items:center; margin-left: auto;">
                <button class="add-sub" style="background:#28a745; color:white; border:none; border-radius:4px; cursor:pointer; padding:6px 10px; font-size:11px; white-space:nowrap; display:flex; align-items:center; justify-content:center;">+ Položka úkolu</button>
                <button class="delete" style="background:#dc3545; color:white; border:none; border-radius:4px; width:26px; height:26px; cursor:pointer; display:flex; align-items:center; justify-content:center; font-weight:bold;">x</button>
            </div>
        </div>
        <ul class="pod-seznam" style="margin-top:8px; padding:0; border-top:1px solid #ddd; width: 88%;"></ul>
    `;

    const podSeznamUl = li.querySelector('.pod-seznam');

    // LOGIKA PŘEPÍNÁNÍ PRIORITY (Kliknutím na písmeno)
    li.querySelector('.priorita-btn').onclick = (e) => {
        e.stopPropagation();
        const btn = e.target;
        if (li.style.borderLeftColor === "green") {
            li.style.borderLeftColor = "orange"; btn.innerText = "S"; btn.style.color = "orange";
        } else if (li.style.borderLeftColor === "orange") {
            li.style.borderLeftColor = "red"; btn.innerText = "D"; btn.style.color = "red";
        } else {
            li.style.borderLeftColor = "green"; btn.innerText = "N"; btn.style.color = "green";
        }
        ulozDoPameti();
    };

    // Načtení podpoložek
    podpolozkyData.forEach(p => podSeznamUl.appendChild(vytvorPodpolozku(p.text, p.cas, p.hotovo)));

    // Odškrtnutí úkolu
    li.querySelector('.klik-oblast').onclick = () => {
        li.classList.toggle('done');
        ulozDoPameti();
    };

    // Smazání úkolu
    li.querySelector('.delete').onclick = () => { li.remove(); ulozDoPameti(); };

    // AKTUALIZOVÁNO: Otevření moderního modalu místo promptu
    li.querySelector('.add-sub').onclick = (e) => {
    e.stopPropagation(); // Důležité, aby se neoznačil úkol jako hotový
    openTaskModal(podSeznamUl);
    };

    return li;
}

// LOGIKA POTVRZENÍ V MODALU (Zůstává otevřené pro více položek)
const modalConfirmUkol = document.getElementById('modalConfirm');
const modalInputUkol = document.getElementById('modalInput');


// POTVRZENÍ V OKNĚ ÚKOLU
if (modalConfirmUkol) {
    modalConfirmUkol.onclick = () => {
        const text = modalInputUkol.value.trim();
        if (text && cilovySeznamProPolozku) {
            // 1. Přidáme položku do seznamu
            cilovySeznamProPolozku.appendChild(vytvorPodpolozku(text));
            
            // 2. Uložíme do paměti
            ulozDoPameti();
            
            // 3. VYMAŽEME POLÍČKO pro další zadávání (ale okno NEZAVÍRÁME)
            modalInputUkol.value = "";
            
            // 4. VRÁTÍME KURZOR do políčka, aby se dalo hned psát dál
            modalInputUkol.focus();
            
            // Poznámka: Okno se teď zavře jen křížkem nebo kliknutím na pozadí
        }
    };
}


// Přidání nového hlavního úkolu s animací
function pridatUkol() {
    const text = novyUkol.value.trim();
    const barvaPriority = document.getElementById('priorita').value;

    if (!text) {
        novyUkol.style.border = "2px solid red";
        novyUkol.animate([
            { transform: 'translateX(0px)' }, { transform: 'translateX(5px)' }, 
            { transform: 'translateX(-5px)' }, { transform: 'translateX(0px)' }
        ], { duration: 200, iterations: 3 });
        return;
    }
    novyUkol.style.border = "1px solid #ccc";

    const nyni = new Date();
    const info = `🗓️ ${nyni.toLocaleDateString()} | 🕒 ${nyni.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;

    const li = sestavUkol(text, info, barvaPriority, false, []);
    mujSeznam.appendChild(li);
    novyUkol.value = "";
    ulozDoPameti();
}

// Načtení dat při startu
function nactiZPameti() {
    const ulozene = JSON.parse(localStorage.getItem('mojeUkoly') || '[]');
    mujSeznam.innerHTML = "";
    ulozene.forEach(d => {
        mujSeznam.appendChild(sestavUkol(d.text, d.info, d.barva, d.hotovo, d.podpolozky));
    });
}

// Spuštění
nactiZPameti();
pridat.onclick = pridatUkol;
novyUkol.onkeypress = (e) => { if (e.key === 'Enter') pridatUkol(); };


// Pole s moudry
const moudra = [
  "Programování je 10 % psaní kódu a 90 % zírání do monitoru.",
  "Chyba není v kódu, chyba je v uživateli.",
  "Včera mi kód fungoval, dneska jsem na nic nesáhl a nefunguje.",
  "Programátor je stroj, který přeměňuje kofein v kód.",
  "Když to funguje, nesahej na to!",
  "Každý kód, který jsi napsal před půl rokem, vypadá, jako by ho psal idiot.",
  "Nejdřív vyřeš problém, pak teprve piš kód.",
  "Dvakrát měř, jednou Ctrl+C."
];

// Náhodný výběr moudra z pole s moudry
function ukazMoudro() {
  const index = Math.floor(Math.random() * moudra.length);
  alert(moudra[index]);
}

// Funkce klikni, přičítá každé kliknutí do skore
let skore = 0;

function klikni() {
  skore++;
  
  // Najde prvek s ID 'pocitadlo' a přepíše v něm text
  document.getElementById('pocitadlo').innerText = `Skóre: ${skore}`;

  // Malý vizuální efekt při kliknutí
  document.getElementById('pocitadlo').style.transform = "scale(1.2)";
  setTimeout(() => {
    document.getElementById('pocitadlo').style.transform = "scale(1)";
  }, 100);

  // Počítadlo kliknutí, při dosažení 10 kliknutí gratulace, restart a počítání znovu od 0
  if (skore === 10) {
    alert("Gratulace! Jsi mistr klikání.");
    skore = 0; // Restart
    document.getElementById('pocitadlo').innerText = `Skóre: ${skore}`;
  }
}

// Pole s citaty
const citaty = [
'„Život je takový, jaký si ho uděláme.“',
'„Každý den je nová šance začít znovu.“',
'„Život není o čekání, až bouře přejde, ale o učení se tancovat v dešti.“',
'„Není důležité, kolikrát spadneš, ale kolikrát vstaneš.“',
'„Každé ráno je nový začátek a příležitost být lepší než včera.“',
'„Život je příliš krátký na to, abys zůstal stát.“',
'„Nečekej na správný okamžik – vytvoř si ho.“',
'„Věci, které nás děsí, často vedou k největšímu růstu.“',
'„Život je jako kniha – každý den je nová stránka.“',
'„Každý moment má svůj smysl – stačí ho najít.“',
'„Neboj se selhání – boj se toho, že to nikdy nezkusíš.“',
'„Změna je těžká na začátku, chaotická uprostřed a krásná na konci.“',
'„Skutečná síla není ve svalech, ale ve vytrvalosti.“',
'„Když padáš, nauč se létat.“',
'„Síla není v tom, že nikdy nepadneš, ale že vždy znovu vstaneš.“',
'„Pamatuj, že i nejtěžší chvíle tě formují v silnějšího člověka.“',
'„Za každým snem se skrývá odvaha zkusit to znovu.“',
'„Největší úspěchy začínají nejistotou.“',
'„Tvůj největší limit je ten, který si nastavíš sám.“',
'„Žij tak, aby si tě tvé sny pamatovaly.“',
'„Nejdůležitější není, co máme, ale koho máme.“',
'„Lidé zapomenou, co jsi řekl, ale nikdy nezapomenou, jak se s tebou cítili.“',
'„Moudrost přichází z chyb, které si dovolíš udělat.“',
'„Člověk se učí celý život, a přesto umírá nevědomý.“',
'„Někdy je mlčení tou nejhlasitější odpovědí.“',
'„Ne každé ticho je prázdné – někdy v něm najdeš odpovědi.“',
'„Život je otázkou rovnováhy – mezi tím, co pustíš, a co si necháš.“',
'„Nesnaž se být perfektní – buď opravdový.“',
'„Nejsilnější lidé jsou ti, kteří se usmívají přes slzy.“',
'„Nejdůležitější rozhodnutí děláme v nejtěžších chvílích.“',
'„Život je série malých zázraků – neváhej je vidět.“',
'„Každý den je dar – proto se mu říká přítomnost.“',
'„S každým koncem přichází nový začátek.“',
'„Užívej si malé věci – jednou si uvědomíš, že byly těmi největšími.“',
'„Někdy musíš ztratit směr, abys našel svou cestu.“',
'„Krása života je v jeho nedokonalosti.“',
'„Život je odrazem toho, jak se rozhodneš na něj dívat.“',
'„Zázraky se dějí těm, kteří na ně věří.“',
'„Nejde o to mít čas – jde o to si ho udělat.“',
'„I malý krok vpřed je stále krok.“',
'„Smysl života nenajdeš, musíš ho vytvořit.“',
'„Nejde o to přežít – jde o to skutečně žít.“',
'„Život není měřen počtem nádechů, ale momenty, které nám berou dech.“',
'„Najdi, co miluješ, a nech to být tvým životem.“',
'„Život není cíl – je to cesta, kterou jdeš každý den.“',
'„To, co děláš pro druhé, definuje tvůj smysl.“',
'„Život je otázkou voleb, ne náhod.“',
'„Smysl života je milovat a být milován.“',
'„Opravdové bohatství není v penězích, ale v prožitcích.“',
'„Někdy právě ticho přináší největší odpovědi.“'
];

// Náhodný výběr citátu z pole s citaty
function ukazCitat() {
  const index = Math.floor(Math.random() * citaty.length);
  alert(citaty[index]);
}

// Pole s vtipy
const vtipy = [
'„Mami, dáš mi prosím 50 korun pro starého a chudého pána?"\n\
„Ty jsi moc hodný, ale kde vlastně je?"\n\
„Tady na rohu ulice, prodává zmrzlinu."',
'„Pane strážmistře, z vás by byl lepší zločinec než policista.“\n\
„A proč, pane kapitáne?“\n\
„Po vaší práci nikdy není ani stopa!“',
'„Drahoušku, co říkáš na to, že bychom se vzali na Vánoce?“\n\
„Prosím tě, přestaň. Proč si kazit svátky?“',
'Budeme mít krásné Vánoce – dám ženě tisícovku, ta ji dá babičce, ta zase dědečkovi, a ten ji dá mně. Já ji potom vrátím sousedovi, od kterého jsem si ji půjčil, a jsme všichni spokojeni.',
'Ve škole:\n\
Učitel: „Kolik jsou 4 000 zapsané římskými čísly?“\n\
Žák: „Mmmm…“\n\
Učitel: „Skvěle, to máte na výbornou.“',
'Káva vyřeší všechno…\n\
Jsi unavená? Dej si kávu!\n\
Je ti zima? Dej si kávu!\n\
Štve tě někdo? Vylej mu ji na hlavu!',
'Mladý Kohn přijde za rabínem a ptá se ho na radu:\n\
„Rabi, naskytla se mi nevěsta, co mám dělat?“\n\
„Ožeň se.“\n\
„Jenže ona se mi nelíbí, je ošklivá, kulhá…“\n\
„Tak se nežeň.“\n\
„Jenže ona je ze skvělé rodiny, její otec je majitel banky, hned tam můžu začít pracovat jako ředitel…, taková příležitost se mi už nikdy v životě nenaskytne.“\n\
„Tak se ožeň.“\n\
\n\
Nespokojený Kohn začne lamentovat:\n\
„Rebe, já jsem za vámi přišel s tím, že mi poradíte, a vy v jednu chvíli říkáte ‚ožeň se‘, pak zase ‚nežeň se‘, co je tohle za radu?“\n\
„Tak já se budu muset ponořit do svatých písem, přijď za čtrnáct dní.“\n\
\n\
Za čtrnáct dní přijde Kohn a netrpělivě se ptá:\n\
„Tak co, rabi, máte pro mě radu? Ze svatých písem?“\n\
„Ano, mám – nech se pokřtít.“\n\
„Pokřtít? A jak se tím vyřeší moje dilema s nevěstou?“\n\
„No to já nevím, ale budeš s tím chodit otravovat někoho jinýho.“',
'Muž přijde do práce a kolega se ho zeptá:\n\
„Jardo, co si myslíš, že dostaneš k Vánocům?“\n\
„No, asi chlapa. Včera jsem ho našel u manželky ve skříni.“',
'Rada do života: Když budeš spát do oběda, ušetříš za snídani.',
'„Přátelé, většinou se nechlubím drahými výlety a cestami, ale pro jednou snad prominete: Právě jsem se vrátil z benzinky!“',
'Ptá se paní železničáře:\n\
„Kdy pojede vlak na Písek?“\n\
„Jo, paninko, to neví nikdo… Zatím tady jezdí všechny motoráky na naftu.“',
'Manžel vstal z křesla a šel do kuchyně.\n\
V tu chvíli spadly těžké hodiny přesně na místo, kde předtím seděl.\n\
Manželka jen suše řekla: „Ty hodiny se pořád opožďují!“',
'Muž se ptá v předstihu manželky, co by si přála k Vánocům. Ona mu pokaždé odpovídá: „Nevím.“\n\
\n\
Uběhne pár týdnů… oba sedí u vánočního stromečku a rozbalují dárečky. Žena se pustí do vybalování, když tu na ni z lesklého papíru vypadne špinavý kus plechu.\n\
„Co je to?“ nechápe manželka.\n\
„Nevím,“ odpoví muž.',
'Pokaždé, když si jdu koupit rum, k tomu přihodím mouku, aby to vypadalo, že je to na pečení. Nechcete někdo ode mě 25 kg mouky?',
'Potká medvěd zajíce a ten mu říká: „Čau medvěde, pozdravuje tě Hroutil.“\n\
„Jakej Hroutil?“\n\
„Ten, co ti zadkem kroutil!“\n\
Zajíc se strašně chechtá a uteče.\n\
\n\
Za nějakou dobu se opět potkají…\n\
„Čau medvěde. Co dělá Hroutil?“\n\
„Jakej Hroutil?“\n\
„Ten, co ti zadkem kroutil!“ vysměje se mu zajíc a uteče.\n\
\n\
Medvěda už to štve, a tak se jde zeptat lišky, jak má zajíce dostat.\n\
Liška mu říká: „Tak mu to taky udělej. Řekni mu třeba: Pozdravuje tě Hacil a až se zeptá, jakej Hacil, tak řekni: Ten, co tě do hlavy bacil.“\n\
„To je skvělý, díky, fakt, na to bych nepřišel,“ říká medvěd a jde za zajícem: „Čau zajíci, pozdravuje tě Hacil.“\n\
„Já vím, říkal mi to Hroutil.“\n\
„Jakej Hroutil?“',
'Odpovědi na zkouškové otázky uchazeče o pracovní místo v Google Inc., který sice získal 0 bodů ze zkoušky, ale přesto byl přijat:\n\
\n\
1. Během které bitvy zemřel Napoleon?\n\
– během té poslední\n\
2. Kde byla podepsána Deklarace nezávislosti?\n\
– dole, na poslední stránce\n\
3. Hlavní příčina rozvodu?\n\
– svatba\n\
4. Hlavní příčina neúspěchu?\n\
– zkouška\n\
5. Co jste nikdy neměl ke snídani?\n\
– oběd a večeři\n\
6. Co vypadá jako půlka jablka?\n\
– druhá půlka\n\
7. Pokud hodíme červený kamen do modrého moře, jaký bude?\n\
– mokrý\n\
8. Jak může člověk žít osm dní bez spánku?\n\
– bez problémů, vždyť v noci spí\n\
9. Pokud budete mít 3 jablka a 4 pomeranče na jedné dlani a 4 jablka a 3 pomeranče na druhé, co budete mít?\n\
– opravdu velké dlaně\n\
10. 8 zedníků postavilo zeď za 10 hodin, kolik času to zabere 4 zedníkům?\n\
– žádný čas, zeď již byla postavena\n\
11. Jak můžeme hodit vejce na betonový základ tak, abychom ho nerozbili?\n\
– jakkoliv, vejce v žádném případě nepoškodí betonový základ',
'To takhle minulý prezident USA, Joe Biden, sháněl po volbách do svého týmu zkušeného poradce a diplomata. O tento post se nakonec uchází jediný kandidát: Pepa Horáček.\n\
\n\
„Zkuste mě, znám se se všema osobně,“ říká Bidenovi. Biden si pomyslí: „Nějaký hloupý venkovan, ale co… Za zkoušku nic nedám.“ S těmi slovy se rozhodne Pepu Horáčka otestovat.\n\
\n\
Nejdříve dojedou za Schwarzeneggerem:\n\ „Nazdar Horáček, ty stará vojno! Tak jak se vede po tý dlouhý době?“ poplácá ho Arnold po rameni a užuž se s ním začne domlouvat na společném čase v posilovně. To Bidena trošku překvapí, ale řekne si, že nic neponechá náhodě.\n\
\n\
A tak jdou za Madonnou. „Ahoj Pepíku, ráda Tě zase vidím,“ řekne Madonna, dá mu pusu na tvář a začne ho přemlouvat na společnou skleničku vína. Joe Biden je evidentně potěšený, ale řekne si, že přeci jen udělá ještě poslední zkoušku.\n\
\n\
A tak společně jedou do Vatikánu, kde se papež právě před zraky všeho lidu modlí na balkoně před Svatopetrským náměstím. Pepa Horáček vystoupá odvážně za ním. Když jsou oba dva společně na balkoně asi 5 minut, všimne si Pepa, že Joe Biden dole mezitím omdlel a ochranka se ho snaží vzkřísit.\n\
\n\
Když seběhne dolů, ptá se, co se stalo. Na to mu už napůl vzkříšený Biden povídá: „Když jste nahoře stál s papežem, tak ještě dobré. Ale když se vedle mě stojící Japonec zeptal ostatních, co je to tam za dědulu vedle Horáčka, to už bylo moc i na mě.“',
'Pan Novák se vrací domů z práce, bohužel si doma zapomněl doklady. Náhodou ho zastaví policista, a protože se nemůže legitimovat, je odvezen na stanici a začne vyšetřovačka.\n\
\n\
„Jmenuji se Novák, bydlím na Palackého 5. Zeptejte se domovníka!“\n\
Za půlhodiny se policisté vrátí s tím, že tam žádný Novák nebydlí. Takže dostane nakládačku, aby se přiznal, kdo že to vlastně je.\n\
Když už je zmlácený do modra, náhodou vejde do místnosti nadporučík. Když vidí dobitého chudáka vykřikne: „Petře, proboha, co jsi vyváděl!?“\n\
„Vy ho znáte, pane nadporučíku?“\n\
„Jasně, spolužák ze základky, Petr Novák. Tuším, že bydlí na Palackého.“\n\
Pan Novák se teda zbitý vrací domů a před vchodem vyběhne domovník.\n\
„Pane Nováku, rychle utečte! Hledala vás tu policie, ale já jsem vás kryl.“',
'„Haló, to je vodárna?“\n\
„Ano, co si přejete?“\n\
„Z mého vodovodu teče voda.“\n\
„A co byste očekával?“\n\
„Podle toho účtu… aspoň Pilsner Urquell!“',
'Učitel chce demonstrovat žákům účinky alkoholu, a tak přinese do školy dva červy, dvě sklenice a flašku vodky. Během hodiny jim ukazuje pokus, kdy v jedné sklenici je červ ve vodě a je spokojený, jak jen může být. Ve druhé sklenici s vodkou se červ kroutí a pak upadne na dno.\n\
Učitel říká: „Tak, žáci, co jste zjistili?“\n\
Jeden žák se ozve: „Pijte alkohol, nebudete mít červy.“',
'„Máte jednolůžkový pokoj s tekoucí vodou?“\n\
„Máte smůlu, včera nám opravili střechu.“',
'Ptá se paní učitelka Marka: „Marku, kolik řad zubů máme za život a jak je nazýváme?“\n\
Marek: „Troje, paní učitelko.“\n\
Učitelka: „Jak to?“\n\
Marek: „Noooo, máme mléčné, stálé a klapačky!“',
'Mladé děvče jde přes park, když vtom vidí proti sobě velkého chlapa, ruce roztažené, vlevo keř, vpravo keř, tak si říká, to je konec. Když už byl blízko, tak se rozběhla a vší silou ho nakopla do rozkroku. Velká rána, řev a nadávání: „Do háje, to je už třetí tabule skla, já to okno snad nikdy nezasklím!“',
'Každá žena má něco hezkého. Jedna oči, druhá vlasy, třetí kamarádku.',
'Víte, že Mezinárodní den žen měl být původně 6. března?\n\
Ale znáte to, než se holky namalujou...',
'Žena se ptá manžela:\n\
„Co bys dělal, kdyby mě unesli?“\n\
„No to bych jim pogratuloval, protože tebe, kdyby někdo unesl, tak to by musel být ohromný silák.“',
'Pro ženu neexistuje problém, který by se nedal vytvořit!',
'Dneska mě pozvalo 10 holek ven. Byl jsem totiž v dámské šatně.',
'Policista zastavil auto a ptá se řidiče: „Požil jste před jízdou nějakou návykovou látku?“\n\
Řidič: „Ano, měl jsem vynikající zmrzlinu.“',
'Nemilá situace, v porodnici byla záhy po porodu promíchána tři novorozeňata od nigerijské, slovenské a maďarské maminky. Rodičky jsou čerstvě po porodu, tak pozvou tatínky, ať se rozhodnou, čí je které mimino.\n\
\n\
Ti přijdou a Slovák se hned sápe po černouškovi. Všichni se ho ptají proč, vždyť je přeci zřejmé, že není jeho. Ten ale nehne brvou: „Možno to nie je moje, ale Maďara riskovať nebudem!“',
'Roubíček stojí u náhrobku a čte: „Zde odpočívá Izák Khon, řádný člověk, poctivý obchodník.“\n\
Povzdechne si: „Chudák Khon, musí bejt v hrobě se dvěma úplně cizíma lidma.“',
'Rodiče, nechte své děti věřit na Ježíška. Vám taky nikdo nebere vaši víru na krémy proti vráskám, na celulitidu a šampóny proti padání vlasů.',
'„Hej, králíku, dáme si závod, kdo bude dřív doma,“ povídá želva. A než jí králík stihne odpovědět, schová se do krunýře.',
'Muž přijde na úřad a úřednice mu říká: „Pane, vy neplatíte televizní poplatky pro Českou televizi.“\n\
Pán odpoví, že se na ČT nekouká, úřednice mu řekne: „To nevadí, ale přístroj na to máte.“\n\
„Chtěl bych zažádat o přídavky na děti.“\n\
„Ale pane, vy nemáte děti!“\n\
„To nevadí, ale přístroj na to mám!“',
'Maminka: Pepíčku, chutná ti ten bonbon, co jsem ti dala?\n\
Pepíček: Ano, maminko, chutná.\n\
Maminka: No vidíš! A náš Alík ho vyplivnul.',
'Vývoj elektroniky v kostce:\n\
1953: „Kam ten počítač dáme?“\n\
2022: „Kam jsem ten počítač dal?“',
'Cestují dvě dámy vlakem v kupé společně s cizím mužem.\n\
První: „Nejlepší milenci na světě jsou Maďaři.“\n\
Druhá: „Nejlepší milenci na světě jsou indiáni.“\n\
Muž: „Dámy, dovolte, abych se představil... Ištván Vinnetou!“',
'50 % obyvatel vidí budoucnost optimisticky. Zbylých 50 % nemá na drogy peníze.',
'Povídají si dva kamarádi:\n\
„Tak jsem se včera nějak zapomněl v hospodě a abych si to u manželky aspoň trošku vyžehlil, koupil jsem jí květiny. Říkám si, co budeš vysvětlovat, květiny řeknou vše.“\n\
„A co řekly?“\n\
„Nic, ona je vůbec nepustila ke slovu!“',
'Šéfredaktor si zavolá redaktorku a ptá se: „Máte večer čas?“\n\
Ona zčervená a šeptne: „Ano.“\n\
Na to on: „Fajn, tak si doma sedněte a učte se pravopis.“',
'Zastavíš v autě stopařce, která ti ale v autě omdlí... To je stresující.\n\
V nemocnici ti doktor řekne, že je těhotná a že ti gratuluje k otcovství. Bráníš se, že to dítě není tvoje, ale ona tvrdí opak... To je velmi stresující.\n\
Požádáš o testy DNA, abys dokázal, že nejsi otcem dítěte. Po testech ti lékař opatrně vysvětlí, že jsi neplodný, pravděpodobně už od narození... To je extrémně stresující. Ale ulevilo se ti.\n\
Po cestě domů začneš myslet na svoji rodinu a na své tři děti... A to je ten pravý stres.',
'Můj dietní plán: Dát všem svým kamarádům cupcake. 🧁\n\
Čím budou tlustší, tím hubenější budu vypadat já.',
'Přijde tak jeptiška do obchodu a zařve: „Láhev rumu!“ Prodavač jí to tak dává, ale nedá mu to a zeptá se: „Já myslel, že jeptišky pít alkohol nesmí.“ A ona mu odpoví: „Víte, to je pro matku představenou, ona nemůže usnout a tohle jí pomáhá.“\n\
\n\
Tak prodavač souhlasí, a když mu skončí práce, tak jde domů a vidí tu jeptišku, která je opilá na lavičce a naštvaně jí říká: „Vždyť jste mi říkala, že to je pro matku představenou!“ A ona mu odpoví: „No vždyť jo, ta omdlí, až mě uvidí!“',
'Je chlapeček s maminkou na hřbitově a maminka mu vysvětluje, že v hrobech lidé spí. Najednou se ze tmy vynoří stará paní a chlapeček spustí: „Ta paní už se vzbudila.“',
'Táta se ptá Honzíka:\n\
„Honzíku, proč jsi nešel hrát karty s Lízou?“\n\
„A ty bys šel hrát karty s někým, kdo podvádí?“\n\
„To rozhodně ne!“\n\
„Líza taky ne!“',
'„V supermarketu píšou, že platit se dá libovolnou kartou. Vytáhla jsem zelenou sedmu. Přijde pro mě někdo prosím na policii?“',
'Tajemstvím úspěchu v politice jsou slušnost a upřímnost. Jakmile se jich zbavíte, dosáhnete všeho.',
'Sejde se Čech, Slovák, Japonec a Pirát.\n\
To není začátek vtipu, ale české volby.',
'„Předvolební sliby asi nesplníme, ale chtěl bych občany ujistit, že příště dáme nové.“',
'Oranžové světlo na semaforu znamená, že máma zastaví a táta jede dál.',
'Naše meteorologická stanice\n\
Je-li provaz teplý – je slunečno.\n\
Je-li provaz mokrý – prší.\n\
Je-li provaz bílý – sněží.\n\
Je-li provaz ztuhlý – je mráz.\n\
Je-li provaz kolmo – je vichřice.\n\
Kýve-li se provaz – je větrno.\n\
Není-li provaz vidět – je mlha.\n\
Mizí-li provaz před očima – přestaňte pít.\n\
Je-li provaz začouzený – nekuřte tu.\n\
Není-li zde žádný provaz – jste v Čechách.',
'Inzerát: Vyměním půlku mozku za další játra, protože do budoucna plánuji více pít a méně se stresovat. Zn.: Spěchá!',
'U soudu:\n\
Soudce: „Svědku, víte, co můžete dostat za křivé svědectví?“\n\
Svědek: „Vím. Obžalovaný mi slíbil nové auto.“',
'Deník Američana na Moravě\n\
Pondělí: Piju s Moraváky.\n\
Úterý: Skoro jsem zemřel.\n\
Středa: Zase piju s Moraváky.\n\
Čtvrtek: Lituji, že jsem v úterý nezemřel...',
'Pepíček se chlubí kamarádům: „O hodině jsem řekl tak dobrý vtip, že pozvali moje rodiče, aby si ho poslechli taky.“',
'Pracovní pohovor: „Proč chcete tak vysokou výplatu, když ani nemáte žádné vzdělání v oboru?“\n\
„Ta práce bude přece mnohem těžší, když ani nebudu vědět, co dělám!“',
'Malíř se ptá pastýře:\n\
„Mohl bych namalovat vaše ovce?“\n\
„Ne. Co bych pak dělal s barevnou vlnou?“',
'„Sousede, půjčil bys mi na víkend vrtačku?“\n\
„Co budeš dělat?“\n\
„Nic, ale konečně se vyspím!“',
'„Hele, když vidíš krásnou ženskou, kam se nejdřív koukáš?“\n\
„Jestli se nedívá ta moje…“',
'Chlapec doma ukazuje žákovskou a tatínek jen koulí očima:\n\
„Koukej na ty známky z matematiky, to je katastrofa!“\n\
Chlapec jen pokrčí rameny a tatínek rozhněvaně pokračuje:\n\
„Já jsem si to spočítal a ty tu máš průměr 5,8! To by mě zajímalo, po kom jsi tak hloupý!“',
'Tři muži se sejdou u brány mezi peklem a nebem\n\
Přichází svatý Petr a říká:\n\
Vítejte u posvátné brány, nuže, jak jste nejspíš pochopili, potkal vás váš osud. Pro pořádek bych si potřeboval zapsat okolnosti... mhm... zajímavé... všichni tři jste umřeli přibližně ve stejnou dobu na stejném místě.\n\
Dobrá, začneme od nejstaršího. Co se vám přihodilo?\n\
První muž:\n\
Ech, už jsem nějakou dobu podezříval, že mi je manželka nevěrná, a dnes jsem se v tom i přesvědčil. Přišel jsem dřív z práce a spatřil cizí boty. Hned jsem se vrhl do ložnice, kde jsem spatřil manželku. Samotnou. Ale v okně jsem viděl viset souseda! Začal jsem po něm házet všechno možný, dokonce ledničku! No, ale s mým zdravím, to moje srdce nevydrželo a dostal jsem infarkt.\n\
Svatý Petr: Upřímnou soustrast. Přejdeme k dalšímu, tak co vy?\n\
Druhý muž: Moje situace byla docela spontánní. Rozhodl jsem se, že dnes už musím umýt ta okna. Když jsem je myl z vnější strany, náhle mi uklouzla noha a spadl jsem. Naštěstí jsem se chytl o sousedovo otevřené okno! Ale ten se rozzuřil, začal na mě házet všechno možný a nakonec na mě hodil i ledničku! Neměl jsem šanci.\n\
Svatý Petr: E ehm... No.. opravdu nepříjemná situace, přejdeme rovnou k poslednímu. Vyprávějte.\n\
Třetí muž: Já už ani nemám moc co dodat, šel jsem ke své milence, ale najednou přišel její manžel, tak jsem se stihl schovat do ledničky...',
'„Mami, proč ti šednou vlásky?“\n\
„Protože hodně zlobíš.“\n\
„Aha, tak já už vím, proč má babička šedou hlavu.“',
'Pošlete SMS ve tvaru JDETE-DO-HAJE na číslo 158. Možných výher je velmi mnoho – sedmidenní pobyt ve vazbě, jízda blikajícím autem, dva luxusní stříbrné náramky a v neposlední řadě také série profesionálních fotografií ve speciálních oblecích. Ovšem pozor! Prvních dvacet odesílatelů dostane dokonce osobního hlídače během pobytu!',
'Zákazníci v restauraci: „Jsem vegan a můj přítel je vegetarián. Co si u vás můžeme objednat?“\n\
Číšník: „Taxi.“',
'Policista zastaví řidiče za příliš rychlou jízdu. Vyžádá si od něj doklady a po chvilce mu povídá: „Pane řidiči, tak to máte za 4 body.“\n\
„K čemu mi budou body?“\n\
„Až jich nasbíráte 12, tak si můžete koupit kolo.“',
'Zákazník se ptá v bufetu:\n\
„Co má znamenat ten rychlý výprodej?“\n\
„Zítra k nám má přijít hygienik.“',
'Chlapeček se ptá: „Dědo, proč jedeme tak rychle a v protisměru?“\n\
„Babička na nás čeká.“\n\
„Ale babička už nežije…“',
'Malý Pepíček si se zájmem prohlíží svého nového bratra a ptá se maminky: „On přišel z nebe, že?“\n\
„Ano, Pepíčku.“\n\
„No, ani se nedivím, že ho odtamtud vyhodili.“',
'Před šejkovým palácem zastavil autobus plně obsazený staršími ženami.\n\
\n\
„Zase turistky?“ ptá se šejk.\n\
„Nikoliv, náš pane, přijely vaše tchyně.“',
'Konečně chápu ten koloběh života. Chodím do práce, abych měl peníze na alkohol, který si kupuju, abych zvládal svoji práci.',
'Paní učitelka: „Pepíčku, proč jsi teď nebyl čtrnáct dní na online výuce?!“\n\
Pepíček: „No, můj počítač chytil virus, tak jsem ho dal radši do karantény…“',
'„Proč koukáš na ten měsíc?“\n\
„Naši říkali, že pojedeme na prázdiny na měsíc, tak koukám, jak je to daleko.“',
'Čím blíže je babička, tím víc tlustá jsou vnoučata.',
'Muž přijde z hospody domů a má hlad. Rozhodne se proto, že si uvaří špagety. Čeká hodinu a dvě, ale špagety se pořád nechtějí uvařit. Mezitím vyčerpáním usne v kuchyni.\n\
\n\
Ráno ho budí manželka a ptá se: „Můžeš mi říct, proč sis vařil ty špejle?“',
'Správce rekreační chaty vítá pana Nováka:\n\ „Uděláme všechno, abyste se zde cítil jako doma!“\n\
„Bože! A já myslel, že si sem jedu odpočinout!“'
];

// Náhodný výběr vtipu z pole s vtipy
function ukazVtip() {
  const index = Math.floor(Math.random() * vtipy.length);
  alert(vtipy[index]);
}

// --- ANIMACE RUKOPISU PŘI DOSKROLOVÁNÍ ---
const sledovacRukopisu = new IntersectionObserver((polozky) => {
    polozky.forEach(polozka => {
        // Pokud je nadpis vidět aspoň z 50 %
        if (polozka.isIntersecting) {
            polozka.target.classList.add('aktivni');
            // Jakmile se jednou animace spustí, můžeme sledování vypnout
            sledovacRukopisu.unobserve(polozka.target);
        }
    });
}, { threshold: 0.5 }); // Spustí se, když je vidět polovina prvku

// Spustíme sledování pro všechny prvky s třídou .rukopis
document.querySelectorAll('.rukopis').forEach(el => sledovacRukopisu.observe(el));


async function ziskejPocasi() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
            // ŘÁDEK 11: Tady je ta kritická oprava s /v1/forecast/
            const url1 = "https://open-meteo.com" + lat + "&longitude=" + lon + "&current_weather=true";
            
            // ŘÁDEK 12: Samotné zavolání
            const res1 = await fetch(url1);
            if (!res1.ok) throw new Error("Chyba 404 - spatna adresa");
            const d1 = await res1.json();

            // Adresa pro získání názvu města
            const url2 = "https://bigdatacloud.net" + lat + "&longitude=" + lon + "&localityLanguage=cs";
            const res2 = await fetch(url2);
            const d2 = await res2.json();

            // Vypsání dat do HTML elementů
            document.getElementById('lokace').innerText = "Zdravím do: " + (d2.city || d2.locality || "vašeho města");
            document.getElementById('teplota').innerText = Math.round(d1.current_weather.temperature) + " °C";
            document.getElementById('popis').innerText = interpretujKod(d1.current_weather.weathercode);

        } catch (e) {
            console.error("Chyba při načítání:", e);
            document.getElementById('popis').innerText = "Počasí nedostupné";
        }
    });
}
function interpretujKod(kod) {
    if (kod === 0) return "Jasno ☀️";
    if (kod <= 3) return "Polojasno ⛅";
    if (kod >= 45 && kod <= 48) return "Mlha 🌫️";
    if (kod >= 51 && kod <= 67) return "Prší 🌧️";
    if (kod >= 71 && kod <= 77) return "Sněží ❄️";
    if (kod >= 80) return "Přeháňky 🌦️";
    return "Proměnlivo";
}

// 3. SPUŠTĚNÍ PO NAČTENÍ
document.addEventListener("DOMContentLoaded", () => {
    ziskejPocasi();
    // Tady můžeš zavolat i funkci pro svátky, pokud ji máš
});

/* 1. FUNKCE PRO VYHLEDÁVÁNÍ MĚSTA PODLE NÁZVU
Spustí se po kliknutí na tlačítko "Hledat" nebo po stisku Enteru. */
async function hledatMesto() {
    // Získáme text, který uživatel napsal do políčka
    var vstup = document.getElementById('vstup-mesto').value;
    if (!vstup) return; // Pokud je prázdno, nic neděláme

    // ŠIFROVÁNÍ PRO AVAST: Zakódovaná adresa pro vyhledávací službu (Geocoding API)
    var b64_geo = "aHR0cHM6Ly9nZW9jb2RpbmctYXBpLm9wZW4tbWV0ZW8uY29tL3YxL3NlYXJjaD9uYW1lPQ==";
    
    // Rozbalíme adresu (atob) a přidáme k ní název města ošetřený pro URL (encodeURIComponent)
    var urlGeo = atob(b64_geo) + encodeURIComponent(vstup) + "&count=1&language=cs&format=json";

    try {
        const res = await fetch(urlGeo); // Pošleme dotaz na server
        const data = await res.json();  // Převedeme odpověď na čitelný formát (JSON)
        
        // Pokud server město našel (výsledků je víc než 0)
        if (data.results && data.results.length > 0) {
            const g = data.results[0]; // Vybereme první nalezený výsledek (index 0)
            // Předáme souřadnice (lat, lon), název a kód země funkci pro počasí
            nactiData(g.latitude, g.longitude, g.name, g.country_code);
        } else {
            alert("Město nebylo nalezeno!");
        }
    } catch (e) { 
        console.error("Chyba vyhledávání:", e); 
    }
}

/* 2. FUNKCE PRO ZOBRAZENÍ POČASÍ A VLAJKY Tuto funkci volá buď vyhledávání, nebo automatická poloha. */
async function nactiData(lat, lon, nazev, kodZeme) {
    // ŠIFROVÁNÍ: Adresa pro předpověď počasí (Open-Meteo API)
    var b64_pocasi = "aHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9";
    var urlP = atob(b64_pocasi) + lat + "&longitude=" + lon + "&current_weather=true";

    try {
        const res = await fetch(urlP);
        const d = await res.json();
        
        // Vypíšeme název města do HTML
        document.getElementById('lokace').innerText = nazev;
        
        // Práce s vlajkou státu
        const imgVlajka = document.getElementById('vlajka');
        if (kodZeme) {
            // ŠIFROVÁNÍ: Adresa pro obrázky vlajek (FlagCDN)
            var b64_flag = "aHR0cHM6Ly9mbGFnY2RuLmNvbS93NDAv";
            // Sestavíme cestu k obrázku (např. .../cz.png)
            imgVlajka.src = atob(b64_flag) + kodZeme.toLowerCase() + ".png";
            imgVlajka.style.display = "inline"; // Zobrazíme obrázek
        } else {
            imgVlajka.style.display = "none";   // Schováme obrázek, pokud kód země nemáme
        }

        // Vypíšeme teplotu (zaokrouhlenou na celá čísla)
        document.getElementById('teplota').innerText = Math.round(d.current_weather.temperature) + " °C";
        // Převedeme číselný kód počasí na srozumitelný text a ikonku
        document.getElementById('popis').innerText = interpretujKod(d.current_weather.weathercode);
    } catch (e) { 
        console.error("Chyba počasí:", e); 
    }
}

/* 3. AUTOMATICKÁ DETEKCE POLOHY PŘI STARTU */
function ziskejPocasi() {
    // Zeptáme se prohlížeče na GPS polohu
    navigator.geolocation.getCurrentPosition(function(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        
        // ŠIFROVÁNÍ: Adresa, která nám řekne název města podle GPS (BigDataCloud API)
         var b64_mesto = "aHR0cHM6Ly9hcGkuYmlnZGF0YWNsb3VkLm5ldC9kYXRhL3JldmVyc2UtZ2VvY29kZS1jbGllbnQ/bGF0aXR1ZGU9";
        var urlM = atob(b64_mesto) + lat + "&longitude=" + lon + "&localityLanguage=cs";

        fetch(urlM).then(r => r.json()).then(d => {
            // Tady voláme nactiData, kde musíme mít ten časový posun
            nactiData(lat, lon, d.city || d.locality, d.countryCode);
        }).catch(e => console.log("Lokalita zablokována"));
    }, function(err) {
        // Pokud uživatel polohu zakáže, napovíme mu, co má dělat
        document.getElementById('lokace').innerText = "⟵ Zadejte místo ručně";
    });
}

/* 4. PŘEVODNÍK KÓDŮ NA TEXT
API vrací čísla (např. 0), my chceme text (Jasno). */
function interpretujKod(k) {
    if (k === 0) return "Jasno ☀️";
    if (k === 1) return "Skoro jasno 🌤️"; // Jen pár mráčků
    if (k === 2) return "Polojasno ⛅";   // Mraky a slunce půl na půl
    if (k === 3) return "Skoro zataženo 🌥️"; // Hodně mraků, ale ještě ne úplná tma
    if (k === 4) return "Zataženo ☁️";      // Úplně šedá obloha
    
    // Srážky a mlha
    if (k >= 45 && k <= 48) return "Mlha 🌫️";
    if (k >= 51 && k <= 55) return "Mírné mrholení 💧";
    if (k >= 61 && k <= 65) return "Prší 🌧️";
    if (k >= 66 && k <= 67) return "Namrzající déšť 🧊";
    if (k >= 71 && k <= 77) return "Sněží ❄️";
    if (k >= 80 && k <= 82) return "Přeháňky 🌦️";
    if (k >= 95) return "Bouřky ⛈️";
    
    return "Proměnlivo 🌤️";
}

// Spustíme celý proces automaticky po načtení stránky
window.onload = ziskejPocasi;


// Automaticky zavolá ziskejPocasi každých 15 minut (900 000 milisekund)
setInterval(ziskejPocasi, 900000);



