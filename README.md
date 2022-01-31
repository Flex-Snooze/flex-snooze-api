# flex-snooze-api

## About

This is a RESTful API for use with [Flex-Five](https://github.com/Flex-Snooze/flex-snooze-frontend) (née Flex-Snooze) to allow our users to create, read, update and destroy data.
Main endpoints are:
- https://flex-five.herokuapp.com/api/user/ 
- https://flex-five.herokuapp.com/api/log/
## Models & Schemas

- User - Prototype currently only contains 1 test User
- Workout - Currently there are Push/Pull/Legs/Yoga but more can be added later, with the user also being able to create their own
- Log - Completed workouts that will either be nested within the User model or associated by reference, depending on the needs of the project

## CRUD functions

Users can:

- Create new Log entries
- Read data from the Log
- Update User model with Log entries  
- Destroy Log entries

