# Jenkins Setup Guide - Student Feedback Form Project

## Jenkins Access Credentials

**URL:** http://localhost:8080
**Username:** admin
**Password:** 3cc996247c7e4786977019b21f70a035

---

## Step 1: Initial Setup (Web Interface)

1. Open http://localhost:8080 in your browser
2. Enter the admin password: `3cc996247c7e4786977019b21f70a035`
3. Click "Continue"
4. Select "Install Suggested Plugins" 
5. Wait for plugin installation to complete
6. Create your first admin user (optional) or skip and continue

---

## Step 2: Configure Tools (Manage Jenkins → Tools)

### Maven Configuration
- Go to: **Manage Jenkins** → **Tools** → **Maven installations**
- Click "Add Maven"
- **Name:** Maven3
- **MAVEN_HOME:** C:\Users\sharv\maven\apache-maven
- Click "Save"

### JDK Configuration
- Go to: **Manage Jenkins** → **Tools** → **JDK installations**
- Click "Add JDK"
- **Name:** JDK17
- **JAVA_HOME:** C:\Program Files\Microsoft\jdk-17.0.17.10-hotspot
- Click "Save"

---

## Step 3: Create Pipeline Job

1. Click "New Item" on Jenkins home page
2. **Item name:** StudentFeedbackFormTests
3. **Type:** Pipeline
4. Click "Create"

### Configure the Pipeline:

**In "General" section:**
- Add description: "Automated Selenium tests for Student Feedback Form"

**In "Pipeline" section:**
- Select: "Pipeline script from SCM"
- **SCM:** Git
- **Repository URL:** (your Git repository or local path)
- **Script Path:** Jenkinsfile
- Click "Save"

---

## Step 4: Run the Pipeline

1. Go to your job: StudentFeedbackFormTests
2. Click "Build Now"
3. Monitor the build progress
4. View test results after build completes

---

## What the Pipeline Does

The Jenkinsfile will:
- Checkout the project code
- Run Maven clean test
- Execute 7 Selenium test cases
- Generate JUnit test reports
- Archive test artifacts

---

## Test Results Viewing

After build completes:
1. Click on the build number
2. Click "Test Result" to see detailed test results
3. Download test reports from build artifacts

---

## Troubleshooting

### If Maven not found:
- Verify Maven path is set correctly in Tools configuration
- Ensure C:\Users\sharv\maven\apache-maven\bin is accessible

### If JDK not found:
- Verify JDK path is correct
- Check Java is installed: `java -version`

### If tests fail:
- Check Chrome/Chromium is installed (required for Selenium)
- Verify headless mode setting in Jenkinsfile
- Check test reports in: selenium-tests/target/surefire-reports/

---

## Jenkins Automation Complete!

Your Jenkins is now running and ready for automated testing.
