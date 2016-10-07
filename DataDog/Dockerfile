FROM ubuntu
RUN apt-get update
RUN apt-get --yes --force-yes install apt-transport-https
RUN sh -c "echo 'deb https://apt.datadoghq.com/ stable main' > /etc/apt/sources.list.d/datadog.list"
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C7A7DA52
RUN apt-get update
RUN apt-get --yes --force-yes install datadog-agent
RUN sh -c "sed 's/api_key:.*/api_key: 2bed9bef8573226a796d06296dc7f9c8/' /etc/dd-agent/datadog.conf.example > /etc/dd-agent/datadog.conf"
RUN /etc/init.d/datadog-agent start
RUN DD_API_KEY=2bed9bef8573226a796d06296dc7f9c8 bash -c "$(curl -L https://raw.githubusercontent.com/DataDog/dd-agent/master/packaging/datadog-agent/source/install_agent.sh)"