set -x
set -e

# linode
rsync -r -avzh --exclude 'assets' --exclude 'dist' --exclude '.git' --exclude node_modules --exclude node_modules_nossr --exclude .idea ./ gagan@ezinvest.in:~/gurdwara_mweb/react/sgssblr/

# gcp
rsync -Pa -e "ssh -t -i /Users/gagandeep/.ssh/google_compute_engine -o CheckHostIP=no -o HashKnownHosts=no -o HostKeyAlias=compute.8593189175368638566 -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile=/Users/gagandeep/.ssh/google_compute_known_hosts" --exclude venv --exclude .git --exclude node_modules --exclude node_modules_nossr --exclude .idea --exclude 'assets' --exclude 'dist'  ./ gagandeep@gcp.liquidco.in:~/gurdwara_mweb/react/sgssblr/
