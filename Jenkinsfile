pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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
        withSonarQubeEnv('sonarqube-1') {
          sh '''sonar-scanner \\
  -Dsonar.projectKey=example-react \\
  -Dsonar.sources=. \\
  -Dsonar.host.url=http://localhost:9000 \\
  -Dsonar.login=d96aa51ff4e574a4a631f8482adadfe1edceabee'''
        }

      }
    }

  }
  environment {
    CI = 'true'
  }
}