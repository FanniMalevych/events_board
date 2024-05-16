

# Installation
npm install

# development mode
npm run dev

# DB
to run locally specify your credential (POSTGRES_PASSWORD and POSTGRES_USER) in docker-compose file and update data in TypeOrmModule ({host, port, username, password} instead URL)

docker-compose up --build