#!/bin/env bash

printf "\n"
echo "starting git update"

# echo "changing to main directory"
# cd ..

git_log="git_log-`date +%F`.log"

# add all files to git
echo "addig files to git update"
git add .
git status

printf "\n"
echo "running git script"
read -p "what is the message for this commit? " msg

git commit -a -m "$msg"

# enter username and password for git

echo "wrapping things up..."
echo "sending remainder to log file"
printf "\n"
printf "git log" > ./logs/$git_log
date >> $git_log

# echo "returning to helpers folder" >> $git_log
# cd helpers

echo "returning to main script"
printf "\n"

echo "no obvious errors" >> $git_log
exit 0
