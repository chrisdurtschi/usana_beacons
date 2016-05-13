cd /tmp

# try to remove the repo if it already exists
rm -rf usana_beacons; true
git clone https://github.com/chrisdurtschi/usana_beacons.git
cd usana_beacons
npm install
npm start
