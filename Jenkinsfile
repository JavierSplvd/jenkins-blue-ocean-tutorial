pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
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
        sh 'cd example-react'
        sh 'npm test'
      }
    }

  }
  environment {
    CI = 'true'
  }
}