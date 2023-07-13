# SEA CINEMA APP

A brand-new movie ticket booking app.

# BACK END

Built with javascript and framwork Hapi.JS

## How to run?

### Prequites

- Node.js (https://nodejs.org/en/download)
- MySQL (https://www.mysql.com/downloads)
- Git (https://git-scm.com/downloads)

### Setup

- Clone the repository:

  ```bash
  git clone https://github.com/isalzufari/sea-cinema-15.git -b server-dev
  ```
  
- Add .env:

  ```bash
  # SERVER_CONFIG
  HOST=localhost
  PORT=4000
  
  # MYSQL_CONFIG
  HOST_MYSQL=localhost
  USER=root
  DATABASE=db_sea_cinema_compfest
  PASSWORD=
  
  # JWT TOKEN
  ACCESS_TOKEN_KEY=d3f2ba353d5b249164aa2516d87d952b872e6efc5fe4d14c3f7d4907698d765883b6b87219191b432570c25ee8ed0d02b5a3eb1d185c088fdfe918e41ba84299
  REFRESH_TOKEN_KEY=74bd8406998059a123e9620992f46456d08c786fbf7cba84fbe28a75ad7561b0017d232d8cb264989236f7321b4cce30bc5add8d8bfb66ba774be9fa367ac350
  ACCESS_TOKEN_AGE=1800
  ```

- Install all the needed NPM packages:

  ```bash
  npm install
  ```

- Run the project

  ```bash
  npm run start
  ```
