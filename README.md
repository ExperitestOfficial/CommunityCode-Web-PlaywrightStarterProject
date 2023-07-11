# CommunityCode-Web-PlaywrightStarterProject
Playwright is a testing tool for web applications using modern JavaScript frameworks. It enables you to write end-to-end tests, and can test anything that runs on a browser.\
The Playwright Starter project enables you to quickly run tests in playwright.

## Setting Up the Project

To set up the project:
Clone the project by running the following:
   ```
   git clone https://github.com/ExperitestOfficial/CommunityCode-Web-PlaywrightStarterProject.git
   cd CommunityCode-Web-PlaywrightStarterProject
   ```

## Running Tests
To run the test in this project, chose one of the following options:

### Using Dai-CT CLI:
1. **CLI Installation:**\
   To install the package please run the following command (with sudo permissions):
 ```
    npm install -g dai-ct
 ```
2. **CLI Configuration:**\
   Set up authentication by updating the following parameters in [credentials.json](playwrightProject/credentials.json):
    * cloud.url - Url for the cloud the test would run in. For example, https://company.experitest.com/
    * cloud.accessKey -  Personal authentication. See [Obtaining Access Key](https://docs.experitest.com/pages/viewpage.action?pageId=52593435) to learn how to obtain an access key.

3. **Running Playwright Tests:**\
   Run the following command:
 ``` 
    cd <path to the project folder>
    dai-ct playwright run -p <absolute path of the project folder> --conf digitalai.json
   ```

### Using API:
Compress the entire [playwrightProject](playwrightProject) folder content.\
Run POST API request by following the [documentation](https://docs.experitest.com/display/TE/Playwright).

## Test Configuration
To update the test's browsers and playwright versions edit the following file [digitalai.json](playwrightProject/digitalai.json).


## Documentation
To find out more about running tests on Playwright, visit our online
[Playwright_using_API](https://docs.experitest.com/display/TE/Playwright) and
[Playwright_using_Dai-CT_CLI](https://docs.experitest.com/pages/viewpage.action?spaceKey=TE&title=Dai-CT+Execution+CLI).

## Support
If you encounter an issue that is not covered here or in our online documentation, contact us at [support@digital.ai](mailto:support@digital.ai).