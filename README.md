# Developing Dynamic URL Structures via Contentstack Taxonomy
**Authors:** Jaime Santos & Zamir Thind

### Description

This repository offers a foundational application that enables users to generate dynamic URLs within Contentstack by leveraging its taxonomy system. It serves as a starting point for building flexible, SEO-friendly URL structures based on content categories and hierarchies.

## Introduction 

Imagine you’re building a site with hundreds of articles or products, organized by categories like “Tech,” “Lifestyle,” and “Travel.” Manually managing URLs can quickly become overwhelming, especially when content changes or grows. This solution leverages Contentstack’s taxonomy system to automatically generate dynamic URLs—like /tech/latest-gadgets or /travel/luxury/beaches—based on how content is structured.

For developers, this means less time hardcoding routes and more flexibility as content evolves. Business users benefit from SEO-friendly URLs that boost discoverability and user engagement without additional dev work. As the site scales, this approach ensures consistent URL structures and streamlines future updates, reducing operational overhead and minimizing maintenance costs.

## Legal Disclaimer

This solution is provided as a **proof of concept** and is offered “**as-is**” without any warranties, expressed or implied. It is not officially supported, maintained, or guaranteed to function as intended in all environments.

### Important Notice to Users:

- You are **strongly encouraged** to implement comprehensive **testing**, **validation**, and **security measures** before using this code in production or any critical environment.
- The use of this code is entirely at your own risk. Ensure it aligns with your organization’s standards, practices, and compliance requirements.
- Contentstack disclaims all liability for any **damages**, **losses**, or **security issues** that may arise directly or indirectly from the use, misuse, or modification of this code.
- By using this repository, you acknowledge that **Contentstack** holds no responsibility for any consequences, including but not limited to **data breaches**, **system failures**, or **operational issues**.

## Requirements

- Owner/Admin Role within your Contentstack Stack or Org.
- Access to Contentstack [Developer Hub](https://www.contentstack.com/docs/developers/developer-hub) and [Taxonomy](https://www.contentstack.com/docs/developers/taxonomy).
- A sample Taxonomy built within your Stack and the Taxonomy UID.
- NPM and Node.js
- Typescript
- VS Code or other IDE

## Steps

### Install and Run the Application

1. Clone this repository locally.
2. Install the dependencies. `npm i`.
3. Run the application `nmp start`. The default is http://localhost:3000/. Alternatively, you can host it and provide the URL in the Developer Hub App Configuration later.

### Update the CustomField.Tsx File

1. In CustomField.Tsx file replace the Taxonomy UID with your Taxonomy's UID

 <img src="public/dynamicurl/tsx-code.png" width="500">

### Create the App in Developer Hub

1. At the Organization level, on the left-hand sidebar towards the bottom, click the **Developer Hub icon**.
   
<img src="public/dynamicurl/dev-icon.png" >

2. On the top right of your screen create a **New App**.
   
<img src="public/dynamicurl/new-app.png" width="500">

3. Provide the name for the app **Dynamic URL Field** and choose Stack App.
 <img src="public/dynamicurl/create-app.png" width="500">

4. Click **Hosting** in the left-hand sidebar and select **Custom Hosting**. Use http://localhost:3000/ if hosting locally, otherwise provide the URL where you are hosting the app.

<img src="public/dynamicurl/hosting.png" width="500">

5. Click **UI Locations** in the left-hand sidebar and click the **elipses** to the right of **Custom Field**.

<img src="public/dynamicurl/custom-field-location.png" width="600">

6. Create the custom field route based on the path inside your application. This example uses `/custom-field-dynamic-url` and the type is `Text`.

<img src="public/dynamicurl/custom_field.png" width="500">

7. Install the app on the Stack where your Taxonomy is.

<img src="public/dynamicurl/install-app.png" width="500">

### Create a Content Model

1. Create a new Content Model of Multiple type. Add the following fields. Include your Taxonomy and install your app in the custom field.
   - Title field
   - URL field
   - Taxonomy field
   - Custom field

  <img src="public/dynamicurl/content-model-2.png" width="500">

### Create a new Entry from your Content Model

1. Fill out the appropriate fields, select your Taxonomy and save. You should see the changes in real time.

 <img src="public/dynamicurl/dynamic-taxonomy.png" width="600">

### Notes

The app is hardcoded and these rules have to be followed:

1. An entry must be **saved** for this to work.
2. Refresh the page to see the Custom Field display after saving.
3. Select your Taxonomies in the assigned, structured order (e.g. Parent > Child, NOT Child > Parent)
4. Title (title) is a default field in Contentstack.
5. URL (url) is a default field in Contentstack.
6. Ensure you have a change management process in place.

## References

- [Marketplace App Boilerplate](https://www.contentstack.com/docs/developers/developer-hub/marketplace-app-boilerplate/)
- [Marketplace Boiler Plate](https://github.com/contentstack/marketplace-app-boilerplate)
