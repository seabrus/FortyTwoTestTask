   42-test - by seabrus
===========================

A Django 1.9+ project

Use fortytwo_test_task.settings when deploying with getbarista.com

### Recommendations
* apps in apps/ folder
* use per-app templates folders
* use per-app static folders
* use migrations
* use settings.local for different environments
* common templates live in templates/
* common static lives in assets/
* management commands are proxied to single word make commands, e.g., make test

