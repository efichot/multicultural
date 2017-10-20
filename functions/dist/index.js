'use strict';var _graphql=require('./graphql'),_graphql2=_interopRequireDefault(_graphql),_transform=require('./schema/transform');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _=require('lodash'),functions=require('firebase-functions'),admin=require('firebase-admin'),db=require('./database');admin.initializeApp(functions.config().firebase);var firestore=admin.firestore(),graphQLServer=(0,_graphql2.default)();exports.api=functions.https.onRequest(graphQLServer),exports.authenticationComplete=functions.auth.user().onCreate(function(a){var b={uid:a.data.uid,images:{imageProfile:a.data.photoURL},name:{nameDisplay:a.data.displayName,nameFirst:a.data.displayName},contact:{contactEmail:a.data.email},provider:a.data.providerData};firestore.collection('people').add(b)}),exports.authenticationUserOnCreate=functions.database.ref('/users/{user}').onCreate(function(a){var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'users',branches:[b],payload:{pointer:b}})}),exports.mutateRequest=functions.database.ref('/mutate/request/{request}').onCreate(function(a){var b=a.data.key,c=a.data.val();if(c.metadata.entity)switch(c.metadata.entity){}});
//# sourceMappingURL=index.js.map