#! /usr/bin/bash
echo 'starting xtracts CMS'

pushd ~/Documents/1-Tunaaaaroom/1-xtracts-web/cms

npm run develop &

popd 

npm run start

