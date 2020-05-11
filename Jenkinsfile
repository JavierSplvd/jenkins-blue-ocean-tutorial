pipeline {
  agent {
    docker {
      image 'node:12'
      args '-i -d -u 0 --userns=host --network jenkins-blue-ocean-tutorial_mynet'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npx create-react-app example-react'
        sh 'pwd'
        sh 'ls -la'
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
        sh 'ls -la'
        sh 'docker run -t -u root:root --privileged --network jenkins-blue-ocean-tutorial_mynet -v /Users/javier/Documents/Projects/jenkins-blue-ocean-tutorial/jenkins-blue-ocean-tutorial/jenkins_home:/var/jenkins_home -e SONAR_HOST_URL=http://sonarqube:9000 -e SONAR_PROJECT_BASE_DIR=$(pwd) -w $(pwd) --entrypoint ./entrypoint.sh sonarsource/sonar-scanner-cli'
      }
    }

  }
  environment {
    CI = 'true'
  }
}