#!/bin/bash

cd ~/personal-site

make stop PROD=1

sudo certbot certonly -d www.peerdb.nl --standalone --keep-until-expiring --agree-tos --non-interactive
mkdir -p /certs/www.peerdb.nl
cp /etc/letsencrypt/live/www.peerdb.nl/* /certs/www.peerdb.nl/.

make start PROD=1
