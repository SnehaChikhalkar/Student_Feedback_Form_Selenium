// Jenkins Configuration Script
// This script configures Jenkins for the Student Feedback Form Project

import jenkins.model.Jenkins
import hudson.tools.InstallSourceProperty
import hudson.tools.ToolProperty
import hudson.tasks.Maven
import hudson.tools.JDKInstaller
import jdk.internal.WrappedPrincipal
import com.cloudbees.plugins.credentials.*
import com.cloudbees.plugins.credentials.domains.Domain
import org.jenkinsci.plugins.plaincredentials.impl.StringCredentialsImpl
import hudson.util.Secret
import javaposse.jobdsl.dsl.DslFactory

def jenkins = Jenkins.getInstance()

// Configure Maven
println("Configuring Maven 3...")
def mavenDesc = jenkins.getDescriptor("hudson.tasks.Maven")
def mavenInstallation = new Maven.MavenInstallation(
    "Maven3",
    "C:\\Users\\sharv\\maven\\apache-maven",
    []
)
mavenDesc.setInstallations(mavenInstallation)
mavenDesc.save()
println("Maven 3 configured successfully!")

// Configure JDK
println("Configuring JDK 17...")
def jdkDesc = jenkins.getDescriptor("hudson.model.JDK")
def jdkInstallation = new hudson.model.JDK(
    "JDK17",
    "C:\\Program Files\\Microsoft\\jdk-17.0.17.10-hotspot"
)
jdkDesc.setInstallations(jdkInstallation)
jdkDesc.save()
println("JDK 17 configured successfully!")

println("Jenkins configuration completed!")
