#!/bin/bash

git pull
rsync -avzh ./ /cse/web/research/raivn/ 
