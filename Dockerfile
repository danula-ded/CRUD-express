# Используем Node.js образ
FROM node:20

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Запускаем приложение
EXPOSE 6080
CMD ["node", "src/server.js"]
