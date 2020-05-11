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
        sh '''
#npx create-react-app example-react'''
        sh 'pwd'
        sh 'ls -la'
      }
    }

    stage('Test') {
      steps {
        sh '''#cd ./example-react
#npm test'''
      }
    }

    stage('Sonar') {
      steps {
        sh 'ls -la'
        sh 'docker run -t -u 1000:1000 -u root:root -w /usr/src/  --privileged --network jenkins-blue-ocean-tutorial_mynet -v /var/jenkins_home:/usr/src -e SONAR_HOST_URL=http://sonarqube:9000  --entrypoint pwd sonarsource/sonar-scanner-cli'
        sh 'docker run -t -u 1000:1000 -u root:root --privileged --network jenkins-blue-ocean-tutorial_mynet -v /var/jenkins_home:/usr/src -e SONAR_HOST_URL=http://sonarqube:9000  --entrypoint ./entrypoint.sh sonarsource/sonar-scanner-cli'
      }
    }

  }
  environment {
    CI = 'true'
  }
}