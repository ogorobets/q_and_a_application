#Project info<br />
<strong>Project description:</strong><br />
<p>
This projects is Q&A application (similar to http://stackoverflow.com/).
</p>
<p>
Some part of functionality implemented in the app for now:<br />
- authentication and authorisation aren't needed for now,<br />
- identification of user is made by username,<br />
- a user should be able to see: 1) list of all questions; 2) list of unanswered questions;
3) list of answered questions, <br />
- a user should be able to see a question with all its answers on a separate page,<br />
- a user should be able to ask a question,<br />
- a user should be able to write an answer for any question,<br />
Amount of answers made by a user for the same question is not limited.
</p>
<strong>Prerequisites:</strong><br />
1. MongoDB<br />
<br />
<strong>Intallation of the app:</strong><br />
1. Go to project root folder<br />
2. Enter 'grunt auto_intall' in command line<br />
<br />
<strong>Running app:</strong><br />
1. Run MongoDB<br />
(being in MongoDB 'bin' folder enter in command line 'mongod --dbpath _path_to_project_folder\database_')<br />
2. Go to node_modules\express folder<br />
3. Enter 'node index.js' in command line<br />