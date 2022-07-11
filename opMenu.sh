#!/bin/bash

# submmenu to main menu
submenu () {
	local PS3='Please enter sub option: '
	local options=("1" "2" "quit")
	local opt
	select opt in "${options[@]}"
	do
		case $opt in
			"1")
				echo "you chose sub item 1"
				;;
			"2")
				echo "you chose sub item 1"
				;;
			"quit")
				return
				;;
			*) echo "invalid option $REPLY";;
		esac
	done
}

# main menu
PS3='Please enter main option'
options=("Main menu item 1" "Submenu" "exit")
select opt in "${options[@]}"
do
	case $opt in
		"Main menu item 1")
			echo "you chose main item 1"
			;;
		"Submenu")
			submenu
			;;
		"exit")
			exit
			;;
		*) echo "invalid option $REPLY";;
	esac
done






# script exiting as expected with code '0'
exit 0
