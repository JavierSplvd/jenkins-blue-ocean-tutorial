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
        sh 'apt-get install -y maven'
        withSonarQubeEnv('sonarqube-installation') {
          sh 'mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.6.0.1398:sonar'
        }

      }
    }

  }
  environment {
    CI = 'true'
  }
}