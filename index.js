require('dotenv').config()
const cloudinary = require('cloudinary').v2

function printDetails (resource) {
  const date = resource.created_at.split('T')[0]
  const dateFields = date.split('-')
  console.log(`"${resource.public_id}","${resource.type}","${resource.resource_type}","${dateFields[1]}/${dateFields[2]}/${dateFields[1]}","${resource.secure_url}"`)
}

async function getResources (type, resourceType, nextCursor) {
  const result = await cloudinary.api.resources(
    {
      type: type,
      resource_type: resourceType,
      max_results: 500,
      next_cursor: nextCursor,
      metadata: false,
      tags: false
    }
  )
  result.resources.map(printDetails)
  if (result.next_cursor) {
    getResources(type, resourceType, result.next_cursor)
  }
}

function getAllResources (type, resourceType) {
  const resources = {}
  const newResources = getResources(type, resourceType).then(result => {
    // print resource information
  })
}

// getAllResources('upload', 'image')
console.log('"File name","Type","Resource Type","Creation Date","URL"')
getAllResources('authenticated', 'image', null)
// repeat for all types
