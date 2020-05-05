pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:10'
    }

  }
  stages {
    stage('Build') {
      steps {
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
        withSonarQubeEnv(installationName: 'sonarqube-1', credentialsId: 'd96aa51ff4e574a4a631f8482adadfe1edceabee')
      }
    }

  }
  environment {
    CI = 'true'
  }
}