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
        withSonarQubeEnv 'sonarqube-1'
      }
    }

  }
  environment {
    CI = 'true'
  }
}