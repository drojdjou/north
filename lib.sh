# Setup folders
rm -Rf dev/lib/*
# mkdir dev/lib/sqr-lib/

# Grab local files
cp ../../javascript/malibu/malibu.js dev/lib
# cp ../../javascript/squareroot.js/build/sqr.js dev/lib
# cp ../../javascript/squareroot.js/build/sqr-primitives.js dev/lib/sqr-lib/

# Grab remote (3rd party) files
curl https://raw.githubusercontent.com/goldfire/howler.js/master/howler.js > dev/lib/howler.js
# curl https://raw.githubusercontent.com/greensock/GreenSock-JS/master/src/uncompressed/TweenLite.js > dev/lib/TweenLite.js
