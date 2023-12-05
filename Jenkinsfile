pipeline {
    agent any
    tools { nodejs "NodeJS" }
    stages {
        stage('Source') {
            steps {
                // Get code from a GitHub repository
                git 'https://github.com/mdjawad0/estore-admin-app.git'

                // Run npm install
                sh "npm install"

                echo 'Source Stage Finished'
            }
        }

        stage('Test') {
            steps {
                // Run Test Cases
                // sh "npm run cypress:run"
                echo 'Test Stage Finished'
            }
        }

        stage('Build') {
            steps {
                // Run Vite build command
                sh "npm run build"
                echo 'Build Stage Finished'
            }
        }
    }
}
