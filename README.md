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

  label prenotazioniEffettuate
  modal prenEffetuta E' CAZZO BRUTTO
  sei sicuro di non voler vedere chi hai invitato?=?=??????????????????????? -> modal
}

cose fiche da fare in futuro{
  autocompile filtro autore,
  scroller dei filtri (carica altro)
  password(?)
}