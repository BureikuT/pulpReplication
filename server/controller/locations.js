const locations = [
  {
    id: 1,
    picture:
      "https://static.wixstatic.com/media/0f290e_4f350ddc871f421bb2308fc597eb8814~mv2.jpg/v1/fill/w_296,h_159,al_c,q_80,usm_0.66_1.00_0.01/PULP_Gallivan%20Location.webp",
    title: "DOWNTOWN",
    street: "49 Gallivan Ave, Salt Lake City, UT 84111",
    phoneNumber: "801-456-2513",
    weekDays: "7am - 4pm Monday-Friday",
    weekend: "9am - 3pm Saturday-Sunday"
  },

  {
    id: 2,
    picture:
      "https://static.wixstatic.com/media/0f290e_3bad4e4686eb4c639f542a6b9d44653f~mv2.jpg/v1/fill/w_289,h_160,al_c,q_80,usm_0.66_1.00_0.01/PULP_Liberty%20Park%20Location.webp",
    title: "LIBERTY PARK",
    street: "439 E. 900 S., Salt Lake City, UT 84111",
    phoneNumber: "385-267-1092",
    weekDays: "7am - 8pm Monday-Thursday",
    weekend: "7am - 9pm Friday & Saturday",
    weekend2: "8am - 4pm Sunday"
  },

  {
    id: 3,
    picture:
      "https://static.wixstatic.com/media/0f290e_44b574f2d96e4911b21667d99b7c0fa8~mv2.jpg/v1/fill/w_297,h_160,al_c,q_80,usm_0.66_1.00_0.01/PULP_Sandy%20Location.webp",
    title: "SANDY",
    street: "9645 S. State, Sandy, UT 84070",
    phoneNumber: "385-557-4986",
    weekDays: "8am - 8pm Monday-Saturday",
    weekend: "8am - 4pm Sunday"
  }
];

module.exports = {
  showLocations: (req, res) => {
    res.status(200).send(locations);
  }
};
