web: gunicorn backend_controller.wsgi
release: 
  - cd backend_controller && ./manage.py migrate --no-input
  - cd backend_controller/frontend && npm install && npm run build