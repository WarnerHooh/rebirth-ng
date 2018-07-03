FROM nginx:1.12-alpine
WORKDIR /app
ENV PORT 80
ARG dist_path=dist
COPY $dist_path /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/*
ADD nginx/conf.d /etc/nginx/conf.d
