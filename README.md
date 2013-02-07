**********************************************
Misfit - A CMS for small-scale node.js apps
**********************************************

#Creating a new page
  Step 1:
    A user should be able to do the following on a form:
      - Choose a page name
      - Select a folder for the page to exist in
      - Create a new folder if one does not exist
      - Choose a base layout
      - Specify a date to publish the page
  Step 2:
    A user be able to populate the page as follows:
      - Define content blocks with copy/links/images
    A user should be able to:
      - Preview the page
      - Save the page to the db
      - Publish the page
      - Save the page without publishing, for future work

#Editing a published page
  A user should be able to do the following on a Misfit page when authenticated:
    - edit and save markup w/ html5 editor
    
#Removing a published page
  A user should be able to do the following on a Misfit page when authenticated:
    - Specify that the page should be removed
    - Specify a redirect url for users visiting the url
    or
    - Make the page return a 404 error for users visiting the url
    - Specify a time for the page to be removed