# Static Resource Display - Salesforce Unlocked Package

![Static Resource Display]

<a href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04tHr000001iRiKIAU">
  <img alt="Deploy to Salesforce (Production)"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
<a href="https://TEST.salesforce.com/packaging/installPackage.apexp?p0=04tHr000001iRiKIAU">
  <img alt="Deploy to Salesforce (Sandbox)"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

## Overview

Static Resource Display is a Salesforce Unlocked Package that provides a powerful solution for rendering images stored as static resources based on a text field, such as a formula or custom logic. It is designed to address more complex scenarios where using conditional visibility on elements is not sufficient to meet your display requirements.

This repository contains all the necessary components and documentation to easily integrate Static Resource Display into your Salesforce org. With Static Resource Display, you can dynamically display images from your static resources library in Lightning Web Components (LWC) based on specific criteria defined in your Salesforce org.

## Features

- Render images stored as static resources in Salesforce org.
- Dynamically display images based on text fields like formulas or custom logic.
- Easy integration into Lightning Web Components (LWC).
- Customizable display conditions for complex scenarios.
- Enhanced user experience with dynamic image rendering.

## Installation

Follow these steps to install Static Resource Display in your Salesforce org:

1. **Clone this Repository:**

   ```shell
   git clone https://github.com/acp98/static-resource-display.git
   ```

2. **Create a Salesforce Unlocked Package:**

   In your Salesforce Dev Hub org, create an Unlocked Package to bundle the components from this repository. You can use the Salesforce CLI for this:

   ```shell
   sfdx force:package:create -n static-resource-display -t Unlocked -r force-app
   ```

3. **Push the Package to Your Org:**

   Push the package you just created to your Salesforce org:

   ```shell
   sfdx force:package:install --package static-resource-display@1.0.0-1 -w 10
   ```

4. **Assign Permissions:**

   After installation, assign the necessary permissions to users or profiles to access and use the Static Resource Display components.

5. **Use Static Resource Display in Your LWC:**

   Incorporate the Static Resource Display Lightning Web Component into your Lightning App or Community.

   ```html
   <c:staticResourceDisplay imageField="{!v.imageField}" recordId="{!v.recordId}" />
   ```

   Replace `{!v.imageField}` with the field that contains your image identifier and `{!v.recordId}` with the relevant record's ID.

6. **Customize Display Conditions:**

   Modify the component's display conditions and configurations according to your specific use case by editing the component files.

## Usage

Static Resource Display allows you to display images from static resources dynamically. To use this package effectively:

- Define your criteria for displaying images based on text fields.
- Customize the component's appearance and behavior.
- Ensure that your static resources are correctly named and organized.

## Sample Code

Here's an example of how to use the Static Resource Display component in a Lightning Web Component:

```javascript
import { LightningElement, api } from 'lwc';

export default class MyComponent extends LightningElement {
    @api imageField;
    @api recordId;
}
```

## Documentation

For detailed documentation and usage instructions, please refer to the [Static Resource Display Documentation](https://your-documentation-url.com/static-resource-display).

## Issues and Feedback

If you encounter any issues or have feedback regarding Static Resource Display, please [open an issue on GitHub](https://github.com/acp98/static-resource-display/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Static Resource Display! We hope it enhances your Salesforce experience and simplifies the dynamic rendering of images from your static resources. If you have any questions or need assistance, please feel free to contact us.

[![Follow us on LinkedIn](https://media.licdn.com/dms/image/D4D0BAQGDR3vAPouSIQ/company-logo_200_200/0/1701133354326/techtabinc_logo?e=1713398400&v=beta&t=Okqg_5R0iBCpNhMQzrq4OUG7_YZWIjEWxEslNJrEMSg)](https://www.linkedin.com/company/techtabsolutions/)