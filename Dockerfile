FROM nginx:mainline-alpine
COPY index.html /usr/share/nginx/html/
COPY dist /usr/share/nginx/html/dist/
COPY images /usr/share/nginx/html/images/
COPY music /usr/share/nginx/html/music/
COPY fonts /usr/share/nginx/html/fonts/
RUN /bin/sh -c 'chmod -R 0755 /usr/share/nginx/html'
