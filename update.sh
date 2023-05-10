#!/bin/bash

git pull
rsync -avzh --exclude='.git/' ./ /cse/web/research/raivn/
