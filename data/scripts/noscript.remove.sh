#!/bin/bash

WHITELIST=$XDG_DATA_HOME/uzbl/ns_whitelist

#REMOVELINE=

#while #removeline not empty; do
#    REMOVELINE=""

    while read -r line; do
        if [[ "$UZBL_URI" =~ "$line" ]]; then
            #REMOVELINE="$line"
            #break
            sed -i "/$line/d" $WHITELIST
        fi
    done < "$WHITELIST"


#done
