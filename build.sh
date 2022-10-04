rm -Rf release/

mkdir release/
mkdir release/assets/
mkdir release/css/
mkdir release/js/
mkdir release/data/

node compile.js $1

cp -R dev/assets/* release/assets/
cp -R dev/data/* release/data/