/* Notification de visite — envoie un email discret via EmailJS à chaque nouvelle visite.
   Rien n'est affiché à l'écran, aucune donnée personnelle n'est stockée : seule la page
   visitée et l'heure sont envoyées. Un seul envoi par visiteur toutes les 12h (anti-spam),
   grâce à un repère stocké dans son navigateur (localStorage).

   À FAIRE avant que ça fonctionne : remplace les trois valeurs ci-dessous par
   celles de ton compte EmailJS (emailjs.com → Account → API Keys / Email Services / Templates). */

(function () {
  var PUBLIC_KEY = "rdLtVR4vnUpsMLWNv";
  var SERVICE_ID = "service_sinsuf2";
  var TEMPLATE_ID = "Gmail";

  if (typeof emailjs === "undefined") return;

  emailjs.init(PUBLIC_KEY);

  var CLE_STOCKAGE = "notif_envoyee";
  var DOUZE_HEURES = 12 * 60 * 60 * 1000;
  var derniereNotif = localStorage.getItem(CLE_STOCKAGE);
  var maintenant = Date.now();

  if (derniereNotif && (maintenant - derniereNotif) < DOUZE_HEURES) return;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    page: window.location.pathname,
    date: new Date().toLocaleString('fr-FR')
  });

  localStorage.setItem(CLE_STOCKAGE, maintenant);
})();
