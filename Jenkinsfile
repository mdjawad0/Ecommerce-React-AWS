pipeline {
    agent any
    tools { nodejs "NodeJS" }
    environment {
        DOCKER_IMAGE = "MyApp"
        // Specify the port you want to use
        PORT = "80"
    }
    stages {
        stage('Source') {
            steps {
                // Get code from a GitHub repository
                git 'https://github.com/mdjawad0/Ecommerce-React-AWS.git'

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

        stage('Dockerize') {
            steps {
                // Stop and remove existing container if it exists
                script {
                    sh "docker stop \$(docker ps -q --filter 'ancestor=${DOCKER_IMAGE}') || true"
                    sh "docker rm \$(docker ps -aq --filter 'ancestor=${DOCKER_IMAGE}') || true"
                }

                // Build Docker image
                sh "docker build -t ${DOCKER_IMAGE} ."

                // Run Docker container
                sh "docker run -p ${PORT}:80 ${DOCKER_IMAGE}"
            }
        }
    }
}
