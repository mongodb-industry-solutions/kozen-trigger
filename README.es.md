# 🏠 Kozen Triggers

[![versión npm](https://img.shields.io/npm/v/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![descargas npm](https://img.shields.io/npm/dw/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![descargas totales npm](https://img.shields.io/npm/dt/@mongodb-solution-assurance/kozen-trigger.svg)](https://www.npmjs.com/package/@mongodb-solution-assurance/kozen-trigger)
[![Licencia: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Versión Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![Dependencias](https://img.shields.io/librariesio/release/npm/@mongodb-solution-assurance/kozen-trigger)](https://libraries.io/npm/@mongodb-solution-assurance%2Fkozen-trigger)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.17-green.svg?logo=mongodb)](https://www.mongodb.com/)
[![Issues GitHub](https://img.shields.io/github/issues/mongodb-industry-solutions/kozen-trigger.svg)](https://github.com/mongodb-industry-solutions/kozen-trigger/issues)
[![Estrellas GitHub](https://img.shields.io/github/stars/mongodb-industry-solutions/kozen-trigger.svg)](https://github.com/mongodb-industry-solutions/kozen-trigger/stargazers)

**🌐 Languages / Idiomas:** [English](README.md) | [Español](README.es.md)

Los módulos Kozen funcionan como herramientas independientes. El módulo Triggers simplifica la implementación de triggers auto-hospedados para MongoDB Atlas, Enterprise Advanced o Community Edition. Esta herramienta agiliza la gestión de triggers en diversos despliegues de MongoDB.

## 📚 Triggers Auto-Hospedados

Kozen ejecuta triggers de MongoDB Change Stream directamente en tu infraestructura. Diseñado como una alternativa auto-hospedada a MongoDB Atlas Triggers, Kozen te permite definir un archivo JavaScript "delegado". Este archivo exporta funciones específicas de operaciones, que Kozen utiliza para transmitir eventos de cambio directamente a tu código.

## 🧪 Comparación y Uso

Mientras que MongoDB Atlas proporciona un servicio de Triggers totalmente gestionado, Kozen ofrece capacidades similares para entornos locales, on-premises o en la nube. Centraliza la lógica en un único archivo JavaScript mantenible.

## 🚀 Inicio Rápido
- Instala Kozen.
- Escribe el delegado con `insert`/`update`/`delete`/`replace` y opcionalmente `on`/`default`.
- Completa `.env` con los parámetros de configuración `KOZEN_TRIGGER_*`.
- Inicia el servicio (ver paso 2 a continuación) y verifica los logs.

Para más detalles, consulta la documentación aquí: [documentación](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki).

## Referencias
- [Documentación Completa de Kozen Triggers](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki)
- [Kozen Triggers a través de DeepWiki](https://deepwiki.com/mongodb-industry-solutions/kozen-trigger/1-overview)
- [Descargo de Responsabilidad y Política de Uso](https://github.com/mongodb-industry-solutions/kozen-engine/wiki/POLICY)
- [Cómo Contribuir al Ecosistema Kozen](https://github.com/mongodb-industry-solutions/kozen-engine/wiki/Contribute)
- [Documentación Oficial de Kozen](https://github.com/mongodb-industry-solutions/kozen-engine/wiki)

---

← Anterior: [Inicio](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki) | Siguiente: [Primeros Pasos](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki/Get-Started) →

