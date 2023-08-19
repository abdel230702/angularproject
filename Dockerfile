FROM nginx

COPY ./dist/inscription_front /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf