web: gunicorn backend_controller.wsgi
release: 
  - ./manage.py migrate --no-input
  - npm install && npm run build