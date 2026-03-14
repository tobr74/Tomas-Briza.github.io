const tlacitkoKontaktovat = document.querySelector('#kontaktovat');
const tlacitkoZapni = document.querySelector('#zapni-barvu');

tlacitkoKontaktovat.addEventListener('click', () => {
  const kontaktElement = document.getElementById('kontakt');
  const udaje = "Zahradní 50, Kolín, 28002 \n email: tobr74@email.cz \n tel: 721336515";

  // Pokud je prázdno, vlož text. Pokud tam text už je, vymaž ho.
  if (kontaktElement.innerText === "") {
    kontaktElement.innerText = udaje;
  } else {
    kontaktElement.innerText = "";
  }
});

tlacitkoZapni.addEventListener('click', () => {
  const jeModra = document.body.style.backgroundColor === 'rgb(30, 58, 138)'; // Tmavě modrá
  
  if (!jeModra) {
    document.body.style.backgroundColor = '#1e3a8a'; // Tmavě modrá
    document.body.style.color = 'blue';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

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
        <span style="font-size: 14px; color: #666;">🗓️ ${datum} | 🕒 ${cas} | datum a čas zadání</span>
    `;

    // Označení jako hotové (přidá třídu .done definovanou v CSS), volání uložení
    infoWrapper.onclick = () => { li.classList.toggle('done'); ulozDoPameti(); };

    // Tlačítko pro smazání
    const vymazat = document.createElement('button');
    vymazat.innerHTML = "✕";
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