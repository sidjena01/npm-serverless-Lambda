pipeline {
    agent any
   // environment {
    //    REPO_URL = 'https://github.com/sidjena01/npm-serverless-Lambda.git'
      //     }
  
  stages {
    
             stage('Build') {
            steps {
                echo 'Pull code and build'
                // git 'https://github.com/sidjena01/npm-serverless-Lambda.git'
            
               //    sh 'npm install'
            }
             }
    
    stage ('Creating NPM') {
      steps {
        sh '''
        mkdir my-express-application && cd my-express-application
        npm init -f
        '''
         }
    }
    
    stage ('NPM Build') {
            steps {
                echo 'Building the code===='
                // bat 'npm install'
                   sh ''' npm install --save express serverless-http '''
                   }
              }
      
      stage('Test') {
            steps {
                echo 'Run tests and publish results'
                sh 'npm run test'
            }
        }
     stage ('Serverless Deploy'){
       steps {
         sh '''serverless deploy'''
             }
        }
  }
     }
  
