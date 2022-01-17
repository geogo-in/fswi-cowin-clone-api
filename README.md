# GEOGO Full Stack Web Internship CoWin Clone APIs
Hey, let's make this repo all much rich as possible by contributing more endpoints. Follow the contribution guidelines, make open source contributions and make your github profile to standout. Check the Postman collection attached in this repo, this would help you to test API endpoints.

## API Index

### State
- [x] API for listing all States
- [x] Create new State
- [x] View State details
- [x] List all State Districts
- [ ] Update State
- [ ] Delete a State

### District
States have multiple districts
- [x] Create new Districts
- [x] View District details
- [ ] Update District
- [ ] Delete a District
- [x] API for listing all vaccination centers in a restaurant
- [ ] API for searching vaccination centers by pincode

### VaccinationCenter
Every 
- [x] Create new VaccinationCenter
- [x] View VaccinationCenter details
- [ ] Update VaccinationCenter
- [ ] Delete a VaccinationCenter
- [ ] API for all available VaccinationSlot in a given date range

### VaccinationSlot
Every VaccinationCenter can upload VaccinationSlots for a given date. __VaccinationSlot__ model should have the following attributes: *vaccinationCenter(ref) date, totalSlot, availableSlot*
- [ ] API for creating a VaccinationSlot 
- [ ] View VaccinationSlot details
- [ ] Update VaccinationSlot
- [ ] Delete a VaccinationSlot

### User
Users can signup to this application using email and password. 
__User__ model should have the following attributes:  *mobile, password (type: string)*.
*Tip:* Can use Passport and JWT for user authentication module
- [ ] API for user signup/signin
- [ ] API to get user details

### Member
Users can add upto 4 members or benificiary. 
__Member__ model should have the following attributes: *name, aadhaarNumber, age, dose1Taken (boolean), dose2Taken(boolean)*.

- [ ] API for adding a member
- [ ] API to removing an member

### Appointment
Users can book appointment for a member. __Appointment__ model should have the following attributes: *vaccinationCenter (ref), date, status (scheduled, vaccinated), vaccinatedBy (name of the doctor who vaccinated the member)*.
- [ ] Create new Appointment for a member
- [ ] View Appointment details
- [ ] Cancel an Appointment
- [ ] Update an Appointment


## How to Contribute
- Make sure you understand the requirement well.
- Fork this repository to your github account.
- Do the changes and create a Pull Request.
- Remember the PR should have clean code, proper comments, proper commits with messages.
- Many others can also make PR, but the most complete one will be merged.
- You can also create PR for this Readme, if you have any relevant module in mind for this repo, to make it even more awesome!!
