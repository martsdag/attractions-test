# API Documentation

## Base URL
```
/api/v1
```

## Endpoints

### **Get all attractions**
```http
GET /attractions
```
**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "number",
      "name": "string",
      "description": "string",
      "createdAt": "string",
      "rating": "number",
      "photo": "string",
      "location": "string",
      "coordinates": {
        "lat": "number",
        "lng": "number"
      },
      "googleMapsLink": "string",
      "status": "string"
    }
  ]
}
```

---

### **Get attraction by ID**
```http
GET /attractions/{id}
```
**Response (200 OK):**
```json
{
  "data": {
    "id": "number",
    "name": "string",
    "description": "string",
    "createdAt": "string",
    "rating": "number",
    "photo": "string",
    "location": "string",
    "coordinates": {
        "lat": "number",
        "lng": "number"
      },
    "googleMapsLink": "string",
    "status": "string"
  }
}
```

**Response (404 Not Found):**
```json
{
  "data": { "error": "Attraction not found" }
}
```

---

### **Create an attraction**
```http
POST /attractions
```
**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "rating": "number",
  "photo": "string",
  "location": "string",
  "coordinates": {
    "lat": "number",
    "lng": "number"
  },
}
```

**Response (201 Created):**
```json
{
  "message": "Attraction created successfully",
  "data": {
    "id": "number",
    "name": "string",
    "description": "string",
    "createdAt": "string",
    "rating": "number",
    "photo": "string",
    "location": "string",
    "coordinates": {
      "lat": "number",
      "lng": "number"
    },
    "googleMapsLink": "string",
    "status": "string"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "data": {
    "errors": [
      { "field": "name", "message": "This field is required" },
      { "field": "description", "message": "This field is required" },
      { "field": "rating", "message": "This field is required" },
      { "field": "photo", "message": "This field is required" },
      { "field": "location", "message": "This field is required" },
      { "field": "coordinates", "message": "This field is required" }
    ]
  }
}
```

---

### **Update an attraction**
```http
PUT /attractions/{id}
```
**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "rating": "number",
  "photo": "string",
  "location": "string",
  "coordinates": {
    "lat": "number",
    "lng": "number"
  },
  "status": "string"
}
```

**Response (200 OK):**
```json
{
  "message": "Attraction updated successfully",
  "data": {
    "id": "number",
    "name": "string",
    "description": "string",
    "createdAt": "string",
    "rating": "number",
    "photo": "string",
    "location": "string",
    "coordinates": {
      "lat": "number",
      "lng": "number"
    },
    "googleMapsLink": "string",
    "status": "string"
  }
}
```

**Response (404 Not Found):**
```json
{
  "data": { "error": "Attraction not found" }
}
```

---

### **Delete an attraction**
```http
DELETE /attractions/{id}
```
**Response (200 OK):**
```json
{
  "message": "Attraction deleted successfully"
}
```

**Response (404 Not Found):**
```json
{
  "error": "Attraction not found"
}
```
