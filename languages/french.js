/* eslint-disable max-len */

// Import Internal Dependencies
import { taggedString as tS } from "../src/utils.js";

const lang = "fr";

const cli = {
  executing_at: "Exécution de node-secure à",
  min_nodejs_version: tS`node-secure nécessite au moins Node.js ${0} pour fonctionner ! Merci de mettre à jour votre version de Node.js.`,
  no_dep_to_proceed: "Aucune dépendance pour continuer !",
  successfully_written_json: tS`Ecriture du fichier de résultats réalisée avec succès ici : ${0}`,
  http_server_started: "Serveur HTTP démarré sur :",
  commands: {
    option_depth: "Niveau de profondeur de dépendances maximum à aller chercher",
    option_output: "Nom de sortie du fichier json",
    strategy: "Source de vulnérabilités à utiliser",
    hydrate_db: {
      desc: "Mise à jour de la base de vulnérabilité",
      running: tS`Mise à jour locale des vulnérabilités avec la base '${0}'...`,
      success: tS`Base de vulnérabilités mise à jour avec succès en ${0}`
    },
    cwd: {
      desc: "Démarre une analyse de sécurité sur le dossier courant",
      option_nolock: "Désactive l'utilisation du package-lock.json",
      option_full: "Active l'analyse complète des packages présents dans le package-lock.json"
    },
    from: {
      desc: "Démarre une analyse de sécurité sur un package donné du registre npm",
      searching: tS`Recherche du manifest '${0}' dans le registre npm...`,
      fetched: tS`Manifest du package ${0} importé de npm en ${1}`
    },
    auto: {
      desc: "Démarre une analyse de sécurité sur le dossier courant ou sur un package donné et ouvre automatiquement l'interface web",
      option_keep: "Conserve le fichier nsecure-result.json sur le systeme après l'exécution"
    },
    open: {
      desc: "Démarre un serveur HTTP avec un fichier .json nsecure donné",
      option_port: "Port à utiliser"
    },
    verify: {
      desc: "Démarre une analyse AST avancée pour un package npm donné",
      option_json: "Affiche le résultat d'analyse dans la sortie standard"
    },
    summary: {
      desc: "Afficher le résultat de votre analyse",
      warnings: "Menaces"
    },
    lang: {
      desc: "Configure le langage par défaut du CLI",
      question_text: "Quel langage souhaitez-vous utiliser ?",
      new_selection: tS`'${0}' a été selectionné comme étant le nouveau langage du CLI !`
    },
    scorecard: {
      desc: "Afficher la fiche de score OSSF du repo donné ou du repertoire actuel (Github uniquement ex. fastify/fastify)"
    }
  }
};

const depWalker = {
  dep_tree: "arbre de dépendances",
  fetch_and_walk_deps: "Importation et analyse de l'intégralité des dépendances...",
  fetch_on_registry: "En attente de l'importation des packages du registre npm...",
  waiting_tarball: "En attente de l'analyse des tarballs...",
  fetch_metadata: "Metadonnées importées :",
  analyzed_tarball: "Tarballs en cours d'analyse :",
  success_fetch_deptree: tS`Analyse de l'${0} terminée avec succès en ${1}`,
  success_tarball: tS`${0} tarballs analysés avec succès en ${1}`,
  success_registry_metadata: "Metadonnées requises pour tous les packages importées avec succès !",
  failed_rmdir: tS`Suppression du dossier ${0} échouée !`
};

const ui = {
  stats: {
    title: "Stats Globales",
    total_packages: "Total des packages",
    total_size: "Poids total",
    indirect_deps: "Packages avec dépendances indirectes",
    extensions: "Extensions",
    licenses: "Licences",
    maintainers: "Mainteneurs"
  },
  package_info: {
    navigation: {
      overview: "vue d'ensemble",
      files: "fichiers",
      dependencies: "scripts & dépendances",
      warnings: "menaces dans le code",
      vulnerabilities: "vulnérabilités",
      licenses: "conformité des licences (SPDX)"
    },
    title: {
      maintainers: "mainteneurs",
      releases: "versions publiées",
      files: "fichiers",
      files_extensions: "extensions des fichiers",
      unused_deps: "dépendances non utilisées ",
      missing_deps: "dépendances manquantes",
      minified_files: "fichiers minifiés",
      node_deps: "dépendances node.js",
      third_party_deps: "dépendances tierces",
      required_files: "fichiers requis",
      used_by: "utilisé par",
      openSsfScorecard: "Fiche de score de sécurité"
    },
    helpers: {
      warnings: "En savoir plus sur les alertes avec le",
      spdx: "En savoir plus sur le projet SPDX",
      here: "ici",
      openSsf: "En savoir plus sur les fiches de score OpenSSF"
    }
  },
  searchbar_placeholder: "Recherche",
  loading_nodes: "... Chargement des noeuds ...",
  please_wait: "(Merci de patienter)"
};

const warnings = {
  disable_scarf: "Cette dépendance peut récolter des données contre votre volonté, pensez donc à la désactiver en fournissant la variable d'environnement SCARF_ANALYTICS",
  keylogging: "Cette dépendance peut obtenir vos entrées clavier ou de souris. Cette dépendance peut être utilisée en tant que 'keylogging' attacks/malwares."
};

const sast_warnings = {
  ast_error: `Une erreur s'est produite lors de l'analyse du code JavaScript avec meriyah.
              Cela signifie que la conversion de la chaîne de caractères AST a échoué.
              Si vous rencontrez une telle erreur, veuillez ouvrir une issue.`,
  unsafe_import: "Impossible de suivre l'import (require, require.resolve) statement/expr.",
  unsafe_regex: "Un RegEx a été détecté comme non sûr et peut être utilisé pour une attaque ReDoS.",
  unsafe_stmt: "Utilisation d'instructions dangereuses comme eval() ou Function(\"\").",
  unsafe_assign: "Attribution d'un processus ou d'un require global protégé..",
  encoded_literal: "Un code littérale a été découvert (il peut s'agir d'une valeur hexa, d'une séquence unicode, d'une chaîne de caractères base64, etc.)",
  short_identifiers: "Cela signifie que tous les identifiants ont une longueur moyenne inférieure à 1,5. Seulement possible si le fichier contient plus de 5 identifiants.",
  suspicious_literal: "Cela signifie que la somme des scores suspects de tous les littéraux est supérieure à 3.",
  obfuscated_code: "Il y a une très forte probabilité que le code soit obscurci...",
  weak_crypto: "Le code contient probablement un algorithme de chiffrement faiblement sécurisé (md5, sha1...).",
  shady_link: "Un Literal (string) contient une URL vers un domaine avec une extension suspecte."
};

export const french = { lang, cli, depWalker, ui, warnings, sast_warnings };
