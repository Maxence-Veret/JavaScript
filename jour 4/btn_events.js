       // la fonction sert à afficher le message dès qu'on aura apuyé sur le button.
       function afficher(){
        document.getElementById('message').innerText = 'Voici le message.';
       }// la fonction sert à envoyer un message vide et pas à reset la page.
       function supprimer(){
        document.getElementById('message').innerText = '';
       }

       // on vient recuperer l'id de la page html dans le fichier js
       //et on lui indique d'exécuter la fonction afficher.
       const eMess = document.getElementById('event_mess');
       const eSupp = document.getElementById('event_supp');

       eMess.addEventListener('click', afficher);
       eSupp.addEventListener('click', supprimer);

       // j'appelle l'id du button, et je lui demande qu'au moment ou l'on clic
       // dessus, qu'il passe dans une fonction anonyme.
       document.getElementById('remove_events').addEventListener('click', function () {
        // on lui dit de supprimer les evenement cités en dessus lors du clic sur le button.
        // ce qui nous empechera de les utiliser.
        eMess.removeEventListener('click', afficher);
        eSupp.removeEventListener('click', supprimer);
       });