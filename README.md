![Tests](https://github.com/KintsuKayaba/ssgs-calc/actions/workflows/node.js.yml/badge.svg)

# ssgs-calc

Una semplice calcolatrice da linea di comando scritta in Node.js.

## Funzionalità

Questa applicazione consente di eseguire le seguenti operazioni matematiche:

- **Addizione**
- **Sottrazione**
- **Moltiplicazione**
- **Divisione**

## Requisiti

- **Node.js** versione 14 o superiore
- **npm** (gestore di pacchetti Node.js)

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/KintsuKayaba/ssgs-calc.git
   cd ssgs-calc
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

## Uso

Per avviare l'applicazione, esegui il comando:

```bash
npm start
```

Segui le istruzioni nella linea di comando per scegliere un'operazione e inserire i numeri.

### Esempio di utilizzo

```bash
Operazioni disponibili:
1. Addizione
2. Sottrazione
3. Moltiplicazione
4. Divisione
Scegli un'operazione (1-4): 1
Inserisci il primo numero: 5
Inserisci il secondo numero: 3
Risultato: 8
```

## Test

Per eseguire i test e verificare il corretto funzionamento dell'applicazione, utilizza il comando:

```bash
npm test
```

I test sono implementati utilizzando **Jest** e includono casi di test per tutte le operazioni supportate.

## Copertura del codice

Per generare un report di copertura del codice, esegui:

```bash
npm test -- --coverage
```

## Workflow CI

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test su ogni push o pull request verso il branch `main`. Il workflow è configurato nel file `.github/workflows/node.js.yml`.

## Struttura del progetto

- **`index.js`**: File principale che gestisce l'interazione con l'utente.
- **`calc.js`**: Contiene le funzioni matematiche di base.
- **`calc.test.js`**: File di test per verificare il corretto funzionamento delle funzioni matematiche.
- **`package.json`**: File di configurazione del progetto Node.js.
- **`package-lock.json`**: File di lock per le dipendenze.
- **`.github/workflows/node.js.yml`**: Configurazione del workflow CI.
