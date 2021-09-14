#!/usr/bin/env sh

set -e

npm run build -- --base /intro

cd dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Normal-OJ/intro.git master:gh-pages

cd -