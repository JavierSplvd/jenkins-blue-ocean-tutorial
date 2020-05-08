pipeline {
  agent {
    docker {
      args '-i -d -u 0 --userns=host --network jenkins-blue-ocean-tutorial_mynet -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock'
      image 'node:12'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'ls -la'
        sh 'ls -la'
        sh 'ls'
        sh 'ls'
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

    stage('Sonar') {
      steps {
        sh 'docker run -t -u 1000:1000 -u root:root --privileged -e SONAR_HOST_URL=http://sonarqube:9000 -w $(pwd) -v $(pwd):$(pwd):rw,z -v $(pwd)@tmp:$(pwd)@tmp:rw,z --network host --entrypoint ./entrypoint.sh sonarsource/sonar-scanner-cli'
      }
    }

  }
  environment {
    CI = 'true'
  }
}