# Hola Hola

In Kozen, the modules are used as independent tools. The Triggers module becomes a solution designed to provide support for Self-Hosted Triggers in a simple way, whether you're using MongoDB Atlas, Enterprise Advanced, or Community Edition. This helps streamline the process of managing triggers across different MongoDB deployments.

## 📚 Self‑Hosted Triggers

Kozen can run MongoDB Change Stream based triggers on your own infrastructure. If you’ve used MongoDB Atlas Triggers, think of this as a self‑hosted alternative: you write a small JavaScript file (the delegate) that exports simple functions per operation, and Kozen wires everything up to stream change events into your code.

## 🎯 Overview

Atlas context: MongoDB Atlas provides a fully managed Triggers service. Kozen offers a similar capability you can run anywhere (local, on‑premises, cloud), while keeping your logic in a single, easy‑to‑maintain JS file.

Quick checklist:
- Install Kozen.
- Write the delegate with `insert`/`update`/`delete`/`replace` and optional `on`/`default`.
- Fill `.env` with `KOZEN_TRIGGER_*` settings.
- Start the service (see step 2 below) and verify logs.

For better understanding, refer to the documentation here: [documentation](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki).

## References
- [Kozen Triggers Full Documentation](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki)
- [Kozen Triggers through DeepWiki](https://deepwiki.com/mongodb-industry-solutions/kozen-trigger/1-overview)
- [Kozen Full Documentation](https://github.com/mongodb-industry-solutions/kozen-engine/wiki)
- [Trigger Module Documentation](https://github.com/mongodb-industry-solutions/kozen-trigger/wiki)