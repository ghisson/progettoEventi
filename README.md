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