#!/bin/bash

unset password
unset chartCount

echo -n "enter password: "

while IFS= read -r -n1 -s char; do
	case "$char" in
		$'\0')
			break
			;;
		$'\177')
			if [ ${#password} -gt 0 ]; then
				echo -ne "\b \b"
				password=${password::-1}
			fi
			;;
		*)
			chartCount=$((chartCount+1))
			echo -n '*'
			password+="$char"
			;;
	esac
done

echo 
echo "password: $password"

export $password
return $password

exit 0
