<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/Team-WhiteHatSr/detox-backend">
    <img src="https://github.com/Team-WhiteHatSr/detox-chrome-extension/blob/master/public/icon.png?raw=true" alt="Logo" width="80">
  </a>

  <h3 align="center">detox-backend</h3>

  <p align="center">
    Keep your browsing free from sensitive content.
    <br />
    <a href="https://github.com/Team-WhiteHatSr/detox-backend/#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Team-WhiteHatSr/detox-backend/">View Demo</a>
    ·
    <a href="https://github.com/Team-WhiteHatSr/detox-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Team-WhiteHatSr/detox-backend/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Response format](#response-format)
  - [Ping](#ping)
  - [Report](#report)
  - [Response Format](#response-format-1)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

`Detox` is an AI-powered chrome-extension that lets you control what you see when you are browsing the web. With the help of `Detox`, you can choose to blur out obscene images, videos, and text, and concentrate on your work/scroll through social media peacefully.

<p align="center">
    <img src="https://github.com/Team-WhiteHatSr/detox-chrome-extension/raw/master/assets/demo-screenshot.png" width="250" style="text-align: center" />
</p>

On the chrome-extension popup, you can choose the strictness with which you want `Detox` to filter text and media on the webpage. You can also choose the type of content you want to filter by enabling/disabling switches on the extension. By default, text, images, and videos will be enabled.

> `Detox` only uses Open-Source APIs and libraries. Image content detection is performed on the client-side. Text is sent to the server (the [source code](https://github.com/Team-WhiteHatSr/detox-backend) for which is also Open Source). However, the text sent to our servers is not stored and not linked to a user in any way.

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [googleapis](https://www.npmjs.com/package/googleapis)
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm


### Installation
 
1. Clone the repo.
```sh
git clone https://github.com/Team-WhiteHatSr/detox-backend.git
cd detox-backend
```
2. Install NPM packages.
```sh
npm install
```
3. Run the project.
```sh
npm run dev
```

<!-- USAGE EXAMPLES -->
## Usage


Check text to filter
```http
  POST /check/text
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `body`    | `string` | **Required**. The text to check |



### Response format

```json
{
  "success": true,
  "data": {
    "INSULT": 0.02562259,
    "SEXUALLY_EXPLICIT": 0.0659871,
    "IDENTITY_ATTACK": 0.036624417,
    "PROFANITY": 0.043232616,
    "TOXICITY": 0.052431956,
    "FLIRTATION": 0.24988943,
    "THREAT": 0.062780865
  }
}
```


### Ping

```http
  GET /util/ping
```

| Parameter | Type | Description                       |
| :-------- | :--- | :-------------------------------- |
| none      | none | Returns `pong` if sever is active |



### Report

```http
  GET /community/report
```

| Parameter | Type                  | Description                             |
| :-------- | :-------------------- | :-------------------------------------- |
| url       | `string`, query param | URL of the website in question          |



### Response Format

```json
{
  "reports": [
    {
      "pageScore": 0,
      "vote": 70,
      "users": [],
      "_id": "60d76b74f0c7801e3a0bd5b6",
      "contentType": "something",
      "url": "https://something.com",
      "selector": "html > body > section > p > something",
      "__v": 0
    }
  ]
}
```

```http
  POST /community/report
```

| Parameter | Type                  | Description                             |
| :-------- | :-------------------- | :-------------------------------------- |
| url       | `string`              | URL of the website in question          |
| contentType| `string`, (either `text` or `image`) | type of content to report|
| vote| `number` | User's rating of the page|
| selector| `string` | CSS path of the element in the HTML page|
| userId| `string` | unique id of extension, auto generated|



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Team-WhiteHatSr/detox-backend/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.



<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

- [@thebongy](https://github.com/thebongy)
- [@ashikka](https://github.com/ashikka)
- [@roerohan](https://github.com/roerohan)
- [@Subham-Panda](https://github.com/Subham-Panda)
