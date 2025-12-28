# Get All Menu

Used to retrieve all menu data.

**URL** : `/api/menus/`

**Method** : `GET`

**Auth required** : YES - Bearer Token (JWT)

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": true,
  "message": "Menus fetched successfully",
  "data": [
    {
      "id": "3bb4a40e-2784-43b4-9227-41e1571eeb14",
      "name": "Nasi Goreng",
      "price": 15000,
      "image": "https://res.cloudinary.com/dmj4qubnk/image/upload/v1765460596/easyPOS/ijqrjr0eblwalyxdfr0a.jpg",
      "category_id": 1,
      "category": {
        "id": 1,
        "name": "Makanan"
      }
    },
    {
      "id": "31b57924-c914-403f-bd32-5fc89a0d102e",
      "name": "Nasi Padang",
      "price": 20000,
      "image": "https://res.cloudinary.com/dmj4qubnk/image/upload/v1765459879/easyPOS/zaplvb0oryxqqh7r4dzx.jpg",
      "category_id": 1,
      "category": {
        "id": 1,
        "name": "Makanan"
      }
    }
  ]
}
```

## Error Response

**Condition** : Unauthorized (token invalid/expired)

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

## Error Response

**Condition** : Server Error

**Code** : `500 INTERNAL SERVER ERROR`

**Content** :

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

# Create Menu

Used to create a new category

**URL** : `/api/menus/`

**Method** : `POST`

**Auth required** : YES - Bearer Token (JWT)

**Data constraints**

```json
{
    "name": "string | required | max:100",
    "price": "number | required",
    "image": "File | required",
    "category_id": "number | required"
}
```

**Data example**

```json
{
    "name": "Makanan",
    "price": 15000,
    "image": "nasipadang.jpg",
    "category_id": 1
}
```

## Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
  "success": true,
  "message": "Menu successfully created",
  "data": {
    "id": "c4a5cfa1-d6c2-4b11-8d55-234abcd9012f",
    "name": "Nasi Padang",
    "price": 20000,
    "image": "https://res.cloudinary.com/dmj4qubnk/image/upload/v1765459879/easyPOS/zaplvb0oryxqqh7r4dzx.jpg",
    "category_id": 1
  }
}
```

## Error Response

**Condition** : Bad Request — Name invalid/empty/duplicate

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "success": false,
  "message": "Name, price, image, category_id is required"
}
```

## Error Response

**Condition** : Unauthorized (token invalid/expired)

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

## Error Response

**Condition** : Server Error

**Code** : `500 INTERNAL SERVER ERROR`

**Content** :

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```