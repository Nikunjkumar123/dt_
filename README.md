1. Base URL -----------------------------------------------------------------------------------------------------------------------------------------------------
     -All API endpoints related to nudges will follow this base URL:
       http://localhost:3000

2. Data Model for Nudge Object ---------------------------------------------------------------------------------------------------------------------------------
     {
      "_id": "string",  // Unique identifier for the Nudge
      "eventId": "string",  // ID of the associated event
      "title": "string",  // Title of the nudge
      "image": "string",  // URL of the image for the nudge cover
      "time": "string",  // Time at which the nudge will be sent (ISO 8601 format)
      "description": "string",  // Description for the nudge
      "icon": "string",  // Icon for the nudge (URL or predefined icon name)
      "invitation": "string",  // Short invitation message for minimized nudge view
      "createdAt": "string",  // Date the nudge was created
      "updatedAt": "string"  // Date the nudge was last updated
    }

3. API Endpoints -------------------------------------------------------------------------------------------------------------------------------------------------

       Below is the structure for the CRUD operations related to the Nudge entity.
      Create Nudge
      Endpoint: /api/v3/nudges
      Method: POST
      Description: Creates a new nudge for a specific event with a simple payload (given in 2).
    
      In response -----------------------------------------------------------------------------------
      {
      "message": "Nudge created successfully",
      "nudge": {
        "_id": "string",
        "eventId": "string",
        "title": "string",
        "image": "string",
        "time": "string",
        "description": "string",
        "icon": "string",
        "invitation": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    }


4.Get All Nudges --------------------------------------------------------------------------------------------------------------------------------------------------
    
    Endpoint: /api/v3/nudges
    Method: GET
    Description: Fetches all nudges created by the user or associated with the user's events.
    Query Parameters:
    limit: Number of nudges to fetch 
    page: Page number for pagination
    
    Response: ----------------------------------------
    {
      "nudges": [
        {
          "_id": "string",
          "eventId": "string",
          "title": "string",
          "image": "string",
          "time": "string",
          "description": "string",
          "icon": "string",
          "invitation": "string",
          "createdAt": "string",
          "updatedAt": "string"
        },
      
      ]
    }


5. Get Nudge by ID   --------------------------------------------------------------------------------------------------------------------------------------------

      Endpoint: /api/v3/nudges/:id
      Method: GET
      Description: Fetches a specific nudge by its ID.
      Response:
      json -----------------------------------------------
      {
        "_id": "string",
        "eventId": "string",
        "title": "string",
        "image": "string",
        "time": "string",
        "description": "string",
        "icon": "string",
        "invitation": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
7. Update Nudge --------------------------------------------------------------------------------------------------------------------------------------------------

       Endpoint: /api/v3/nudges/:id
      Method: PUT
      Description: Updates an existing nudge by its ID.
      Request Payload: -----------------------------------------------
      {
        "title": "string",  // New title for the nudge
        "image": "string",  // URL for the new image
        "time": "string",  // Updated time to send the nudge (ISO 8601 format)
        "description": "string",  // Updated description
        "icon": "string",  // Updated icon
        "invitation": "string"  // Updated short invitation message
      }
      Response: --------------------------------------------------------
      {
        "message": "Nudge updated successfully",
        "nudge": {
          "_id": "string",
          "eventId": "string",
          "title": "string",
          "image": "string",
          "time": "string",
          "description": "string",
          "icon": "string",
          "invitation": "string",
          "createdAt": "string",
          "updatedAt": "string"
        }
      }

7.Delete Nudge ----------------------------------------------------------------------------------------------------------------------------------------------------
  
    Endpoint: /api/v3/nudges/:id
    Method: DELETE
    Description: Deletes a specific nudge by its ID.
    Response: -----------------------------------------------
    {
      "message": "Nudge deleted successfully"
    }

