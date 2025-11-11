# dkg.zone
The website at [dkg.zone](https://dkg.zone)

## Setup
Guide to running the website

### Prerequisites
- Docker Compose ([installation guide](https://docs.docker.com/compose/install/))

### Installation & Usage
- Clone repository
  
  ```bash
  git clone https://github.com/altrup/dkg.zone.git
  ```
- Enter newly created folder
  
  ```bash
  cd dkg.zone
  ```
- Copy [`.env.example`](/.env.example) and update to your values (optional)
  
  ```bash
  cp .env.example .env
  ```
- Start Docker container

  ```bash
  docker compose up -d
  ```
- To stop, run

  ```bash
  docker compose down
  ```
- To update, run

  ```bash
  docker compose build
  ```

### Testing
- For testing changes, instead of using docker and rebuilding every time, you can also run using npm
- Install npm packages
  
  ```bash
  npm install
  ```
- Run website
  
  ```bash
  npm run start
  ```