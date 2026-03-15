// Pomocná proměnná, aby se svátek nenačítal každou vteřinu
let posledniDen = -1;

async function aktualizujCasAKalendar() {
    const nyni = new Date();
    const dnesniDen = nyni.getDate();
    
    // 1. DIGITÁLNÍ HODINY (vždy aktuální)
    const hodiny = String(nyni.getHours()).padStart(2, '0');
    const minuty = String(nyni.getMinutes()).padStart(2, '0');
    const sekundy = String(nyni.getSeconds()).padStart(2, '0');
    document.getElementById('hodiny-stred').innerText = `${hodiny}:${minuty}:${sekundy}`;

    // 2. DATUM A SVÁTEK (spustí se jen při změně dne nebo při startu)
    if (dnesniDen !== posledniDen) {
        posledniDen = dnesniDen;
        
        // Formátování data vlevo
        const moznosti = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        document.getElementById('datum-vlevo').innerText = nyni.toLocaleDateString('cs-CZ', moznosti);

        // Načtení svátku s ochranou proti starým datům (?_t=číslo zajistí čerstvost)
        try {
            const response = await fetch('https://svatkyapi.cz' + Date.now());
            if (!response.ok) throw new Error();
            const data = await response.json();
            document.getElementById('svatek-vpravo').innerText = "Svátek má " + data.name;
        } catch (error) {
            // Záložní řešení, pokud API vypadne
            document.getElementById('svatek-vpravo').innerText = "Svátek: (načítání...)";
            
            // Druhý pokus o jiný zdroj po 2 sekundách
            setTimeout(async () => {
                try {
                    const res2 = await fetch('https://svatky.adresa.info' + Date.now());
                    const data2 = await res2.json();
                    document.getElementById('svatek-vpravo').innerText = "Svátek má " + data2.name;
                } catch (e) {
                    document.getElementById('svatek-vpravo').innerText = "Svátek: Ida"; // Záloha pro 15.3.
                }
            }, 2000);
        }
    }
}

// Spustit ihned
aktualizujCasAKalendar();

// AKTUALIZACE KAŽDOU VTEŘINU (1000 ms)
setInterval(aktualizujCasAKalendar, 1000);
 

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

// Pole s citáty
const citaty = [
  "Programování je 10 % psaní kódu a 90 % zírání do monitoru.",
  "Chyba není v kódu, chyba je v uživateli.",
  "Včera mi kód fungoval, dneska jsem na nic nesáhl a nefunguje.",
  "Programátor je stroj, který přeměňuje kofein v kód.",
  "Když to funguje, nesahej na to!",
  "Každý kód, který jsi napsal před půl rokem, vypadá, jako by ho psal idiot.",
  "Nejdřív vyřeš problém, pak teprve piš kód.",
  "Dvakrát měř, jednou Ctrl+C."
];

// Náhodný výběr citátu z pole s citáty
function ukazCitat() {
  const index = Math.floor(Math.random() * citaty.length);
  alert(citaty[index]);
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