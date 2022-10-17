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
  -impostazione grafica
}

da fare{
  NON PUOI AGGIUNGERE INPUT TYPE PIU DI QUANTO é IL NUMERO DEI POSTI DISPONIBILI (PRENOTAZIONE)
  prenota angular,
  profilo,
  recensione,
  sfondo,
  controllo posti disponibile per evento (Fatta da testare)
}

cose fiche da fare in futuro{
  autocompile filtro autore,
  scroller dei filtri (carica altro)
}