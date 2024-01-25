web: gunicorn backend_controller.backend_controller.wsgi
release:
  - cd backend_controller && ./manage.py migrate --no-input
  - npm install && npm run build
