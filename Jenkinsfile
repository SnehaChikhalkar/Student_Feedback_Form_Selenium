pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/vrushabhkapsebtech2023-maker/studentfeedbck'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Build Stage Running'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Testing...'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deploying...'
            }
        }
    }
}
