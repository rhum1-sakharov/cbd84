FROM httpd:latest
MAINTAINER Romain VERMOREL <romain.vermorel@gmail.com>
USER root
RUN apt-get update -y && apt-get install -y libapache2-mod-proxy-html && apt-get install -y libxml2-dev
RUN sh -c 'cp -rf /usr/lib/apache2/modules/mod_proxy_html.so /usr/local/apache2/modules'
RUN sh -c 'cp -rf /usr/lib/apache2/modules/mod_xml2enc.so /usr/local/apache2/modules'
RUN sh -c 'cp -rf /usr/lib/x86_64-linux-gnu/libxml2.so /usr/local/apache2/modules/libxml2.so'