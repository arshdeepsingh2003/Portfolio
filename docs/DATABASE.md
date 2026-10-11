# Database

## Decision: No database

The owner explicitly does not want a database. Do not install or configure PostgreSQL, MySQL, MongoDB, SQLite, or another database.

Store project metadata and skill lists in local frontend data files. Store screenshots, résumé assets, and other static content in frontend assets. Use direct email and professional profile links for contact by default.

Python FastAPI may still be used for explicitly approved server-side features, but it must not persist data in a database. If a contact form is requested later, use an approved email delivery service and do not silently add persistent storage.
