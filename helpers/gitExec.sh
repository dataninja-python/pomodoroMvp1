#!/bin/env bash

printf "\n"
echo "running gitExec.sh file"
printf "\n"

# echo "changing to main directory"
# cd ..

# create git log file
git_log="git_log-`date +%F`.log"
printf "git log" > ./logs/$git_log

printf "\n"
echo "starting git commands"
read -p "what message goes with this commit? " msg
read -p "what is you username? " uname
printf "\n"

echo "getting password"

# add all files to git
echo "addig files to git update"
git add .

echo "sending git status to log"
git status >> $git_log

echo "committing files and message"
git commit -a -m "$msg"

echo "pushing changes to main branch"
git push origin main

# enter username and password for git

echo "wrapping things up..."
echo "remaining messages will be sent to the log file"
printf "\n"
date >> $git_log

# echo "returning to helpers folder" >> $git_log
# cd helpers

echo "returning to main script"
printf "\n"

echo "no obvious errors" >> $git_log
exit 0
