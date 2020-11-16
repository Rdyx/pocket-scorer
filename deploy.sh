npm run build

cd ./build

git init
git remote add origin https://github.com/Rdyx/pocket-scorer.git
git checkout -b build
git add *
git commit -m "Update"
git push origin build -f
