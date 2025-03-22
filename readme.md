## 📅 CalendarHub

Aplicativo de agendamento de compromissos com interface de calendário interativo usando Node.js, MongoDB, Express, EJS e FullCalendar.

---

### 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (Template Engine)
- FullCalendar.js (Frontend de calendário)
- dotenv (Gerenciamento de variáveis de ambiente)
- Bootstrap 5

---

### 📁 Estrutura do Projeto

```
.
├── public/
│   ├── main.css
│   └── main.js
├── model/
│   └── Appointment.js
├── services/
│   └── AppointmentService.js
├── views/
│   └── index.ejs
├── .env
├── app.js
└── package.json
```

---

### ⚙️ Configuração do Projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/calendarhub.git
cd calendarhub
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Configure o `.env`**:

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=3003
MONGO_URI=mongodb://localhost:27017/calendarhub
```

4. **Inicie o MongoDB** (caso use local):

```bash
sudo service mongod start
```

5. **Execute o projeto**:

```bash
npm start
```

Acesse: [http://localhost:3003](http://localhost:3003)

---

### 🧪 Testando Agendamentos

Você pode criar agendamentos com Postman:

**Endpoint:** `POST http://localhost:3003/appointments`

**Body (JSON):**
```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "phone": 11987654321,
  "date": "2024-07-20",
  "time": "14:30",
  "message": "Consulta de avaliação"
}
```

---

### 📚 Funcionalidades

- Criação de agendamentos com validação
- Armazenamento no MongoDB
- Exibição no calendário com FullCalendar
- Interface responsiva com Bootstrap

---

### ✅ To-Do (Próximos Passos)

- [ ] Autenticação com login
- [ ] Listagem de agendamentos no frontend
- [ ] Edição e exclusão de eventos
- [ ] Confirmação por e-mail (nodemailer)

---

### 🧠 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir!

---