pipeline {
  agent {
    docker {
      image 'sonarsource/sonar-scanner-cli'
      args '-u root:root'
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

    stage('SonarQube') {
      steps {
        withSonarQubeEnv('sonarqube-1') {
          sh '''sonar-scanner \\
  -Dsonar.projectKey=example-react \\
  -Dsonar.sources=. \\
  -Dsonar.host.url=http://172.20.0.4:9000 \\
  -Dsonar.login=d96aa51ff4e574a4a631f8482adadfe1edceabee'''
        }

      }
    }

  }
  environment {
    CI = 'true'
  }
}