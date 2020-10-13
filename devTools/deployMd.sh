#!/bin/bash

npx md2pug -a -V -f src/markdown/$1.md -o src/pug && pug -P src/pug/$1.pug -o public/