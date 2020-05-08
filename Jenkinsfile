pipeline {
  agent any

  tools {nodejs "node-tutorial"}

  stages {
    stage('Build') {
      steps {
        sh 'type -a npx'
        sh 'type -a npm'
        sh 'ls -la'
        sh 'export PATH="$PATH:"/usr/local/bin/; npm create-react-app example-react'
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
          sh 'find / -name sonar-scanner'
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