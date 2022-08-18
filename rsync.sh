set -x
set -e

#rsync -avz -e 'ssh -i /Users/gagandeepsingh/.ssh/google_compute_engine -o CheckHostIP=no -o HostKeyAlias=compute.815732300220018135 -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile=/Users/gagandeepsingh/.ssh/google_compute_known_hosts' --exclude node_modules --exclude node_modules_nossr --exclude dist --exclude assets --exclude .git --exclude .idea . gagandeepsingh@www.heloprotocol.in:~/gurdwara_mweb/
rsync -avz -e 'ssh -i /Users/gagandeepsingh/.ssh/google_compute_engine -o CheckHostIP=no -o HostKeyAlias=compute.5192383182616672258 -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile=/Users/gagandeepsingh/.ssh/google_compute_known_hosts' --exclude node_modules --exclude node_modules_nossr --exclude dist --exclude assets --exclude .git --exclude .idea . gagandeepsingh@34.93.4.211:~/gurdwara_mweb/

