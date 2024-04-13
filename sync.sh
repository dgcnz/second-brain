#!/bin/bash

# ensure input
if [ -z "$1" ]; then
  echo "Please provide the path to the vault"
  exit 1
fi

FOLDERS=("000 Zettelkasten" "100 Reference notes")
for FOLDER in "${FOLDERS[@]}"; do
  # Path to your local folder
  LOCAL_FOLDER_PATH="$1/$FOLDER"

  # Specific path within the repository to sync the folder into
  REPO_SYNC_PATH="docs/$FOLDER"

  # Copy the contents of the local folder to the specified path within the repository
  cp -r "$LOCAL_FOLDER_PATH"/* "$REPO_SYNC_PATH"
done

IMAGE_PREFIX_PATH="$1/Files"
FILES_FOLDER="docs/Files"
rg -N --no-filename -o '\!\[\[(.+)\]\]' -r '$1' docs | sort | uniq |
while IFS= read -r filename; do
    # Copy each file to the current directory
    cp "$IMAGE_PREFIX_PATH/$filename" "$FILES_FOLDER"
done

# Add, commit, and push changes to the repository
# git add "$REPO_SYNC_PATH"
# git commit -m "sync: $(date)"
# git push origin master
