# Get All Category

Used to retrieve all category data.

**URL** : `/api/categories/`

**Method** : `GET`

**Auth required** : YES - Bearer Token (JWT)

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": true,
  "message": "Categories fetched successfully",
  "data": [
    {
      "id": "c4a5cfa1-d6c2-4b11-8d55-234abcd9012f",
      "name": "Makanan"
    },
    {
      "id": "a728f91e-33c2-4b74-a032-1123aabb33dd",
      "name": "Minuman"
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

# Create Category

Used to create a new category

**URL** : `/api/categories/`

**Method** : `POST`

**Auth required** : YES - Bearer Token (JWT)

**Data constraints**

```json
{
    "name": "string | required | max:100"
}
```

**Data example**

```json
{
    "name": "Makanan"
}
```

## Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
  "success": true,
  "message": "category successfully created",
  "data": {
    "id": "c4a5cfa1-d6c2-4b11-8d55-234abcd9012f",
    "name": "Makanan"
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
  "message": "Category name already exists"
}
```

**Or**

```json
{
  "success": false,
  "message": "Name is required"
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