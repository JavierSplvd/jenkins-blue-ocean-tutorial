FROM sonarsource/sonar-scanner-cli
USER root
RUN apt-get update && \
    apt-get -qq -y install sudo && \
    apt-get -y install \
    curl \
    && rm -rf /var/cache/apk/*

EXPOSE 8080
CMD /bin/bash