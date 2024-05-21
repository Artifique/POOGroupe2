import { Utilisateur } from './Utilisateur';
import * as readline from 'readline';
import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestevent'
  });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function action() {
    // console.log('Que voulez-vous faire aujourd\'hui \n1. Liste des événements \n2. Réserver un événement\n');
    setTimeout(() => {
  rl.question('\nQue voulez-vous faire aujourd\'hui \n1. Liste des événements \n2. Réserver un événement\n', (choix) => {
    const B = parseInt(choix);
    
    switch (B) {
      case 1:
        console.log('Liste des événements');
        // Ajouter la logique pour lister les événements
        break;
        
      case 2:
        console.log('Réserver un événement');
        // Ajouter la logique pour réserver un événement
        break;

      default:
        console.log('Option non reconnue');
        break;
    }
    rl.close();
  });
}, 1000);
}



function demanderChoix() {
rl.question('\nChoisissez une option :\n1. Créer compte \n2. Se connecter \n ', (choix) => {
  const A = parseInt(choix);
  if (A === 1 || A === 2) {
  switch (A) {
    case 1:
      console.log('Insérer vos données \n');
      rl.question('Entrez votre nom complet : ', (nom) => {
        rl.question('Entrez votre email : ', (email) => {
          rl.question('Entrez votre numéro de téléphone : ', (tel) => {
            rl.question('Entrez votre mot de passe : ', (mdp) => {
              const Tel = parseInt(tel);
              const user = new Utilisateur(nom, email, Tel, mdp);
              user.CreerCompte();
              
              action(); // Appeler action après avoir créé le compte
            });
          });
        });
      });
      break;

    case 2:
        function refaire(){
            // if (condition) {
        console.log('Connectez-vous\n');
        rl.question('Entrez votre email : ', (email) => {
        rl.question('Entrez votre mot de passe : ', (mdp) => {
        Utilisateur.Authentification(email, mdp);
        //   action(); // Appeler action après la connexion

        const query='(SELECT mdp_util FROM utilisateur WHERE email_util="'+email+'")';        
        // Exécution de la requête d'insertion
        connection.query(query,  (err, results) => {
            if (results[0].mdp_util == mdp) {
              console.log("Bienvenue ",results[0].nom_util);
              action();
            }else{
              console.log("Email ou mot de passe incorrect");
              refaire();
            }
          })

        // ==================================================
        });
        });
        
        }
        
        
      break;

  }
} else {
    console.log('Le choix est entre 1 et 2. Veuillez réessayer.');
    demanderChoix(); // Re-demande le choix
  }
});
}

demanderChoix();
// });
