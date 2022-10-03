# Installing NightWatch test Framework

Install local dependencies:

1. Node.js
    - Download the macOS Installer directly from the nodejs.org web site.
      If you want to download the package with bash:
      curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
   * Alternatives
    - Using Homebrew:
      brew install node
2. Java (Java JDK)
   - Verify Java is already installed by opening bash or terminal window and running this command `java -version`. If installed, Java version will be displayed
   - If not already installed:	
     - Navigate to https://www.oracle.com/java/technologies/javase-jdk16-downloads.html and download the latest version
     - Set/Verify JAVA_HOME path in bash profile

In a terminal: set java home paths, something like this example

export JAVA_HOME=$(/usr/bin)

the open your bash profile and edit, you may need to create one
if so:
"touch .bash_profile" to create your new file.

Use the following command to open your bash_profile in textedit:
open -e .bash_profile
 - paste these paths:
	export JAVA_HOME=$(/usr/bin)
	export PATH=${PATH}$JAVA_HOME/bin
Save the file

OR in vi

vi .bash_profile
 - press “o”
 - navigate to new line
 - copy and paste the following, or which ever path your JDK is located
	export JAVA_HOME=$(/usr/bin)
	export PATH=${PATH}$JAVA_HOME/bin
 - press esc
 - :w
 - :q

. .bash_profile

Clone the automation repo: (NOTE: You will need to set up a local SSH key to link with GitHub)
 - in terminal type the following command:
 git clone [https://github.com/jbeard01/NW_Test.git]
enter any credentials required

Run npm install from the project directory.

**Note:** All Nightwatch dependancies are installed based on config with npm install

- chromedriver
- selenium server

**Note:** If Chrome version is updated, run the following command if tests start to fail: (and don't forget to update your package.json!!!)
```
npm install chromedriver --chromedriver_version=LATEST
```

**Note:** If Selenium and webdrivers are not found do the following:

- Delete node modules folder from the project directory 
- Run the following command:
```
npm install --
```

If Selenium server is still not found, run the following command
(verify by checking for **selenium-server/lib/runner/** folder in **node-modules** for the **standalone.exe**)
```
npm install selenium-standalone
```

Run a test

In terminal run the following command:

```
npm run test
```

**Note:** It may fail, but if it runs and a browser opens, you are good to go!

**Note:** Chrome browser must be installed!
