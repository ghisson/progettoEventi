Backend {
  -fk DONE -> {
      -Settore/Luogo
      -Evento/DataEvento
      -Utente/PrenotazioneEffettuata
      -Settore/SettoreDataEvento
      -DataEvento/SettoreDataEvento
      -UtenteInvitato/PrenotazioneEffettuata
      -Utente/Prenotazione
      -SettoreDataEvento/PrenotazioneEffettuata
      -Prenotazione/SettoreDataEvento
      }
  -
  -tutte API
}

Frontend {
  -login sessione -> logout
  -impostazione grafica
}

da fare{
  prenota angular,
  profilo,
  recensione,
  sfondo,
  controllo posti disponibile per evento (Fatta da testare) e aggiungere variabile che ritorna i posti disponibili in 
            quel momento
}

cose fiche da fare in futuro{
  autocompile filtro autore,
  scroller dei filtri (carica altro)
}