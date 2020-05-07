pipeline {
  agent {
    docker {
      args '''-Dsonar.host.url=http://sonarqube:9000 -Dsonar.projectKey=123ABCabc
'''
      image 'newtmitch/sonar-scanner'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'ls -la'
        sh 'ls -la'
        sh 'apk add curl'
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

  }
  environment {
    CI = 'true'
  }
}