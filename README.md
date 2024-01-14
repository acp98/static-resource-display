# Static Resource Display - Salesforce Unlocked Package

![release](https://img.shields.io/badge/release-Winter_'24-g)

## Overview

Static Resource Display is a Salesforce Unlocked Package that provides a powerful solution for rendering images stored as static resources based on a text field, such as a formula or custom logic. It is designed to address more complex scenarios where using conditional visibility on elements is not sufficient to meet your display requirements.

This repository contains all the necessary components and documentation to easily integrate Static Resource Display into your Salesforce org. With Static Resource Display, you can dynamically display images from your static resources library using a Lightning Web Component (LWC) with specific criteria defined in your Salesforce org.

## Features

- Render images stored as static resources in Salesforce org.
- Dynamically display images based on text fields like formulas or custom logic.
- Customizable display conditions for complex scenarios.
- Enhanced user experience with dynamic image rendering.

## Installation

### UI/URL Installation (recommended)

For Production:
<a href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04tHr000001iRiKIAU">
  <img alt="Deploy to Salesforce (Production)"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

For Sandbox:
<a href="https://test.salesforce.com/packaging/installPackage.apexp?p0=04tHr000001iRiKIAU">
  <img alt="Deploy to Salesforce (Sandbox)"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

### CLI (recommended)

    You can install this as an Unlocked Package, using the CLI, by running the following command:

    ```
    sfdx force:package:install --package "04tHr000001iRiKIAU" --targetusername YOUR_ORG_ALIAS --wait 10 --publishwait 10
    ```

### Manual <a id="installation-clone-repo"></a>
You can install this by cloning the repository and deploying the content of _resource-display_ folder. Before that you should remove the _namespace_ property in the _sfdx-project.json_ file.
```json
"namespace": "ttab"
```

## Usage

Static Resource Display allows you to display images from static resources dynamically. To use this package effectively:

    - Define or create a comma separated field that will contain the values for each image
    - Add the component to the page layout of any record. 




## Issues and Feedback

If you encounter any issues or have feedback regarding Static Resource Display, please [open an issue on GitHub](https://github.com/acp98/static-resource-display/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Static Resource Display! We hope it enhances your Salesforce experience and simplifies the dynamic rendering of images from your static resources. If you have any questions or need assistance, please feel free to contact us.

[![Follow us on LinkedIn](https://media.licdn.com/dms/image/D4D0BAQGDR3vAPouSIQ/company-logo_200_200/0/1701133354326/techtabinc_logo?e=1713398400&v=beta&t=Okqg_5R0iBCpNhMQzrq4OUG7_YZWIjEWxEslNJrEMSg)](https://www.linkedin.com/company/techtabsolutions/)