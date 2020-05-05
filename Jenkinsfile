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
        sh 'cd example-react'
        sh 'ls -la'
        sh 'npm test'
      }
    }

  }
  environment {
    CI = 'true'
  }
}