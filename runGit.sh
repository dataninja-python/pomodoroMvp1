#!/bin/env bash

<<COMMAND
	This is to automate my git commands
COMMAND

git_file="./helpers/gitExec.sh"
script_log="./logs/git_updated_log-`date +%F`.log"

function file_log () {
	# save logs
	exit 0
}

function run_git () {
	gitFile=$1
	echo "running $gitFile"
	. $gitFile
	exit 0
}

function main () {
	while true
	do
		printf "\n"
		echo "This script automates git updates."
		echo "Q can be entered at any time to quit."
		read -p "Enter yes to confirm you want to proceed: " user_input
		case $user_input in
			y|Y) 
				printf "\n"
				echo "lower or upper case yes selected"
				run_git $git_file
				;;
			q|Q)
				printf "\n"
				echo "lower or upper case q selected"
				echo "quitting"
				break
				;;
			*) echo "invalid entry";;
		esac
	done
	exit 0
}

main

exit 0
