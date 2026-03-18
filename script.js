// KOMPLETNÍ DATABÁZE SVÁTKŮ
const SVATKY_DATA = {
    "1-1": "Nový rok", "1-2": "Karina", "1-3": "Radmila", "1-4": "Diana", "1-5": "Dalimil", "1-6": "Tři králové", "1-7": "Vilma", "1-8": "Čestmír", "1-9": "Vladan", "1-10": "Břetislav", "1-11": "Bohdana", "1-12": "Pravoslav", "1-13": "Edita", "1-14": "Radovan", "1-15": "Alice", "1-16": "Ctirad", "1-17": "Drahoslav", "1-18": "Vladislav", "1-19": "Doubravka", "1-20": "Ilona", "1-21": "Běla", "1-22": "Slavomír", "1-23": "Zdeněk", "1-24": "Milena", "1-25": "Miloš", "1-26": "Zora", "1-27": "Ingrid", "1-28": "Otýlie", "1-29": "Zdislava", "1-30": "Robin", "1-31": "Marika",
    "2-1": "Hynek", "2-2": "Nela", "2-3": "Blažej", "2-4": "Jarmila", "2-5": "Dobromila", "2-6": "Vanda", "2-7": "Veronika", "2-8": "Milada", "2-9": "Apolena", "2-10": "Mojmír", "2-11": "Božena", "2-12": "Slavěna", "2-13": "Věnceslav", "2-14": "Valentýn", "2-15": "Jiřina", "2-16": "Ljuba", "2-17": "Miloslava", "2-18": "Gizela", "2-19": "Patrik", "2-20": "Oldřich", "2-21": "Lenka", "2-22": "Petr", "2-23": "Svatopluk", "2-24": "Matěj", "2-25": "Liliana", "2-26": "Dorota", "2-27": "Alexandr", "2-28": "Lumír", "2-29": "Horymír",
    "3-1": "Bedřich", "3-2": "Anežka", "3-3": "Kamil", "3-4": "Stela", "3-5": "Kazimír", "3-6": "Miroslav", "3-7": "Tomáš", "3-8": "Gabriela", "3-9": "Františka", "3-10": "Viktorie", "3-11": "Anděla", "3-12": "Řehoř", "3-13": "Růžena", "3-14": "Rút/Matylda", "3-15": "Ida", "3-16": "Elena/Herbert", "3-17": "Vlastimil", "3-18": "Eduard", "3-19": "Josef", "3-20": "Světlana", "3-21": "Radek", "3-22": "Leona", "3-23": "Ivona", "3-24": "Gabriel", "3-25": "Marián", "3-26": "Emanuel", "3-27": "Dita", "3-28": "Soňa", "3-29": "Taťána", "3-30": "Arnošt", "3-31": "Kvido",
    "4-1": "Hugo", "4-2": "Erika", "4-3": "Richard", "4-4": "Ivana", "4-5": "Miroslava", "4-6": "Vendula", "4-7": "Heřman/Hermína", "4-8": "Ema", "4-9": "Dušan", "4-10": "Darja", "4-11": "Izabela", "4-12": "Julius", "4-13": "Aleš", "4-14": "Vincenc", "4-15": "Anastázie", "4-16": "Irena", "4-17": "Rudolf", "4-18": "Valérie", "4-19": "Rostislav", "4-20": "Marcela", "4-21": "Alexandra", "4-22": "Evženie", "4-23": "Vojtěch", "4-24": "Jiří", "4-25": "Marek", "4-26": "Oto", "4-27": "Jaroslav", "4-28": "Vlastislav", "4-29": "Robert", "4-30": "Blahoslav",
    "5-1": "Svátek práce", "5-2": "Zikmund", "5-3": "Alexej", "5-4": "Květoslav", "5-5": "Klaudie", "5-6": "Radoslav", "5-7": "Stanislav", "5-8": "Den vítězství", "5-9": "Ctibor", "5-10": "Blažena", "5-11": "Svatava", "5-12": "Pankrác", "5-13": "Servác", "5-14": "Bonifác", "5-15": "Žofie", "5-16": "Přemysl", "5-17": "Aneta", "5-18": "Nataša", "5-19": "Ivo", "5-20": "Zbyšek", "5-21": "Monika", "5-22": "Emil", "5-23": "Vladimír", "5-24": "Jana", "5-25": "Viola", "5-26": "Filip", "5-27": "Valdemar", "5-28": "Vilém", "5-29": "Maxmilián", "5-30": "Ferdinand", "5-31": "Kamila",
    "6-1": "Laura", "6-2": "Jarmil", "6-3": "Tamara", "6-4": "Dalibor", "6-5": "Dobroslav", "6-6": "Norbert", "6-7": "Iveta/Slavko", "6-8": "Medard", "6-9": "Stanislava", "6-10": "Gita", "6-11": "Bruno", "6-12": "Antonie", "6-13": "Antonín", "6-14": "Roland", "6-15": "Vít", "6-16": "Zbyněk", "6-17": "Adolf", "6-18": "Milan", "6-19": "Leoš", "6-20": "Květa", "6-21": "Alois", "6-22": "Pavla", "6-23": "Zdeňka", "6-24": "Jan", "6-25": "Ivan", "6-26": "Adriana", "6-27": "Ladislav", "6-28": "Lubomír", "6-29": "Petr a Pavel", "6-30": "Šárka",
    "7-1": "Jaroslava", "7-2": "Patricie", "7-3": "Radomír", "7-4": "Prokop", "7-5": "Cyril a Metoděj", "7-6": "Mistr Jan Hus", "7-7": "Bohuslava", "7-8": "Nora", "7-9": "Drahoslava", "7-10": "Libuše/Amálie", "7-11": "Olga", "7-12": "Bořek", "7-13": "Markéta", "7-14": "Karolína", "7-15": "Jindřich", "7-16": "Luboš", "7-17": "Martina", "7-18": "Drahomíra", "7-19": "Čeněk", "7-20": "Ilja", "7-21": "Vítězslav", "7-22": "Magdaléna", "7-23": "Libor", "7-24": "Kristýna", "7-25": "Jakub", "7-26": "Anna", "7-27": "Věroslav", "7-28": "Viktor", "7-29": "Marta", "7-30": "Bořivoj", "7-31": "Ignác",
    "8-1": "Oskar", "8-2": "Gustav", "8-3": "Miluše", "8-4": "Dominik", "8-5": "Kristián", "8-6": "Oldřiška", "8-7": "Lada", "8-8": "Soběslav", "8-9": "Roman", "8-10": "Vavřinec", "8-11": "Zuzana", "8-12": "Klára", "8-13": "Alena", "8-14": "Alan", "8-15": "Hana", "8-16": "Jáchym", "8-17": "Petra", "8-18": "Helena", "8-19": "Ludvík", "8-20": "Bernard", "8-21": "Johana", "8-22": "Bohuslav", "8-23": "Sandra", "8-24": "Bartoloměj", "8-25": "Radim", "8-26": "Luděk", "8-27": "Otakar", "8-28": "Augustýn", "8-29": "Evelína", "8-30": "Vladěna", "8-31": "Pavla",
    "9-1": "Linda/Samuel", "9-2": "Adéla", "9-3": "Bronislav", "9-4": "Jindřiška", "9-5": "Boris", "9-6": "Boleslav", "9-7": "Regína", "9-8": "Miroslava", "9-9": "Daniela", "9-10": "Irma", "9-11": "Denisa", "9-12": "Marie", "9-13": "Lubor", "9-14": "Radka", "9-15": "Jolana", "9-16": "Ludmila", "9-17": "Naděžda", "9-18": "Kryštof", "9-19": "Zita", "9-20": "Oleg", "9-21": "Matouš", "9-22": "Darina", "9-23": "Berta", "9-24": "Jaromír", "9-25": "Zlata", "9-26": "Andrea", "9-27": "Jonáš", "9-28": "Václav", "9-29": "Michal", "9-30": "Jeroným",
    "10-1": "Igor", "10-2": "Olivie/Oliver", "10-3": "Bohumil", "10-4": "František", "10-5": "Eliška", "10-6": "Hanuš", "10-7": "Justýna", "10-8": "Věra", "10-9": "Štefan/Sára", "10-10": "Marina", "10-11": "Andrej", "10-12": "Marcel", "10-13": "Renata/Renáta", "10-14": "Agáta", "10-15": "Tereza", "10-16": "Havel", "10-17": "Hedvika", "10-18": "Lukáš", "10-19": "Michaela", "10-20": "Vendelín", "10-21": "Brigita", "10-22": "Sabina", "10-23": "Teodor", "10-24": "Nina", "10-25": "Beáta", "10-26": "Erik", "10-27": "Šarlota/Zoe", "10-28": "Státní svátek", "10-29": "Silvie", "10-30": "Tadeáš", "10-31": "Štěpánka",
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
function otevriOkno(typ) {
    rezimOkna = typ;
    const modal = document.getElementById('moje-okno');
    const nadpis = document.getElementById('nadpis-okna');
    const napoveda = document.getElementById('napoveda-okna');
    const vstup = document.getElementById('vstup-hledani');
    const vysledek = document.getElementById('vysledek-hledani');
    const tlacitkoHledat = document.getElementById('tlacitko-hledat');

    if (!modal) return;
    
    // Zobrazíme okno a vyčistíme předchozí výsledky
    modal.style.display = "block";
    vysledek.innerHTML = "";
    vstup.value = "";

    // REŽIM HODINY
    if (typ === 'hodiny') {
        nadpis.innerText = "Nastavení zobrazení času";
        napoveda.innerText = "Vyberte si, jak chcete hodiny zobrazovat:";
        vstup.style.display = "none"; // Skryje vstupní pole
        if (tlacitkoHledat) tlacitkoHledat.style.display = "none"; // Skryje tlačítko hledat

        vysledek.innerHTML = `
            <div class="volba-hodin klikaci-polozka" style="margin: 10px 0; padding: 15px; border: 1px solid #ddd;" onclick="nastavFormatHodin(true)">S vteřinami (14:05:01)</div>
            <div class="volba-hodin klikaci-polozka" style="margin: 10px 0; padding: 15px; border: 1px solid #ddd;" onclick="nastavFormatHodin(false)">Bez vteřin (14:05)</div>
        `;
    } 
    // REŽIM DATUM
    else if (typ === 'datum') {
        vstup.style.display = "block";
        if (tlacitkoHledat) tlacitkoHledat.style.display = "block";
        nadpis.innerText = "Vyhledat den týdne\npodle datumu a roku";
        napoveda.innerText = "Zadejte datum a rok\n(např. 7. března 2026 nebo 7.3.2026)";
        vstup.placeholder = "Napište sem datum a rok";
        setTimeout(() => vstup.focus(), 100);
    } 
    // REŽIM SVÁTEK
    else if (typ === 'svatek') {
        vstup.style.display = "block";
        if (tlacitkoHledat) tlacitkoHledat.style.display = "block";
        nadpis.innerText = "Vyhledat svátek";
        napoveda.innerText = "Zadejte jméno (např. Tomáš nebo tomáš)\nnebo datum (např. 7. března nebo 7.3.)";
        vstup.placeholder = "Napište sem jméno nebo datum";
        setTimeout(() => vstup.focus(), 100);
    }
}

// Funkce pro uložení volby formátu hodin
function nastavFormatHodin(vteriny) {
    zobrazovatVteriny = vteriny;
    localStorage.setItem('nastaveniHodin', vteriny ? 's-vterinami' : 'bez-vterin');
    document.getElementById('moje-okno').style.display = "none"; // Zavře okno
    aktualizujCasAKalendar(); // Okamžitá aktualizace na stránce
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
                                         `byl-a, je a nebo bude: <span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;">${denVTydnu}</span>`;
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
                vysledekElem.innerHTML = `<strong>${d}. ${MESICE_PAD[mI-1]}</strong> má svátek: <span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;">${jmeno}</span>`;
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
                    n.push(`<strong>${jmenoFinal}</strong> má svátek:<span style="color:#007bff; font-size: 1.3em; display:block; margin-top:10px;">${day}. ${MESICE_PAD[parseInt(m)-1]}</span>`);
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

// Zavření okna křížkem
document.querySelector('.zavrit').onclick = () => {
    document.getElementById('moje-okno').style.display = "none";
};

// Zavření okna kliknutím na tmavé pozadí
window.onclick = (e) => { 
    const modal = document.getElementById('moje-okno');
    if (e.target == modal) modal.style.display = "none"; 
};

// 6. START PROGRAMU
setInterval(aktualizujCasAKalendar, 1000); // Hodiny běží každou vteřinu
aktualizujCasAKalendar(); // Spustí se hned po načtení



const tlacitkoKontaktovat = document.querySelector('#kontaktovat');
const tlacitkoZapni = document.querySelector('#zapni-barvu');

tlacitkoKontaktovat.addEventListener('click', () => {
  const kontaktElement = document.getElementById('kontakt');
  
  // HTML kód s interaktivními odkazy
  const udajeHTML = `
    Zahradní 50, 280 02, Kolín <br>
    email: <a href="mailto:tobr74@email.cz" style="color: inherit; text-decoration: underline;">tobr74@email.cz</a> <br>
    tel: <a href="tel:+420721336515" style="color: inherit; text-decoration: underline;">+420721336515</a>
  `;

  if (kontaktElement.innerHTML === "") {
    kontaktElement.innerHTML = udajeHTML;
    // Styl pro tučné a větší písmo
    kontaktElement.style.fontWeight = 'bold';
    kontaktElement.style.fontSize = '18px';
    kontaktElement.style.lineHeight = '1.4';
    kontaktElement.style.marginTop = '0px';
  } else {
    kontaktElement.innerHTML = "";
  }
});

// 1. NAČTENÍ DAT Z PAMĚTI
let mojeNavolenaBarva = localStorage.getItem('ulozenaBarva') || '#1e3a8a';
let jeBarevnyRezim = localStorage.getItem('rezim') === 'barevny'; // pamatuje si, co bylo zapnuto

const skala = document.getElementById('barevnaSkala');
skala.value = mojeNavolenaBarva;

// 2. FUNKCE PRO APLIKACI STYLU
function aplikujAktualniStyl() {
    if (jeBarevnyRezim) {
        nastavStyl(mojeNavolenaBarva, mojeNavolenaBarva);
    } else {
        nastavStyl('white', 'black');
    }
}

// 3. TLAČÍTKO PŘEPNOUT
tlacitkoZapni.addEventListener('click', () => {
    jeBarevnyRezim = !jeBarevnyRezim; // otočí stav (true/false)
    localStorage.setItem('rezim', jeBarevnyRezim ? 'barevny' : 'bily');
    aplikujAktualniStyl();
});

// 4. SLEDOVÁNÍ ŠKÁLY
skala.addEventListener('input', (e) => {
    mojeNavolenaBarva = e.target.value;
    localStorage.setItem('ulozenaBarva', mojeNavolenaBarva);
    
    // Pokud měním škálu, automaticky to zapne barevný režim
    jeBarevnyRezim = true;
    localStorage.setItem('rezim', 'barevny');
    aplikujAktualniStyl();
});

// Pomocná funkce (obarví vše)
function nastavStyl(pozadi, text) {
    document.body.style.backgroundColor = pozadi;
    document.body.style.color = text;
    
    const kontakt = document.getElementById('kontakt');
    if (kontakt) kontakt.style.color = text;

    document.querySelectorAll('#mujSeznam li').forEach(li => {
        li.style.color = text;
    });

    // Obarví texty ve formuláři, aby ladily se zbytkem
    document.querySelectorAll('.feedback-form input, .feedback-form select, .feedback-form textarea').forEach(el => {
        el.style.color = text;
    });

    // Obarvení kruhu a jeho stínu při najetí
    /* const kruh = document.querySelector('.kruh');
    if (kruh) {
        kruh.style.backgroundColor = text; // Kruh bude mít barvu textu
        kruh.style.color = pozadi;        // Písmo TB bude mít barvu pozadí
        
        // Nastavení dynamického stínu pro hover (přidáme přes CSS proměnnou)
        kruh.style.setProperty('--barva-stinu', text);
    } */
}

// --- DŮLEŽITÉ: Spustit hned po načtení stránky ---
aplikujAktualniStyl();

// Najdeme prvky
const novyUkol = document.getElementById('novyUkol');
const pridat = document.getElementById('pridat');
const mujSeznam = document.getElementById('mujSeznam');

// FUNKCE PRO ULOŽENÍ DO PAMĚTI
function ulozDoPameti() {
    const ukoly = [];
    document.querySelectorAll('#mujSeznam li').forEach(li => {
        ukoly.push({
            html: li.innerHTML,
            barva: li.style.borderLeft,
            hotovo: li.classList.contains('done')
        });
    });
    localStorage.setItem('mojeUkoly', JSON.stringify(ukoly));
}

// FUNKCE PRO NAČTENÍ Z PAMĚTI
function nactiZPameti() {
    const ulozene = JSON.parse(localStorage.getItem('mojeUkoly') || '[]');
    ulozene.forEach(data => {
        const li = document.createElement('li');
        li.style.borderLeft = data.barva;
        li.style.marginBottom = "5px";
        li.style.paddingLeft = "10px";
        li.innerHTML = data.html;
        if (data.hotovo) li.classList.add('done');
        
        // Znovu musíme připojit události (v innerHTML se neukládají)
        li.querySelector('div').onclick = () => { li.classList.toggle('done'); ulozDoPameti(); };
        li.querySelector('.delete').onclick = () => { li.remove(); ulozDoPameti(); };
        
        mujSeznam.appendChild(li);
    });
}

// Přidání úkolu
function pridatUkol() {
    const text = novyUkol.value.trim();
    const barvaPriority = document.getElementById('priorita').value;

    // Animace zatřese políčkem Nový úkol, když se nevyplní
    if (!text) {
    novyUkol.style.border = "2px solid red";
    novyUkol.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(0px)' }
    ], { duration: 200, iterations: 3 });
    return;
    }
    novyUkol.style.border = "1px solid #ccc"; // Vratit zpet

    // Určení priority úkolu
    const li = document.createElement('li');
    li.style.borderLeft = `5px solid ${barvaPriority}`; // Barevný pruh podle priority
    li.style.marginBottom = "5px";
    li.style.paddingLeft = "10px";

    // Získání aktuálního času a data
    const nyni = new Date();
    const cas = nyni.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
    const datum = nyni.toLocaleDateString('cs-CZ');

    // Vytvoření kontejneru pro text a čas (aby se dalo klikat na obojí)
    const infoWrapper = document.createElement('div');
    infoWrapper.style.textAlign = "center";
    infoWrapper.style.flexGrow = "1";

    // Text úkolu bude na vlastním řádku
    infoWrapper.innerHTML = `
        <span style="display: block; font-weight: bold; font-size: 20px;">${text}</span>
        <span style="font-size: 12px; color: #666;">🗓️ ${datum} | 🕒 ${cas} | datum a čas zadání</span>
    `;

    // Označení jako hotové (přidá třídu .done definovanou v CSS), volání uložení
    infoWrapper.onclick = () => { li.classList.toggle('done'); ulozDoPameti(); };

    // Tlačítko pro smazání
    const vymazat = document.createElement('button');
    vymazat.innerHTML = "x";
    vymazat.className = 'delete';
    vymazat.onclick = () => { li.remove(); ulozDoPameti(); }; // Uložení do paměti

    // Sestavení a přidání do seznamu
    li.appendChild(infoWrapper);
    li.appendChild(vymazat);
    mujSeznam.appendChild(li);

    novyUkol.value = "";
    ulozDoPameti(); // Uložíme po přidání
}

// Spustit načítání při startu
nactiZPameti();

// Události
pridat.addEventListener('click', pridatUkol);
novyUkol.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') pridatUkol();
});

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

// Pole s citaty
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
„Jakej Hroutil?“'
];

// Náhodný výběr vtipu z pole s vtipy
function ukazVtip() {
  const index = Math.floor(Math.random() * vtipy.length);
  alert(vtipy[index]);
}

