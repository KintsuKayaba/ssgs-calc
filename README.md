![Tests](https://github.com/KintsuKayaba/ssgs-calc/actions/workflows/node.js.yml/badge.svg)

# ssgs-calc

Una semplice calcolatrice da linea di comando scritta in Node.js.

## Funzionalità

Questa applicazione consente di eseguire le seguenti operazioni matematiche:

- **Addizione**
- **Sottrazione**
- **Moltiplicazione**
- **Divisione**
- **Potenza**

### Funzionalità avanzate

- Possibilità di **ripetere le operazioni** nella stessa sessione
- **Gestione degli errori** in input (richiesta di reinserimento)
- Saluto finale **randomico** per chiudere con un tocco simpatico

## Requisiti

- **Node.js** versione 18.x o superiore
- **npm** (gestore di pacchetti Node.js)

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/KintsuKayaba/ssgs-calc.git
   cd ssgs-calc
   ```

2. Installa le dipendenze:
   ```bash
   npm ci
   ```

## Uso

Per avviare l'applicazione, esegui il comando:

```bash
npm start
```

Segui le istruzioni nella linea di comando per scegliere un'operazione e inserire i numeri.

### Esempio di utilizzo

```bash
👋 Benvenuto in ssgs-calc!

Operazioni disponibili:
1. Addizione
2. Sottrazione
3. Moltiplicazione
4. Divisione
5. Potenza

Scegli un'operazione (1-5): 5
Inserisci il primo numero: 2
Inserisci il secondo numero: 3
✅ Risultato: 8

Vuoi fare un'altra operazione? (s/n): n
🎉 A presto, e che la forza sia con te!
```

## Test

Per eseguire i test e verificare il corretto funzionamento dell'applicazione, utilizza il comando:

```bash
npm test
```

I test sono implementati utilizzando **Jest** e includono casi di test per tutte le operazioni supportate. Inoltre, viene generato un report di copertura nella directory `coverage/`.

## Workflow CI

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test su ogni push o pull request verso il branch `main`. Il workflow è configurato nel file `.github/workflows/node.js.yml`.

### Dettagli del Workflow

- **Versioni di Node.js testate**: 18.x e 20.x
- **Installazione delle dipendenze**: Utilizzo di `npm ci` per garantire build riproducibili.
- **Test**: Esecuzione di `npm test` per verificare il corretto funzionamento e generare il report di copertura.
- **Upload del report di copertura**: Il report generato viene caricato come artefatto.

## Struttura del progetto

- **`src/index.js`**: File principale che gestisce l'interazione con l'utente.
- **`src/calc.js`**: Contiene le funzioni matematiche di base.
- **`tests/calc.test.js`**: File di test per verificare il corretto funzionamento delle funzioni matematiche.
- **`package.json`**: File di configurazione del progetto Node.js.
- **`package-lock.json`**: File di lock per le dipendenze.
- **`.github/workflows/node.js.yml`**: Configurazione del workflow CI.
- **`coverage/`**: Directory contenente i report di copertura generati da Jest.
