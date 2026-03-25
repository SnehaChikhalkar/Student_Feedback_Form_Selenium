# Student Feedback Registration Form (CA2)

This project implements the complete CA2 task using:
- HTML
- CSS (Internal + External)
- JavaScript validation
- Selenium with Java (JUnit + Maven)
- Jenkins automation

## 1) Project Structure

CA2/
- index.html
- styles.css
- script.js
- Jenkinsfile
- README.md
- selenium-tests/
  - pom.xml
  - src/test/java/com/ca2/StudentFeedbackFormTest.java

## 2) Form Fields Implemented

- Student Name
- Email ID
- Mobile Number
- Department (dropdown)
- Gender (radio buttons)
- Feedback Comments
- Submit button
- Reset button

## 3) Validation Rules Implemented (JavaScript)

- Student Name should not be empty
- Email should be in proper format
- Mobile Number must contain valid digits only (exactly 10 digits)
- At least one gender option must be selected
- Department must be selected
- Feedback Comments should not be blank and should have minimum 10 words

## 4) Selenium Test Cases Implemented (Java)

In StudentFeedbackFormTest.java:

1. Check whether form page opens successfully
2. Enter valid data and verify successful submission
3. Leave mandatory fields blank and check error messages
4. Enter invalid email format and verify validation
5. Enter invalid mobile number and verify validation
6. Check whether dropdown selection works properly
7. Check whether Submit and Reset buttons work correctly

## 5) Run the Form Manually

Open CA2/index.html in a browser.

## 6) Run Selenium Tests Locally

Prerequisites:
- Java 17+
- Maven 3.9+
- Chrome browser installed

Commands (from CA2/selenium-tests):

```bash
mvn clean test
```

For headed mode (not headless):

```bash
mvn clean test -Dheadless=false
```

## 7) Jenkins Setup (Additional Task)

Follow these steps:

1. Install Jenkins:
- Download and install Jenkins LTS from the official site.
- Start Jenkins and complete initial admin setup.

2. Install required Jenkins plugins:
- Git plugin
- Pipeline plugin
- JUnit plugin

3. Configure global tools in Jenkins:
- JDK named JDK17
- Maven named Maven3

4. Create a Jenkins Pipeline job:
- New Item -> Pipeline -> Name: CA2-Feedback-Form

5. Connect project folder or GitHub repository:
- If local workspace: configure pipeline script from SCM or paste Jenkinsfile content.
- If GitHub: add repository URL in SCM configuration.

6. Configure build to run Selenium tests:
- Jenkinsfile already runs:
  - mvn -B clean test -Dheadless=true

7. Execute the job:
- Click Build Now.

8. Observe result:
- Build SUCCESS: all tests passed.
- Build FAILURE: check Console Output and JUnit test report.

## 8) Notes

- Jenkinsfile uses Windows batch (bat), suitable for your Windows environment.
- Selenium tests open the local form file directly and validate behavior end-to-end.
