# Contact Form API JSON Structure

This document describes the JSON payload that will be sent to the contact form API endpoint.

## Endpoint
`POST https://emr.obesityherniasurgery.com/api/contact-form`

## Request Headers
```
Content-Type: application/json
Accept: application/json
```

## Request Body Structure

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "dob": "1990-01-15",
  "email": "john.doe@example.com",
  "phone": "555-123-4567",
  "language": "English",
  "reason": "established_patient_followup",
  "other_reason": "",
  "message": "I would like to schedule a follow-up appointment."
}
```

## Field Descriptions

| Field | Type | Required | Description | Example Values |
|-------|------|----------|-------------|----------------|
| `first_name` | string | Yes | Patient's first name | "John" |
| `last_name` | string | Yes | Patient's last name | "Doe" |
| `dob` | string | Yes | Date of birth in YYYY-MM-DD format | "1990-01-15" |
| `email` | string | Yes | Patient's email address | "john.doe@example.com" |
| `phone` | string | Yes | Patient's phone number | "555-123-4567" |
| `language` | string | Yes | Language preference: "English" or "Spanish" | "English" |
| `reason` | string | Yes | Reason for contact (machine name) | See reason values below |
| `other_reason` | string | Conditional | Required if `reason` is "other" | "Custom reason text" |
| `message` | string | Yes | Patient's message | "I would like to..." |

## Reason Values (Machine Names)

The `reason` field uses machine names (not display labels):

- `"established_patient_followup"` - Established Patient Followup
- `"weight_loss_medication"` - Weight Loss Medication
- `"heartburn"` - Heartburn
- `"other"` - Other (requires `other_reason` field)

## Example Requests

### Example 1: Established Patient Followup
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "dob": "1985-03-22",
  "email": "jane.smith@example.com",
  "phone": "555-987-6543",
  "language": "English",
  "reason": "established_patient_followup",
  "other_reason": "",
  "message": "I need to schedule my 6-month follow-up appointment."
}
```

### Example 2: Other Reason
```json
{
  "first_name": "Maria",
  "last_name": "Garcia",
  "dob": "1992-07-10",
  "email": "maria.garcia@example.com",
  "phone": "555-456-7890",
  "language": "Spanish",
  "reason": "other",
  "other_reason": "Pregunta sobre medicación post-operatoria",
  "message": "Tengo una pregunta sobre mi medicación después de la cirugía."
}
```

### Example 3: Weight Loss Medication
```json
{
  "first_name": "Robert",
  "last_name": "Johnson",
  "dob": "1988-11-05",
  "email": "robert.johnson@example.com",
  "phone": "555-321-0987",
  "language": "English",
  "reason": "weight_loss_medication",
  "other_reason": "",
  "message": "I would like to discuss weight loss medication options."
}
```

## Response

The API should return a JSON response. The exact structure depends on your server implementation, but a successful response might look like:

```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

Or in case of an error:

```json
{
  "success": false,
  "error": "Error message here"
}
```


