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
  

  RECENSIONE,MODAL -> salva nel db -> disable btn modify

}

cose fiche da fare in futuro{
  autocompiler filtro autore,
  scroller card dei filtri (carica altro)
  password(?)update?
}