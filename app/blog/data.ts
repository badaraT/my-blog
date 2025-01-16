// export const articles = [
//   {
//     id: 1,
//     title: 'Introduction à Docker',
//     description: 'Apprenez les bases de Docker.',
//     content: 'Docker est un outil incroyable pour créer des conteneurs...',
//   },
//   {
//     id: 2,
//     title: 'Comprendre Kubernetes',
//     description: 'Explorez les concepts fondamentaux de Kubernetes.',
//     content: 'Kubernetes aide à orchestrer vos conteneurs...',
//   },
//   {
//     id: 3,
//     title: 'Déployer avec AWS',
//     description: 'Découvrez comment déployer une application sur AWS.',
//     content: 'AWS propose de nombreux services pour déployer vos applications...',
//   },
// ];
// export const articles = [
//   {
//     id: '1',
//     title: 'Introduction à Docker',
//     description: 'Comprendre les bases de Docker et pourquoi il est essentiel.',
//     content: 'Docker est un outil qui simplifie le déploiement...',
//     image: '/docker-intro.jpg',
//   },
//   {
//     id: '2',
//     title: 'Découvrir Kubernetes',
//     description: 'Un guide pour maîtriser Kubernetes.',
//     content: 'Kubernetes est un système de gestion de conteneurs...',
//     image: '/kubernetes-guide.jpg',
//   },
//     {
//     id: 3,
//     title: 'Déployer avec AWS',
//     description: 'Découvrez comment déployer une application sur AWS.',
//     content: 'AWS propose de nombreux services pour déployer vos applications...',
//   },
// ];

// export type Article = {
//   id: string;
//   title: string;
//   description: string;
//   content: string;
//   image: string; // Assure-toi d'ajouter cette clé
// };

export const articles = [
  {
    id: '1',
    title: 'Introduction à Docker',
    description: 'Comprendre les bases de Docker et pourquoi il est essentiel.',
    content: `
      **Docker** est une plateforme open-source conçue pour simplifier le développement, l'expédition et l'exécution d'applications dans des conteneurs. 
      
      Les conteneurs permettent de regrouper une application avec ses dépendances, garantissant ainsi qu'elle fonctionne de manière identique sur n'importe quel environnement. Cela résout de nombreux problèmes liés à l'incompatibilité logicielle entre les environnements de développement et de production.

      Les avantages de Docker incluent :
      - Une portabilité accrue grâce aux conteneurs.
      - Une gestion simplifiée des dépendances.
      - Une réduction des coûts d'infrastructure grâce à une meilleure utilisation des ressources.

      Si vous êtes débutant, commencez par comprendre comment créer un fichier **Dockerfile** et construire vos propres conteneurs.
    `,
    
    image: '/docker-intro.jfif',
  },
  {
    id: '2',
    title: 'Découvrir Kubernetes',
    description: 'Un guide pour maîtriser Kubernetes.',
    content: `
    Kubernetes est une plateforme open-source qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.

    Voici pourquoi Kubernetes est important :
    - **Orchestration des conteneurs** : Il permet de gérer des centaines ou des milliers de conteneurs de manière efficace.
    - **Mise à l'échelle automatique** : Kubernetes peut augmenter ou réduire les ressources en fonction de la demande.
    - **Gestion des défaillances** : Il redémarre automatiquement les conteneurs en cas d'erreur et peut rééquilibrer les charges.

    Pour commencer, apprenez à déployer une application simple dans un cluster Kubernetes, et familiarisez-vous avec des concepts tels que les **pods**, les **services**, et les **deployments**.
  `,
    image: '/kubernetes-guide.jfif',
  },
];



