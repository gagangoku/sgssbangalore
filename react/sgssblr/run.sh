#!/bin/bash

set -x
set -e

npm run build-ssr
NODE_ENV=production ./node_modules/pm2/bin/pm2 start dist/server.js --name gurdwara_mweb

