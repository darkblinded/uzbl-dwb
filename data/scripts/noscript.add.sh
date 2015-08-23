#!/bin/bash
 
WHITELIST=$XDG_DATA_HOME/uzbl/ns_whitelist


while read -r line; do
    if [[ "$UZBL_URI" =~ "$line" ]]; then
        return 0
    fi
done < "$WHITELIST"

echo "$UZBL_URI" | awk -F '/' '{print $3}' >> $WHITELIST
