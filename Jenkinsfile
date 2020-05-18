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
          sh 'docker run -t -u root:root --privileged --network jenkins-blue-ocean-tutorial_mynet -v /Users/javier/Documents/Projects/jenkins-blue-ocean-tutorial/jenkins-blue-ocean-tutorial/jenkins_home:/var/jenkins_home -v /Users/javier/Documents/Projects/jenkins-blue-ocean-tutorial/jenkins-blue-ocean-tutorial/sonar-scanner.properties:/opt/sonar-scanner/conf/sonar-scanner.properties -e SONAR_HOST_URL=http://sonarqube:9000 -e SONAR_PROJECT_BASE_DIR=$(pwd) -w $(pwd) sonarsource/sonar-scanner-cli'
        }

        waitForQualityGate true
      }
    }

  }
  environment {
    CI = 'true'
  }
}