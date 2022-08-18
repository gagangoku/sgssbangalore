set -x
set -e

# linode
rsync -r -avzh --exclude 'assets' --exclude 'dist' --exclude '.git' --exclude node_modules --exclude node_modules_nossr --exclude .idea ./ gagan@ezinvest.in:~/gurdwara_mweb/react/sgssblr/

