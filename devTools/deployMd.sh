#!/bin/bash

npx md2pugHl src/markdown/$1.md && mv src/markdown/$1.pug src/pug && pug -P src/pug/$1.pug -o public/