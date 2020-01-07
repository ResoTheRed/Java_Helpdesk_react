# !/usr/bin/env bash
# you need to set the $FIREBASE_PROJECT_ID and $FIREBASE_AUTH_KEY as the env variable of the container. We can't push the DB secrets to the repo
#npm install -g firebase
./node_modules/firebase-tools/lib/bin/firebase.js firestore:delete --all-collections -y --token $FIREBASE_DEPLOY_KEY #delete entire collection and needs firebase as global dependency
urlBase='https://firestore.googleapis.com/v1beta1/projects/'$FIREBASE_PROJECT_ID'/databases/%28default%29/documents/'
firestoreNode='User'
documentId='SX4WgyzCHoRkl6AanXGBTl84VSo1'
if [ -z "$documentId" ]
then
  urlEnd='?&key='$FIREBASE_AUTH_KEY
else
  urlEnd='?&documentId='$documentId'&key='$FIREBASE_AUTH_KEY
fi
fullUrl=$urlBase'User'$urlEnd
#echo $fullUrl
requestBody='{"fields":{"email":{"stringValue":"schalise@uno.edu"},"displayName":{"stringValue":""},"photoUrl":{"stringValue":""},"role":{"arrayValue":{"values":[{"stringValue":"mentor"},{"stringValue":"admin"}]}},}}'
curl -X POST -H 'Content-Type: application/json' -H 'cache-control: no-cache' -d $requestBody $fullUrl #adds to database
curl -X POST -H 'Content-Type: application/json' -H 'cache-control: no-cache' -d '{"fields":{"sessionDuration":{"integerValue": 20}}}' $urlBase'Settings?&documentId=timer&key='$FIREBASE_AUTH_KEY
