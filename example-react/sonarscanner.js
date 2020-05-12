const sonarqubeScanner = require('sonarqube-scanner');
 
sonarqubeScanner(
  {
    serverUrl : 'https://sonarqube:9000',
    token : "",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'src'
    }
  },
  () => process.exit()
)