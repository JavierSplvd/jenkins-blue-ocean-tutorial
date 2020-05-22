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

    stage('Sonar') {
      steps {
        withSonarQubeEnv('sonarqube') {
          sh 'docker run -t -u root:root --privileged --network jenkins-blue-ocean-tutorial_mynet -v /Users/javier/Documents/Projects/jenkins-blue-ocean-tutorial/jenkins-blue-ocean-tutorial/jenkins_home:/usr/src -v /Users/javier/Documents/Projects/jenkins-blue-ocean-tutorial/jenkins-blue-ocean-tutorial/sonar-scanner.properties:/opt/sonar-scanner/conf/sonar-scanner.properties -e SONAR_PROJECT_BASE_DIR=/usr/src/workspace sonarsource/sonar-scanner-cli'
        }

        waitForQualityGate true
      }
    }

  }
  environment {
    CI = 'true'
  }
}