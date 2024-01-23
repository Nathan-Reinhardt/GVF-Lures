web: gunicorn backend_controller.wsgi
release: 
  - cd backend_controller && python ./manage.py migrate --no-input
  - npm install && npm run build
