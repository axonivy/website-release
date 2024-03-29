pipeline {
  agent {
    docker {
      image 'axonivy/build-container:ssh-client-1'
    }
  }

  parameters {
    booleanParam(
      name: 'deploy',
      description: 'Deploy release page',
      defaultValue: false
    )
  }

  triggers {
    cron '@midnight'
  }

  options {
    buildDiscarder(logRotator(artifactNumToKeepStr: '10'))
    skipStagesAfterUnstable()
  }

  environment {
    DIST_FILE = "ivy-website-release.tar"
  }

  stages {
    stage('distribution') {
      steps {     	
        sh "tar -cf ${env.DIST_FILE} src"
        archiveArtifacts env.DIST_FILE + ", src/**"
      }
    }

    stage('deploy') {
      when {
        allOf {
          branch 'master'
          expression {return params.deploy}
        }
      }

      steps {
        sshagent(['zugprojenkins-ssh']) {
          script {
            def targetFolder = "/home/axonivya/deployment/ivy-website-release-" + new Date().format("yyyy-MM-dd_HH-mm-ss-SSS");
            def targetFile =  targetFolder + ".tar"
            def host = 'axonivya@217.26.51.247'

            // copy
            sh "scp ${env.DIST_FILE} $host:$targetFile"

            // untar
            sh "ssh $host mkdir $targetFolder"
            sh "ssh $host tar -xf $targetFile -C $targetFolder"
            sh "ssh $host rm -f $targetFile"
            
            // symlink
            sh "ssh $host ln -fns $targetFolder/src /home/axonivya/www/release.axonivy.com/linktoweb"
          }
        }
      }
    }
  }
}
