# 🚀 Portfolio - Nadhem Hmida

Portfolio personnel moderne et interactif construit avec React, Three.js et Vite.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.1-purple)
![Three.js](https://img.shields.io/badge/Three.js-0.173.0-green)

## ✨ Fonctionnalités

- 🎨 Design moderne avec animations fluides
- 🌌 Scène 3D interactive avec Three.js
- 📱 Entièrement responsive
- ⚡ Optimisé pour les performances
- 🎭 Effets parallax et particules
- 🌍 Globe interactif
- 📧 Formulaire de contact avec EmailJS
- 🔗 Liens vers les projets GitHub
- 📄 Téléchargement de CV

## 🛠️ Technologies Utilisées

### Frontend
- **React 19** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Three.js** - Graphiques 3D
- **@react-three/fiber** - React renderer pour Three.js
- **@react-three/drei** - Helpers pour React Three Fiber
- **Tailwind CSS 4** - Framework CSS utility-first
- **Motion (Framer Motion)** - Animations

### Bibliothèques Additionnelles
- **EmailJS** - Service d'envoi d'emails
- **Cobe** - Globe 3D interactif
- **Lucide React** - Icônes
- **React Responsive** - Media queries

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/nadhem73/-my-portfilio.git

# Naviguer dans le dossier
cd -my-portfilio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🚀 Scripts Disponibles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint

# Déploiement sur GitHub Pages
npm run deploy
```

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── assets/          # Images, logos, modèles 3D
│   ├── components/      # Composants réutilisables
│   │   ├── Astronaut.jsx
│   │   ├── Globe.jsx
│   │   ├── Particles.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── ...
│   ├── sections/        # Sections de la page
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experiences.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/       # Données et configurations
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── public/              # Fichiers statiques
└── package.json
```

## 🎨 Sections du Portfolio

1. **Hero** - Section d'accueil avec astronaute 3D animé
2. **About** - Présentation avec compétences et globe interactif
3. **Projects** - Showcase des projets avec liens GitHub
4. **Experiences** - Timeline des expériences professionnelles
5. **Contact** - Formulaire de contact fonctionnel
6. **Footer** - Liens vers les réseaux sociaux

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Personnalisation

Pour personnaliser le portfolio, modifiez le fichier `src/constants/index.js` :

- **myProjects** - Vos projets
- **mySocials** - Vos réseaux sociaux
- **experiences** - Votre parcours professionnel

## 🌐 Déploiement

Le projet est configuré pour être déployé sur GitHub Pages :

```bash
npm run deploy
```

## 📱 Réseaux Sociaux

- [LinkedIn](https://www.linkedin.com/in/hmida-nadhem/)
- [Instagram](https://www.instagram.com/nadhem__hmida/)
- [Facebook](https://www.facebook.com/nadhem.hmida/)
- [WhatsApp](https://wa.me/21699455882)

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

**Nadhem Hmida**

Développeur Full Stack passionné par la création d'applications web modernes et performantes.

---

⭐ N'hésitez pas à mettre une étoile si vous aimez ce projet !
