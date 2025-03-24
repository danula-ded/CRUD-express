const express = require('express');
const app = express();

app.use(express.json());

const PORT = 6080;

// Структура объекта Phone
class Phone {
    constructor() {
        this.TypeID = 0;
        this.CountryCode = 0;
        this.Operator = 0;
        this.Number = 0;
    }
}

// Структура объекта Contact
class Contact {
    constructor() {
        this.ID = 0;
        this.Username = '';
        this.GivenName = '';
        this.FamilyName = '';
        this.Phone = [new Phone()]; // массив объектов Phone
        this.Email = [];
        this.Birthdate = null;
    }
}

// Структура объекта Group
class Group {
    constructor() {
        this.ID = 0;
        this.Title = '';
        this.Description = '';
        this.Contacts = []; // массив ID контактов
    }
}

// Заглушки для Contact
app.post('/api/v1/contact', (req, res) => {
    console.log('Create Contact:', req.body);
    const response = new Contact();
    res.status(201).json(response);
});

app.get('/api/v1/contact', (req, res) => {
    console.log('Get Contact');
    const response = new Contact();
    res.status(200).json(response);
});

app.put('/api/v1/contact', (req, res) => {
    console.log('Update Contact:', req.body);
    const response = new Contact();
    res.status(200).json(response);
});

app.delete('/api/v1/contact', (req, res) => {
    console.log('Delete Contact');
    res.status(204).send();
});

// Заглушки для Group
app.post('/api/v1/group', (req, res) => {
    console.log('Create Group:', req.body);
    const response = new Group();
    res.status(201).json(response);
});

app.get('/api/v1/group', (req, res) => {
    console.log('Get Group');
    const response = new Group();
    res.status(200).json(response);
});

app.put('/api/v1/group', (req, res) => {
    console.log('Update Group:', req.body);
    const response = new Group();
    res.status(200).json(response);
});

app.delete('/api/v1/group', (req, res) => {
    console.log('Delete Group');
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});