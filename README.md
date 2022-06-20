# Exploring-PublicAPITwitter

# food API Documentation

### endpoint deploy https://elon-musk-tweet-api.herokuapp.com/

List of available endpoints:

- `GET /
- `GET /multiple?ids=`
- `GET /follower`
- `GET /following`
- `GET /like_tweet`
- `GET /re_tweet/:id`
- `GET /mention`
- `GET /:id`

&nbsp;

## 1. GET /

### Description

- Get All tweet elon mask

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "1538406040374595585",
      "text": "I will keep supporting Dogecoin"
    },
    {
      "id": "1538403887635390465",
      "text": "💕💕 shadow crew 💕💕"
    },
    {
      "id": "1538401108271452161",
      "text": "@BillyM2k I feel swindled every time I drink one"
    },
    {
      "id": "1538400836669296640",
      "text": "@EvaFoxU Gwynne is the best"
    }
  ]
}
```

&nbsp;

## 2. GET /multiple?ids=

### Description

- get some tweet elon mask with input some tweet id

Request:

- ex-query:
  "1538406040374595585,1538403887635390465,1538401108271452161"

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "1538400096865472512",
      "text": "@VladimirVargasM He did teach me a lot of engineering &amp; physics while growing up (in an environment that was austere &amp; often bleak)"
    },
    {
      "id": "1538403887635390465",
      "text": "💕💕 shadow crew 💕💕"
    },
    {
      "id": "1538401108271452161",
      "text": "@BillyM2k I feel swindled every time I drink one"
    }
  ]
}
```

&nbsp;

## 3. GET /follower

Description:

- get all follower twitter elon mask

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "name": "wang",
      "public_metrics": {
        "followers_count": 0,
        "following_count": 1,
        "tweet_count": 0,
        "listed_count": 0
      },
      "username": "wang66562467",
      "id": "1538902387070447616"
    },
    {
      "name": "Sara",
      "public_metrics": {
        "followers_count": 0,
        "following_count": 1,
        "tweet_count": 0,
        "listed_count": 0
      },
      "username": "Sara09315744",
      "id": "1538901958442078210"
    }
  ]
}
```

&nbsp;

## 5. GET /following

Description:

- get data of users followed by elon musk

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "public_metrics": {
        "followers_count": 178142,
        "following_count": 559,
        "tweet_count": 6556,
        "listed_count": 1646
      },
      "id": "34719119",
      "name": "Walter Isaacson",
      "username": "WalterIsaacson"
    },
    {
      "public_metrics": {
        "followers_count": 924673,
        "following_count": 739,
        "tweet_count": 5519,
        "listed_count": 7957
      },
      "id": "1605",
      "name": "Sam Altman",
      "username": "sama"
    }
  ]
}
```

&nbsp;

## 6. GET /like_tweet

Description:

- get data of users who liked Elon Musk's tweets

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "1538531227614863361",
      "created_at": "2022-06-19T14:36:43.000Z",
      "author_id": "1263491240336769026",
      "text": "Water the seeds and watch them grow $TSLA https://t.co/LepkjDQPZX"
    },
    {
      "id": "1538781139048968193",
      "created_at": "2022-06-20T07:09:47.000Z",
      "author_id": "987978757",
      "text": "a lot of effort😇 https://t.co/lHUU8CGp5N https://t.co/za9HPke3Gd"
    }
  ]
}
```

&nbsp;

## 7. GET /re_tweet/:id`

#### Description

- get the data of the users who retweet Elon Musk's tweet by params id tweet

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "1501897944399630336",
      "name": "Rabi Aaron",
      "username": "Aaron8608"
    },
    {
      "id": "1533572217560305666",
      "name": "American Monster",
      "username": "samuelthecamell"
    }
  ]
}
```

&nbsp;

## 7. GET /mention

#### Description

- get data of users who mentions Elon Musk's

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "author_id": "1279745744",
      "id": "1538907016634241024",
      "text": "@sweetcarolinatv @littlemissmarxi @elonmusk Not into shark tanks. I prefer my sharks to have been dead 20 million years. #MegalodonManiacs"
    },
    {
      "author_id": "377100794",
      "id": "1538907010158456832",
      "text": "PR sejarah kemanusiaan 889 petugas pemilihan  calon presiden RI meninggal mas @elonmusk gak tertarik ? https://t.co/pek5inBvyv"
    }
  ]
}
```

&nbsp;

## 8. GET /:id

#### Description

- get one data tweet elon musk by params id tweet

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "1538406040374595585",
      "text": "I will keep supporting Dogecoin"
    }
  ]
}
```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```

```

```
