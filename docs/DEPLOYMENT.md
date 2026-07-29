# Production Deployment Guide

## Production Requirements

- Linux/Unix server (Ubuntu 22.04 LTS recommended)
- Docker Desktop or Docker Engine version 24.0+
- Docker Compose version 2.20+
- Domain name with SSL certificate (e.g. Nginx reverse proxy or Cloudflare)

## Step-by-Step Deployment

1. **Server Setup**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install docker.io docker-compose-v2 -y
   ```

2. **Clone & Configure**:
   ```bash
   git clone https://github.com/TanveerS24/Meet-Tanveer.git /var/www/portfolio
   cd /var/www/portfolio
   cp .env.example .env
   ```

3. **Production Container Launch**:
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
   ```
