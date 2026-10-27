# BESTIE — guida al sito

Sito portfolio fotografico personale di Andrea Lamas: wildlife, landscape e reportage.
Pubblicato con GitHub Pages su https://lamaslamas.github.io/bestie (branch main, root).
Sito statico, nessun framework, nessun build: si modifica e si pubblica così com'è.

## Struttura
- `index.html` — tutto il sito: HTML, CSS e JavaScript in un unico file. Legge le foto da `photos.js`.
- `photos.js` — l'elenco delle foto (`window.PHOTOS = [...]`). Quasi tutte le modifiche si fanno qui.
- `img/` — le immagini.
- `.nojekyll` — serve a GitHub Pages, non toccarlo.
- `README.md` — istruzioni brevi per Andrea.

## Come funziona il sito
- Stile magazine ispirato a booooooom.com: sfondo bianco, wordmark "BESTIE" enorme in Archivo 900, testo nero, accento rosso #FF3B1F solo per hover e focus.
- Sezioni nel menu principale: Wildlife, Landscape, Reportage, About. La navigazione usa l'hash dell'URL (#wildlife, #landscape, #reportage, #about).
- Filtri sotto il menu:
  - Wildlife: All, Birds, Mammals, Colour, B&W
  - Landscape e Reportage: All, Colour, B&W
- La foto più recente di ogni sezione è quella in evidenza (grande, con testo a fianco). Le altre vanno nella griglia a mosaico sotto, che rispetta il formato originale di ogni foto (niente ritagli).
- Cliccando una foto si apre a schermo intero. Si scorre con le frecce, con la tastiera (← → Esc) e con lo swipe su telefono. Le foto scorrono solo dentro la sezione corrente.
- Le frasi di presentazione di ogni sezione sono nell'oggetto `SEC` dentro `index.html`.

## Ordine delle foto: cronologico, dalla più recente
- In ogni sezione le foto vanno in ordine di data di scatto, dalla più recente alla più vecchia.
- Ogni foto ha il campo `taken` con anno e mese dello scatto (es. '2024-05'). Il campo NON va mai mostrato sul sito: serve solo per ordinare. Niente giorno, niente ora.
- La data va letta dai metadati EXIF (DateTimeOriginal) PRIMA di toglierli. Se manca, prova con la data nel nome del file (es. 20240508-DSC02196.jpg). Se non trovi nessuna data, chiedi ad Andrea.
- `index.html` deve ordinare le foto per `taken` dalla più recente. Se non lo fa già, aggiungi l'ordinamento. Tieni comunque anche `photos.js` nello stesso ordine.
- A parità di mese vale l'ordine in `photos.js`: metti prima la più recente, confrontando la data completa EXIF quando ce l'hai.
- Alla prima sessione controlla le foto già presenti e riordinale. Se i loro file non hanno più i metadati, usa la data nel nome del file originale o chiedi ad Andrea.

## Formato di una foto in photos.js
{ sec: 'wildlife', taken: '2024-05', file: 'grey-heron-salento.jpg', w: 2000, h: 1333, title: 'Grey heron in the mist', group: 'birds', bw: false, place: 'Salento', alt: '...' }

- `sec`: 'wildlife' | 'landscape' | 'reportage'
- `taken`: anno-mese dello scatto, solo per l'ordinamento
- `group`: solo per wildlife, 'birds' | 'mammals' (se serve una nuova categoria, aggiungila anche ai filtri in `SEC`)
- `bw`: true se la foto È GIÀ in bianco e nero. Non applicare mai filtri CSS di conversione: le foto B/N le sviluppa Andrea.
- `w` e `h`: dimensioni reali in pixel del file in `img/`, dopo il ridimensionamento.
- `title`: in inglese, breve, con un po' di carattere e senza essere troppo letterale. Esempi: "Fox after the hail", "Old olive, new wind", "Kestrel, blue hour".
- `place`: SOLO la zona generale ("Salento", "Abruzzo", "Salento coast"). Mai coordinate, mai il punto preciso, mai data o ora.
- `alt`: descrizione in inglese di cosa si vede (specie, posa, sfondo, luce), una frase. Ogni alt deve essere diverso dagli altri.

## Regole per aggiungere foto nuove
1. Le nuove foto vengono caricate da Andrea in `img/` dal browser, spesso con nomi da fotocamera (es. DSC01234.jpg).
2. Per ognuna:
   - guarda l'immagine per capire soggetto, sezione e se è a colori o B/N;
   - leggi i metadati EXIF/XMP: data di scatto per `taken`, GPS e località IPTC per ricavare la zona generale. Se la zona manca, deducila con prudenza e SEGNALALO nella pull request, così Andrea può confermare;
   - ridimensiona a 2000 px sul lato lungo, JPEG qualità 80–82, sRGB, progressive;
   - TOGLI TUTTI I METADATI (EXIF, GPS, XMP, IPTC). È importante: alcune foto ritraggono animali in luoghi sensibili (nidi, tane);
   - rinomina il file in modo descrittivo, minuscolo, con trattini: specie-o-soggetto-zona.jpg (es. `stonechat-salento.jpg`);
   - elimina il file originale con il nome da fotocamera.
3. Inserisci la riga in `photos.js` nella sezione giusta, al posto giusto in ordine cronologico.
4. Una foto con persone come soggetto va in Reportage. Paesaggi senza animali né persone in primo piano vanno in Landscape.
5. Prima di chiudere, controlla con uno script che nessun file in `img/` contenga GPS o altri metadati, che `w`/`h` corrispondano ai file reali e che l'ordine sia cronologico.

## Cose da NON fare
- Non aggiungere framework, build, dipendenze o tracker/analytics.
- Non cambiare grafica, font o struttura delle pagine senza che Andrea lo chieda.
- Non aggiungere filigrane, protezione al tasto destro, musica, popup o pagine di benvenuto.
- Non pubblicare date, orari, coordinate o località precise.
- Tutto il testo visibile del sito è in inglese britannico (colour, unauthorised). Con Andrea si parla in italiano.

## Contatti presenti nel sito (non modificarli senza richiesta)
- Email: andreagreco808@gmail.com
- Instagram: @lamaslamas
- Sito di lavoro: https://lamaslamas.github.io/web/

## Come consegnare le modifiche
Lavora su un branch e apri una pull request con un riepilogo in italiano:
- quali foto hai aggiunto, con titolo, sezione, zona e mese;
- quali zone o date hai DEDOTTO perché mancavano i metadati;
- eventuali dubbi (sezione incerta, foto simili, B/N o colore).
