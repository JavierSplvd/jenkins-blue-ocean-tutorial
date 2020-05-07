pipeline {
  agent {
    docker {
      image 'node:12'
      args '-u root:root --privileged -v /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/scanner/bin/:/var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/scanner/bin/'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'ls -la'
        sh 'ls -la'
        sh 'apt-get install -y curl'
        sh '''curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs'''
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
        withSonarQubeEnv('sonarqube-installation') {
          tool 'scanner'
          sh 'cd /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/scanner/bin/sonar-scanner'
          sh 'ls -la'
          sh ' /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/scanner/bin/sonar-scanner -Dsonar.projectKey=123ABCabc -Dsonar.host.url=http://sonarqube:9000'
        }

      }
    }

  }
  environment {
    CI = 'true'
  }
}