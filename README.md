# Multi Gateway Payment API – BeTalent Backend Test

## 📌 Description / Descrição

🇺🇸  
This project is a REST API built with **AdonisJS + MySQL** that implements a **multi-gateway payment system** with fallback, roles authorization, refund support, and Docker environment.

🇧🇷  
Este projeto é uma API REST desenvolvida com **AdonisJS + MySQL** que implementa um **sistema de pagamentos multi-gateway**, com fallback automático, controle por roles, suporte a reembolso e ambiente com Docker.

---

## 🚀 Features / Funcionalidades

- REST API
- Multi Gateway payment
- Gateway priority
- Gateway enable / disable
- Refund support
- Transactions history
- Clients / Products / Gateways CRUD
- Role based authorization
- Authentication
- MySQL database
- Lucid ORM
- Docker Compose
- External gateway integration

---

## 👤 Roles / Perfis

| Role | Permissions |
|------|------------|
| ADMIN | Full access |
| MANAGER | Manage products and clients |
| FINANCE | Refund and transactions |
| USER | Make payments |

---

## 🔌 Gateways

Mock gateways used:


http://localhost:3001

http://localhost:3002


Docker image:


matheusprotzen/gateways-mock


---

## 🛠️ Technologies

- Node.js
- AdonisJS
- MySQL
- Lucid ORM
- Docker
- Docker Compose
- JWT Auth
- REST API

---

## 📦 Installation (Local)


npm install


Configure `.env`


DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=betalant


Run migrations


node ace migration:run


Start server


node ace serve --watch


---

## 🐳 Run with Docker


docker compose up --build


Services:

- mysql
- api
- gateways mock

Ports:


3333 → API
3001 → Gateway1
3002 → Gateway2
3307 → MySQL


---

## 📌 Main Routes

### Auth


POST /api/v1/auth/signup
POST /api/v1/auth/login
POST /api/v1/auth/logout


### Payments


POST /api/v1/payments
POST /api/v1/payments/refund/:id


### Transactions


GET /api/v1/transactions
GET /api/v1/transactions/:id
GET /api/v1/clients/:id/transactions


### Products


/api/v1/products


### Clients


/api/v1/clients


### Gateways


/api/v1/gateways
PATCH /api/v1/gateways/:id/toggle
PATCH /api/v1/gateways/:id/priority


---

## ⚙️ Multi Gateway Logic

1. Gateways ordered by priority
2. Try first gateway
3. If fails → try next
4. Save transaction
5. Allow refund

---

## 🧪 Test Levels Implemented

✔ Level 1  
✔ Level 2  
✔ Level 3 (partial)

- Multi products
- Gateway auth
- Roles
- Refund
- Docker
- Priority
- Enable / disable

---

## 👨‍💻 Author

Diego Rodrigues
