/* Données de la frise "Mon Parcours" — même DA que le reste du site.
   Les logos sont attendus dans le dossier Images/ (à côté des pages HTML) :
   adapte les noms de fichiers ci-dessous si besoin. */
const friseData = [
  {
    date: "Septembre 2020 - Juin 2022",
    titre: "Cours préparatoires polytechniques – Grenoble INP, la prépa des INP",
    sousTitre: "Grenoble, France",
    texte: "Organisation industrielle, Mathématiques, Informatique, Physique, Chimie, Biologie.",
    logo: "Images/Groupe_INP_-_La_Prépa__couleur__RVB_-removebg-preview.png"
  },
  {
    date: "Septembre 2022 - Février 2026",
    titre: "École d'ingénieur en Génie Industriel – Grenoble INP, Génie Industriel",
    sousTitre: "Grenoble, France",
    texte: "Gestion de production, Gestion des stocks, Recherches Opérationnelles pour la Logistique, Gestion de la Chaîne Logistique, Gestion de Projet, Stratégie industrielle et manufacturière, Mathématiques et Modélisation Informatique appliquées à l'industrie.",
    logo: "Images/logo-gi-removebg-preview.png"
  },
  {
    date: "Juin 2024 - Octobre 2024",
    titre: "Optimisation logistique et amélioration continue (Stage) – Style Network International",
    sousTitre: "Marseille, France",
    texte: `
      <ul class="liste-jolie">
        <li>Proposition et mise en place d'un projet d'optimisation du temps de préparation de commande (principal KPI).</li>
        <li>Analyse ABC/XYZ des données de ventes croisées avec leur emplacement dans les stocks.</li>
        <li>Proposition d'une solution basée sur cette analyse de données pour améliorer les KPI prédéfinis.</li>
        <li>Conception d'une application VBA pour automatiser et centraliser les tâches administratives récurrentes (mise à jour base de données clients, factures, bons de livraison, bons de retour).</li>
        <li>Formation du personnel pour accompagner le changement.</li>
      </ul>
    `,
    logo: "Images/sni_logo.png"
  },
  {
    date: "Janvier 2025 - Juillet 2025",
    titre: "Échange académique, mobilité internationale – Technische Universität Berlin, Industrial Engineering",
    sousTitre: "Berlin, Allemagne",
    texte: "AI in manufacturing, Data Science Tool Box, Supervised Machine Learning, Production Planning & Scheduling, Risk Management.",
    logo: "Images/R.png"
  },
  {
    date: "Septembre 2025 - Février 2026",
    titre: "Amélioration continue des flux physiques et informatiques en logistique (Stage) – Richemont, Procadrans",
    sousTitre: "La Chaux-de-Fonds, Suisse",
    texte: `
      <strong>Planification</strong>
      <ul class="liste-jolie">
        <li>État des lieux des processus de planification en place et proposition d'amélioration.</li>
        <li>Mise en place des KPI permettant de s'assurer du respect des horizons et engagements clients.</li>
      </ul>
      <strong>Logistique d'exécution et digitalisation</strong>
      <ul class="liste-jolie">
        <li>Analyse de l'existant, cartographie des flux physiques et informatiques (réception, stockage, approvisionnement production, expédition, logistique de production).</li>
        <li>Proposition de solutions d'amélioration basée sur cette analyse.</li>
        <li>Développement d'interfaces MES connectées à l'ERP (commande consommables, livraisons physiques, transferts de stocks automatisés).</li>
        <li>Formation du personnel pour accompagner le changement.</li>
        <li>Mise en place et suivi d'indicateurs clés de performance (KPI) en lien avec les équipes métiers, la logistique et la finance.</li>
        <li>Création de tableaux de bord interactifs Power BI croisant données MES et données ERP pour le pilotage des flux.</li>
      </ul>
    `,
    logo: "Images/icon.png"
  }
];

function construireFrise() {
  const conteneur = document.getElementById('frise-parcours');
  if (!conteneur) return;

  conteneur.innerHTML = friseData.map(function(etape) {
    const logoHTML = etape.logo
      ? `<img src="${etape.logo}" alt="${etape.titre}">`
      : '';

    return `
      <div class="frise-etape">
        <div class="frise-logo">${logoHTML}</div>
        <div class="frise-point"></div>
        <div class="frise-contenu">
          <div class="frise-date">${etape.date}</div>
          <div class="frise-titre">${etape.titre}</div>
          <div class="frise-sousTitre">${etape.sousTitre}</div>
          <div class="frise-texte">${etape.texte}</div>
        </div>
      </div>
    `;
  }).join('');
}

construireFrise();
