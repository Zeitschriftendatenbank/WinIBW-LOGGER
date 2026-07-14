# WinIBW-LOGGER
Logger für die WinIBW4

## Installation
### lokal
Laden Sie die Zip-Datei herunter und entpacken Sie sie an einem Ort, an dem Sie ihre WinIBW-Scripte ablegen.

Öffnen Sie die in der WinIBW4 das Menü  `Script > Scriptdateien verwalten`und ergänzen Sie den Pfad an dem Sie das Script enpackt haben.

Beispiel: Das Script liegt unter `H:\WinIBW4-Scripte\logger\`, dann ergänzen Sie `file:///H:/WinIBW4-Scripte/logger/`

Die Scripte müssen neu geladen werden.

## remote
Alternativ können Sie auch das entfernt bereitgestellte Script nutzen. Fügen Sie dazu den URL http://winibw-repo.sbb.berlin/winibw/logger/ hinzu.

Die Scripte müssen neu geladen werden.

## Nutzung

Der LOGGER kann im Code mit drei Parametern initialisiert werden

```javascript
var logger = new LOGGER('LOG_FILE.log', '\\log', '\t');
logger.log('Datensatz nicht gefunden');
```

