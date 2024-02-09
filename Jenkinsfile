pipeline {
    agent any
    environment {
        SHELL = '/bin/bash'
        PATH = "/usr/local/bin:${env.PATH}"
    }
    stages {
        stage('Install dependencies') {
            steps {
                echo "Installing dependencies..."
                sh "npm ci"
                echo "Dependencies installed successfully."
            }
        }
        stage('Cypress run') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS'){
                echo "Running Cypress..."
                sh "npm run allure:clear"
                sh "npm run cy:run:allure"
                echo "Cypress run completed."
            }
        }
        stage('Allure report') {
            steps {
                echo "Generating Allure report..."
                sh "npm run allure:generate"
                allure(
                    results: [[path: 'allure-results']]
                )
                echo "Allure report generated."
            }
        }
    }
}
