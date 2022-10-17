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
  

  recensione,MODAL -> salva nel db -> disable btn modify

  sfondo,

  spaziare "applica filtri"

  modal pren Eff -> margin-top
  modal -> utenti invitati su prenEffettuate -> show codiceFiscale
  
}

cose fiche da fare in futuro{
  autocompile filtro autore,
  scroller dei filtri (carica altro)
  password(?)
}