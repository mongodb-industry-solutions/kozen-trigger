# 🏠 Kozen Triggers

[![npm version](https://img.shields.io/npm/v/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![npm downloads](https://img.shields.io/npm/dw/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![npm total downloads](https://img.shields.io/npm/dt/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@mongodb-solution-assurance/kozen-trigger)](https://libraries.io/npm/@mongodb-solution-assurance%2Fkozen-trigger)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.17-green.svg?logo=mongodb)](https://www.mongodb.com/)
[![GitHub issues](https://img.shields.io/github/issues/mongodb-industry-solutions/kozen-trigger.svg)](https://github.com/mongodb-industry-solutions/kozen-trigger/issues)
[![GitHub stars](https://img.shields.io/github/stars/mongodb-industry-solutions/kozen-trigger.svg)](https://github.com/mongodb-industry-solutions/kozen-trigger/stargazers)

**🌐 Languages / Idiomas:** [English](README.md) | [Español](README.es.md)

Kozen modules function as independent tools. The Triggers module simplifies the implementation of self-hosted triggers for MongoDB Atlas, Enterprise Advanced, or Community Edition. This tool streamlines trigger management across diverse MongoDB deployments.

## 📚 Self‑Hosted Triggers

Kozen executes MongoDB Change Stream triggers directly on your infrastructure. Designed as a self-hosted alternative to MongoDB Atlas Triggers, Kozen allows you to define a JavaScript "delegate" file. This file exports operation-specific functions, which Kozen utilizes to stream change events directly into your code.

## 🧪 Comparison and Usage

While MongoDB Atlas provides a fully managed Triggers service, Kozen delivers similar capabilities for local, on-premises, or cloud environments. It centralizes logic in a single, maintainable JavaScript file.

## 🚀 Quick Start
- Install Kozen.
- Write the delegate with `insert`/`update`/`delete`/`replace` and optional `on`/`default`.
- Fill `.env` with `KOZEN_TRIGGER_*` settings.
- Start the service (see step 2 below) and verify logs.

For more details, refer to the documentation here: [documentation](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki).

## References
- [Kozen Triggers Full Documentation](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki)
- [Kozen Triggers through DeepWiki](https://deepwiki.com/mongodb-industry-solutions/kozen-trigger/1-overview)
- [Disclaimer and Usage Policy](https://github.com/mongodb-industry-solutions/kozen-engine/wiki/POLICY)
- [How to Contribute to Kozen Ecosystem](https://github.com/mongodb-industry-solutions/kozen-engine/wiki/Contribute)
- [Official Kozen Documentation](https://github.com/mongodb-industry-solutions/kozen-engine/wiki)

---

← Previous: [Home](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki) | Next: [Get-Started](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki/Get-Started) →

