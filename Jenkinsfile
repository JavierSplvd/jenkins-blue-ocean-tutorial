pipeline {
  agent {
    docker {
      image 'node:12'
      args '-u root:root'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'ls -la'
        sh 'ls -la'
        sh 'apt-get install -y curl'
        sh '''curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs'''
        sh '''
npx create-react-app example-react'''
      }
    }

    stage('Test') {
      steps {
        sh '''cd ./example-react
npm test'''
      }
    }

    stage('Sonar') {
      steps {
        sh 'docker run -e SONAR_HOST_URL=http://sonarqube:9000 -it -v $(pwd)":/usr/src" sonarsource/sonar-scanner-cli'
        withSonarQubeEnv('sonarqube-installation') {
          sh 'docker run -e SONAR_HOST_URL=http://foo.acme:9000 -it -v "/path/to/project:/usr/src" sonarsource/sonar-scanner-cli'
        }

      }
    }

  }
  environment {
    CI = 'true'
  }
}