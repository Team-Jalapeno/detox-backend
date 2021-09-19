# Detox-Backend

Backend written in Typescript Express for the Detox-chrome extension

## API Reference

#### Check text to filter

```http
  POST /check/text
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `body`    | `string` | **Required**. The text to check |

##### Response format

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

#### Ping

```http
  GET /util/ping
```

| Parameter | Type | Description                       |
| :-------- | :--- | :-------------------------------- |
| none      | none | Returns `pong` if sever is active |

#### Report

```http
  GET /community/report
```

| Parameter | Type                  | Description                             |
| :-------- | :-------------------- | :-------------------------------------- |
| url       | `string`, query param | URL of the website in question          |

##### Response Format

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


## Deployment

To deploy this project run

```bash
  npm start
```

## Demo

[eng-hack](https://eng-hack.herokuapp.com)

## Authors

- [@thebongy](https://github.com/thebongy)
- [@ashikka](https://github.com/ashikka)
- [@roerohan](https://github.com/roerohan)
- [@Subham-Panda](https://github.com/Subham-Panda)
