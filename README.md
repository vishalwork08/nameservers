# Lookup for Name-Servers of a domain
The application, built using NodeJS & ReactJS allows a user to fetch subdomains, nameservers & IPs of a searched domain URL. It makes use of the subquest depedency in the backend .



## Getting started 
```sh
# Clone repository
git clone https://github.com/vishalwork08/nameservers

# Containers & Ports
Backend runs on port 4000 & exposes same port of the local system
Frontend runs on port 3000 & exposes same port of the local system
```

# Run Container Image(s)
Start docker on your local device & run below command after navigating to the project directory
```
docker-compose up
```
Wait for a few seconds, until you notice React app shows started in the terminal. Now check the frontend at http://localhost:3000/


_Note:  
Alternatively, if you do not wish to use docker, run individual projects (frontend & backend) by going inside their respective folders and running commands to start services using your oreferred process manager i.e. nodemon, pm2 etc_
