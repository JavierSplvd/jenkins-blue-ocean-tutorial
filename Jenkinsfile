pipeline {
  agent {
    docker {
      image 'node:12'
      args '--network jenkins-blue-ocean-tutorial_mynet'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'cd ./example-react; npm install'
        sh 'pwd'
        sh 'ls -la'
      }
    }

    stage('Test') {
      steps {
        sh 'cd ./example-react; npm run test -- --coverage --watchAll=false'
      }
    }

  }
  environment {
    CI = 'true'
  }
}
