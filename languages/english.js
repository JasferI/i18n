/* eslint-disable max-len */

// Require Internal Dependencies
import { taggedString as tS } from "../src/utils.js";

const lang = "en";

const cli = {
  executing_at: "Executing node-secure at",
  min_nodejs_version: tS`node-secure requires at least Node.js ${0} to work! Please upgrade your Node.js version.`,
  no_dep_to_proceed: "No dependencies to proceed!",
  successfully_written_json: tS`Successfully written results file at: ${0}`,
  http_server_started: "HTTP Server started on:",
  commands: {
    option_depth: "Maximum dependencies depth to fetch",
    option_output: "Json file output name",
    strategy: "Vulnerabilities source to use",
    hydrate_db: {
      desc: "Hydrate the vulnerabilities db",
      running: tS`Hydrating local vulnerabilities with the '${0}' database...`,
      success: tS`Successfully hydrated vulnerabilities database in ${0}`
    },
    cwd: {
      desc: "Run security analysis on the current working dir",
      option_nolock: "Disable usage of package-lock.json",
      option_full: "Enable full analysis of packages in the package-lock.json file"
    },
    from: {
      desc: "Run security analysis on a given package from npm registry",
      searching: tS`Searching for '${0}' manifest in the npm registry...`,
      fetched: tS`Fetched ${0} manifest from npm in ${1}`
    },
    auto: {
      desc: "Run security analysis on cwd or a given package and automatically open the web interface",
      option_keep: "Keep the nsecure-result.json file on the system after execution"
    },
    open: {
      desc: "Run an HTTP Server with a given nsecure JSON file",
      option_port: "Define the running port"
    },
    verify: {
      desc: "Run a complete advanced analysis for a given npm package",
      option_json: "Stdout the analysis payload"
    },
    summary: {
      desc: "Display your analysis results",
      warnings: "Warnings"
    },
    lang: {
      desc: "Configure the CLI default language",
      question_text: "What language do you want to use?",
      new_selection: tS`'${0}' has been selected as the new CLI language!`
    },
    scorecard: {
      desc: "Display the OSSF Scorecard for a given repository or the current working directory (Github only, e.g. fastify/fastify)"
    }
  }
};

const depWalker = {
  dep_tree: "dependency tree",
  fetch_and_walk_deps: "Fetching and walking through all dependencies...",
  fetch_on_registry: "Waiting for packages to fetch from npm registry...",
  waiting_tarball: "Waiting tarballs to be analyzed...",
  fetch_metadata: "Fetched package metadata:",
  analyzed_tarball: "Analyzed npm tarballs:",
  success_fetch_deptree: tS`Successfully navigated through the ${0} in ${1}`,
  success_tarball: tS`Successfully analyzed ${0} packages tarballs in ${1}`,
  success_registry_metadata: "Successfully fetched required metadata for all packages!",
  failed_rmdir: tS`Failed to remove directory ${0}!`
};

const ui = {
  stats: {
    title: "Global Stats",
    total_packages: "Total of packages",
    total_size: "Total size",
    indirect_deps: "Packages with indirect dependencies",
    extensions: "Extensions",
    licenses: "Licenses",
    maintainers: "Maintainers"
  },
  package_info: {
    navigation: {
      overview: "overview",
      files: "files",
      dependencies: "scripts & dependencies",
      warnings: "threats in source code",
      vulnerabilities: "vulnerabilities (CVE)",
      licenses: "licenses conformance (SPDX)"
    },
    title: {
      maintainers: "maintainers",
      releases: "releases",
      files: "files",
      files_extensions: "files extensions",
      unused_deps: "unused dependencies",
      missing_deps: "missing dependencies",
      minified_files: "minified files",
      node_deps: "node.js dependencies",
      third_party_deps: "third-party dependencies",
      required_files: "required files",
      used_by: "used by",
      openSsfScorecard: "Security Scorecard"
    },
    helpers: {
      warnings: "Learn more about warnings in the",
      spdx: "Learn more about the SPDX project",
      here: "here",
      openSsf: "Learn more about the OpenSSF Scorecards"
    }
  },
  searchbar_placeholder: "Search",
  loading_nodes: "... Loading nodes ...",
  please_wait: "(Please wait)"
};

const warnings = {
  disable_scarf: "This dependency could collect data against your will so think to disable it with the env var: SCARF_ANALYTICS",
  keylogging: "This dependency can retrieve your keyboard and mouse inputs. It can be used for 'keylogging' attacks/malwares."
};

const sast_warnings = {
  ast_error: "An error occured when parsing the JavaScript code with meriyah. It mean that the conversion from string to AST as failed. If you encounter such an error, please open an issue here.",
  unsafe_import: "Unable to follow an import (require, require.resolve) statement/expr.",
  unsafe_regex: "A RegEx as been detected as unsafe and may be used for a ReDoS Attack.",
  unsafe_stmt: "Usage of dangerous statement like eval() or Function(\"\").",
  unsafe_assign: "Assignment of a protected global like process or require.",
  encoded_literal: "An encoded literal has been detected (it can be an hexa value, unicode sequence, base64 string etc)",
  short_identifiers: "This mean that all identifiers has an average length below 1.5. Only possible if the file contains more than 5 identifiers.",
  suspicious_literal: "This mean that the sum of suspicious score of all Literals is bigger than 3.",
  obfuscated_code: "There's a very high probability that the code is obfuscated...",
  weak_crypto: "The code probably contains a weak crypto algorithm (md5, sha1...)",
  shady_link: "A Literal (string) contains an URL to a domain with a suspicious extension."
};

export const english = { lang, cli, depWalker, ui, warnings, sast_warnings };
