#!/bin/sh
# This scripts opens a new tab with the given url

echo "set mode=
event KEYCMD_CLEAR
event NEW_TAB_NEXT \"$@\"" > "$UZBL_FIFO"
